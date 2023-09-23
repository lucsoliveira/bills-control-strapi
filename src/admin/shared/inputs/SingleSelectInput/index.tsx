import React, { useState } from "react";

import { SingleSelect, SingleSelectOption } from "@strapi/design-system";

export const SingleSelectInput = (props: {
  required?: boolean;
  label?: string;
  placeHolder: string;
  value: string;
  values: { name: string; value: string }[];
  legend?: string;
  onChange: any;
}) => {
  const [error, toggleError] = useState<string>();
  const [disabled, toggleDisabled] = useState(false);
  return (
    <SingleSelect
      label={props.label}
      required={props.required}
      placeholder={props.placeHolder}
      hint={props.legend}
      error={error}
      disabled={disabled}
      value={props.value}
      onChange={props.onChange}
    >
      {props.values.map((item) => (
        <SingleSelectOption value={item.value}>{item.name}</SingleSelectOption>
      ))}
    </SingleSelect>
  );
};
