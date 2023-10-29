import backendEndPoint from '../config/config.js';
const fetchUserProfile = async (token) => {
    try {
        const response = await fetch(`${backendEndPoint}/profile`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        });

        if (!response.ok) {
        throw new Error('Failed to fetch user profile');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        throw error;
    }
}

const createUserProfile = async (profileData) => {
    try{
        const token = localStorage.getItem('jwt');
        const response = await fetch(`${backendEndPoint}/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(profileData)  // Assuming profileData is an object containing the data for the new profile
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to create user profile: ${errorText}`);
        }
        const data = await response.json();
        console.log('Profile created successfully:', data);
        return data;
    } catch (error) {
        console.error("Error creating user profile:", error);
        throw error;
    }
}
  

const updateUserProfile = async (profileData, token) => {
    try {
        const response = await fetch(`${backendEndPoint}/profile`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`  // Assuming you use a Bearer token for authentication
        },
        body: JSON.stringify(profileData)
        });
        // console.log(response);
        if (!response.ok) {
            throw new Error('Failed to update user profile');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        // console.error("Error updating user profile:", error);
        throw error;
    }
}
  
export { fetchUserProfile, createUserProfile, updateUserProfile };