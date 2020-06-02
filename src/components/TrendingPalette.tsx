import React from "react";

import data from "../utils/trending.json";

const TrendingPalette: React.FC = () => {
  const trendingPalettes = data.palettes;
  const palette = Object.values(trendingPalettes);
  return (
    <div>
      <h4 className="kz-title">Trending Palettes</h4>
      {palette.map((colors) => {
        return colors.map((color) => (
            <div
              className="kz-trending-palette"
              style={{ backgroundColor: `${color}` }}
            />
        ));
      })}
      <style jsx>{`
        .kz-title {
          color: #181d20;
          margin: 10px !important;
          margin-top: 30px !important;
        }
        .kz-palette-container {
          display: inline-block;
        }
        .kz-trending-palette {
          height: 20px;
          width: 20px;
          border-radius: 5px;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default TrendingPalette;
