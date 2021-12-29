import React from 'react';
// Styled Components
import styled from 'styled-components';
import { LayoutSpacingMixin, LayoutLocationixin } from '../../styled-components/workspace-layout';
// Formik and Yup
import {
  Formik,
  Form,
  Field,
  ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Material UI
import { TextField } from 'formik-mui';
// My React Components
import CUDButtons from '../buttons/CUDButtons';
import LinksForm from '../microcomponents/LinksForm';

const OuterLayout = styled.section `
  ${LayoutLocationixin}
`

const InnerLayout = styled.div `
  ${LayoutSpacingMixin}
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, max-content);
  grid-template-areas:
    "CUDButtons"
    "Name"
    "Description"
    "Links";
`

const Name = styled.div `
  grid-area: Name;
`

const Description = styled.div `
  grid-area: Description;
`

interface IProjectFormValues {
  projectName: string;
  projectDescription?: string;
  protocols: string;
  internalLink?: string;
  externalLink?: string;
}

const ProjectForm: React.FC<{}> = () => {
  const initialValues:IProjectFormValues = {
    projectName: '',
    projectDescription: '',
    protocols: '',
    internalLink: '',
    externalLink: '',
  };

  return (
    <OuterLayout>
      <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        projectName: Yup.string()
          .default('')
          .nullable()
          .max(50, 'Must be 50 characters or less')
          .defined(),
        projectDescription: Yup.string()
          .default('')
          .nullable()
          .max(1000, 'Must be 1000 characters or less')
          .notRequired(),
        protocols: Yup.string()
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
                name="projectName"
                type="text"
                label="Project Name"
                component={TextField}
                variant="outlined"/>
              <ErrorMessage name="projectName" />
            </Name>

            <Description>
              <Field
                name="projectDescription"
                as="textarea"
                className="form-textarea"
                label="Project Description"
                component={TextField}
                variant="outlined"
                multiline
                fullWidth
                rows={4}/>
              <ErrorMessage name="projectDescription" />
            </Description>

            <LinksForm />
          </InnerLayout>
        </Form>
      </Formik>
    </OuterLayout>
  )
}

export default ProjectForm;