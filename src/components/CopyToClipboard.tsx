import React, { useState } from "react";

import ClipboardIcon from "../lib/icons/clipboard.png";
import DownloadIcon from "../lib/icons/download.png";
import ExportPaletteTemplate from "./ExportPaletteTemplate";

type CopyToClipboardProps = {
  hex: object;
  setCopied: Function;
};

const CopyToClipboard: React.FC<CopyToClipboardProps> = (
  props: CopyToClipboardProps
) => {
  const { hex, setCopied } = props;
  const [display, isDisplay] = useState(false);
  const handleCopy = (color: any) => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const handleExport = () => {
    isDisplay(true);
    setTimeout(() => {
      isDisplay(false);
    }, 4000);
  };
  return (
    <div className="kz-container">
      <div className="kz-icon-wrapper">
        <img
          src={DownloadIcon}
          className="kz-icon"
          alt="download-icon"
          onClick={handleExport}
        />
      </div>
      <div className="kz-icon-wrapper">
        <img
          src={ClipboardIcon}
          className="kz-icon"
          alt="clipboard-icon"
          onClick={() => handleCopy(hex)}
        />
      </div>
      <div className="kz-template-container">
        {display && <ExportPaletteTemplate />}
      </div>
      <style jsx>
        {`
          .kz-container {
            display: inline-block;
            padding: 10px;
            margin-bottom: 20px;
          }
          .kz-icon-wrapper {
            display: flex;
            flex-direction: row;
            margin: 18px;
          }
          .kz-icon {
            height: 20px;
            width: auto;
            cursor: pointer;
          }
          .kz-template-container {
            position: absolute;
            top: -999px;
            left: -999px;
          }
        `}
      </style>
    </div>
  );
};

export const CopyToClipboardMessage = () => {
  return (
    <>
      <div className="kz-copied-clipboard">Copied to clipboard!</div>
      <style jsx>{`
        .kz-copied-clipboard {
          background-color: #1e272e;
          color: #ffffff;
          text-align: center;
          width: 330px;
          padding: 5px;
          border-radius: 5px;
          font-size: 12px;
          margin-left: 10px;
        }
      `}</style>
    </>
  );
};

export default CopyToClipboard;
