import { Link, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/mudittiwari2000">
        Mudit Tiwari
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
};

export default Footer;
