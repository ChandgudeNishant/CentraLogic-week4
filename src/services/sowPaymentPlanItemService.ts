import { SOWPaymentPlanItem } from '../models/sowPaymentPlanItem';

class SOWPaymentPlanItemService {
    async createSOWPaymentPlanItem(data: any) {
        return SOWPaymentPlanItem.create(data);
    }

    async getSOWPaymentPlanItems() {
        return SOWPaymentPlanItem.findAll();
    }

    async getSOWPaymentPlanItemById(id: string) {
        return SOWPaymentPlanItem.findByPk(id);
    }

    async updateSOWPaymentPlanItem(id: string, data: any) {
        const sowPaymentPlanItem = await SOWPaymentPlanItem.findByPk(id);
        if (sowPaymentPlanItem) {
            return sowPaymentPlanItem.update(data);
        }
        return null;
    }

    async deleteSOWPaymentPlanItem(id: string) {
        const sowPaymentPlanItem = await SOWPaymentPlanItem.findByPk(id);
        if (sowPaymentPlanItem) {
            await sowPaymentPlanItem.destroy();
            return true;
        }
        return false;
    }
}

export default new SOWPaymentPlanItemService();
