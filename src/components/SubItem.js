import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
//import ButtonGroup from '@mui/material/ButtonGroup';
//import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
//import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
//import EditIcon from '@mui/icons-material/Edit';
import Pagination from '@mui/material/Pagination';
import ButtonGrp from  './ButtonGrp';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SubItem() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 2,
            alignItems: 'flex-start'
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth="sm">
              <Stack spacing={2}>
                <Item >Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
            </Container>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth="sm">
              <Stack spacing={2}>
                <Item > <ButtonGrp/> </Item>
                <Item><ButtonGrp/></Item>
                <Item><ButtonGrp/></Item>
              </Stack>
            </Container>
          </Box>
        </Box>
      </Container>
      <br></br>
      <Stack spacing={2}>
      <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </React.Fragment>
  );
}
