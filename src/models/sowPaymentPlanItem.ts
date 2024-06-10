import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { SOWPaymentPlan } from './sowPaymentPlan';
import { SOW } from './sow';

@Table({
    timestamps: false,
    tableName: 'sow_payment_plan_items'
})
export class SOWPaymentPlanItem extends Model {
    @Column({
        type: DataType.STRING,
        primaryKey: true
    })
    id!: string;

    @ForeignKey(() => SOWPaymentPlan)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    sowPaymentPlanId!: string;

    @ForeignKey(() => SOW)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    sowId!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    orderId!: string;

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
