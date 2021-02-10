import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
`;
export const Input = styled.input`
  height: 32px;
  width: 400px;
`;
export const InputLabelContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-grow: 1;
`;
export const InputLabel = styled.p``;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px 0px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const Button = styled.button`
  margin: 24px 0px;
  width: 160px;
  height: 40px;
`;
