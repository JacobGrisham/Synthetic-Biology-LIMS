import React from 'react';
// Styled Components
import styled from 'styled-components';
import { device } from '../../styled-components/responsive';
import { LayoutSpacingMixin, LayoutLocationixin } from '../../styled-components/workspace-layout';
// Formik and Yup
import {
  Formik,
  Form,
  Field,
  ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Material UI
import { TextField } from 'formik-mui';
// My React Components
import CUDButtons from '../buttons/CUDButtons';
import ProtocolStepForm from './ProtocolStepForm';

const OuterLayout = styled.section `
  ${LayoutLocationixin}
`

const InnerLayout = styled.div `
  ${LayoutSpacingMixin}
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    ". CUDButtons"
    "Name Name"
    "Description Description"
    "Protocols Protocols"
    "Links Links";

  @media ${device.laptop} {
    grid-template-rows: repeat(4, min-content) repeat(2, 1fr);
    grid-template-areas: 
      "Name . . ."
      "Description Description Description Description"
      "Protocols Protocols Protocols ."
      "Links Links Links Links";
  }
`

const Name = styled.div `
  grid-area: Name;
  display: grid;
`

const Description = styled.div `
  grid-area: Description;
`

const Protocols = styled.div `
  grid-area: Protocols;
`

interface IProtocolFormValues {
  protocolName: string;
  protocolDescription?: string;
  equipment?: string;
  protocolStepInstructions: string;
  inputAmount?: number;
  inputUnits?: string;
  inputName?: string;
  inputType?: string;
  outputAmount?: number;
  outputUnits?: string;
  outputName?: string;
  outputType?: string;
}

const ProtocolForm: React.FC<{}> = () => {
  const initialValues:IProtocolFormValues = {
    protocolName: '',
    protocolDescription: '',
    equipment: '',
    protocolStepInstructions: '',
    inputAmount: 0,
    inputUnits: '',
    inputName: '',
    inputType: '',
    outputAmount: 0,
    outputUnits: '',
    outputName: '',
    outputType: '',
  };

  return (
    <OuterLayout>
      <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        protocolName: Yup.string()
          .default('')
          .nullable()
          .max(50, 'Must be 50 characters or less')
          .defined(),
        protocolDescription: Yup.string()
          .default('')
          .nullable()
          .max(1000, 'Must be 1000 characters or less')
          .notRequired(),
        equipment: Yup.string()
          .default('')
          .nullable()
          .max(50, 'Must be 50 characters or less')
          .notRequired(),
        protocolStepInstructions: Yup.string()
          .default('')
          .nullable()
          .max(1000, 'Must be 1000 characters or less')
          .defined(),
        inputAmount: Yup.number()
          .default(0)
          .nullable()
          .min(0, 'Must be a positive number')
          .notRequired(),
        inputUnits: Yup.string()
          .default('')
          .nullable()
          .notRequired(),
        inputName: Yup.string()
          .default('')
          .nullable()
          .max(50, 'Must be 50 characters or less')
          .notRequired(),
        inputType: Yup.string()
          .default('')
          .nullable()
          .max(50, 'Must be 50 characters or less')
          .notRequired(),
        outputAmount: Yup.number()
          .default(0)
          .nullable()
          .min(0, 'Must be a positive number')
          .notRequired(),
        outputUnits: Yup.string()
          .default('')
          .nullable()
          .notRequired(),
        outputName: Yup.string()
          .default('')
          .nullable()
          .max(50, 'Must be 50 characters or less')
          .notRequired(),
        outputType: Yup.string()
          .default('')
          .nullable()
          .max(50, 'Must be 50 characters or less')
          .notRequired(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      >
        <Form>
          <InnerLayout>
            <CUDButtons />

            <Name>
              <Field 
                name="protocolName"
                type="text"
                label="Protocol Name"
                component={TextField}
                variant="outlined"/>
              <ErrorMessage name="protocolName" />
            </Name>

            <Description>
              <Field
                name="protocolDescription"
                as="textarea"
                className="form-textarea"
                label="Protocol Description"
                component={TextField}
                variant="outlined"
                multiline
                fullWidth
                rows={4}/>
              <ErrorMessage name="protocolDescription" />
            </Description>

            <Protocols>
              <ProtocolStepForm />
            </Protocols>
            </InnerLayout>
        </Form>
      </Formik>
    </OuterLayout>
  )
}

export default ProtocolForm;