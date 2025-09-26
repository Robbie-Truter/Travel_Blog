export const getAllPosts = async () => {
  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch(`${baseUrl}/items/posts`);

    if (!response.ok) {
      throw new Error('Failed to fetch latest posts');
    }

    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    throw new Error(error as string);
  }
};
