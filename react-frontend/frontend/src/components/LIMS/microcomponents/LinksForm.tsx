import React from 'react';
import styled from 'styled-components';
import {
  Field,
  ErrorMessage } from 'formik';
import { TextField } from 'formik-mui';
import Typography from '@mui/material/Typography';
import IconButton from '../buttons/IconButton';
import addIcon from '../../../assets/images/add-icon.svg';

const Layout = styled.div `
  grid-area: Links;
  grid-template-rows: repeat(2, max-content);
  row-gap: 1rem;

  & h6 {
    font-weight: 300;
  }
`

const LinkList = styled.div `
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: repeat(2, max-content);
  gap: 0.5rem 0.5rem;

  & > h6 {
    grid-column: 1 / -1;
  }

  & > ul {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    margin-bottom: 1rem;
  }

  & > button {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }

  & li {
    list-style-type: none;
  }
`

const Links: React.FC<{}> = () => {
  return (
    <Layout>
      <LinkList>
        <Typography variant="h6" gutterBottom>Internal Links</Typography>
        <IconButton tooltip={'Add More Internal Links'} src={addIcon} alt={"add icon"} />
        <ul>
          <li>
            <Field 
              name="internalLink"
              type="text"
              label="Relative URL"
              component={TextField}
              fullWidth
              variant="outlined"/>
            <ErrorMessage name="internalLink" />
          </li>
        </ul>
      </LinkList>

      <LinkList>
        <Typography variant="h6" gutterBottom>External Links</Typography>
        <IconButton tooltip={'Add More External Links'} src={addIcon} alt={"add icon"} />
        <ul>
          <li>
            <Field 
              name="externalLink"
              type="text"
              label="Absolute URL"
              component={TextField}
              fullWidth
              variant="outlined"/>
            <ErrorMessage name="externalLink" />
          </li>
        </ul>
      </LinkList>
    </Layout>
  )
}

export default Links;