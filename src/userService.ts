import { fetchUserData } from "./api";

interface UserDetails {
    id: number;
    name: string;
    email: string;
}

export const getUserDetails = async (userId: string): Promise<UserDetails> => {
    const userData = await fetchUserData(userId);
    return {
        id: userData.id,
        name: userData.name,
        email: userData.email,
    }
}