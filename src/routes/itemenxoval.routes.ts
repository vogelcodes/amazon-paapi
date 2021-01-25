import {Router} from 'express';
import {getRepository} from 'typeorm';
import ProductLookup from 'paapi5-product-lookup';
import ItemEnxoval from '../entity/ItemEnxoval';
import  {commonParameters}  from '../config/amazonpaapi';
import CreateItemEnxovalService from '../services/createItemEnxoval.service';






const itemenxovalRouter = Router();
itemenxovalRouter.post('/', async (request,response)=>{
    const itemsRepository = getRepository(ItemEnxoval);
    const {asin} = request.body;
    const createItems = new CreateItemEnxovalService();
    const savedItems = await createItems.execute(asin);
    // const Lookup = new ProductLookup(commonParameters);
    // let result = {}
    // try {
    //      result = await Lookup.getItems({
    //         ItemIds: asin,
    //         Resources: ['Offers.Listings.Price', 'Images.Primary.Large', 'ItemInfo.Title', 'ItemInfo.Classifications']//will override the existing Resources if passed in the Request object 
    //     })
        
    // } catch (error) {
    //      response.status(400).json({error});
    // }
    
    
    // let items = [];
    // for (let id of asin) {
    //     let item = itemsRepository.create({
    //         asin: id, 
    //         available: true,
    //         name: result.Items[id].ItemInfo.Title.DisplayValue,
    //         category: result.Items[id].ItemInfo.Classifications.Binding.DisplayValue,
    //         productUrl: result.Items[id].DetailPageURL,

    //         imageUrl: result.Items[id].Images.Primary.Large.URL,
    //         imageHeight: result.Items[id].Images.Primary.Large.Height,
    //         imageWidth: result.Items[id].Images.Primary.Large.Width,
    //         price: result.Items[id].Offers.Listings[0].Price.Amount});
    //     items.push(item);
    // }
    // let errors = []
    // let savedItems = []
        
    // console.log('Saving...');
    // for (let item of items) {
    //         try {
    //             await itemsRepository.save(item);
    //             console.log('Saved')
    //             savedItems.push(item)
    //             } catch (error) {
    //             errors.push(item.asin);
    //         }
            
    // }
    // console.log('Done');


            
        
    response.json({ savedItems });
    
})
itemenxovalRouter.get('/',async (req,response)=>{
    const itemsRepository = getRepository(ItemEnxoval);
    const items = await itemsRepository.find();
    return response.json(items);
})

export default itemenxovalRouter;