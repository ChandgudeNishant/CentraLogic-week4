import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Organization } from './organization';

@Table({
    timestamps: false,
    tableName: 'clients'
})
export class Client extends Model {
    @Column({
        type: DataType.STRING,
        primaryKey: true
    })
    id!: string;

    @ForeignKey(() => Organization)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    organizationId!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    MSAValidFrom!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    MSAValidUpto!: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    legalName!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    NDASignedOn!: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    shortName!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    NDAValidFrom!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    NDAValidUpto!: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    addressId!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    displayName!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    isNDASigned!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    isMSASigned!: boolean;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    MSASignedOn!: Date;
}
