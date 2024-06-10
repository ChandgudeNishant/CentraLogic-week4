import { Request, Response } from 'express';
import sowPaymentPlanItemService from '../services/sowPaymentPlanItemService';

class SOWPaymentPlanItemController {
    async createSOWPaymentPlanItem(req: Request, res: Response) {
        const data = req.body;
        const sowPaymentPlanItem = await sowPaymentPlanItemService.createSOWPaymentPlanItem(data);
        res.status(201).json(sowPaymentPlanItem);
    }

    async getSOWPaymentPlanItems(req: Request, res: Response) {
        const sowPaymentPlanItems = await sowPaymentPlanItemService.getSOWPaymentPlanItems();
        res.status(200).json(sowPaymentPlanItems);
    }

    async getSOWPaymentPlanItemById(req: Request, res: Response) {
        const { id } = req.params;
        const sowPaymentPlanItem = await sowPaymentPlanItemService.getSOWPaymentPlanItemById(id);
        if (sowPaymentPlanItem) {
            res.status(200).json(sowPaymentPlanItem);
        } else {
            res.status(404).json({ message: 'SOW Payment Plan Item not found' });
        }
    }

    async updateSOWPaymentPlanItem(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        const updatedSOWPaymentPlanItem = await sowPaymentPlanItemService.updateSOWPaymentPlanItem(id, data);
        if (updatedSOWPaymentPlanItem) {
            res.status(200).json(updatedSOWPaymentPlanItem);
        } else {
            res.status(404).json({ message: 'SOW Payment Plan Item not found' });
        }
    }

    async deleteSOWPaymentPlanItem(req: Request, res: Response) {
        const { id } = req.params;
        const success = await sowPaymentPlanItemService.deleteSOWPaymentPlanItem(id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'SOW Payment Plan Item not found' });
        }
    }
}

export default new SOWPaymentPlanItemController();
