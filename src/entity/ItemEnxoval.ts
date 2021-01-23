import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import {uuid} from 'uuidv4';

@Entity('itemEnxoval')
class ItemEnxoval {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    asin: string;
    @Column()
    name: string;
    @Column()
    price: number;
    @Column()
    available: boolean;

    constructor (name: string, asin:string,  price: number  ) {
        this.id = uuid();
        this.name = name;
        this.asin = asin;
        this.price = price;
    }

}

export default ItemEnxoval;