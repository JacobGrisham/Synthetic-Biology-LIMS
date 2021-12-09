import React from 'react';
import styled from 'styled-components';
// Material UI React Components
import { styled  as materialuistyled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

type IButtonProps = {
  key: number,
  src: any,
  alt: string;
  tooltip: string;
}

const Button = styled.button `
border: none;
background-color: transparent;
padding: 0.7rem;

&:hover {
  border-radius: 0.5rem;
  border: 1px solid rgb(144, 202, 249);
  cursor: pointer;
}
`

const LightTooltip = materialuistyled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const IconButton = (props: IButtonProps) => {
  return (
    <Button>
      <LightTooltip key={props.key} title={props.tooltip} placement='right' TransitionComponent={Zoom}>
        <img src={props.src} alt={props.alt}/>
      </LightTooltip>
    </Button>
  )
}

export default IconButton;