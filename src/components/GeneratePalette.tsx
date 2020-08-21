import React, { useState, useContext } from "react";

import Palette from "./Palette";
import ExportPaletteTemplate from "./ExportPaletteTemplate";
import * as Icon from "../lib/icons/index";
import TooltipComponent from "./TooltipComponent";
import { StoreContext } from "../utils/context/Store";
import { getRGBPalette, getHexPalette } from "../utils/colorUtils";
import { ColormindService } from "../services/ColormindService";

type GeneratePaletteProps = {
  hexValue: string[];
  savePalette: (value: boolean) => void;
};

const GeneratePalette = (props: GeneratePaletteProps) => {
  let { setHexValue } = useContext(StoreContext);
  let { hexValue, savePalette } = props;
  const [lock] = useState(["N", "N", "N", "N", "N"]);
  const [generatedColors, setGeneratedColors] = useState(lock);
  const [copied, setCopied] = useState(false);
  const [display, isDisplay] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${hexValue}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  const handleExport = () => {
    isDisplay(true);
    setTimeout(() => {
      isDisplay(false);
    }, 4000);
  };

  async function generateColors() {
    const hexToRGB: any = getRGBPalette(generatedColors);
    let generatedPalette: string[][];
    // Check if all elements are same i.e. "N"
    let verifyPalette: boolean = new Set(hexToRGB).size == 1;
    if (verifyPalette === true) generatedPalette = await ColormindService();
    else generatedPalette = await ColormindService(hexToRGB);
    const hexPalette = getHexPalette(generatedPalette);
    setHexValue(hexPalette);
  }

  const lockColor = (color: boolean, index: number, hex: string) => {
    if (lock[index] === "N") {
      lock[index] = hex;
    } else lock[index] = "N";
    setGeneratedColors(lock);
  };

  return (
    <>
      <div className="kz-header-container">
        <h4 className="kz-title">Generate Palette</h4>
        <div className="kz-icon-wrapper">
          <TooltipComponent content="Download Palette">
            <Icon.Download
              className="kz-icon kz-icon-download"
              onClick={handleExport}
            />
          </TooltipComponent>
        </div>
        <div className="kz-icon-wrapper">
          <TooltipComponent content={copied ? "Copied!" : "Copy to clipboard"}>
            {copied ? (
              <Icon.Tick className="kz-icon kz-icon-tick" />
            ) : (
              <Icon.Clipboard className="kz-icon" onClick={copyToClipboard} />
            )}
          </TooltipComponent>
        </div>
        <div className="kz-icon-wrapper">
          <TooltipComponent content="Add to My Palettes">
            <Icon.Add className="kz-icon" onClick={() => savePalette(true)} />
          </TooltipComponent>
        </div>
        <div className="kz-icon-wrapper">
          <TooltipComponent content="Generate">
            <Icon.Random
              className="kz-icon kz-random-icon"
              onClick={generateColors}
            />
          </TooltipComponent>
        </div>
      </div>
      <div className="kz-template-container">
        {display && <ExportPaletteTemplate hexValue={hexValue} />}
      </div>
      <Palette hexValue={hexValue} lockColor={lockColor} />
      <style jsx>{`
        .kz-header-container {
          width: 400px;
          margin-bottom: 10px;
        }
        .kz-title {
          display: inline-block;
          color: var(--title-color);
          font-family: "Helvetica-Bold";
          font-size: 16px;
        }
        .kz-icon-wrapper {
          display: inline-block;
          position: relative;
          float: right;
          margin-top: 5px;
          margin-bottom: 10px;
        }
        .kz-icon {
          height: 18px;
          width: 18px;
          cursor: pointer;
          margin-left: 15px;
          fill: var(--icon-fill-color);
        }
        .kz-icon:hover {
          fill: var(--blue-color);
          transition: 0.2s ease-in-out;
        }
        .kz-icon-tick {
          fill: var(--green-color);
        }
        .kz-icon-tick:hover {
          fill: var(--green-color);
        }
        .kz-random-icon {
          height: 23px;
          width: 23px;
        }
        .kz-template-container {
          position: absolute;
          top: -999px;
          left: -999px;
        }
      `}</style>
    </>
  );
};

export default GeneratePalette;
