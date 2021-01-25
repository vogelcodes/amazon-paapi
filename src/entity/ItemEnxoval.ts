import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm'

@Entity()
export default class ItemEnxoval {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({
        unique: true
    })
    asin: string;
    @Column()
    name: string;
    @Column()
    imageUrl: string;
    @Column({default: "https://amazon.com.br"})
    productUrl: string;
    @Column({default: "-"})
    category: string;
    @Column()
    imageWidth: number;
    @Column()
    imageHeight: number;
    @Column()
    price: number;
    @Column()
    available: boolean;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

    

}

