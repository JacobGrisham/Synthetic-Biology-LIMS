import React from 'react';
// Formik and Yup
import { Formik, Form } from 'formik';
import { object } from 'yup';
// Styled Components
import styled from 'styled-components';
import { LayoutSpacingMixin, LayoutLocationixin } from '../../styled-components/workspace-layout';
// Material UI
import Typography from '@mui/material/Typography';
// Constants
import { chemicalValidationSchema } from '../../../constants/validation-schemas';
// My React Components
import ButtonPropped from '../../base/ButtonPropped';
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
  barcode: number | '';
  freezer: number | '';
  shelf: number | '';
  box: number | '';
  wellPlate: number | '';
  inventoryAmount: number | '';
  inventoryUnits: string;
  type: string;
}

const JobForm: React.FC<{}> = () => {
  const initialValues:IJobFormValues = {
    barcode: '',
    freezer: '',
    shelf: '',
    box: '',
    wellPlate: '',
    inventoryAmount: '',
    inventoryUnits: '',
    type: '',
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
      {({ values,
          errors,
          touched,
          handleChange,
          handleBlur, }) => (
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

          <ChemicalForm 
            amountfor='product'
            errors={errors}
            touched={touched}
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}/>

        </InnerLayout>
      </Form>
      )}
    </Formik>
  </OuterLayout>
  )
}

export default JobForm;