import React from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';
import saveIcon from '../../assets/images/save-icon.svg';
import cancelIcon from '../../assets/images/x-icon.svg';
import deleteIcon from '../../assets/images/delete-icon.svg';

const Buttons = styled.div `
  grid-area: Buttons;
  display: grid;
  grid-template-columns: repeat(3, min-content);
  column-gap: 2rem;
  align-items: center;
  justify-content: end;
`

const CreateUpdateDeleteButtons = () => {
  return (
    <Buttons>
      <IconButton key={10} tooltip={'Save'} src={saveIcon} alt={"save icon"} />
      <IconButton key={11} tooltip={'Cancel'} src={cancelIcon} alt={"cancel icon"} />
      <IconButton key={12} tooltip={'Delete'} src={deleteIcon} alt={"delete icon"} />
    </Buttons>
  )
}

export default CreateUpdateDeleteButtons;