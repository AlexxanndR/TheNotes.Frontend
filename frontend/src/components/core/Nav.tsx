import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import useAuth from '../../hooks/auth/useAuth';
import { Button, Divider, Drawer, Stack } from '@mui/material';

export const Nav = () => {
  const authenticated = useAuth();

  const [menuOpened, setMenuOpened] = React.useState(false);

  return (
    <AppBar
      position="sticky"
      sx={{ "& .MuiToolbar-root": { paddingRight: 0 }, backgroundColor: '#263238', borderBottom: '2px solid #64ffda' }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          TheNotes
        </Typography>
        <Divider orientation="vertical" sx={{ bgcolor: '#64ffda', borderRightWidth: 2, height: '45px' }} />
        {authenticated ? (
          <Box width="auto" sx={{ alignSelf: 'stretch', display: 'flex', alignItems: 'center', backgroundColor: 'transparent' }}>
            <IconButton
              size="large"
              onClick={() => setMenuOpened(true)}
              sx={{ color: 'white' }}
            >
              <AccountCircle />
            </IconButton>
            <Drawer
              anchor='right' open={menuOpened} onClose={() => setMenuOpened(false)}
              PaperProps={{ sx: { backgroundColor: '#263238' } }}
            >
              <Stack direction='column' width={200} alignItems='center'>
                <Stack direction='row'>
                  <IconButton
                    size="large"
                    onClick={() => setMenuOpened(true)}
                    sx={{ color: 'white' }}
                  >
                    <AccountCircle />
                  </IconButton>
                  {/* TODO: Add user name and surname*/}
                </Stack>
                <Divider orientation="horizontal" sx={{ bgcolor: '#64ffda', borderRightWidth: 1, width: '100%' }} />
                <Button variant="text" sx={{ width: '100%', color: "#64ffda", borderColor: '#64ffda' }} onClick={() => { }}>Profile</Button>
                <Divider orientation="horizontal" sx={{ bgcolor: '#64ffda', borderRightWidth: 1, width: '70%' }} />
                <Button variant="text" sx={{ width: '100%', color: "#64ffda", borderColor: '#64ffda' }} onClick={() => { }}>Logout</Button>
              </Stack>
            </Drawer>
          </Box>
        ) : (
          <Stack direction='row' spacing={1} mx={2} >
            <Button variant="outlined" size="small" sx={{ color: "#64ffda", borderColor: '#64ffda' }}>Sing In</Button>
            <Button variant="outlined" size="small" sx={{ color: "#64ffda", borderColor: '#64ffda' }}>Sing Up</Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}
