import { Input } from "@atoms";
import { Column } from "@bases";
import React from "react";

import { Container, Button, ButtonContainer } from "./styles";

export default function Form({ children, ...props }: BaseComponentProps) {
  return <Container {...props}>{children}</Container>;
}

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  onChange: any;
  required?: boolean;
}

Form.Input = function FormInput({
  type = "text",
  placeholder = "",
  name,
  onChange,
  value,
  label,
  required = false,
  ...props
}: InputProps) {
  return (
    <Column {...props}>
      <Input.Label required={required} value={label} />
      <Input name={type} type={type} value={value} onChange={onChange} />
    </Column>
  );
};
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: any;
}

Form.Button = function FormButton({
  children,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer>
      <Button onClick={onClick} {...props}>
        {children}
      </Button>
    </ButtonContainer>
  );
};
interface Props {
  name: string;
  value: string;
  label: string;
  onChange: InputChangeEventHandler;
  required?: boolean;
}
Form.TextField = function TextField({
  name,
  value,
  label,
  required = false,
  onChange,
}: Props) {
  return (
    <Input.Container>
      <Input.Label required={required} value={label} />
      <Input name={name} value={value} type="text" onChange={onChange} />
    </Input.Container>
  );
};
