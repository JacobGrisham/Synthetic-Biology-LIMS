// The main job of this React component is to compile and layout all the other React Components into cohesive single page application

import React, { Fragment } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styled-components/theme';
import NavBar from './NavBar';
import Search from './Search';
import Inventory from './Inventory';

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
        <Search {...props} />
        <Inventory />
      </LIMSLayout>
    </Fragment>
  )
}

export default LIMS;