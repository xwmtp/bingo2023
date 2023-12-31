import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Colors } from "../../GlobalStyle";

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const TextAreaInput: React.FC<Props> = (props) => {
  // @ts-ignore
  return <InputStyled {...props} />;
};

const InputStyled = styled.textarea`
  padding: 0.8rem;
  border-radius: 0.6rem;
  border: 0.18rem solid ${Colors.lightGrey};
  background-color: white;
  box-shadow: none;
  font-size: 1.1rem;
  color: black;
  outline: none;

  :focus-visible {
    border-color: ${Colors.mediumPrimary};
  }
`;
