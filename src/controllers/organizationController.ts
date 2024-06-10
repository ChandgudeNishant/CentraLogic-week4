import { Request, Response } from 'express';
import organizationService from '../services/organizationService';

class OrganizationController {
    async createOrganization(req: Request, res: Response) {
        const data = req.body;
        const organization = await organizationService.createOrganization(data);
        res.status(201).json(organization);
    }

    async getOrganizations(req: Request, res: Response) {
        const organizations = await organizationService.getOrganizations();
        res.status(200).json(organizations);
    }

    async getOrganizationById(req: Request, res: Response) {
        const { id } = req.params;
        const organization = await organizationService.getOrganizationById(id);
        if (organization) {
            res.status(200).json(organization);
        } else {
            res.status(404).json({ message: 'Organization not found' });
        }
    }

    async updateOrganization(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        const updatedOrganization = await organizationService.updateOrganization(id, data);
        if (updatedOrganization) {
            res.status(200).json(updatedOrganization);
        } else {
            res.status(404).json({ message: 'Organization not found' });
        }
    }

    async deleteOrganization(req: Request, res: Response) {
        const { id } = req.params;
        const success = await organizationService.deleteOrganization(id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Organization not found' });
        }
    }
}

export default new OrganizationController();
