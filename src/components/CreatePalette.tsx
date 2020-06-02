import React, { useContext } from "react";

import PaletteInput from "./PaletteInput";
import Palette from "./Palette";

const CreatePalette: React.FC = () => {
  return (
    <div>
      <h4 className="kz-title">Generate Palette</h4>
      <PaletteInput />
      <Palette />
      <style jsx>{`
        .kz-title {
          color: #181d20;
        }
      `}</style>
    </div>
  );
};

export default CreatePalette;
