import styled, { css } from 'styled-components';
import { device } from './responsive';

export const LayoutSpacingMixin = css `
  display: grid;
  padding: 1rem 2rem 0 4rem;
  row-gap: 2rem;
  column-gap: 1rem;
  
  & div h6 {
    font-weight: 300;
  }
`

export const LayoutLocationixin = css `
  grid-column: 1 / -1;
  height: calc(100vh - 1rem);

  @media ${device.mobileL} {
    grid-column: workspace / end;
    overflow-y: scroll;
  }
`

export const CombinedStyledLayout = styled.section `
  ${LayoutSpacingMixin}
  ${LayoutLocationixin}
`