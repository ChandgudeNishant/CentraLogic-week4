import { Invoice } from '../models/invoice';

class InvoiceService {
    async createInvoice(data: any) {
        return Invoice.create(data);
    }

    async getInvoices() {
        return Invoice.findAll();
    }

    async getInvoiceById(id: string) {
        return Invoice.findByPk(id);
    }

    async updateInvoice(id: string, data: any) {
        const invoice = await Invoice.findByPk(id);
        if (invoice) {
            return invoice.update(data);
        }
        return null;
    }

    async deleteInvoice(id: string) {
        const invoice = await Invoice.findByPk(id);
        if (invoice) {
            await invoice.destroy();
            return true;
        }
        return false;
    }
}

export default new InvoiceService();
