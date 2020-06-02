import { RGBPalette, RGBColor, RGBNumber } from "./types";
import { ntc } from "./ntc";

export const getHexPalette = (palette: RGBPalette): any[] => {
  let hexColors: any[] = [];
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
  var hex = rbgNumber.toString(16);
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
