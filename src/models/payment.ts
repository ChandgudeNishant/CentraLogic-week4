import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Invoice } from './invoice';

@Table({
    timestamps: false,
    tableName: 'payments'
})
export class Payment extends Model {
    @Column({
        type: DataType.STRING,
        primaryKey: true
    })
    id!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    paymentDate!: Date;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    forExAmount!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    currency!: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    indianAmount!: number;

    @ForeignKey(() => Invoice)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    invoiceId!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    isFullPayment!: boolean;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    bankPaymentDetails!: string;
}
