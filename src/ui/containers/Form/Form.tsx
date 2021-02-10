import { Input } from "@atoms";
import { Column } from "@bases";
import React from "react";

import { Container, Button, ButtonContainer } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
}

export default function Form({ children, ...props }: Props) {
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
    <Column>
      <Input name={type} type={type} value={value} onChange={onChange} />
      <Input.Label required={required}>{label}</Input.Label>
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
