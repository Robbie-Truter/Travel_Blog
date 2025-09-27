export const getTabPostsByCountry = async () => {
  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch(
      `${baseUrl}/items/posts?filter[is_tab][_eq]=true&fields=article_title,cover_image,country.slug,country.country_name`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch tabbed countries');
    }

    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    throw new Error(error as string);
  }
};
