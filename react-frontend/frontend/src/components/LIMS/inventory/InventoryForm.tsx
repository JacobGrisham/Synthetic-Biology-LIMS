import React from 'react';
// Styled Components
import styled from 'styled-components';
import { LayoutSpacingMixin, LayoutLocationixin } from '../../styled-components/workspace-layout';
import { device } from '../../styled-components/responsive';
// Formik and Yup
import {
  Formik,
  Form,
  Field } from 'formik';
import { TextField } from 'formik-mui';
import { object } from 'yup';
// Constants
import { chemicalValidationSchema } from '../../../constants/validation-schemas';
// My React Components
import CUDButtons from '../buttons/CUDButtons';
import ChemicalForm from './ChemicalForm'
import LinksForm from '../microcomponents/LinksForm';

const OuterLayout = styled.section `
  ${LayoutLocationixin}
`

const InnerLayout = styled.div `
  ${LayoutSpacingMixin}
  grid-template-columns: minmax(10px, 1fr);
  grid-template-rows: repeat(5, max-content);
  grid-template-areas:
    "CUDButtons"
    "Name"
    "Chemical"
    "Description"
    "Links";

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, max-content);
    grid-template-areas:
      ". CUDButtons"
      "Name . "
      "Chemical Chemical"
      "Description Description"
      "Links Links";
  }
`

const Name = styled.div `
  grid-area: Name;
  display: grid;
`

const Description = styled.div `
  grid-area: Description;
`

interface IInventoryFormValues {
  biochemName: string;
  biochemDescription?: string;
  barcode: number;
  freezer: number;
  shelf: number;
  box: number;
  wellPlate: number;
  inventoryAmount: number;
  inventoryUnits: string;
  type: string;
  internalLink?: string;
  externalLink?: string;
}

const InventoryForm: React.FC<{}> = () => {
  const initialValues:IInventoryFormValues = {
    biochemName: '',
    biochemDescription: '',
    barcode: 0,
    freezer: 0,
    shelf: 0,
    box: 0,
    wellPlate: 0,
    inventoryAmount: 0,
    inventoryUnits: '',
    type: '',
    internalLink: '',
    externalLink: '',
  };

  return (
    <OuterLayout>
      <Formik
      initialValues={initialValues}
      validationSchema={object(chemicalValidationSchema)}
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
                  label="Chemical or Biological Name"
                  name="biochemName"
                  helperText={errors.biochemName && touched.biochemName ? errors.biochemName : " "}/>
              </Name>

              <ChemicalForm amountfor='inventory' errors={errors} touched={touched}/>

              <Description>
                <Field
                  multiline
                  fullWidth
                  rows={4}
                  as="textarea"
                  className="form-textarea"
                  variant="outlined"
                  component={TextField}
                  label="Chemical or Biological Description (optional)"
                  name="biochemDescription"
                  helperText={errors.biochemDescription && touched.biochemDescription ? errors.biochemDescription : " "}/>
              </Description>

            <LinksForm errors={errors} touched={touched}/>

          </InnerLayout>
        </Form>
        )}
      </Formik>
    </OuterLayout>
  )
}

export default InventoryForm;