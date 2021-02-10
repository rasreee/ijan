import React from "react";

import {
  Container,
  Input,
  Button,
  ButtonContainer,
  InputContainer,
  InputLabel,
  InputLabelContainer,
} from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
}

export default function Form({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  label: string;
  onChange: any;
  required?: boolean;
}

Form.Input = function FormInput({
  value,
  label,
  onChange,
  required = false,
  ...props
}: InputProps) {
  return (
    <InputContainer>
      <InputLabelContainer>
        <InputLabel>{label}</InputLabel>
      </InputLabelContainer>
      <Input {...props} type="text" value={value} onChange={onChange} />
    </InputContainer>
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
