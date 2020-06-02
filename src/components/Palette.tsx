import React, { useState, useContext } from "react";

import { StoreContext } from "../utils/context/Store";
import CopyToClipboard, { CopyToClipboardMessage } from "./CopyToClipboard";

const Palette: React.FC = () => {
  const { hexValue } = useContext(StoreContext);
  const [copy, setCopied] = useState(false);
  const color1 = hexValue![0];
  const color2 = hexValue![1];
  const color3 = hexValue![2];
  const color4 = hexValue![3];
  const color5 = hexValue![4];

  const copyToClipboard = (color: any) => {
    console.log(color);
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div className="kz-palette-container">
      <div
        className="kz-palette-color kz-palette-color-1"
        key="kz-palette-color-1"
        onClick={() => copyToClipboard(color1)}
      />
      <div
        className="kz-palette-color kz-palette-color-2"
        key="kz-palette-color-2"
        onClick={() => copyToClipboard(color2)}
      />
      <div
        className="kz-palette-color kz-palette-color-3"
        key="kz-palette-color-3"
        onClick={() => copyToClipboard(color3)}
      />
      <div
        className="kz-palette-color kz-palette-color-4"
        key="kz-palette-color-4"
        onClick={() => copyToClipboard(color4)}
      />
      <div
        className="kz-palette-color kz-palette-color-5"
        key="kz-palette-color-5"
        onClick={() => copyToClipboard(color5)}
      />
      <CopyToClipboard hex={hexValue!} setCopied={setCopied} />
      {copy && <CopyToClipboardMessage />}
      <style jsx>{`
        .kz-palette-container {
          height: 100px;
        }
        .kz-palette-color {
          display: inline-block;
          height: 60px;
          width: 60px;
          border-radius: 5px;
          margin-top: 30px;
          margin-left: 10px;
          cursor: pointer;
        }
        .kz-palette-color-1 {
          background-color: rgb(${color1});
        }
        .kz-palette-color-2 {
          background-color: rgb(${color2});
        }
        .kz-palette-color-3 {
          background-color: rgb(${color3});
        }
        .kz-palette-color-4 {
          background-color: rgb(${color4});
        }
        .kz-palette-color-5 {
          background-color: rgb(${color5});
        }
      `}</style>
    </div>
  );
};

export default Palette;
