const API_BASE_URL = 'https://caseapi-fe.paramtech.com.tr';
import { getAuthToken } from '../util/AuthUtils';

export const fetchWithInterceptor = async (url: string, options: RequestInit = {}): Promise<any> => {
    const token = getAuthToken();

    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const modifiedOptions: RequestInit = {
        ...options,
        headers,
    };

    const response = await fetch(`${API_BASE_URL}${url}`, modifiedOptions);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};