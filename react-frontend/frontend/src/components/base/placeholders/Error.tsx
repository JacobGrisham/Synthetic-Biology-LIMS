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
type ErrorProps = {
  image: string;
  error?: any;
  errorInfo?: any;
}

export default function Error(props:ErrorProps) {
  return (
    <Layout>
      <Typography component="h1" variant="h4" gutterBottom>React Render Error</Typography>
      <StyledImage src={props.image}></StyledImage>
      <Typography component="h2" variant="h5" gutterBottom>{props.error}</Typography>
      <Typography variant="body1" gutterBottom>{props.errorInfo}</Typography>
    </Layout>
  )
}