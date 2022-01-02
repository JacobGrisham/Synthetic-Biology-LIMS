import * as Yup from 'yup';

export const chemicalValidationSchema = {
  biochemName: Yup.string()
    .nullable()
    .max(100, 'Must be 100 characters or less')
    .defined('Chemical or Biological Name is required'),
  biochemDescription: Yup.string()
    .nullable()
    .max(1000, 'Must be 1000 characters or less')
    .notRequired(),
  barcode: Yup.number()
    .nullable()
    .min(0, 'Barcode must be a positive integer')
    .defined('Barcode is required'),
  freezer: Yup.number()
    .nullable()
    .min(0, 'Freezer location must be a positive integer')
    .defined('Freezer location is required'),
  shelf: Yup.number()
    .nullable()
    .min(0, 'Shelf location must be a positive integer')
    .defined('Shelf location is required'),
  box: Yup.number()
    .nullable()
    .min(0, 'Box location must be a positive integer')
    .defined('Box location is required'),
  wellPlate: Yup.number()
    .nullable()
    .min(0, 'Well Plate must be a positive integer')
    .defined('Well Plate location is required'),
  inventoryAmount: Yup.number()
    .nullable()
    .min(0, 'Inventory amount must be a positive number')
    .defined('Inventory amount is required'),
  inventoryUnits: Yup.string()
    .nullable()
    .defined('Inventory Units are required'),
  type: Yup.string()
    .nullable()
    .max(50, 'Chemical or Biological Type must be 50 characters or less')
    .defined('Chemical or Biological Type is required'),
  internalLink: Yup.string()
    .nullable()
    .max(100, 'Internal Link must be 100 characters or less')
    .notRequired(),
  externalLink: Yup.string().url()
    .nullable()
    .max(200, 'External Link must be 200 characters or less')
    .notRequired(),
}

export const projectValidationSchema = {
  projectName: Yup.string()
    .default('')
    .nullable()
    .max(50, 'Project Name must be 50 characters or less')
    .defined('Project Name is required'),
  projectDescription: Yup.string()
    .default('')
    .nullable()
    .max(1000, 'Must be 1000 characters or less')
    .notRequired(),
  protocols: Yup.string()
    .default('')
    .nullable()
    .max(50, 'Protocol must be 50 characters or less')
    .defined('Protocol is required'),
  internalLink: Yup.string()
    .default('')
    .nullable()
    .max(100, 'Internal Link must be 100 characters or less')
    .notRequired(),
  externalLink: Yup.string().url()
    .default('')
    .nullable()
    .max(200, 'External Link must be 200 characters or less')
    .notRequired(),
}

export const protocolValidationSchema = {
  protocolName: Yup.string()
    .default('')
    .nullable()
    .max(50, 'Protocol Name must be 50 characters or less')
    .defined('Protocol Name is required'),
  protocolDescription: Yup.string()
    .default('')
    .nullable()
    .max(1000, 'Protocol Description must be 1000 characters or less')
    .notRequired(),
  equipment: Yup.string()
    .default('')
    .nullable()
    .max(50, 'Equipment Name must be 50 characters or less')
    .notRequired(),
  protocolStepInstructions: Yup.string()
    .default('')
    .nullable()
    .max(1000, 'Protocol Step Instructions must be 1000 characters or less')
    .defined('Protocol Step is required'),
  inputAmount: Yup.number()
    .default(0)
    .nullable()
    .min(0, 'Input Amount must be a positive number')
    .notRequired(),
  inputUnits: Yup.string()
    .default('')
    .nullable()
    .notRequired(),
  inputName: Yup.string()
    .default('')
    .nullable()
    .max(50, 'Input Name must be 50 characters or less')
    .notRequired(),
  inputType: Yup.string()
    .default('')
    .nullable()
    .max(50, 'Input Type must be 50 characters or less')
    .notRequired(),
  outputAmount: Yup.number()
    .default(0)
    .nullable()
    .min(0, 'Output Amount must be a positive number')
    .notRequired(),
  outputUnits: Yup.string()
    .default('')
    .nullable()
    .notRequired(),
  outputName: Yup.string()
    .default('')
    .nullable()
    .max(50, 'Output Name must be 50 characters or less')
    .notRequired(),
  outputType: Yup.string()
    .default('')
    .nullable()
    .max(50, 'Output Type must be 50 characters or less')
    .notRequired(),
}