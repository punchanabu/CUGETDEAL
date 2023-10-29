const fetchUserProfile = async (userId, token) => {
    try {
        const response = await fetch(`/profile/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`  // Assuming you use a Bearer token for authentication
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
  

const updateUserProfile = async (profileData, token) => {
    try {
        const response = await fetch(`/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`  // Assuming you use a Bearer token for authentication
        },
        body: JSON.stringify(profileData)
        });

        if (!response.ok) {
        throw new Error('Failed to update user profile');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating user profile:", error);
        throw error;
    }
}
  
export { fetchUserProfile, updateUserProfile };