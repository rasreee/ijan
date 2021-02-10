import React from "react";
import { InputChangeHandler } from "@types";

import { Container } from "./styles";
import { Input } from "@atoms";
interface Props {
  name: string;
  value: string;
  label: string;
  onChange: InputChangeHandler;
}
function TextField({ name, value, label = "", onChange }: Props) {
  return (
    <Input.Container>
      <Input.Label>{label}</Input.Label>
      <Input name={name} value={value} type="text" onChange={onChange} />
    </Input.Container>
  );
}

export default TextField;
