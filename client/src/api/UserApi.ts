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
    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    return response;
}

export async function verifyUser(user: loginData): Promise<Response> {
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    return response;
}