import React, { useState } from 'react';
// Styled Components
import styled from 'styled-components';
import { device } from '../../styled-components/responsive';
// Formik
import { Field } from 'formik';
// Material UI
import { TextField as FormikMUITextField } from 'formik-mui';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// My React Components
import Units from './Units';
// Assets
import barcodeIcon from '../../../assets/images/barcode-icon.svg';
import freezerIcon from '../../../assets/images/freezer-icon.svg';
import shelfIcon from '../../../assets/images/shelf-icon.svg';
import boxIcon from '../../../assets/images/box-icon.svg';
import wellPlateIcon from '../../../assets/images/well-plate-icon.svg';
import {ReactComponent as Chemical} from '../../../assets/images/inventory-icon.svg';
// Utilities
import { capitalizeFirstLetter } from '../../../utils/change-letter-case';

const Layout = styled.div `
  grid-area: Chemical;
  display: grid;
  grid-template-columns: repeat(2, minmax(10px, 1fr));
  grid-template-rows: repeat(3, max-content);
  row-gap: 2rem;
  grid-template-areas: 
    "Barcode ."
    "Location Location"
    "Amount Amount";
  
  & div h6 {
    font-weight: 300;
  }
`

const Barcode = styled.div `
  grid-area: Barcode;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 2rem;

  & > img {
    align-self: center;
  }
`

const Location = styled.div `
  grid-area: Location;

  & > div {
    display: flex;
    flex-wrap: wrap;
  }

  & > div > div {
    margin-bottom: 0.5rem;
  }

  & > p {
    grid-column: 1 / -1;
    margin-bottom: 1rem;
  }
`

const Amount = styled.div `
  grid-area: Amount;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: repeat(3, max-content);
  column-gap: 2rem;

  & > h6 {
    grid-column: 1 / -1;
  }

  & > svg, div {
    align-self: center;
  }
`

const AmountInputs = styled.div `
  display: grid;
  row-gap: 1rem;

  @media ${device.laptop} {

    & div {
      grid-row: 1 / -1;
    }

    & + div {
      grid-column: 1 / 2;
    }

    & div:last-child {
      grid-column: 2 / 3;
    }
  }
`

type IChemicalFormProps = {
  amountfor: 'inventory' | 'product';
  values: any;
  errors: any;
  touched: any;
  handleChange: any;
  handleBlur: any;
}

const ChemicalForm = ({amountfor, values, errors, touched, handleChange, handleBlur}: IChemicalFormProps) => {
  var proppedAmount = `${amountfor}Amount`

  return (
    <Layout>
      <Barcode>
          <img src={barcodeIcon} alt={"barcode icon"}/>
          <Field 
            type="number"
            variant="outlined"
            component={FormikMUITextField}
            label="Barcode"
            name="barcode"
            helperText={errors.barcode && touched.barcode ? errors.barcode : " "}/>
        </Barcode>

        <Location>
          <Typography variant="h6" gutterBottom>Location</Typography>
          <Typography variant="body1">
            Location ID Number:{' '}
            {values.freezer && `F${values.freezer}.`}
            {values.shelf && `S${values.shelf}.`}
            {values.box && `B${values.box}.`}
            {values.wellPlate && `W${values.wellPlate}.`}
          </Typography>
          <div>
            <div>
              <img src={freezerIcon} alt={"freezer icon"}/> 
              <TextField 
                type="number"
                label="Freezer (optional)"
                name="freezer"
                onBlur={handleBlur}
                value={values.freezer}
                onChange={handleChange}
                error={errors.freezer ? true : false}
                helperText={errors.freezer && touched.freezer ? errors.freezer : " "}/>
            </div>
            <div>
              <img src={shelfIcon} alt={"shelf icon"}/>
              <TextField 
                type="number"
                label="Shelf (optional)"
                name="shelf"
                onBlur={handleBlur}
                value={values.shelf}
                onChange={handleChange}
                error={errors.shelf ? true : false}
                helperText={errors.shelf && touched.shelf ? errors.shelf : " "}/>
            </div>
            <div>
              <img src={boxIcon} alt={"box icon"}/>
              <TextField 
                type="number"
                label="Box (optional)"
                name="box"
                onBlur={handleBlur}
                value={values.box}
                onChange={handleChange}
                error={errors.box ? true : false}
                helperText={errors.box && touched.box ? errors.box : " "}/>
            </div>
            <div>
              <img src={wellPlateIcon} alt={"well plate icon"}/>
              <TextField 
                type="number"
                label="Well Plate (optional)"
                name="wellPlate"
                onBlur={handleBlur}
                value={values.wellPlate}
                onChange={handleChange}
                error={errors.wellPlate ? true : false}
                helperText={errors.wellPlate && touched.wellPlate ? errors.wellPlate : " "}/>
            </div>
          </div>
        </Location>

        <Amount>
          <Typography variant="h6" gutterBottom>Amount</Typography>
          <Chemical />
          <AmountInputs>
            <div>
              <Field 
                type="number"
                variant="outlined"
                component={FormikMUITextField}
                label={`${capitalizeFirstLetter(amountfor)} Amount`}
                name={proppedAmount}
                helperText={errors.proppedAmount && touched.proppedAmount ? errors.proppedAmount : " "}/>
              <Units unitsfor='inventory'/>
            </div>
            <div>
              <Field 
                type="text"
                variant="outlined"
                component={FormikMUITextField}
                label="Type"
                name="type"
                helperText={errors.type && touched.type ? errors.type : " "}/>
            </div>
          </AmountInputs>
        </Amount>
    </Layout>
  )
}

export default ChemicalForm;

