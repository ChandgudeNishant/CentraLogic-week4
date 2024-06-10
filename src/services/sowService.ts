import { SOW } from '../models/sow';

class SOWService {
    async createSOW(data: any) {
        return SOW.create(data);
    }

    async getSOWs() {
        return SOW.findAll();
    }

    async getSOWById(id: string) {
        return SOW.findByPk(id);
    }

    async updateSOW(id: string, data: any) {
        const sow = await SOW.findByPk(id);
        if (sow) {
            return sow.update(data);
        }
        return null;
    }

    async deleteSOW(id: string) {
        const sow = await SOW.findByPk(id);
        if (sow) {
            await sow.destroy();
            return true;
        }
        return false;
    }
}

export default new SOWService();
