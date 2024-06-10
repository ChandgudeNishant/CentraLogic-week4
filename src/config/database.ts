import { Sequelize } from 'sequelize-typescript';
import { config } from './config';
import { Organization } from '../models/organization';
import { Client } from '../models/client';
import { SOW } from '../models/sow';
import { SOWPaymentPlan } from '../models/sowPaymentPlan';
import { SOWPaymentPlanItem } from '../models/sowPaymentPlanItem';
import { Invoice } from '../models/invoice';
import { InvoiceLineItem } from '../models/invoiceLineItem';
import { Payment } from '../models/payment';

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: config.DB_HOST,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    models: [Organization, Client, SOW, SOWPaymentPlan, SOWPaymentPlanItem, Invoice, InvoiceLineItem, Payment]
});

export default sequelize;
