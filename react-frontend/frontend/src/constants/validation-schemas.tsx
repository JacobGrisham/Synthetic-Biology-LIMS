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
    .positive('Barcode must be positive')
    .integer('Barcode must be an integer')
    .defined('Barcode is required'),
  freezer: Yup.number()
    .nullable()
    .positive('Freezer location must be positive')
    .integer('Freezer location must be an integer')
    .notRequired(),
  shelf: Yup.number()
    .nullable()
    .positive('Shelf location must be positive')
    .integer('Shelf location must be an integer')
    .notRequired(),
  box: Yup.number()
    .nullable()
    .positive('Box location must be positive')
    .integer('Box location must be an integer')
    .notRequired(),
  wellPlate: Yup.number()
    .nullable()
    .positive('Well Plate must be positive')
    .integer('Well Plate must be an integer')
    .notRequired(),
  inventoryAmount: Yup.number()
    .nullable()
    .positive('Inventory amount must be a positive number')
    .defined('Inventory amount is required'),
  inventoryUnits: Yup.string()
    .nullable()
    .defined('Inventory Units are required'),
  type: Yup.string()
    .nullable()
    .max(50, 'Chemical or Biological Type must be 50 characters or less')
    .defined('Chemical or Biological Type is required'),
  stockpileGoal: Yup.number()
    .nullable()
    .positive('Stockpile goal must be a positive number')
    .defined('Stockpile goal is required'),
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
    .nullable()
    .max(50, 'Project Name must be 50 characters or less')
    .defined('Project Name is required'),
  projectDescription: Yup.string()
    .nullable()
    .max(1000, 'Must be 1000 characters or less')
    .notRequired(),
  protocols: Yup.string()
    .nullable()
    .max(50, 'Protocol must be 50 characters or less')
    .defined('Protocol is required'),
  internalLink: Yup.string()
    .nullable()
    .max(100, 'Internal Link must be 100 characters or less')
    .notRequired(),
  externalLink: Yup.string().url()
    .nullable()
    .max(200, 'External Link must be 200 characters or less')
    .notRequired(),
}

export const protocolValidationSchema = {
  protocolName: Yup.string()
    .nullable()
    .max(50, 'Protocol Name must be 50 characters or less')
    .defined('Protocol Name is required'),
  protocolDescription: Yup.string()
    .nullable()
    .max(1000, 'Protocol Description must be 1000 characters or less')
    .notRequired(),
  equipment: Yup.string()
    .nullable()
    .max(50, 'Equipment Name must be 50 characters or less')
    .notRequired(),
  protocolStepInstructions: Yup.string()
    .nullable()
    .max(1000, 'Protocol Step Instructions must be 1000 characters or less')
    .defined('Protocol Step is required'),
  inputAmount: Yup.number()
    .nullable()
    .positive('Input Amount must be a positive number')
    .notRequired(),
  inputUnits: Yup.string()
    .nullable()
    .notRequired(),
  inputName: Yup.string()
    .nullable()
    .max(50, 'Input Name must be 50 characters or less')
    .notRequired(),
  inputType: Yup.string()
    .nullable()
    .max(50, 'Input Type must be 50 characters or less')
    .notRequired(),
  outputAmount: Yup.number()
    .nullable()
    .positive('Output Amount must be a positive number')
    .notRequired(),
  outputUnits: Yup.string()
    .nullable()
    .notRequired(),
  outputName: Yup.string()
    .nullable()
    .max(50, 'Output Name must be 50 characters or less')
    .notRequired(),
  outputType: Yup.string()
    .nullable()
    .max(50, 'Output Type must be 50 characters or less')
    .notRequired(),
}