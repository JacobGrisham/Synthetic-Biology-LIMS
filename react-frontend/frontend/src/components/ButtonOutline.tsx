import React from 'react';
import styled from 'styled-components';

const Link = styled.a `
  text-decoration: none;
`

interface ButtonProps {
  color: string;
  url: string;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <button color={props.color}><Link href={props.url} /></button>
  )
}

const StyledButton = styled(Button) `
  color: ${(props) => props.color};
  border-color: ${(props) => props.color};
  border-radius: 1rem;
  background-color: none;
  height: 1.5rem;
  width: 2.4rem;

  &:hover {
    color: white;
    background-color: ${(props) => props.color};
  }
`

export default StyledButton;