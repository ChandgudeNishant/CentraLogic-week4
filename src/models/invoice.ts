import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { SOW } from './sow';
import { Client } from './client';
import { SOWPaymentPlan } from './sowPaymentPlan';

@Table({
    timestamps: false,
    tableName: 'invoices'
})
export class Invoice extends Model {
    @Column({
        type: DataType.STRING,
        primaryKey: true
    })
    id!: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    totalInvoiceValue!: number;

    @ForeignKey(() => SOW)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    sowId!: string;

    @ForeignKey(() => SOWPaymentPlan)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    sowPaymentPlanId!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    status!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    invoiceSentOn!: Date;

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
    paymentReceivedOn!: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    invoiceVersionNumber!: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    invoiceAmount!: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    invoiceTaxAmount!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    paymentId!: string;
}
