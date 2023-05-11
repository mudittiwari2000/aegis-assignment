import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <ConnectingAirportsIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Aegis Travels
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
