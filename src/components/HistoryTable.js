import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Typography,
  Paper,
} from '@mui/material';
import React from 'react';

function createData(id, date, activity, volunteer) {
  return { id, date, activity, volunteer };
}

// MockData
const rows = [
  createData(1, 'Nov 19', 'walk', 'Peach'),
  createData(2, 'Sep 20', 'walk', 'Saad'),
];

function HistoryTable() {
  return (
    <Container>
      <Typography
        textAlign={'center'}
        letterSpacing={0.15}
        fontSize={19}
        fontWeight={'bold'}
      >
        Animal Name History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Activity</TableCell>
              <TableCell align="center">Volunteer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.activity}</TableCell>
                <TableCell align="center">{row.volunteer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default HistoryTable;
