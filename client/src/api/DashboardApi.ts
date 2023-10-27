const backendEndPoint = "http://localhost:3222";

// this still could bechange based on backend requirements
export const getDashboardData = async (token: string): Promise<Response> => {
    try {
        const response = await fetch(`${backendEndPoint}/dashboard`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
    } catch (error) {
        console.log('error', error);
        throw new Error('Failed to fetch dashboard data from da server!'); 
    }
};
// this could be change based on backend requirements
export const jobReceived = async (token: string, taskId: string): Promise<Response> => {
    try {
        const response = await fetch(`${backendEndPoint}/dashboard/finishTask`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ taskId })
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
    } catch (error) {
        console.log('error', error);
        throw new Error('Failed to finish task!'); 
    }
}

export const finshJob = async (token: string, taskId: string): Promise<Response> => {
    try {
        const response = await fetch(`${backendEndPoint}/dashboard/finishJob`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ taskId })
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
    } catch (error) {
        console.log('error', error);
        throw new Error('Failed to finish task!'); 
    }

}