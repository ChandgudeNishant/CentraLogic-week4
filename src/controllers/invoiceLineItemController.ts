import { Request, Response } from 'express';
import invoiceLineItemService from '../services/invoiceLineItemService';

class InvoiceLineItemController {
    async createInvoiceLineItem(req: Request, res: Response) {
        const data = req.body;
        const invoiceLineItem = await invoiceLineItemService.createInvoiceLineItem(data);
        res.status(201).json(invoiceLineItem);
    }

    async getInvoiceLineItems(req: Request, res: Response) {
        const invoiceLineItems = await invoiceLineItemService.getInvoiceLineItems();
        res.status(200).json(invoiceLineItems);
    }

    async getInvoiceLineItemById(req: Request, res: Response) {
        const { id } = req.params;
        const invoiceLineItem = await invoiceLineItemService.getInvoiceLineItemById(id);
        if (invoiceLineItem) {
            res.status(200).json(invoiceLineItem);
        } else {
            res.status(404).json({ message: 'Invoice Line Item not found' });
        }
    }

    async updateInvoiceLineItem(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        const updatedInvoiceLineItem = await invoiceLineItemService.updateInvoiceLineItem(id, data);
        if (updatedInvoiceLineItem) {
            res.status(200).json(updatedInvoiceLineItem);
        } else {
            res.status(404).json({ message: 'Invoice Line Item not found' });
        }
    }

    async deleteInvoiceLineItem(req: Request, res: Response) {
        const { id } = req.params;
        const success = await invoiceLineItemService.deleteInvoiceLineItem(id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Invoice Line Item not found' });
        }
    }
}

export default new InvoiceLineItemController();
