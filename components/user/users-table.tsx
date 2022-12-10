import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserWithMeta } from '@prisma/client/scalar';
import { Avatar, IconButton } from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

interface UsersTableProps {
  users: UserWithMeta[];
}

const UsersTable: React.FC<UsersTableProps> = (props) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell></TableCell>
            <TableCell>E-Mail</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Last Visit</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((row, idx) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell><Avatar alt={row.UserMeta?.firstName} src={row.image as string}/></TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.UserMeta?.firstName}</TableCell>
              <TableCell>{row.UserMeta?.lastName}</TableCell>
              <TableCell>{row.UserMeta?.city}</TableCell>
              <TableCell>{row.UserMeta?.last_login.toString()}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete">
                  <ManageAccountsIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersTable;