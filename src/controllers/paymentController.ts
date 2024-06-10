import { Request, Response } from 'express';
import paymentService from '../services/paymentService';

class PaymentController {
    async createPayment(req: Request, res: Response) {
        const data = req.body;
        const payment = await paymentService.createPayment(data);
        res.status(201).json(payment);
    }

    async getPayments(req: Request, res: Response) {
        const payments = await paymentService.getPayments();
        res.status(200).json(payments);
    }

    async getPaymentById(req: Request, res: Response) {
        const { id } = req.params;
        const payment = await paymentService.getPaymentById(id);
        if (payment) {
            res.status(200).json(payment);
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    }

    async updatePayment(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        const updatedPayment = await paymentService.updatePayment(id, data);
        if (updatedPayment) {
            res.status(200).json(updatedPayment);
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    }

    async deletePayment(req: Request, res: Response) {
        const { id } = req.params;
        const success = await paymentService.deletePayment(id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    }
}

export default new PaymentController();
