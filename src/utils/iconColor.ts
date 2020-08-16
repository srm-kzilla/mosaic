// Calculate contrast ratio between bg and fg to determine icon color

export const iconColor = (bgColor: string, hover: boolean) => {
  const color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  const result = r * 0.299 + g * 0.587 + b * 0.114;
  if (hover === true) {
    return result > 186 ? "#000000" : "#FFFFFF";
  }
  return result > 186 ? "#444857" : "#b8b8b8";
};
