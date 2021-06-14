import React from "react";
import { Table } from "reactstrap";
// Typescript
import { ICompany } from './App';

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