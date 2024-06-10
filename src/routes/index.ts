import { Router } from 'express';
import organizationController from '../controllers/organizationController';
import clientController from '../controllers/clientController';
import sowController from '../controllers/sowController';
import invoiceController from '../controllers/invoiceController';
import paymentController from '../controllers/paymentController';
import sowPaymentPlanController from '../controllers/sowPaymentPlanController';
import sowPaymentPlanItemController from '../controllers/sowPaymentPlanItemController';
import invoiceLineItemController from '../controllers/invoiceLineItemController';

const router = Router();

// Organization routes
router.post('/organizations', organizationController.createOrganization);
router.get('/organizations', organizationController.getOrganizations);
router.get('/organizations/:id', organizationController.getOrganizationById);
router.put('/organizations/:id', organizationController.updateOrganization);
router.delete('/organizations/:id', organizationController.deleteOrganization);

// Client routes
router.post('/clients', clientController.createClient);
router.get('/clients', clientController.getClients);
router.get('/clients/:id', clientController.getClientById);
router.put('/clients/:id', clientController.updateClient);
router.delete('/clients/:id', clientController.deleteClient);

// SOW routes
router.post('/sows', sowController.createSOW);
router.get('/sows', sowController.getSOWs);
router.get('/sows/:id', sowController.getSOWById);
router.put('/sows/:id', sowController.updateSOW);
router.delete('/sows/:id', sowController.deleteSOW);

// Invoice routes
router.post('/invoices', invoiceController.createInvoice);
router.get('/invoices', invoiceController.getInvoices);
router.get('/invoices/:id', invoiceController.getInvoiceById);
router.put('/invoices/:id', invoiceController.updateInvoice);
router.delete('/invoices/:id', invoiceController.deleteInvoice);

// Payment routes
router.post('/payments', paymentController.createPayment);
router.get('/payments', paymentController.getPayments);
router.get('/payments/:id', paymentController.getPaymentById);
router.put('/payments/:id', paymentController.updatePayment);
router.delete('/payments/:id', paymentController.deletePayment);

// SOW Payment Plan routes
router.post('/sow-payment-plans', sowPaymentPlanController.createSOWPaymentPlan);
router.get('/sow-payment-plans', sowPaymentPlanController.getSOWPaymentPlans);
router.get('/sow-payment-plans/:id', sowPaymentPlanController.getSOWPaymentPlanById);
router.put('/sow-payment-plans/:id', sowPaymentPlanController.updateSOWPaymentPlan);
router.delete('/sow-payment-plans/:id', sowPaymentPlanController.deleteSOWPaymentPlan);

// SOW Payment Plan Item routes
router.post('/sow-payment-plan-items', sowPaymentPlanItemController.createSOWPaymentPlanItem);
router.get('/sow-payment-plan-items', sowPaymentPlanItemController.getSOWPaymentPlanItems);
router.get('/sow-payment-plan-items/:id', sowPaymentPlanItemController.getSOWPaymentPlanItemById);
router.put('/sow-payment-plan-items/:id', sowPaymentPlanItemController.updateSOWPaymentPlanItem);
router.delete('/sow-payment-plan-items/:id', sowPaymentPlanItemController.deleteSOWPaymentPlanItem);

// Invoice Line Item routes
router.post('/invoice-line-items', invoiceLineItemController.createInvoiceLineItem);
router.get('/invoice-line-items', invoiceLineItemController.getInvoiceLineItems);
router.get('/invoice-line-items/:id', invoiceLineItemController.getInvoiceLineItemById);
router.put('/invoice-line-items/:id', invoiceLineItemController.updateInvoiceLineItem);
router.delete('/invoice-line-items/:id', invoiceLineItemController.deleteInvoiceLineItem);

export default router;
