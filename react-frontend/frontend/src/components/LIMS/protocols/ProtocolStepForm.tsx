import React from 'react';
// Styled Components
import styled from 'styled-components';
import {
  Field,
  ErrorMessage } from 'formik';
// Material UI
import { TextField } from 'formik-mui';
import Divider from '@mui/material/Divider';
// My React Components
import IconButton from '../buttons/IconButton';
import ProtocolChemicalForm from './ProtocolChemicalForm';
// Assets
import microscopeIcon from '../../../assets/images/microscope-icon.svg';
import bookIcon from '../../../assets/images/book-icon.svg';
import addIcon from '../../../assets/images/add-icon.svg';

const Layout = styled.details `
`

const Box = styled.div `
  padding: 1.2rem;
  border-radius: 0.5rem;
  border-color: rgb(222, 222, 223);
  border-width: 1px;
  border-style: solid;

  & > div {
    margin: 1rem 0;
  }
`

const Details = styled.div `
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(30px, max-content));
  grid-template-columns: max-content minmax(30px, 1fr);
  column-gap: 2rem;

  & > img {
    grid-column: 1 / 2;
  }

  & p, div {
    grid-column: 2 / 3;
    align-self: center;
  }
`

const ProtocolStepForm: React.FC<{}> = () => {
  return (
    <Layout open>
      <summary>Step 1</summary>

      <IconButton tooltip={'Add Protocol Step'} src={addIcon} alt={"add icon"} />

      <Box>
        <Details>
          <img src={microscopeIcon} alt={"equipment icon"}/>
          <Field 
              name="equipment"
              type="text"
              label="Equipment"
              component={TextField}
              variant="outlined"/>
          <ErrorMessage name="equipment" />
        </Details>

        <Divider variant="middle" />

        <ProtocolChemicalForm inputoutput="input" />

        <Divider variant="middle" />

        <Details>
          <img src={bookIcon} alt={"instructions icon"}/>
          <Field
            name="protocolStepInstructions"
            as="textarea"
            className="form-textarea"
            label="Protocol Step Instructions"
            component={TextField}
            variant="outlined"
            multiline
            fullWidth
            rows={4}/>
          <ErrorMessage name="protocolStepInstructions" />
        </Details>

        <Divider variant="middle" />

        <ProtocolChemicalForm inputoutput="output"/>
      </Box>
    </Layout>
  )
}

export default ProtocolStepForm;