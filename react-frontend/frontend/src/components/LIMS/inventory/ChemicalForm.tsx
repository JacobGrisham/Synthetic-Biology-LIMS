import React from 'react';
// Styled Components
import styled from 'styled-components';
import { device } from '../../styled-components/responsive';
// Formik
import { Field } from 'formik';
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
  amountfor: 'inventory' | 'product';
  errors: any;
  touched: any;
}

const ChemicalForm = ({amountfor, errors, touched}: IChemicalFormProps) => {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Layout>
      <Barcode>
          <img src={barcodeIcon} alt={"barcode icon"}/>
          <Field 
            type="number"
            variant="outlined"
            component={TextField}
            label="Barcode"
            name="barcode"
            helperText={errors.barcode && touched.barcode ? errors.barcode : " "}/>
        </Barcode>

        <Location>
          <Typography variant="h6" gutterBottom>Location</Typography>
          <div>
            <div>
              <img src={freezerIcon} alt={"freezer icon"}/> 
              <Field 
                type="number"
                variant="outlined"
                component={TextField}
                label="Freezer"
                name="freezer"
                helperText={errors.freezer && touched.freezer ? errors.freezer : " "}/>
            </div>
            <div>
              <img src={shelfIcon} alt={"shelf icon"}/>
              <Field 
                type="number"
                variant="outlined"
                component={TextField}
                label="Shelf"
                name="shelf"
                helperText={errors.shelf && touched.shelf ? errors.shelf : " "}/>
            </div>
            <div>
              <img src={boxIcon} alt={"box icon"}/>
              <Field 
                type="text"
                variant="outlined"
                component={TextField}
                label="Box"
                name="box"
                helperText={errors.box && touched.box ? errors.box : " "}/>
            </div>
            <div>
              <img src={wellPlateIcon} alt={"well plate icon"}/>
              <Field 
                type="text"
                variant="outlined"
                component={TextField}
                label="Well Plate"
                name="wellPlate"
                helperText={errors.wellPlate && touched.wellPlate ? errors.wellPlate : " "}/>
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
                type="number"
                variant="outlined"
                component={TextField}
                label={`${capitalizeFirstLetter(amountfor)} Amount`}
                name={`${amountfor}Amount`}/>
              <Units unitsfor='inventory'/>
            </div>
            <div>
              <Field 
                type="text"
                variant="outlined"
                component={TextField}
                label="Type"
                name="type"
                helperText={errors.type && touched.type ? errors.type : " "}/>
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

