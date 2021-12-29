import React from 'react';
import { Field } from 'formik';
import MenuItem from '@mui/material/MenuItem';
import { Select } from 'formik-mui';

type IUnitsProps = {
  unitsfor: 'inputAmount' | 'outputAmount' | 'inventory' | 'dispense' | 'product';
}

const Units = (props: IUnitsProps) => {
  return (
    <Field
    component={Select}
    autoWidth
    sx={{ minWidth: 80 }}
    id={`${props.unitsfor}Units`}
    name={`${props.unitsfor}Units`}
    label="Units">
      <MenuItem value={'ml'}>ml</MenuItem>
      <MenuItem value={'g'}>g</MenuItem>
    </Field>
  )
}

// Prevent re-rendering of Searchbox using React.memo when there are no changes
export default Units;