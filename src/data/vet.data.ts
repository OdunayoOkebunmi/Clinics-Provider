import { getStateNameFromCode } from '../helper/getState'
import { Clinic, VetClinic } from './types'
import axios from 'axios';

export class VetClinicsData {
    public readonly uri =
        "https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json";
    public async getClinics(): Promise<VetClinic[]> {
        const response = await axios.get(this.uri);
        return response.data as VetClinic[];
    }


    public mapToKey(clinics: VetClinic[]): Clinic[] {
        return clinics.map((clinic) => {
            return {
                name: clinic.clinicName,
                state: getStateNameFromCode(clinic.stateCode),
                availability: clinic.opening,
            };
        });
    }
}