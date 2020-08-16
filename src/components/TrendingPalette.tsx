import React, { useState } from "react";

import TooltipComponent from "./TooltipComponent";
import data from "../utils/trending.json";
import { ReactComponent as Next } from "../lib/icons/next.svg";

//Select random palette
const randomisePalettes = () => {
  let palette = Object.values(data.palettes);
  return palette[Math.floor(Math.random() * palette.length)];
};

//Generate six palettes
const generatePalette = () => {
  let palette = [];
  for (let i = 0; i < 6; i++) {
    palette.push([...randomisePalettes()]);
  }
  return palette;
};

const TrendingPalette = () => {
  const [copy, setCopied] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [trendingPalette] = useState(generatePalette());

  const copyToClipboard = (color: any) => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="kz-expandable-container">
      <div
        className="kz-palette-expand"
        onClick={() => setExpanded(!isExpanded)}
      >
        <h4 className="kz-title">Trending Palettes</h4>
        <div className="kz-view-container">
          <h5 className="kz-subtitle">{isExpanded ? "Hide" : "View"}</h5>
          <Next
            className={
              isExpanded ? `kz-next-icon kz-next-rotated-icon` : `kz-next-icon`
            }
          />
        </div>
      </div>
      {isExpanded &&
        trendingPalette.map((palette: string[], index) => (
          <div className="kz-trending-palette-container" key={`${index}`}>
            {palette.map((color, index) => (
              <TooltipComponent
                content={copy ? "Copied!" : color}
                key={`${index}`}
              >
                <div
                  className="kz-trending-palette"
                  key={`${index}`}
                  style={{ backgroundColor: `${color}` }}
                  onClick={() => copyToClipboard(color)}
                />
              </TooltipComponent>
            ))}
          </div>
        ))}
      <style jsx>{`
        .kz-expandable-container {
          max-width: 500px;
          margin-top: 10px;
        }
        .kz-trending-palette-container {
          display: inline-flex;
          margin-right: 0.7em;
          margin-top: 10px;
        }
        .kz-title {
          color: #181d20;
          margin: 10px 0px;
          padding: 5px;
          margin-block-start: 0px !important;
          margin-block-end: 0px !important;
          font-size: 16px;
        }
        .kz-palette-expand {
          background-color: #f9f9f9;
          width: 400px;
          border-radius: 5px;
          cursor: pointer;
        }
        .kz-trending-palette {
          height: 25px;
          width: 25px;
          cursor: copy;
        }
        .kz-view-container {
          margin-right: 10px;
          padding-top: 2px;
        }
        .kz-next-icon {
          height: 8px;
          width: 8px;
        }
      `}</style>
    </div>
  );
};

export default TrendingPalette;
