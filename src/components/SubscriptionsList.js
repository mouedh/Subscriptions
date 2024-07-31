import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//import SubItem from './SubItem';

const columns= [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: ' ', firstName: ' ', age: '' },
  { id: 2, lastName: ' ', firstName: ' ', age: '' },
  { id: 3, lastName: ' ', firstName: ' ', age: '' },
  { id: 4, lastName: ' ', firstName: ' ', age: '' },
  { id: 5, lastName: ' ', firstName: '', age: null },
  { id: 6, lastName: ' ', firstName: null, age: null },
  { id: 7, lastName: ' ', firstName: ' ', age: null },
  { id: 8, lastName: ' ', firstName: ' ', age:null },
  { id: 9, lastName: ' ', firstName: ' ', age: '' },
];

export default function SubscriptionsList() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 2,
        }}
      >
      <Container maxWidth="xl">
      <div style={{ height: 400, width: '85%' }}>
      <DataGrid
        rows={rows}
        columns={columns}

        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
      </Container>
      <Container maxWidth="xl">  
      
        </Container>
      </Box>
    </React.Fragment>
    
  );
}

