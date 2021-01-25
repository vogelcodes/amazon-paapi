import { getRepository } from 'typeorm';
import ProductLookup from 'paapi5-product-lookup';

import  {commonParameters}  from '../config/amazonpaapi';
import ItemEnxoval from '../entity/ItemEnxoval';


class CreateItemEnxovalService {
    public async execute(asinList: string[]): Promise<ItemEnxoval[]>  {
        const Lookup = new ProductLookup(commonParameters);
        try {
             var paapiResponse = await Lookup.getItems({
                ItemIds: asinList,
                Resources: ['Offers.Listings.Price','Offers.Listings.Availability.Type','Images.Primary.Large', 'ItemInfo.Title', 'ItemInfo.Classifications']//will override the existing Resources if passed in the Request object 
            })
            
        } catch (error) {
             throw new Error(error);
        }
        const enxovalItemsRepository = getRepository(ItemEnxoval);
        let item: ItemEnxoval;
        let createdItems:ItemEnxoval[]=[];
        for (let asin of asinList){
            let requestItem = paapiResponse.Items[asin];
            var category = (requestItem.ItemInfo.Classifications.Binding)?
                requestItem.ItemInfo.Classifications.Binding.DisplayValue:
                requestItem.ItemInfo.Classifications.ProductGroup.DisplayValue
            console.log(category);

            let checkItem = await enxovalItemsRepository.findOne({
                where: {
                    asin
                }
            });
            if (checkItem) {
                let updateResult = await enxovalItemsRepository.update({asin}, {
                    available: (requestItem.Offers.Listings[0].Availability.Type =='Now')?true:false,
                    name: requestItem.ItemInfo.Title.DisplayValue,
                    category,
                    productUrl: requestItem.DetailPageURL,
                    imageUrl: requestItem.Images.Primary.Large.URL,
                    imageHeight: requestItem.Images.Primary.Large.Height,
                    imageWidth: requestItem.Images.Primary.Large.Width,
                    price: requestItem.Offers.Listings[0].Price.Amount});
                    item = await enxovalItemsRepository.findOne({where:{asin}});
                    createdItems.push(item);
                    // console.log(updateResult, item);
                    
                }else{
                    // console.log();
                    // console.log(JSON.stringify(requestItem));
                item =  enxovalItemsRepository.create({
                    asin, 
                    available: (requestItem.Offers.Listings[0].Availability.Type =='Now')?true:false,
                    name: requestItem.ItemInfo.Title.DisplayValue,
                    category,
                    productUrl: requestItem.DetailPageURL,
                    imageUrl: requestItem.Images.Primary.Large.URL,
                    imageHeight: requestItem.Images.Primary.Large.Height,
                    imageWidth: requestItem.Images.Primary.Large.Width,
                    price: requestItem.Offers.Listings[0].Price.Amount});
                    item = await enxovalItemsRepository.save(item);
                    createdItems.push(item);
                }
            
                
        
                
    }
        return createdItems
    }
}
export default CreateItemEnxovalService;