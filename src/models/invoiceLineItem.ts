import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Invoice } from './invoice';

@Table({
    timestamps: false,
    tableName: 'invoice_line_items'
})
export class InvoiceLineItem extends Model {
    @Column({
        type: DataType.STRING,
        primaryKey: true
    })
    id!: string;

    @ForeignKey(() => Invoice)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    invoiceId!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    orderNo!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    particular!: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    rate!: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    unit!: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    total!: number;
}
