export const getLatestPostsByDate = async () => {
  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch(
      `${baseUrl}/items/posts?sort=-date_created&limit=5&fields=article_title,cover_image,country.slug,country.country_name&filter[is_tab][_neq]=true`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch latest posts');
    }

    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    throw new Error(error as string);
  }
};
