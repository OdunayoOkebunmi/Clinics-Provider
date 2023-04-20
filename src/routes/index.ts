import { Router, Request, Response } from 'express';
import ClinicsController from '../controller/clinics.controller';

const router = Router()

const clinicsController = new ClinicsController();
router.get('/clinics', clinicsController.fetchClinics);
router.get('/', (req: Request, res: Response) => res.status(200).send({ message: 'Server starting' }));
export default router;