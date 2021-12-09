import React from 'react';
import styled from 'styled-components';
import ButtonSolid from '../buttons/ButtonSolid';
import Typography from '@mui/material/Typography';

const ListItem = styled.li `
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 2rem;
  padding: 1.2rem;
  list-style-type: none;
  border-radius: 0.5rem;
  border: 1px solid rgb(222, 222, 223);
`

const JobListItem = () => {
  return (
    <ListItem>
      <ButtonSolid text={'VIEW JOB'} />
      <Typography variant="body1">DNA Synthesis</Typography>
    </ListItem>
  )
}

export default JobListItem;