import React from 'react';
import styled from 'styled-components';
// React Router
import { Link } from "react-router-dom";
// Material UI React Components
import { styled  as materialuistyled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const StyledLink = styled(Link) `
border: none;
text-decoration: none;
background-color: transparent;
padding: 0.7rem;

&:hover {
  border-radius: 0.5rem;
  border: 1px solid rgb(144, 202, 249);
  cursor: pointer;
}
`

type ILinkProps = {
  src: any,
  alt: string;
  tooltip: string;
  to: string;
}

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

const IconLink = (props: ILinkProps) => {
  return (
    <StyledLink to={props.to}>
      <LightTooltip title={props.tooltip} placement='right' TransitionComponent={Zoom}>
        <img src={props.src} alt={props.alt}/>
      </LightTooltip>
    </StyledLink>
  )
}

export default IconLink;
