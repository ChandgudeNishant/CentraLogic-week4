import { Request, Response } from 'express';
import sowPaymentPlanService from '../services/sowPaymentPlanService';

class SOWPaymentPlanController {
    async createSOWPaymentPlan(req: Request, res: Response) {
        const data = req.body;
        const sowPaymentPlan = await sowPaymentPlanService.createSOWPaymentPlan(data);
        res.status(201).json(sowPaymentPlan);
    }

    async getSOWPaymentPlans(req: Request, res: Response) {
        const sowPaymentPlans = await sowPaymentPlanService.getSOWPaymentPlans();
        res.status(200).json(sowPaymentPlans);
    }

    async getSOWPaymentPlanById(req: Request, res: Response) {
        const { id } = req.params;
        const sowPaymentPlan = await sowPaymentPlanService.getSOWPaymentPlanById(id);
        if (sowPaymentPlan) {
            res.status(200).json(sowPaymentPlan);
        } else {
            res.status(404).json({ message: 'SOW Payment Plan not found' });
        }
    }

    async updateSOWPaymentPlan(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        const updatedSOWPaymentPlan = await sowPaymentPlanService.updateSOWPaymentPlan(id, data);
        if (updatedSOWPaymentPlan) {
            res.status(200).json(updatedSOWPaymentPlan);
        } else {
            res.status(404).json({ message: 'SOW Payment Plan not found' });
        }
    }

    async deleteSOWPaymentPlan(req: Request, res: Response) {
        const { id } = req.params;
        const success = await sowPaymentPlanService.deleteSOWPaymentPlan(id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'SOW Payment Plan not found' });
        }
    }
}

export default new SOWPaymentPlanController();
