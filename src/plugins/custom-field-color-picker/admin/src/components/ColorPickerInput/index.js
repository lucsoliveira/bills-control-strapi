"use strict";

import React, { useEffect, useRef, useState } from "react";
import { TextBox } from "../TextBox";
import "./colorpicker.css";
import { eyeDropperApi } from "../eyedropper";
const ColorPickerInput = ({
  attribute,
  description,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  required,
  value,
}) => {
  const [colorSelected, setColorSelected] = useState(null);
  const [canUseEyeDropper, setCanUseEyeDropper] = useState(false);

  const saveDataObj = (name, value, type) => {
    return {
      name: name,
      value: value,
      type: type,
    };
  };
  useEffect(() => {
    if (colorSelected) {
      onChange({
        target: saveDataObj(name, colorSelected, attribute.type),
      });
    }
  }, [colorSelected]);

  useEffect(() => {
    if (value && value !== "") {
      setColorSelected(value);
    }
  }, [value]);

  useEffect(() => {
    if (!Boolean("EyeDropper" in window)) {
      setCanUseEyeDropper(false);
    } else {
      setCanUseEyeDropper(true);
    }
  }, []);
  return (
    <div>
      {name}

      <br />
      <div style={style.box}>
        <div>
          {canUseEyeDropper && (
            <button
              type="button"
              onClick={() => {
                eyeDropperApi().run({
                  setColorSelected,
                });
              }}
            >
              Conta Gotas
            </button>
          )}

          {!canUseEyeDropper && (
            <input
              className="colorpicker"
              style={{
                height: "40px",
              }}
              type="color"
              value={colorSelected}
              onChange={(event) => {
                setColorSelected(event.target.value);
              }}
            />
          )}
        </div>

        <div>
          <TextBox
            required={required}
            disabled={true}
            value={colorSelected ? colorSelected : null}
            placeholder={"Selecione uma cor"}
          />
        </div>
      </div>
    </div>
  );
};

const style = {
  box: {
    display: "flex",
    marginTop: "0.7em",
    flex: "1 10",
  },
};

ColorPickerInput.defaultProps = {
  description: null,
  disabled: false,
  error: null,
  labelAction: null,
  required: false,
  value: "",
};

export default ColorPickerInput;
