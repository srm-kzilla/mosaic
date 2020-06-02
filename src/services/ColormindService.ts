import axios, { AxiosInstance } from "axios";
import { API } from "../utils/constants";
import { RGBPalette } from "../utils/types";

export class ColormindService {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: API.BASE_URL,
    });
  }

  async fetchColorPalette(model: string = "default", palette?: RGBPalette) {
    const body = {
      model,
      input: palette,
    };

    return this.instance.post(
      API.ENDPOINTS.FETCH_COLOR_PALETTE,
      JSON.stringify(body)
    );
  }
}
