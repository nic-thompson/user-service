export const fetchUserData = async (
  userId: number
): Promise<{ id: number; name: string; email: string }> => {
  const response = await fetch(
    `https://nicolasthompson.com/api/users/${userId}`
  );
  const data = await response.json();
  return data;
};
