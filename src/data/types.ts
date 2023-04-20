export interface Clinic {
    name: string;
    state: string;
    availability: {
        from: string;
        to: string;
    };
}

export interface VetClinic {
    clinicName: string;
    stateCode: string;
    opening: {
        from: string;
        to: string;
    };
}

export interface DentalClinic {
    name: string;
    stateName: string;
    availability: {
        from: string;
        to: string;
    };
}