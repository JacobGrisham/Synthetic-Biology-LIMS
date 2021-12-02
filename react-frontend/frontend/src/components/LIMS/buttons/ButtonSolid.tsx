import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
width: 12rem;
padding: 1.2rem 2rem;
text-decoration: none;
text-align: center;
color: white;
border-radius: 0.5rem;
border: none;
background-color: rgb(144, 202, 249);

  &:hover {
    color: white;
    background-color: rgb(33, 133, 208);
  }

  &:active {
    background-color: rgb(101, 141, 174);
  }
`

type IButtonProps = {
  text: string;
}

const ButtonSolid = (props: IButtonProps) => {
  return (
    <Button>{props.text}</Button>
  )
}

export default ButtonSolid;