import React, { useState } from 'react';
// React Router
import { Link } from "react-router-dom";
// Styled Components
import styled from 'styled-components';
// Material UI React Components
import ListItemButton from '@mui/material/ListItemButton';
import { styled  as materialuistyled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
// Constants
import { routes } from '../../../constants/constants';


const List = styled.ul `
  grid-column: navbar / drawer;
  display: grid;
  grid-template-rows: repeat(13, 1fr);
  place-items: stretch;
  max-width: 90px;
  height: 100vh;
  padding: 10px 0 10px 0;
  background-color: rgb(210, 233, 252);
  list-style: none;
`

interface IActiveProp {
  active?: boolean;
}

const ListItem = styled.li<IActiveProp> `
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ({ active }) => active ? 'rgb(144, 202, 249)' : rgb(210, 233, 252);

  &:hover {
    background-color: rgb(144, 202, 249);
  }
`

const MUIListItem = styled(ListItemButton)({
  '&& .Mui-selected, && .Mui-selected:hover': {
    backgroundColor: 'rgb(144, 202, 249)',
  },
  '&& .MuiListItemButton-root:hover && .MuiButtonBase-root:hover': {
    backgroundColor: 'rgb(144, 202, 249)',
  },
  },
);

const LightTooltip = materialuistyled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

interface INavProps {
  onHandleOpen: Function;
}

const NavBar: React.FC<INavProps> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    num: number,
  ) => {
    setSelectedIndex(num);
    props.onHandleOpen();
  };

  return (
    <nav>
      <List>
        {routes.map(({icon, name}, index) => (
          <ListItem key={`${name} list item`}>
            <Link to={`${name}`}>
                <MUIListItem
                  key={`${name} button`}
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                >
                    <LightTooltip
                      key={`${name} tooltip`}
                      title={name}
                      placement='right'
                      enterDelay={500}
                      TransitionComponent={Zoom}
                    >
                      <img src={icon} alt={`Link for accessing ${name}`}/>
                    </LightTooltip>
                </MUIListItem>
            </Link>
          </ListItem>
        ))};
      </List>
    </nav>
  );
};

export default NavBar;