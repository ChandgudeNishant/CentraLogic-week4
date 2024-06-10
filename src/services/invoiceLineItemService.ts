import { InvoiceLineItem } from '../models/invoiceLineItem';

class InvoiceLineItemService {
    async createInvoiceLineItem(data: any) {
        return InvoiceLineItem.create(data);
    }

    async getInvoiceLineItems() {
        return InvoiceLineItem.findAll();
    }

    async getInvoiceLineItemById(id: string) {
        return InvoiceLineItem.findByPk(id);
    }

    async updateInvoiceLineItem(id: string, data: any) {
        const invoiceLineItem = await InvoiceLineItem.findByPk(id);
        if (invoiceLineItem) {
            return invoiceLineItem.update(data);
        }
        return null;
    }

    async deleteInvoiceLineItem(id: string) {
        const invoiceLineItem = await InvoiceLineItem.findByPk(id);
        if (invoiceLineItem) {
            await invoiceLineItem.destroy();
            return true;
        }
        return false;
    }
}

export default new InvoiceLineItemService();
