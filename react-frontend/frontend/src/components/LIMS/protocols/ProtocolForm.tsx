import React from 'react';
// Styled Components
import styled from 'styled-components';
import { device } from '../../styled-components/responsive';
import { LayoutSpacingMixin, LayoutLocationixin } from '../../styled-components/workspace-layout';
// Formik and Yup
import {
  Formik,
  Form,
  Field } from 'formik';
import { object } from 'yup';
// Material UI
import { TextField } from 'formik-mui';
// Constants
import { protocolValidationSchema } from '../../../constants/validation-schemas';
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
      validationSchema={object(protocolValidationSchema)}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        fetch("post/", {
          method: "POST",
          body: JSON.stringify({
            values: values
          })
        })
        .catch(error => {
          alert(`There was an error during the fetch operation: ${error}`);
        });
      }}
      >
        {({ errors, touched }) => (
        <Form>
          <InnerLayout>
            <CUDButtons />

            <Name>
              <Field 
                type="text"
                component={TextField}
                variant="outlined"
                label="Protocol Name"
                name="protocolName"
                helperText={errors.protocolName && touched.protocolName ? errors.protocolName : " "}/>
            </Name>

            <Description>
              <Field
                multiline
                fullWidth
                rows={4}
                as="textarea"
                className="form-textarea"
                variant="outlined"
                component={TextField}
                label="Protocol Description (optional)"
                name="protocolDescription"
                helperText={errors.protocolDescription && touched.protocolDescription ? errors.protocolDescription : " "}/>
            </Description>

            <Protocols>
              <ProtocolStepForm errors={errors} touched={touched} />
            </Protocols>

          </InnerLayout>
        </Form>
        )}
      </Formik>
    </OuterLayout>
  )
}

export default ProtocolForm;