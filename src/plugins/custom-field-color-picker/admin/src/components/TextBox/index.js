"use strict";

import React from "react";
import { TextInput } from "@strapi/design-system";
export const TextBox = ({ value, placeholder, required, disabled }) => {
  return (
    <TextInput
      required={required}
      placeholder={placeholder}
      label=" "
      size="S"
      name="content"
      value={value}
      disabled={disabled}
    />
  );
};
