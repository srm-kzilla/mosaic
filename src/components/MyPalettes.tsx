import React, { useState } from "react";

import TooltipComponent from "./TooltipComponent";
import * as Icon from "../lib/icons/index";

type MyPaletteProps = {
  myPalette: string[][];
  hexValue: string[];
  handleHexChange: (colors: string[]) => void;
  onDelete: (index: number) => void;
};

export const MyPalettes = (props: MyPaletteProps) => {
  const { myPalette, hexValue, onDelete, handleHexChange } = props;
  const [isExpanded, setExpanded] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const [isUploading, setUploading] = useState(false);

  return (
    <>
      <PaletteHeader
        isExpanded={isExpanded}
        onExpand={() => setExpanded(!isExpanded)}
      />
      {isExpanded && (
        <>
          {myPalette === null ? (
            <h5 className="kz-message">
              <em>
                It looks empty in here! Press the + icon to add your favorite
                palettes
              </em>
            </h5>
          ) : (
            <>
              <div className="kz-edit-palette-container">
                <TooltipComponent content="Edit" direction="down">
                  <Icon.Edit
                    className={
                      isDeleting
                        ? `kz-icon kz-edit-icon kz-icon-active`
                        : `kz-icon kz-edit-icon`
                    }
                    onClick={() => setDeleting(!isDeleting)}
                  />
                </TooltipComponent>
                <TooltipComponent content="Upload" direction="down">
                  <Icon.Upload
                    className={
                      isUploading ? `kz-icon-active kz-icon` : `kz-icon`
                    }
                    onClick={() => setUploading(!isUploading)}
                  />
                </TooltipComponent>
              </div>
              {myPalette.map((colors: string[], index: number) => (
                <Palette
                  colors={colors}
                  key={`${colors}-${index}`}
                  index={index}
                  hexValue={hexValue}
                  handleHexChange={handleHexChange}
                  onDelete={onDelete}
                  isDeleting={isDeleting}
                  isUploading={isUploading}
                />
              ))}
            </>
          )}
        </>
      )}
      <style jsx>{`
        .kz-edit-palette-container {
          display: flex;
          justify-content: flex-end;
          margin-right: 20px;
          margin-top: 10px;
          cursor: pointer;
        }
        .kz-edit-icon {
          margin-left: 10px;
        }
        .kz-icon-active {
          fill: var(--blue-color);
        }
        .kz-message {
          display: inline-block;
          margin: 10px 0px;
          margin-block-start: 0em;
          margin-block-end: 0em;
          font-family: "Helvetica-Light";
          color: var(--subtitle-color);
          font-size: 14px;
          padding: 10px 0px;
        }
      `}</style>
    </>
  );
};

type PaletteHeaderProps = {
  isExpanded: boolean;
  onExpand: () => void;
};

const PaletteHeader = (props: PaletteHeaderProps) => {
  const { onExpand, isExpanded } = props;
  return (
    <div className="kz-expandable-container">
      <div className="kz-palette-expand" onClick={onExpand}>
        <h4 className="kz-title">My Palettes</h4>
        <div className="kz-view-container">
          <h5 className="kz-subtitle">{isExpanded ? "Hide" : "View"}</h5>
          <Icon.Next
            className={
              isExpanded ? `kz-next-icon kz-next-rotated-icon` : `kz-next-icon`
            }
          />
        </div>
      </div>
      <style jsx>{`
        .kz-expandable-container {
          max-width: 500px;
          margin-top: 10px;
        }
        .kz-palette-expand {
          display: flex;
          background-color: #f9f9f9;
          width: 400px;
          border-radius: 5px;
          cursor: pointer;
        }
        .kz-view-container {
          margin-left: auto;
        }
        .kz-subtitle {
          display: inline-block;
          margin: 0;
          font-family: "Helvetica-Light";
          color: var(--subtitle-color);
          margin-block-start: 0em !important;
          margin-block-end: 0em !important;
        }
        .kz-next-icon {
          height: 10px;
          width: auto;
          fill: var(--icon-fill-color);
          margin: 0px 5px;
        }
        .kz-next-rotated-icon {
          transform: rotate(90deg);
        }
      `}</style>
    </div>
  );
};

type PaletteProps = {
  colors: string[];
  index: number;
  hexValue: string[];
  handleHexChange: (colors: string[]) => void;
  isDeleting: boolean;
  isUploading: boolean;
  onDelete: (index: number) => void;
};

export const Palette = (props: PaletteProps) => {
  const {
    colors,
    index,
    handleHexChange,
    isDeleting,
    isUploading,
    onDelete,
  } = props;

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="kz-my-palette-container">
      <div
        className={
          isDeleting
            ? "kz-my-palette-wobble kz-my-palette-wrapper"
            : "kz-my-palette-wrapper"
        }
      >
        {colors.map((color: string) => (
          <TooltipComponent
            content={copied ? "Copied!" : color}
            key={`${index}-${color}`}
          >
            <div
              className="kz-my-palette"
              style={{ backgroundColor: `${color}` }}
              onClick={() => copyToClipboard(color)}
            />
          </TooltipComponent>
        ))}
      </div>
      <div>
        {isDeleting && (
          <Icon.Delete
            className="kz-icon kz-absolute-icon"
            onClick={() => onDelete(index)}
          />
        )}
        {isUploading && (
          <Icon.Direct
            className="kz-icon kz-absolute-icon"
            onClick={() => handleHexChange(colors)}
          />
        )}
      </div>
      <style jsx>
        {`
          .kz-my-palette-container {
            display: inline-flex;
            margin-right: 10px;
            margin-top: 10px;
            position: relative;
          }
          .kz-my-palette-wrapper {
            display: flex;
          }
          .kz-my-palette {
            display: flex;
            height: 25px;
            width: 25px;
            cursor: copy;
          }
          .kz-my-palette-wobble {
            animation: wobble 0.5s;
            animation-iteration-count: infinite;
          }
          @keyframes wobble {
            0% {
              transform: rotate(-1deg);
            }
            30% {
              transform: rotate(1deg);
            }
            60% {
              transform: rotate(-1deg);
            }
            90% {
              transform: rotate(1deg);
            }
          }
          .kz-absolute-icon {
            position: absolute;
            top: -10px;
            right: -10px;
          }
        `}
      </style>
    </div>
  );
};

export default MyPalettes;
