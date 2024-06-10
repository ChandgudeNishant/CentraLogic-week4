import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { SOW } from './sow';
import { Client } from './client';

@Table({
    timestamps: false,
    tableName: 'sow_payment_plans'
})
export class SOWPaymentPlan extends Model {
    @Column({
        type: DataType.STRING,
        primaryKey: true
    })
    id!: string;

    @ForeignKey(() => SOW)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    sowId!: string;

    @ForeignKey(() => Client)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    customerId!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    plannedInvoiceDate!: Date;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    totalActualAmount!: number;
}
