import { RGBPalette, RGBColor, RGBNumber } from "./types";
import { ntc } from "./ntc";

export const getRGBPalette = (hexColor: string[]) => {
  let RGBColor: any = [];
  hexColor.map((hexString: string) => RGBColor.push(getRGBColor(hexString)));
  return RGBColor;
};

export const getRGBColor = (hexColor: string) => {
  let RGBColor = [];
  if (hexColor === "N") {
    return "N";
  }
  hexColor = hexColor.substring(1);
  let bigint = parseInt(hexColor, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  RGBColor.push(r, g, b);
  return RGBColor;
};

export const getHexPalette = (palette: any): any[] => {
  let hexColors: string[] = [];
  // eslint-disable-next-line array-callback-return
  palette.map((rgbColor: RGBColor) => {
    hexColors.push(getHexColor(rgbColor));
  });

  return hexColors;
};

export const getHexColor = (rgbColor: RGBColor): string => {
  if (typeof rgbColor === "string") return rgbColor;
  let hexColor = "#";
  // eslint-disable-next-line array-callback-return
  rgbColor.map((rbgNumber: RGBNumber) => {
    hexColor += getHexComponent(rbgNumber);
  });
  return hexColor;
};

export const getHexComponent = (rbgNumber: RGBNumber) => {
  let hex = rbgNumber.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

export const getColorNames = (palette: RGBPalette) => {
  const hexPalette = getHexPalette(palette);

  let colorNames: string[] = [];
  // eslint-disable-next-line array-callback-return
  hexPalette.map((hexColor: string) => {
    colorNames.push(getColorName(hexColor));
  });

  return colorNames;
};

export const getColorName = (hexColor: string): string => {
  return ntc.name(hexColor)[1] as string;
};
