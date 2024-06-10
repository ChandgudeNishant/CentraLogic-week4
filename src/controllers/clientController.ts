import { Request, Response } from 'express';
import clientService from '../services/clientService';

class ClientController {
    async createClient(req: Request, res: Response) {
        const data = req.body;
        const client = await clientService.createClient(data);
        res.status(201).json(client);
    }

    async getClients(req: Request, res: Response) {
        const clients = await clientService.getClients();
        res.status(200).json(clients);
    }

    async getClientById(req: Request, res: Response) {
        const { id } = req.params;
        const client = await clientService.getClientById(id);
        if (client) {
            res.status(200).json(client);
        } else {
            res.status(404).json({ message: 'Client not found' });
        }
    }

    async updateClient(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        const updatedClient = await clientService.updateClient(id, data);
        if (updatedClient) {
            res.status(200).json(updatedClient);
        } else {
            res.status(404).json({ message: 'Client not found' });
        }
    }

    async deleteClient(req: Request, res: Response) {
        const { id } = req.params;
        const success = await clientService.deleteClient(id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Client not found' });
        }
    }
}

export default new ClientController();
