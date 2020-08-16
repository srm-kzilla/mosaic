import React, { useState } from "react";
import { CompactPicker, CompactPickerProps } from "react-color";
import reactCSS from "reactcss";

declare module "react-color" {
  interface CompactPickerProps {
    styles?: any;
  }
}

type PaletteInputProps = {
  colorProp: string;
};

const PaletteInput: React.FC<PaletteInputProps & CompactPickerProps> = (
  props
) => {
  let { colorProp } = props;
  const [hex, setHex] = useState(colorProp);

  const handleChangeComplete = (color: { hex: string }) => {
    setHex(color.hex);
    colorProp = hex;
  };
  
  return (
    <div>
      <CompactPicker
        styles={{
          "zDepth-1": {
            bg: {
              boxShadow: "none",
            },
          },
        }}
        color={hex}
        onChangeComplete={handleChangeComplete}
      />
    </div>
  );
};

export default PaletteInput;
