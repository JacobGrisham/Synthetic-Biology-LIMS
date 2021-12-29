import React from 'react';
// Styled Components
import styled from 'styled-components';
import { device } from '../../styled-components/responsive';
// Formik
import {
  Field,
  ErrorMessage } from 'formik';
// Material UI
import { TextField } from 'formik-mui';
import Typography from '@mui/material/Typography';
// My React Components
import Units from './Units';
// Assets
import barcodeIcon from '../../../assets/images/barcode-icon.svg';
import freezerIcon from '../../../assets/images/freezer-icon.svg';
import shelfIcon from '../../../assets/images/shelf-icon.svg';
import boxIcon from '../../../assets/images/box-icon.svg';
import wellPlateIcon from '../../../assets/images/well-plate-icon.svg';
import {ReactComponent as Chemical} from '../../../assets/images/inventory-icon.svg';

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

  & > svg {
    align-self: center;
  }

  & > div:last-child {
    margin-top: 0.5rem;
    grid-column: 1 / -1;
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
  amountfor: 'inventory' | 'product',
}

const ChemicalForm = (props: IChemicalFormProps) => {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Layout>
      <Barcode>
          <img src={barcodeIcon} alt={"barcode icon"}/>
          <Field 
            name="barcode"
            type="number"
            label="Barcode"
            component={TextField}
            variant="outlined"/>
          <ErrorMessage name="barcode" />
        </Barcode>

        <Location>
          <Typography variant="h6" gutterBottom>Location</Typography>
          <div>
            <div>
              <img src={freezerIcon} alt={"freezer icon"}/> 
              <Field 
                name="freezer"
                type="number"
                label="Freezer"
                component={TextField}
                variant="outlined"/>
              <ErrorMessage name="freezer" />
            </div>
            <div>
              <img src={shelfIcon} alt={"shelf icon"}/>
              <Field 
                name="shelf"
                type="number"
                label="Shelf"
                component={TextField}
                variant="outlined"/>
              <ErrorMessage name="shelf" />
            </div>
            <div>
              <img src={boxIcon} alt={"box icon"}/>
              <Field 
                name="box"
                type="text"
                label="Box"
                component={TextField}
                variant="outlined"/>
              <ErrorMessage name="box" />
            </div>
            <div>
              <img src={wellPlateIcon} alt={"well plate icon"}/>
              <Field 
                name="wellPlate"
                type="text"
                label="Well Plate"
                component={TextField}
                variant="outlined"/>
              <ErrorMessage name="wellPlate" />
            </div>
          </div>
          <Typography variant="body1">F20.S4.B25.W8</Typography>
        </Location>

        <Amount>
          <Typography variant="h6" gutterBottom>Amount</Typography>
          <Chemical />
          <AmountInputs>
            <div>
              <Field 
                name={`${props.amountfor}Amount`}
                type="number"
                label={`${capitalizeFirstLetter(props.amountfor)} Amount`}
                component={TextField}
                variant="outlined"/>
              <ErrorMessage name={`${props.amountfor}Amount`} />
              <Units unitsfor='inventory'/>
            </div>
            <div>
              <Field 
                name="type"
                type="text"
                label="Type"
                component={TextField}
                variant="outlined"/>
              <ErrorMessage name="type" />
            </div>
          </AmountInputs>
          <div>
            <Typography variant="h6" gutterBottom>Current Total</Typography>
            <Typography variant="body1">200mg</Typography>
          </div>
        </Amount>
    </Layout>
  )
}

export default ChemicalForm;

