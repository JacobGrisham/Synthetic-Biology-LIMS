import React from 'react';
import styled from 'styled-components';
// Typescript
import { ICompany } from './App';

const Table = styled.table`
  grid-row: table-start / table-end;
  text-align: left;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;

  & th {
    font-weight: bold;
    background-color: rgb(115, 162, 199);
    color: white;
    font-size: calc(5px + 2vmin);
  }

  & td, th {
    padding-bottom: 2%;
	  padding-top: 2%;
    padding-left: 2%;
    border-radius: 0.5rem;
  }

  & tr:nth-child(odd) {
	  background-color: rgb(235, 240, 244);
  }

  tr:nth-child(even) {
	  background-color: rgb(245, 250, 254);
  }

  & tr:hover {
    background-color: rgb(235, 244, 253);
    -webkit-box-shadow: 0 6px 6px -6px rgb(73, 90, 99);
    -moz-box-shadow: 0 6px 6px -6px rgb(73, 90, 99);
    box-shadow: 0 6px 6px -6px rgb(73, 90, 99);
 }

  & td:hover {
    background-color: rgb(235, 244, 253);
    font-weight: bold;
    font-size: 1.5rem;
    
    box-shadow: rgb(185, 218, 247) -1px 1px, rgb(185, 218, 247) -2px 2px, rgb(185, 218, 247) -3px 3px, rgb(185, 218, 247) -4px 4px, rgb(185, 218, 247) -5px 5px, rgb(185, 218, 247) -6px 6px;
    transform: translate3d(6px, -6px, 0);
    
    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: line;
  }
`;

const CompanyTable = ({ companies }: { companies: Array<ICompany> }) => {

  return (
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subscription Tier</th>
          </tr>
        </thead>

        <tbody>
          {!companies || companies.length <= 0 ? (
            <tr>
              <td align="center">
              <b>Oops, no companies here yet</b>
              </td>
            </tr>
            ) : (
            companies.map(company => (
              <tr key={company.id}>
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.tier}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
  );
}

export default CompanyTable;