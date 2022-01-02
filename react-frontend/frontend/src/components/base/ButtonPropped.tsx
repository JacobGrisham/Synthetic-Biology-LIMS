import React from 'react';
import styled from 'styled-components';

interface IStyledButtonProps {
  width: number;
  ypadding: number;
  xpadding: number;
  primary?: boolean;
  text: string;
  type?: 'submit' | 'reset' | 'button';
}

const Button = styled.button<IStyledButtonProps> `
width: ${props => props.width}rem;
padding: ${props => props.xpadding}rem ${props => props.ypadding}rem;
text-decoration: none;
text-align: center;
color: ${props => props.primary ? 'white' : 'rgb(144, 202, 249)'};
border-radius: 0.5rem;
border: ${props => props.primary ? 'none' : '1px solid rgb(144, 202, 249)'};
background-color: ${props => props.primary ? 'rgb(144, 202, 249)' : 'white'};

  &:hover {
    color: white;
    background-color: ${props => props.primary ? 'rgb(33, 133, 208)' : 'rgb(144, 202, 249)'};
    cursor: pointer;
  }

  &:active {
    background-color: ${props => props.primary ? 'rgb(101, 141, 174)' : 'rgb(33, 133, 208)'};
  }
`

const ButtonPropped: React.FC<IStyledButtonProps> = (props) => {
  return (
    <Button
    width={props.width}
    ypadding={props.ypadding}
    xpadding={props.xpadding}
    text={props.text}
    primary={props.primary}
    >
      {props.text}
    </Button>
  )
}

export default ButtonPropped;