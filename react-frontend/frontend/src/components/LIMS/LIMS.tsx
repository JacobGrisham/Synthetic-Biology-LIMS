// The main job of this React component is to compile and layout all the other React Components into cohesive single page application

import React, { Fragment } from 'react';
// React Router
import { Routes, Route } from "react-router-dom";
// Styled Components
import styled from 'styled-components';
import GlobalStyle from '../styled-components/theme';
// My React Components
import NavBar from './microcomponents/NavBar';
import Drawer from './microcomponents/Drawer';
import FouOFour from './microcomponents/404';
// Constants
import routes from '../../constants/constants';

const LIMSLayout = styled.main `
  display: grid;
  grid-template-columns: [navbar] 90px [search-results] 540px [workspace] 1fr [end]
`

interface ILIMSProps {
  onSearchChange?: any;
}

const LIMS = (props: ILIMSProps) => {
  return (
    <Fragment>
      <GlobalStyle />
      <LIMSLayout>
        <NavBar />
        <Drawer {...props} />
        <Routes>
          <Route  path="*" element={<FouOFour />} />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
              />
            ))}
        </Routes>
      </LIMSLayout>
    </Fragment>
  )
}

export default LIMS;