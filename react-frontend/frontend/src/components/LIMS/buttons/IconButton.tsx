import React from 'react';
import styled from 'styled-components';

type IButtonProps = {
  src: any,
  alt: string;
}

const Button = styled.button `
border: none;
background-color: transparent;
padding: 0.7rem;

&:hover {
  border-radius: 0.5rem;
  border: 1px solid rgb(144, 202, 249);
}
`

const IconButton = (props: IButtonProps) => {
  return (
    <Button><img src={props.src} alt={props.alt}/></Button>
  )
}

export default IconButton;