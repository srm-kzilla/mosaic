import axios from "axios";

import { API } from "../utils/constants";
import { RGBPalette } from "../utils/types";

export async function ColormindService(palette?: RGBPalette) {
  const instance = axios.create({
    baseURL: API.BASE_URL,
  });

  const body = {
    model: "ui",
    input: palette,
  };

  try {
    const response = await instance.post(
      API.ENDPOINTS.FETCH_COLOR_PALETTE,
      JSON.stringify(body)
    );
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    console.error(error);
  }
}
