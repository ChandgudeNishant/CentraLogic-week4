import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Client } from './client';

@Table({
    timestamps: false,
    tableName: 'sows'
})
export class SOW extends Model {
    @Column({
        type: DataType.STRING,
        primaryKey: true
    })
    id!: string;

    @Column({
        type: DataType.ARRAY(DataType.STRING),
        allowNull: false
    })
    invoiceEmailAddresses!: string[];

    @ForeignKey(() => Client)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    customerId!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    customerPONumber!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    title!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    customerSONumber!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    validityPeriodFrom!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    validityPeriodUpto!: Date;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    totalValue!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    currency!: string;
}
