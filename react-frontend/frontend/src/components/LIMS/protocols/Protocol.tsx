import React from 'react';
import styled from 'styled-components';
import ProtocolStep from './ProtocolStep';
import ButtonOutline from '../buttons/ButtonOutline';
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
  grid-template-rows: repeat(2, min-content) minmax(min-content, 1fr) min-content;
  row-gap: 2rem;
  column-gap: 1rem;
  grid-template-areas: 
    "Name Name Metadata"
    "Description Description History"
    "Protocols Protocols History"
    "Links Links History";
  
  & div h6 {
    font-weight: 300;
  }
`

const Name = styled.div `
  grid-area: Name;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, min-content);

  & > button {
    grid-row: 1 / -1;
    grid-column: 2 / 3;
    place-self: center;
  }
`

const Description = styled.div `
  grid-area: Description;
`

const Protocols = styled.div `
  grid-area: Protocols;
`

const History = styled.div `
  grid-area: History;
`

const Protocol = () => {
  return (
    <Layout>
      <Name>
        <Typography variant="h6" gutterBottom>Name</Typography>
        <Typography variant="h6" gutterBottom>DNA Synthesis</Typography>
        <ButtonOutline text={'Edit'} />
      </Name>

      <Description>
        <Typography variant="h6" gutterBottom>Description</Typography>
        <Typography variant="body1">DNA polymerase enzyme that transcribes single-stranded RNA into DNA. This enzyme is able to synthesize a double helix DNA once the RNA has been reverse transcribed in a first step into a single-strand DNA. RNA viruses, such as retroviruses, use the enzyme to reverse-transcribe their RNA genomes into DNA, which is then integrated into the host genome and replicated along with it. During the replication of some DNA viruses, such as the hepadnaviruses or pararetroviruses, also carrying a RT, the DNA genome is transcribed to RNA that serves as a template to make new viral DNA strands.</Typography>
      </Description>

      <Protocols>
        <ProtocolStep />
      </Protocols>

      <Links />

      <Metadata />

      <History>
        <Typography variant="h6" gutterBottom>History</Typography>
        <HistoryList />
      </History>

    </Layout>
  )
}

export default Protocol;