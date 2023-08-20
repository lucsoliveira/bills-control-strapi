import React, { useRef, useState } from "react";

const Input = ({
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

  return (
    <div>
      <input
        type="color"
        value={colorSelected}
        onChange={(event) => {
          setColorSelected(event.target.value);
        }}
      />
      {colorSelected}
    </div>
  );
};

Input.defaultProps = {
  description: null,
  disabled: false,
  error: null,
  labelAction: null,
  required: false,
  value: "",
};

// Input.propTypes = {
//   intlLabel: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   attribute: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   description: PropTypes.object,
//   disabled: PropTypes.bool,
//   error: PropTypes.string,
//   labelAction: PropTypes.object,
//   required: PropTypes.bool,
//   value: PropTypes.string,
// };

export default Input;
