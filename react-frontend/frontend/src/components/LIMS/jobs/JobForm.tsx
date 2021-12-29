import React from 'react';
// Formik and Yup
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// Styled Components
import styled from 'styled-components';
import { LayoutSpacingMixin, LayoutLocationixin } from '../../styled-components/workspace-layout';
// Material UI
import Typography from '@mui/material/Typography';
// My React Components
import ButtonPropped from '../../ButtonPropped';
import ChemicalForm from '../inventory/ChemicalForm'

const OuterLayout = styled.section `
  ${LayoutLocationixin}
`

const InnerLayout = styled.div `
  ${LayoutSpacingMixin}
  grid-template-rows: repeat(3, max-content);
  grid-template-areas: 
    "Buttons"
    "Info"
    "Chemical";
`

const Buttons = styled.div `
  grid-area: Buttons;
  display: grid;
`

const Info = styled.div `
  grid-area: Info;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
`

interface IJobFormValues {
  barcode: number;
  freezer: number;
  shelf: number;
  box: number;
  wellPlate: number;
  inventoryAmount: number;
  inventoryUnits: string;
  type: string;
}

const JobForm: React.FC<{}> = () => {
  const initialValues:IJobFormValues = {
    barcode: 0,
    freezer: 0,
    shelf: 0,
    box: 0,
    wellPlate: 0,
    inventoryAmount: 0,
    inventoryUnits: '',
    type: '',
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
          <Buttons>
              <ButtonPropped type='submit' xpadding={1.2} ypadding={1.5} width={10} primary text={'SAVE AND EXIT'} />
          </Buttons>
          <Info>
            <Typography variant="h6" gutterBottom>Product Name</Typography>
            <Typography variant="h6" gutterBottom>Job ID</Typography>
            <Typography variant="h6">Reagant</Typography>
            <Typography variant="h6">7</Typography>
          </Info>
          <ChemicalForm amountfor='product' />
        </InnerLayout>
      </Form>
    </Formik>
  </OuterLayout>
  )
}

export default JobForm;