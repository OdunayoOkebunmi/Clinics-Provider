import { type Request, type Response } from 'express';
import cacheLocal from '../services/cache.service';
import ClinicsService from '../services/clinics.service';

export default class ClinicsController {

    public async fetchClinics(req: Request, res: Response): Promise<void> {

        try {
            const { name, state, from, to } = req.query;
            const cacheKey = JSON.stringify({ name, state, from, to });
            const cachedData = cacheLocal.get(cacheKey);
            if (cachedData) {
                res.status(200).json({ clinics: cachedData });
                return;
            }

            const clinicservice = new ClinicsService()
            const filteredClinics = await clinicservice.searchClinics(req.query)

            cacheLocal.set(cacheKey, filteredClinics);

            res.status(200).json({
                clinics: filteredClinics
            })

        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: 'An error occurred while retrieving data'
            })
        }
    }
}