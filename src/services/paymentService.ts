import { Payment } from '../models/payment';

class PaymentService {
    async createPayment(data: any) {
        return Payment.create(data);
    }

    async getPayments() {
        return Payment.findAll();
    }

    async getPaymentById(id: string) {
        return Payment.findByPk(id);
    }

    async updatePayment(id: string, data: any) {
        const payment = await Payment.findByPk(id);
        if (payment) {
            return payment.update(data);
        }
        return null;
    }

    async deletePayment(id: string) {
        const payment = await Payment.findByPk(id);
        if (payment) {
            await payment.destroy();
            return true;
        }
        return false;
    }
}

export default new PaymentService();
