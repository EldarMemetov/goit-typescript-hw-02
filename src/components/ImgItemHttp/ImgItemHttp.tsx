import axios from "axios";
import { FetchImgParams, FetchImgResponse } from "../App/App.types";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] =
  "Client-ID Cz_ZJc1r09ItdOnqcDgBv0TvSwyHUBrrPO15fHJOVCs";

export const fetchImg = async ({
  query,
  currentPage,
}: FetchImgParams): Promise<FetchImgResponse> => {
  try {
    const response = await axios.get(`/search/photos`, {
      params: {
        query: query,
        page: currentPage,
        per_page: 15,
        orientation: "landscape",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
