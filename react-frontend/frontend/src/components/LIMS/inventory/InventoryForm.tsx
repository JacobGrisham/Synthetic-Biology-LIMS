import React from 'react';
// Styled Components
import styled from 'styled-components';
import { LayoutSpacingMixin, LayoutLocationixin } from '../../styled-components/workspace-layout';
import { device } from '../../styled-components/responsive';
// Formik and Yup
import {
  Formik,
  Form,
  Field,
  ErrorMessage } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup';
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
  biochemlName: string;
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
    biochemlName: '',
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
      validationSchema={Yup.object({
        biochemlName: Yup.string()
          .default('')
          .nullable()
          .max(50, 'Must be 50 characters or less')
          .defined(),
        biochemDescription: Yup.string()
          .default('')
          .nullable()
          .max(1000, 'Must be 1000 characters or less')
          .notRequired(),
        barcode: Yup.number()
          .default(0)
          .nullable()
          .min(0, 'Must be a positive number')
          .defined(),
        freezer: Yup.number()
          .default(0)
          .nullable()
          .min(0, 'Must be a positive number')
          .defined(),
        shelf: Yup.number()
          .default(0)
          .nullable()
          .min(0, 'Must be a positive number')
          .defined(),
        box: Yup.number()
          .default(0)
          .nullable()
          .min(0, 'Must be a positive number')
          .defined(),
        wellPlate: Yup.number()
          .default(0)
          .nullable()
          .min(0, 'Must be a positive number')
          .defined(),
        inventoryAmount: Yup.number()
          .default(0)
          .nullable()
          .min(0, 'Must be a positive number')
          .defined(),
        inventoryUnits: Yup.string()
          .default('')
          .nullable()
          .defined(),
        type: Yup.string()
          .default('')
          .nullable()
          .max(50, 'Must be 50 characters or less')
          .defined(),
        internalLink: Yup.string().url()
          .default('')
          .nullable()
          .max(100, 'Must be 100 characters or less')
          .notRequired(),
        externalLink: Yup.string().url()
          .default('')
          .nullable()
          .max(200, 'Must be 200 characters or less')
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
                  name="biochemlName"
                  type="text"
                  label="Chemical or Biological Name"
                  component={TextField}
                  variant="outlined"/>
                <ErrorMessage name="biochemlName" />
              </Name>

              <ChemicalForm amountfor='inventory'/>

              <Description>
                <Field
                  name="biochemDescription"
                  as="textarea"
                  className="form-textarea"
                  label="Chemical or Biological Description"
                  component={TextField}
                  variant="outlined"
                  multiline
                  fullWidth
                  rows={4}/>
                <ErrorMessage name="biochemDescription" />
              </Description>

            <LinksForm />
          </InnerLayout>
        </Form>
      </Formik>
    </OuterLayout>
  )
}

export default InventoryForm;