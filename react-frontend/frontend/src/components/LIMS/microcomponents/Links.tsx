import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from "react-router-dom";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const LinkLists = styled.div `
  grid-area: Links;

  & ul {
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
`
const Links = () => {
  return (
    <LinkLists>
      <Typography variant="h6" gutterBottom>Internal Links</Typography>
      <ul>
        <li>
          <RouterLink to={'/Inventory'}>
            DNA polymerase
          </RouterLink>
        </li>
      </ul>
      <Typography variant="h6" gutterBottom>External Links</Typography>
      <ul>
        <li>
          <Link target="_blank" rel="noreferrer" href='https://www.sciencedirect.com/topics/neuroscience/reverse-transcriptase'>https://www.sciencedirect.com/topics/neuroscience/reverse-transcriptase</Link>
        </li>
      </ul>
    </LinkLists>
  )
}

export default Links;