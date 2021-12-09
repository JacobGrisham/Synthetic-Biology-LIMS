import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import styled from 'styled-components';
import ButtonOutline from '../buttons/ButtonOutline';
import JobListItem from '../jobs/JobListItem';
import Table from '../jobs/Table';
import Metadata from '../microcomponents/Metadata';
import HistoryList from '../microcomponents/HistoryList';
import Links from '../microcomponents/Links';
import Typography from '@mui/material/Typography';

const Layout = styled.section `
  overflow-y: scroll;
  height: calc(100vh - 1rem);
  display: grid;
  padding: 1rem 2rem 0 4rem;
  grid-template-columns: repeat(2, minmax(10px, 1fr));
  grid-template-rows: repeat(4, min-content) repeat(2, minmax(min-content, 1fr));
  row-gap: 2rem;
  column-gap: 1rem;
  grid-template-areas: 
    "Name Name Metadata"
    "Description Description History"
    "Jobs Jobs History"
    "ProtocolStatus ProtocolStatus History"
    "Links Links History";
  
  & div h6 {
    font-weight: 300;
  }
`

const Name = styled.div `
  grid-area: Name;
  display: grid;
  grid-template-columns: repeat(3, minmax(10px, 1fr));
  grid-template-rows: repeat(2, min-content);

  & > a {
    grid-row: 1 / -1;
    grid-column: 3 / 4;
    place-self: center;
  }
`

const Description = styled.div `
  grid-area: Description;
`

const Jobs = styled.div `
  grid-area: Jobs;
`

const ProtocolStatus = styled.div `
  grid-area: ProtocolStatus;
`

const History = styled.div `
  grid-area: History;
`

const JobStatus = () => {

  return (
    <Layout>
      <Name>
        <Typography variant="h6" gutterBottom>Name</Typography>
        <Typography variant="h6" gutterBottom>BioFuel</Typography>
        <Typography variant="h6" gutterBottom>Status</Typography>
        <Typography variant="body1">In Progress</Typography>
        <RouterLink to='/Edit'>
          <ButtonOutline text={'EDIT'} />
        </RouterLink>
      </Name>

      <Description>
        <Typography variant="h6" gutterBottom>Description</Typography>
        <Typography variant="body1">DNA polymerase enzyme that transcribes single-stranded RNA into DNA. This enzyme is able to synthesize a double helix DNA once the RNA has been reverse transcribed in a first step into a single-strand DNA. RNA viruses, such as retroviruses, use the enzyme to reverse-transcribe their RNA genomes into DNA, which is then integrated into the host genome and replicated along with it. During the replication of some DNA viruses, such as the hepadnaviruses or pararetroviruses, also carrying a RT, the DNA genome is transcribed to RNA that serves as a template to make new viral DNA strands.</Typography>
      </Description>

      <Jobs>
        <Typography variant="h6" gutterBottom>View and Start Jobs</Typography>
        <ul>
          <JobListItem />
          <JobListItem />
        </ul>
      </Jobs>

      <ProtocolStatus>
        <Typography variant="h6" gutterBottom>Protocol Status</Typography>
        <Table />
      </ProtocolStatus>

      <Links />

      <Metadata />

      <History>
        <Typography variant="h6" gutterBottom>History</Typography>
        <HistoryList />
      </History>
    </Layout>
  )
}

export default JobStatus;