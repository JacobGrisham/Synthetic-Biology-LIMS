import React from 'react';
// Styled Components
import styled from 'styled-components';
import { device } from '../../styled-components/responsive';
// React Router
import { useNavigate } from "react-router-dom";
// My React Components
import IconButton from './IconButton';
// Assets
import saveIcon from '../../../assets/images/save-icon.svg';
import cancelIcon from '../../../assets/images/x-icon.svg';
import deleteIcon from '../../../assets/images/delete-icon.svg';

const Buttons = styled.div `
  grid-area: CUDButtons;
  margin: 0.8rem 0.5rem 0 0;
  display: grid;
  grid-template-columns: repeat(3, min-content);
  column-gap: 2rem;
  align-items: center;
  justify-content: end;

  @media ${device.tablet} {
      position: absolute;
      top: 0;
      right: 0;
    }
`

const CreateUpdateDeleteButtons = () => {
  const navigate = useNavigate();

  const goBack = (event: any) => {
    event.preventDefault();
    navigate(-1);
  }

  return (
    <Buttons>
      <IconButton type="submit" tooltip={'Save'} src={saveIcon} alt={"save icon"} />
      <IconButton type="button" onClick={goBack} tooltip={'Cancel'} src={cancelIcon} alt={"cancel icon"}/>
      <IconButton type="button" tooltip={'Delete'} src={deleteIcon} alt={"delete icon"} />
    </Buttons>
  )
}

export default CreateUpdateDeleteButtons;