import React from 'react';
import styled from 'styled-components';
import CUDButtons from './microcomponents/CUDButtons';
import IconButton from './IconButton';
import ChemicalForm from './ChemicalForm'
import addIcon from '../../assets/images/add-icon.svg';

const Layout = styled.form `
  overflow-y: scroll;
  height: calc(100vh - 1rem);
  display: grid;
  padding: 1rem 2rem 0 4rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, min-content) repeat(2, 1fr);
  row-gap: 1rem;
  grid-template-areas: 
    "Name . Buttons"
    "Barcode Barcode ."
    "Location Location Location"
    "Amount Amount Amount"
    "Description Description Description"
    "Links Links Links";

  & input, textarea, fieldset {
    padding: 1.2rem;
    border-radius: 0.5rem;
    border-color: rgb(222, 222, 223);
    border-width: 1px;
    border-style: solid;
    background-color: white;
  }

  & legend {
    padding: 1rem 1rem 0 1rem;
    font-size: 1.57em;
  }
`

const Name = styled.fieldset `
  grid-area: Name;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, min-content);
`

const Description = styled.fieldset `
  grid-area: Description;

  & > textarea {
    height: 100%;
    width: 100%;
  }
`

const Links = styled.fieldset `
  grid-area: Links;
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: repeat(2, max-content);
  gap: 0.5rem 0.5rem;

  & > legend {
    grid-column: 1 / -1;
  }

  & > ul {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  & > button {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }

  & li {
    list-style-type: none;

    & > input {
      width: 100%;
    }
  }
`

const InventoryForm = () => {
  return (
    <Layout action="/buy" method="post">
        <CUDButtons />
        <Name>
          <legend>Name</legend>
          <input name='chemical' type='text' placeholder='Reverse Transcriptase' />
        </Name>

        <ChemicalForm />

        <Description>
          <legend>Description</legend>
          <textarea name='description' placeholder='DNA polymerase enzyme that transcribes single-stranded RNA into DNA. This enzyme is able to synthesize a double helix DNA once the RNA has been reverse transcribed in a first step into a single-strand DNA. RNA viruses, such as retroviruses, use the enzyme to reverse-transcribe their RNA genomes into DNA, which is then integrated into the host genome and replicated along with it. During the replication of some DNA viruses, such as the hepadnaviruses or pararetroviruses, also carrying a RT, the DNA genome is transcribed to RNA that serves as a template to make new viral DNA strands.'></textarea>
        </Description>

        <Links>
          <legend>Links</legend>
          <IconButton src={addIcon} alt={"add icon"} />
          <ul>
            <li>
              <input name='link' type='text' placeholder='https://www.sciencedirect.com/topics/neuroscience/reverse-transcriptase' />
            </li>
          </ul>
        </Links>
    </Layout>
  )
}

export default InventoryForm;