import React from 'react';
import styled from 'styled-components';

const Link = styled.a `
  text-decoration: none;
`

interface ButtonProps {
  color: string;
  url: string;
  text: string;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <button color={props.color}><Link href={props.url} />{props.text}</button>
  )
}

const StyledButton = styled(Button) `
  background-color: ${props => props.color};
  border-radius: 1rem;
  height: 1.5rem;
  width: 2.4rem;
`

export default StyledButton;