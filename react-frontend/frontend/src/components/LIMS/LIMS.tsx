// The main job of this React component is to compile and layout all the other React Components into cohesive single page application

import React, { Fragment, useState } from 'react';
// React Router
import { Outlet, useLocation } from "react-router-dom";
// Styled Components
import styled from 'styled-components';
import GlobalStyle from '../styled-components/theme';
import { device } from '../styled-components/responsive';
// My React Components
import ErrorBoundary from '../base/ErrorBoundary';
import NavBar from './microcomponents/NavBar';
import Drawer from './microcomponents/Drawer';
import DrawerAlternative from './microcomponents/DrawerAlternative';

interface ILIMSLayoutProps {
  closed: boolean;
}

const LIMSLayout = styled.main<ILIMSLayoutProps> `
  display: grid;
  grid-template-columns: [navbar] 90px [workspace] 5fr [end];
  grid-template-rows: ${(props) => props.closed ? 'max-content;' : 'repeat(2, max-content);'}

  @media ${device.tablet} {
    grid-template-columns: ${(props) => props.closed ? '[navbar] 90px [workspace] 5fr [end];' : '[navbar] 90px [drawer] 3fr [workspace] 5fr [end];'}
    grid-template-rows: 1fr;
  }
`

interface ILIMSProps {
  onSearchChange?: any;
  route?: string;
}

const LIMS = (props: ILIMSProps) => {
  const [drawerClose, setDrawerClose] = useState(false);
  const handleClose = () => {
    setDrawerClose(true);
  }
  const handleOpen = () => {
    setDrawerClose(false);
  }

  const location = useLocation();
  const pathname = location.pathname.split('/').filter((x, index) => index === 2);
  const pathnameString = pathname[0]

  return (
    <Fragment>
      <GlobalStyle />
      {/* Had to pass state to props in order to work with styled components conditional rendering */}
      <LIMSLayout closed={drawerClose ? true : false}>
        <NavBar onHandleOpen={handleOpen} />
        <ErrorBoundary>
          {pathnameString === ('profile' || 'credentials' || 'settings') ? <DrawerAlternative route={pathnameString} /> : <Drawer onSearchChange={props.onSearchChange} onHandleClose={handleClose} drawerClose={drawerClose} />}
        </ErrorBoundary>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </LIMSLayout>
    </Fragment>
  )
}

export default LIMS;