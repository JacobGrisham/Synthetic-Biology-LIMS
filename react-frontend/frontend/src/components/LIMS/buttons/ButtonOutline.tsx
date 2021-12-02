import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
width: 12rem;
padding: 1.2rem 2rem;
text-decoration: none;
text-align: center;
color: rgb(144, 202, 249);
border-radius: 0.5rem;
border: 1px solid rgb(144, 202, 249);;
background-color: white;

  &:hover {
    color: white;
    background-color: rgb(144, 202, 249);
  }

  &:active {
    background-color: rgb(33, 133, 208);
  }
}
`

type IButtonProps = {
  text: string;
}

const ButtonOutline = (props: IButtonProps) => {
  return (
    <Button>{props.text}</Button>
  )
}

export default ButtonOutline;