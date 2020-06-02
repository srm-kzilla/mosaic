import React from "react";
import { Form, Field } from "react-final-form";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface Values {
  R?: number;
  G?: number;
  B?: number;
  hex?: string;
}

const onSubmit = async (values: Values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, undefined, 2));
};

const PaletteInput: React.FC = () => (
  <>
    <Form
      onSubmit={onSubmit}
      initialValues={{ R: 96, G: 96, B: 96, hex: "F9F9F9" }}
      render={({ handleSubmit, form }) => (
        <form onSubmit={handleSubmit}>
          <div className="kz-field-wrapper">
            <Field<string>
              name="hex"
              component={TextInput}
              className="kz-input kz-hex-input"
              placeholder="F9F9F9"
            />
            <p className="kz-field-type">HEX</p>
          </div>
          <div className="kz-field-wrapper">
            <Field<number>
              name="R"
              component={NumberInput}
              className="kz-input"
              placeholder="96"
            />
            <p className="kz-field-type">R</p>
          </div>
          <div className="kz-field-wrapper">
            <Field<number>
              name="G"
              component={NumberInput}
              className="kz-input"
              placeholder="96"
            />
            <p className="kz-field-type">G</p>
          </div>
          <div className="kz-field-wrapper">
            <Field<number>
              name="B"
              component={NumberInput}
              className="kz-input"
              placeholder="96"
            />
            <p className="kz-field-type">B</p>
          </div>
          <button type="submit" className="kz-generate-btn">
            Generate
          </button>
        </form>
      )}
    />
    <style jsx>{`
      form {
        display: flex;
      }
      .kz-field-wrapper {
        display: flex;
        flex-direction: column;
      }
      .kz-input {
        border-radius: 10px;
        width: 30px;
        text-align: center;
        padding: 12px;
        border: 1px solid #c6c6c6;
        color: #606060;
        outline: none;
        margin-left: 10px;
      }
      .kz-hex-input {
        width: 80px;
      }
      .kz-field-type {
        margin: 0;
        text-align: center;
        font-size: 12px;
        padding-top: 5px;
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      input[type="number"] {
        -moz-appearance: textfield;
      }
      .kz-generate-btn {
        background-color: #1e272e;
        color: #ffffff;
        height: 40px;
        padding: 12px 18px;
        border: none;
        border-radius: 5px;
        margin-left: 10px;
        cursor: pointer;
        outline: none;
      }
      .kz-generate-btn:hover {
        opacity: 0.95;
      }
    `}</style>
  </>
);

export default PaletteInput;
