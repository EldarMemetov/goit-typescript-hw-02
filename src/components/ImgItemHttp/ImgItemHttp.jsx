import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] =
  "Client-ID Cz_ZJc1r09ItdOnqcDgBv0TvSwyHUBrrPO15fHJOVCs";

export const fetchImg = async (query, currentPage) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query: query,
      page: currentPage,
      per_page: 15,
      orientation: "landscape",
    },
  });
  return response.data;
};
