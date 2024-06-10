import { Organization } from '../models/organization';

class OrganizationService {
    async createOrganization(data: any) {
        return Organization.create(data);
    }

    async getOrganizations() {
        return Organization.findAll();
    }

    async getOrganizationById(id: string) {
        return Organization.findByPk(id);
    }

    async updateOrganization(id: string, data: any) {
        const organization = await Organization.findByPk(id);
        if (organization) {
            return organization.update(data);
        }
        return null;
    }

    async deleteOrganization(id: string) {
        const organization = await Organization.findByPk(id);
        if (organization) {
            await organization.destroy();
            return true;
        }
        return false;
    }
}

export default new OrganizationService();
