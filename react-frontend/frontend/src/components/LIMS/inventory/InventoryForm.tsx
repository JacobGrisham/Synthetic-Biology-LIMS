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
import { POST_INVENTORY_API_URL } from '../../../constants/API-urls';
// My React Components
import CUDButtons from '../buttons/CUDButtons';
import ChemicalForm from './ChemicalForm'
import LinksForm from '../microcomponents/LinksForm';
// Assets
import {ReactComponent as Chemical} from '../../../assets/images/inventory-full-icon.svg';

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
    "ChemicalContinued"
    "Description"
    "Links";

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, max-content);
    grid-template-areas:
      ". CUDButtons"
      "Name . "
      "Chemical Chemical"
      "ChemicalContinued ChemicalContinued"
      "Description Description"
      "Links Links";
  }
`

const Name = styled.div `
  grid-area: Name;
  display: grid;
`

const ChemicalFormContinued = styled.div `
  grid-area: ChemicalContinued;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 2rem;
  align-items: center;
  transform: translateY(-1rem);
`

const Description = styled.div `
  grid-area: Description;
`

interface IInventoryFormValues {
  biochemName: string;
  biochemDescription?: string;
  barcode: number | '';
  freezer: number | '';
  shelf: number | '';
  box: number | '';
  wellPlate: number | '';
  inventoryAmount: number | '';
  inventoryUnits: string;
  type: string;
  stockpileGoal: number | '';
  internalLink?: string;
  externalLink?: string;
}

// add props for current data if editing, otherwise keep it like this for adding
const InventoryForm: React.FC<{}> = () => {
  const initialValues:IInventoryFormValues = {
    biochemName: '',
    biochemDescription: '',
    barcode: '',
    freezer: '',
    shelf: '',
    box: '',
    wellPlate: '',
    inventoryAmount: '',
    inventoryUnits: '',
    type: '',
    stockpileGoal: '',
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
        fetch(POST_INVENTORY_API_URL, {
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
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
        }) => (
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

              <ChemicalForm 
                amountfor='inventory'
                errors={errors}
                touched={touched}
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />

              <ChemicalFormContinued>
                <Chemical />
                <Field
                  type="number"
                  component={TextField}
                  variant="outlined"
                  label="Stockpile Goal"
                  name="stockpileGoal"
                  helperText={errors.stockpileGoal && touched.stockpileGoal ? errors.stockpileGoal : " "}/>
              </ChemicalFormContinued>

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