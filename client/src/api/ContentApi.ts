const backendEndPoint = "http://localhost:3222";

export const populateJobBoard = async (token: string): Promise<any> => {
    try {
        const response = await fetch('http://localhost:3222/home1', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch jobs', error);
        throw error;
    }
}



export const fetchHome1ByTitle = async (token: string, title: string): Promise<any> => {
    try {
        const response = await fetch(`${backendEndPoint}/home1/${title}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error', error);
        throw new Error('Failed to fetch Home1 by title'); 
    }
};

export const createHome1 = async (token: string, home1Data: any): Promise<any> => {
    try {
        const response = await fetch(`${backendEndPoint}/home1/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(home1Data)
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error', error);
        throw new Error('Failed to create Home1'); 
    }
};


