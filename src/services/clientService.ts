import { Client } from '../models/client';

class ClientService {
    async createClient(data: any) {
        return Client.create(data);
    }

    async getClients() {
        return Client.findAll();
    }

    async getClientById(id: string) {
        return Client.findByPk(id);
    }

    async updateClient(id: string, data: any) {
        const client = await Client.findByPk(id);
        if (client) {
            return client.update(data);
        }
        return null;
    }

    async deleteClient(id: string) {
        const client = await Client.findByPk(id);
        if (client) {
            await client.destroy();
            return true;
        }
        return false;
    }
}

export default new ClientService();
