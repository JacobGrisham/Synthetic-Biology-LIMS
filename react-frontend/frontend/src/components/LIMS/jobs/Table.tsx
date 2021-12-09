import React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

interface ColumnDetails {
  [key: string]: string
}

const SimpleTable = () => {

  const data = React.useMemo<ColumnDetails[]>(
    () => [
      {
        col1: 'Job 1',
        col2: 'Job 4',
        col3: 'Job 5',
      },
      {
        col1: 'Job 2',
        col2: 'Job 6',
        col3: '...',
      },
      {
        col1: 'Job 3',
        col2: '...',
        col3: '...',
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Running',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Pending',
        accessor: 'col2',
      },
      {
        Header: 'Delayed',
        accessor: 'col3',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <TableContainer>
      <Table {...getTableProps()}>
        <TableHead>
          {// Loop over the header rows
          headerGroups.map(headerGroup => (
            // Apply the header row props
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {// Loop over the headers in each row
              headerGroup.headers.map(column => (
                // Apply the header cell props
                <TableCell {...column.getHeaderProps()}>
                  {// Render the header
                  column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        {/* Apply the table body props */}
        <TableBody {...getTableBodyProps()}>
          {// Loop over the table rows
          rows.map(row => {
            // Prepare the row for display
            prepareRow(row)
            return (
              // Apply the row props
              <TableRow {...row.getRowProps()}>
                {// Loop over the rows cells
                row.cells.map(cell => {
                  // Apply the cell props
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {// Render the cell contents
                      cell.render('Cell')}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SimpleTable;