import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  planned: number,
  real: number,
  diff: number,
) {
  return { name, planned, real, diff};
}

const rows = [
  createData('Alimentation', 159, 6.0, 24),
  createData('Cadeaux', 237, 9.0, 37),
  createData('Santé/Médecine', 262, 16.0, 24),
  createData('Loyer', 305, 3.7, 67),
  createData('Transports', 356, 16.0, 49),
];

export default function PlannedTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Titre</TableCell>
            <TableCell align="right">Prévues</TableCell>
            <TableCell align="right">Réelles</TableCell>
            <TableCell align="right">Diff.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({name, planned, real, diff}) => (
            <TableRow
              key={name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="right">{planned}€</TableCell>
              <TableCell align="right">{real}€</TableCell>
              <TableCell align="right">{diff}€</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}