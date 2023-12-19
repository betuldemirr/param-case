import { fetchWithInterceptor } from './api';
import {Package} from "@/app/models/Package";

export const getAllPackages = async (): Promise<Package[]> => {
    try {
        const response = await fetchWithInterceptor('/api/packages');
        return response.allPackages as Package[];
    } catch (error) {
        console.error('Error fetching package-selection:', error);
        throw new Error('Error fetching package-selection');
    }
};