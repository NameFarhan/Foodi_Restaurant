import * as React from 'react';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
export default function ContactButton() {
  return (
      <Button sx={{borderRadius:'40px',bgcolor:'#39DB4A',textTransform:'none'}} variant="contained" startIcon={<CallIcon />}>
        Contact
      </Button>
  );
}
