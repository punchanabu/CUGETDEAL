import backendEndPoint from '../config/config.js';
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

export async function autoLogin(user: loginData): Promise<void> {
    try {
        const response = await verifyUser(user);
        if (!response.ok) {
            console.error('Auto login failed');
            return;
        }

        const loginData = await response.json();
        const jwt = loginData.token;
        localStorage.setItem('jwt', jwt);
    } catch (error) {
        console.error('error', error);
    }
}