import { Clinic, DentalClinic } from './types';
import axios from 'axios';


export class DentalClinicData {
    public readonly uri =
        "https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json";

    public async getClinics(): Promise<DentalClinic[]> {
        const response = await axios.get(this.uri);
        return response.data as DentalClinic[];
    }

    public mapToKey(clinics: DentalClinic[]): Clinic[] {
        return clinics.map((clinic) => {
            return {
                name: clinic.name,
                state: clinic.stateName,
                availability: clinic.availability,
            };
        });
    }
}
