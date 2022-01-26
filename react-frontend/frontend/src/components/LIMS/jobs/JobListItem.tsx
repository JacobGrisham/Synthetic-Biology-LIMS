import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import ButtonPropped from '../../base/ButtonPropped';
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
  let location = useLocation();

  return (
    <ListItem>
      <Link to={`${location.pathname}/job`}>
        <ButtonPropped xpadding={1} ypadding={1.5} width={10} primary text={'VIEW JOB'} />
      </Link>
      <Typography variant="body1">DNA Synthesis</Typography>
    </ListItem>
  )
}

export default JobListItem;