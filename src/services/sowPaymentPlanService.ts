import { SOWPaymentPlan } from '../models/sowPaymentPlan';

class SOWPaymentPlanService {
    async createSOWPaymentPlan(data: any) {
        return SOWPaymentPlan.create(data);
    }

    async getSOWPaymentPlans() {
        return SOWPaymentPlan.findAll();
    }

    async getSOWPaymentPlanById(id: string) {
        return SOWPaymentPlan.findByPk(id);
    }

    async updateSOWPaymentPlan(id: string, data: any) {
        const sowPaymentPlan = await SOWPaymentPlan.findByPk(id);
        if (sowPaymentPlan) {
            return sowPaymentPlan.update(data);
        }
        return null;
    }

    async deleteSOWPaymentPlan(id: string) {
        const sowPaymentPlan = await SOWPaymentPlan.findByPk(id);
        if (sowPaymentPlan) {
            await sowPaymentPlan.destroy();
            return true;
        }
        return false;
    }
}

export default new SOWPaymentPlanService();
