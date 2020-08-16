import React, { useState } from "react";
import { CompactPicker } from "react-color";
import reactCSS from "reactcss";

import TooltipComponent from "./TooltipComponent";
import { iconColor } from "../utils/iconColor";
import * as Icon from "../lib/icons/index";
import { DEFAULT_COLORS } from "../utils/default";

type PaletteProps = {
  hexValue: string[];
  lockColor: (isLocked: boolean, index: number, hex: string) => void;
};

const Palette = (props: PaletteProps) => {
  let { hexValue, lockColor } = props;
  const [copy, setCopied] = useState(false);

  const handleChange = (hex: string, index: number) => {
    hexValue![index] = hex;
    window.localStorage.setItem("defaultPalette", JSON.stringify(hexValue));
  };

  const handleCopy = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="kz-palette-container">
      {hexValue.map((value, index) => (
        <Color
          classNameProp={`kz-palette-color-${index + 1}`}
          key={`${index}-${value}`}
          color={value}
          index={index}
          copied={copy}
          lockColor={lockColor}
          onColorChange={handleChange}
          copyToClipboard={handleCopy}
        />
      ))}
      <style jsx>
        {`
          .kz-palette-container {
            display: flex;
            width: 400px;
            margin-left: 5px;
          }
        `}
      </style>
    </div>
  );
};

type ColorProps = {
  classNameProp: string;
  color: string;
  index: number;
  copied: boolean;
  lockColor: (isLocked: boolean, index: number, hex: string) => void;
  onColorChange: (hex: string, index: number) => void;
  copyToClipboard: (hex: string) => void;
};

const Color = (props: ColorProps) => {
  const {
    classNameProp,
    color,
    index,
    copied,
    lockColor,
    onColorChange,
    copyToClipboard,
  } = props;

  const [hex, setHex] = useState(color);
  const [showUtils, setShowUtils] = useState(false);
  const [locked, setLocked] = useState([false, false, false, false, false]);

  const handleLock = (index: number, hex: string) => {
    lockColor(true, index, hex);
    locked[index] = !locked[index];
    setLocked((prevLocked) => [
      ...prevLocked,
      (prevLocked[index] = !prevLocked[index]),
    ]);
  };

  const handleChangeComplete = (color: { hex: string }) => {
    setHex(color.hex);
    onColorChange(color.hex, index);
  };

  // Override CompactPicker styles
  const styles = reactCSS({
    default: {
      "zDepth-1": {
        bg: {
          boxShadow: "none",
        },
      },
    },
  });

  return (
    <>
      <div
        className={`kz-palette-color ${classNameProp}`}
        onMouseEnter={() => setShowUtils(!showUtils)}
        onMouseLeave={() => setShowUtils(!showUtils)}
      >
        {showUtils && (
          <>
            <TooltipComponent
              content={
                <CompactPicker
                  styles={styles}
                  color={hex}
                  colors={DEFAULT_COLORS}
                  onChangeComplete={(color) => {
                    handleChangeComplete(color);
                  }}
                />
              }
              arrow={false}
              eventToggle="onClick"
              useHover={false}
              className="kz-react-tooltip"
            >
              <Icon.Edit className={`kz-edit-icon-${classNameProp}`} />
            </TooltipComponent>
            <TooltipComponent
              content={copied ? "Copied!" : "Copy to clipboard"}
              direction="right"
            >
              <Icon.Clipboard
                className={`kz-edit-icon-${classNameProp}`}
                onClick={() => copyToClipboard(hex)}
              />
            </TooltipComponent>
            <TooltipComponent
              content={locked[index] ? "Locked" : "Toggle Lock"}
              direction="right"
            >
              <Icon.Lock
                className={`kz-edit-icon-${classNameProp}`}
                onClick={() => handleLock(index, hex)}
              />
            </TooltipComponent>
          </>
        )}
      </div>
      <style jsx>{`
        .kz-palette-color {
          display: inline-flex;
          flex-direction: column;
          height: 140px;
          text-align: center;
          width: 140px;
        }
        .kz-edit-icon-${classNameProp} {
          height: 20px;
          width: 20px;
          cursor: pointer;
          fill: ${iconColor(color, false)};
          padding-top: 18px;
          font-family: "Helvetica";
          font-size: 0.8rem;
        }
        .kz-edit-icon-${classNameProp}:hover {
          fill: ${iconColor(color, true)};
        }
        .${classNameProp} {
          background-color: ${hex};
        }
        .kz-palette-color-1 {
          border-radius: 5px 0px 0px 5px;
        }
        .kz-palette-color-5 {
          border-radius: 0px 5px 5px 0px;
        }
        .kz-react-tooltip .react-tooltip-lite {
          background-color: #f9f9f9;
        }
        .react-tooltip-lite {
          background: #333;
          color: white;
          opacity: 0.97;
          border-radius: 4px;
          font-size: 12px;
          text-align: center;
        }
        .react-tooltip-lite-arrow {
          opacity: 0.97;
          border-color: #333;
        }
      `}</style>
    </>
  );
};

export default Palette;
