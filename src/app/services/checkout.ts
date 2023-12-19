import {Agreement} from "@/app/models/Agreement";
import {fetchWithInterceptor} from "@/app/services/api";

export const getAgreement = async (): Promise<Agreement> => {
    try {
        const response = await fetchWithInterceptor('/api/payment');
        return response as Agreement;
    } catch (error) {
        console.error('Error fetching agreement:', error);
        throw new Error('Error fetching agreement');
    }
};