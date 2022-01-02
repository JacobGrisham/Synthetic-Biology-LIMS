import React from 'react';
// Styled Components
import styled from 'styled-components';
import { CombinedStyledLayout } from '../../styled-components/workspace-layout';
// Material UI
import Typography from '@mui/material/Typography';


const Layout = styled(CombinedStyledLayout) `
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  justify-items: center;
`

const StyledImage = styled.img `
  width: 300px;
`
type ComingSoonProps = {
  image?: any;
}

export default function ComingSoon(props:ComingSoonProps) {
  return (
    <Layout>
      <Typography variant="h6" gutterBottom>Coming Soon!</Typography>
      <StyledImage src={props.image}></StyledImage>
    </Layout>
  )
}