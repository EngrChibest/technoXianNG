import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Online learing', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Labs works', <CheckCircleIcon sx={{color: '#00A859'}}/>, <p> </p>),
  createData('Robotics Projects', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Competition', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Certification', <CheckCircleIcon sx={{color: '#00A859'}}/>, <p> </p>),
];

export default function BasicTable() {
  return (
    <div className='container-sm' style={{py: '6%'}}>
        <h3 className='partner-header'>Choose the freedom you need.</h3>
    <TableContainer component={Paper} className='table-container-two'>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Categories</TableCell>
            <TableCell align="right">Zero Inception</TableCell>
            <TableCell align="right">Institute Membership</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
