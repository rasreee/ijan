import React from "react";

import { Container } from "./styles";
import { Label } from "@atoms";

interface Props {
  value: string;
  name: string;
  type?: string;
  onChange: InputChangeEventHandler;
}

export default function Input({
  name,
  type = "text",
  value,
  onChange,
  ...props
}: Props) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    console.log("handleChange: ", name, ": ", value);
    onChange({ name: name, value: e.target.value });
  };

  return (
    <Container
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
}

type LabelProps = { value: string; required?: boolean };

Input.Label = function ({ required = false, value, ...props }: LabelProps) {
  return <Label {...props} required={required} value={value} size={16} />;
};

Input.Container = function ({ children, ...props }: BaseComponentProps) {
  return <div {...props}>{children}</div>;
};
