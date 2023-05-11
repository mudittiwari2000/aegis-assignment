import { Box, Container } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface IDefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <Header />
      {children}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800]
        }}
      >
        <Container
          maxWidth="sm"
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
