import React from "react";

const ExportPaletteTemplate = () => {
  return (
    <div className="kz-palette-template-container">
      <div className="kz-palette-template-wrapper">
        <div className="kz-palette-template-navbar">
          <h6 className="kz-palette-template-header">
            Generated with &hearts; by Mosaic
          </h6>
          <div className="kz-palette-template-color-container">
            <div className="kz-palette-template-color-wrapper">
              <div className="kz-palette-template-color-name">#FFFFFF</div>
              <div className="kz-palette-template-color-info">Mystic Blue</div>
              <div className="kz-palette-template-color kz-palette-template-color-1"></div>
            </div>
            <div className="kz-palette-template-color-wrapper">
              <div className="kz-palette-template-color-name">#FFFFFF</div>
              <div className="kz-palette-template-color-info">Mystic Blue</div>
              <div className="kz-palette-template-color kz-palette-template-color-2"></div>
            </div>
            <div className="kz-palette-template-color-wrapper">
              <div className="kz-palette-template-color-name">#FFFFFF</div>
              <div className="kz-palette-template-color-info">Mystic Blue</div>
              <div className="kz-palette-template-color kz-palette-template-color-3"></div>
            </div>
            <div className="kz-palette-template-color-wrapper">
              <div className="kz-palette-template-color-name">#FFFFFF</div>
              <div className="kz-palette-template-color-info">Mystic Blue</div>
              <div className="kz-palette-template-color kz-palette-template-color-4"></div>
            </div>
            <div className="kz-palette-template-color-wrapper">
              <div className="kz-palette-template-color-name">#FFFFFF</div>
              <div className="kz-palette-template-color-info">Mystic Blue</div>
              <div className="kz-palette-template-color kz-palette-template-color-5"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .kz-palette-template-container {
          height: 600px;
          width: 800px;
          background-color: #e8e8e8;
          position: relative;
        }
        .kz-palette-template-wrapper {
          margin: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 400px;
          width: 500px;
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
        .kz-palette-template-header {
          font-size: 12px;
          text-align: center;
        }
        .kz-palette-template-navbar {
          margin: 0 auto;
        }
        .kz-palette-template-color-container {
          display: flex;
        }
        .kz-palette-template-color-wrapper {
          text-align: center;
          font-size: 12px;
        }
        .kz-palette-template-color {
          margin-top: 30px;
          height: 300px;
          width: 100px;
        }
        .kz-palette-template-color-1 {
          background-color: #21201e;
          border-radius: 0px 0px 0px 20px;
        }
        .kz-palette-template-color-2 {
          background-color: #1c8d95;
        }
        .kz-palette-template-color-3 {
          background-color: #37bbca;
        }
        .kz-palette-template-color-4 {
          background-color: #d2d2d4;
        }
        .kz-palette-template-color-5 {
          background-color: #67fd96;
          border-radius: 0px 0px 20px 0px;
        }
      `}</style>
    </div>
  );
};

export default ExportPaletteTemplate;
