import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import ButtonPropped from '../../base/ButtonPropped';
// Utilities
import { capitalizeFirstLetter } from '../../../utils/change-letter-case';

const Layout = styled.section `
  grid-column: drawer / workspace;
  grid-template-rows: 230px 1fr;
  display: grid;
  max-width: 768px;
  max-height: 100vh;
  background-color: rgb(245, 250, 254);
`

const Header = styled.div `
  display: grid;
  align-items: center;
  padding: 0px 30px;
`

interface IDrawerAlternativeProps {
  route: string;
}

const DrawerAlternative = ({route}:IDrawerAlternativeProps) => {
  return (
    <Layout>
      <Header>
      <Typography variant="h5">{capitalizeFirstLetter(route)}</Typography>
      <ButtonPropped xpadding={1.2} ypadding={1.5} width={10} text={'Log Out'} />
      </Header>
    </Layout>
  )
}

export default DrawerAlternative;