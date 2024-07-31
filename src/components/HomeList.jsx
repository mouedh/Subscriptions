import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import ButtonGrp from './ButtonGrp';
import Modal1 from './Modal1';
import ReactDOM from "react-dom/client";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const UserContext = React.createContext();

function HomeList() {
  const [users, setUsers] = React.useState([]);

  return (
    <>
      <UserContext.Provider value={{ users, setUsers }}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl" sx={{ marginBottom: 4 }}>
            {users.map((user, index) => (
              <div key={index} style={{ height: 65, width: '100%' }}>
                <Stack direction="row" spacing={2}>
                  <Item sx={{ flex: 7, border: '1px solid #111' }}>
                    {user.nom} {user.prenom} {/* Display user data */}
                  </Item>
                  <Item sx={{ flex: 1, border: '2px solid #000', padding: '10px' }}>
                    <ButtonGrp />
                  </Item>
                </Stack>
              </div>
            ))}
          </Container>
          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
          <Modal1 /> {/* Include the Modal1 component */}
        </React.Fragment>
      </UserContext.Provider>
    </>
  );
}

export default HomeList;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomeList />);
