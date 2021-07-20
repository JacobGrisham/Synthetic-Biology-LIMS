import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  z-index: -1;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
`

const Background = () => {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" width="1921.475" height="2041.362" preserveAspectRatio="none" viewBox="0 0 1921.475 2041.362">
      <g id="Group_562" data-name="Group 562" transform="translate(0.034)">
        <path id="Path_9766" data-name="Path 9766" d="M-390-483l1920.008.115,1.432,2041.247s-457.129-73.758-623.015-388.84-413.093-405.857-613.6-410.129c-84.412-1.8-403.55-6.945-510.751,327.238-85.306,213.22-174.113,304.489-174.113,304.489L-390,759.393Z" transform="translate(390 483)" fill="#f5fafe"/>
        <path id="Path_9767" data-name="Path 9767" d="M1114.77-483S637.556-215.528,568.032,137.94,866.9,598.906,866.9,598.906s580.826,161.644,660.5,143.71c4.462-1,2.984-15.692,2.984-15.692L1529.838-482.9Z" transform="translate(390 483)" fill="#d2e9fc"/>
      </g>
    </SVG>
  );
}

export default Background;