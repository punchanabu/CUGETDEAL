interface registerData {
    name: string;
    surname: string;
    email: string;
    password: string;
}

interface loginData {
    email: string,
    password: string
}
const backendEndPoint = "http://localhost:3222";
export async function createUser(user: registerData): Promise<Response> {
    const response = await fetch(`${backendEndPoint}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    return response;
}

export async function verifyUser(user: loginData): Promise<Response> {
    const response = await fetch(`${backendEndPoint}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    return response;
}

export async function getUserId(token: string) {
    try {
        const response = await fetch(`${backendEndPoint}/getUserId`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log("USER ID is:", data);
            return data;
        } else {
            console.log("Failed to fetch user ID");
        }
    } catch(error) {
        console.log("Failed to fetch user ID", error);
    }
}