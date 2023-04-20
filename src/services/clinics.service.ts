import { DentalClinicData } from '../data/dental.data';
import { VetClinicsData } from '../data/vet.data'
import { Clinic } from '../data/types'

export default class ClinicsService {
    public async getClinics(): Promise<Clinic[]> {
        const getDentalData = await new DentalClinicData().getClinics();
        const mapDentalData = await new DentalClinicData().mapToKey(getDentalData)

        const getVetData = await new VetClinicsData().getClinics();
        const mapVetData = await new VetClinicsData().mapToKey(getVetData)

        return [...mapDentalData, ...mapVetData]
    }

    public async searchClinics(query): Promise<Clinic[]> {
        const { name, state, from, to } = query;
        const clinics = await this.getClinics();
        const filteredClinics = clinics.filter((clinics: Clinic) => {
            if (name && !clinics.name.toLowerCase().includes(name.toString().toLowerCase())) {
                return false;
            }

            if (state && clinics.state.toLowerCase() !== state.toString().toLowerCase()) {
                return false;
            }

            if (from && to) {
                const availabilityFrom = clinics.availability.from.split(":");
                const availabilityTo = clinics.availability.to.split(":");
                const searchFrom = from.toString().split(":");
                const searchTo = to.toString().split(":");
                const availabilityStart = new Date(0, 0, 0, Number(availabilityFrom[0]), Number(availabilityFrom[1]), 0);
                const availabilityEnd = new Date(0, 0, 0, Number(availabilityTo[0]), Number(availabilityTo[1]), 0);
                const searchStart = new Date(0, 0, 0, Number(searchFrom[0]), Number(searchFrom[1]), 0);
                const searchEnd = new Date(0, 0, 0, Number(searchTo[0]), Number(searchTo[1]), 0);
                if (!(searchStart >= availabilityStart && searchEnd <= availabilityEnd)) {
                    return false;
                }
            }

            return true;
        });
        return filteredClinics;
    }
}