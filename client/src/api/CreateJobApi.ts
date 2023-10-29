interface JobForm {
    userId: object;
    title: string;
    job_kind: string;
    hire_kind: string;
    job_period: string; // Assuming it's a string; if it's a Date, adjust accordingly.
    description: string;
    star: number; // Note: star (singular) to match your form state.
}

const backendEndPoint = "http://localhost:3222";

export async function Createjob(jobDetails: JobForm, token: string): Promise<Response> {
    try {
        const response = await fetch(`${backendEndPoint}/home1`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(jobDetails)
        });

        // If you wish, you can also handle specific HTTP status codes here
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response;

    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error; // Re-throwing the error to handle it in the calling function if necessary
    }
}

