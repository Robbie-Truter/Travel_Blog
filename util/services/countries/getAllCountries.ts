export const getAllCountries = async () => {
  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch(`${baseUrl}/items/countries`);

    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }

    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    throw new Error("Error fetching countries: " + error);
  }
};
