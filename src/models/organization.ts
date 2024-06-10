import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: 'organizations'
})
export class Organization extends Model {
    @Column({
        type: DataType.STRING,
        primaryKey: true
    })
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    gstNo!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    panNo!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    legalOrganizationName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    invoiceTemplateId!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    shortName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    contactName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    displayName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    addressId!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    phone!: string;
}
