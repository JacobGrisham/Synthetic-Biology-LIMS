// The main job of this React component is to compile and layout all the other React Components into cohesive single page application

import React, { Fragment, useState } from 'react';
import { Outlet } from "react-router-dom";
// Styled Components
import styled from 'styled-components';
import GlobalStyle from '../styled-components/theme';
import { device } from '../styled-components/responsive';
// My React Components
import NavBar from './microcomponents/NavBar';
import Drawer from './microcomponents/Drawer';

interface ILIMSLayoutProps {
  open: boolean;
}

const LIMSLayout = styled.main<ILIMSLayoutProps> `
  display: grid;
  grid-template-columns: [navbar] 90px [workspace] 5fr [end];
  grid-template-rows: ${(props) => props.open ? 'max-content;' : 'repeat(2, max-content);'}

  @media ${device.tablet} {
    grid-template-columns: ${(props) => props.open ? '[navbar] 90px [workspace] 5fr [end];' : '[navbar] 90px [drawer] 3fr [workspace] 5fr [end];'}
    grid-template-rows: 1fr;
  }
`

interface ILIMSProps {
  onSearchChange?: any;
  image?: any;
}

const LIMS = (props: ILIMSProps) => {
  const [drawerToggle, setDrawerToggle] = useState(false);
  const handleClose = () => {
    setDrawerToggle(true);
  }
  const handleOpen = () => {
    setDrawerToggle(false);
  }

  return (
    <Fragment>
      <GlobalStyle />
      <LIMSLayout open={drawerToggle ? true : false}>
        <NavBar onHandleOpen={handleOpen} />
        <Drawer onHandleClose={handleClose} drawerToggle={drawerToggle} />
        <Outlet />
      </LIMSLayout>
    </Fragment>
  )
}

export default LIMS;