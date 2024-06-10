import { Request, Response } from 'express';
import sowService from '../services/sowService';

class SOWController {
    async createSOW(req: Request, res: Response) {
        const data = req.body;
        const sow = await sowService.createSOW(data);
        res.status(201).json(sow);
    }

    async getSOWs(req: Request, res: Response) {
        const sows = await sowService.getSOWs();
        res.status(200).json(sows);
    }

    async getSOWById(req: Request, res: Response) {
        const { id } = req.params;
        const sow = await sowService.getSOWById(id);
        if (sow) {
            res.status(200).json(sow);
        } else {
            res.status(404).json({ message: 'SOW not found' });
        }
    }

    async updateSOW(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        const updatedSOW = await sowService.updateSOW(id, data);
        if (updatedSOW) {
            res.status(200).json(updatedSOW);
        } else {
            res.status(404).json({ message: 'SOW not found' });
        }
    }

    async deleteSOW(req: Request, res: Response) {
        const { id } = req.params;
        const success = await sowService.deleteSOW(id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'SOW not found' });
        }
    }
}

export default new SOWController();
