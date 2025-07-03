export const getTabPostsByCountry = async (country: string) => {
  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch(
      `${baseUrl}/items/posts?filter[is_tab][_eq]=true&filter[country][country_name][_eq]=${country}&fields=*,country.slug,country.country_name`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch tabbed countries");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
