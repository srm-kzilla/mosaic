import React, { useRef, useEffect } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

import { getColorName } from "../utils/colorUtils";
import MosaicLogo from "../lib/icons/logo.png";

type ExportPaletteTemplateProps = {
  hexValue: string[];
};

const ExportPaletteTemplate = (props: ExportPaletteTemplateProps) => {
  const { hexValue } = props;
  const templateDOM = useRef<HTMLDivElement>(null);

  function exportPalette(templateDOM: any) {
    domtoimage.toBlob(templateDOM.current, {}).then(function (blob) {
      saveAs(blob, "Mosaic.png");
    });
  }

  useEffect(() => {
    exportPalette(templateDOM);
  }, []);

  return (
    <div ref={templateDOM} className="kz-palette-template-container">
      <div className="kz-palette-template-wrapper">
        <div className="kz-palette-template-navbar">
          <div className="kz-palette-template-color-container">
            {hexValue.map((color, index) => (
              <div className="kz-palette-template-color-wrapper" key={color}>
                <div className="kz-palette-template-color-code">{color}</div>
                <div className="kz-palette-template-color-name">
                  {getColorName(color)}
                </div>
                <div
                  style={{ backgroundColor: `${color}` }}
                  className={`kz-palette-template-color kz-palette-template-color-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="kz-palette-template-footer">
        <img
          className="kz-palette-template-logo"
          src={MosaicLogo}
          alt="mosaic_logo"
        />
        <h6>Generated with &hearts; by Mosaic</h6>
      </div>
      <style jsx>{`
        .kz-palette-template-container {
          height: 600px;
          width: 800px;
          background-color: #e8e8e8;
          position: relative;
        }
        .kz-palette-template-footer {
          position: absolute;
          width: 800px;
          bottom: 20px;
          right: 25%;
          left: 50%;
          margin-left: -400px;
          text-align: center;
        }
        .kz-palette-template-footer > img {
          margin: 0 auto;
          height: 30px;
          width: auto;
          text-align: center;
        }
        .kz-palette-template-footer > h6 {
          text-align: center;
          font-size: 12px;
          font-family: "Helvetica-Light";
          margin-block-end: 0em;
          margin-block-start: 0em;
          color: #383838;
        }
        .kz-palette-template-wrapper {
          margin: 0;
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 400px;
          width: 500px;
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        }
        .kz-palette-template-color-code {
          font-family: "Helvetica-Bold";
          font-size: 14px;
          letter-spacing: 0.3px;
        }
        .kz-palette-template-navbar {
          margin: 0 auto;
        }
        .kz-palette-template-color-container {
          display: flex;
        }
        .kz-palette-template-color-wrapper {
          margin-top: 40px;
          text-align: center;
          font-size: 12px;
        }
        .kz-palette-template-color-name {
          font-family: "Helvetica-Regular";
        }
        .kz-palette-template-color {
          margin-top: 30px;
          height: 300px;
          width: 100px;
        }
        .kz-palette-template-color-0 {
          border-radius: 5px 0px 0px 5px;
        }
        .kz-palette-template-color-4 {
          border-radius: 0px 5px 5px 0px;
        }
      `}</style>
    </div>
  );
};

export default ExportPaletteTemplate;
