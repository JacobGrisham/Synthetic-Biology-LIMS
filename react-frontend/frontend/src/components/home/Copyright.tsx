import * as React from 'react';
// Material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// Login sx={{ mt: 8, mb: 4 }} 

export default function Copyright(props: any) {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © by '}
        <Link color="inherit" href="https://jacobgrisham.com/">
          Jacob Grisham
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}