import React from 'react';
// Styled Components
import styled from 'styled-components';
import { LayoutSpacingMixin, LayoutLocationixin } from '../../styled-components/workspace-layout';
// Formik and Yup
import {
  Formik,
  Form,
  Field } from 'formik';
  import { object } from 'yup';
// Material UI
import { TextField } from 'formik-mui';
// Constants
import { projectValidationSchema } from '../../../constants/validation-schemas';
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
      validationSchema={object(projectValidationSchema)}
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
        {({ errors, touched }) => (
        <Form>
          <InnerLayout>
            <CUDButtons />

            <Name>
              <Field 
                type="text"
                variant="outlined"
                component={TextField}
                label="Project Name"
                name="projectName"
                helperText={errors.projectName && touched.projectName ? errors.projectName : " "}/>
            </Name>

            <Description>
              <Field
                multiline
                fullWidth
                rows={4}
                as="textarea"
                variant="outlined"
                component={TextField}
                className="form-textarea"
                label="Project Description (optional)"
                name="projectDescription"
                helperText={errors.projectDescription && touched.projectDescription ? errors.projectDescription : " "}/>
            </Description>

            <LinksForm errors={errors} touched={touched}/>

          </InnerLayout>
        </Form>
        )}
      </Formik>
    </OuterLayout>
  )
}

export default ProjectForm;