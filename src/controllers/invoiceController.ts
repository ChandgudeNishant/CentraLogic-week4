import { Request, Response } from 'express';
import invoiceService from '../services/invoiceService';

class InvoiceController {
    async createInvoice(req: Request, res: Response) {
        const data = req.body;
        const invoice = await invoiceService.createInvoice(data);
        res.status(201).json(invoice);
    }

    async getInvoices(req: Request, res: Response) {
        const invoices = await invoiceService.getInvoices();
        res.status(200).json(invoices);
    }

    async getInvoiceById(req: Request, res: Response) {
        const { id } = req.params;
        const invoice = await invoiceService.getInvoiceById(id);
        if (invoice) {
            res.status(200).json(invoice);
        } else {
            res.status(404).json({ message: 'Invoice not found' });
        }
    }

    async updateInvoice(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        const updatedInvoice = await invoiceService.updateInvoice(id, data);
        if (updatedInvoice) {
            res.status(200).json(updatedInvoice);
        } else {
            res.status(404).json({ message: 'Invoice not found' });
        }
    }

    async deleteInvoice(req: Request, res: Response) {
        const { id } = req.params;
        const success = await invoiceService.deleteInvoice(id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Invoice not found' });
        }
    }
}

export default new InvoiceController();
