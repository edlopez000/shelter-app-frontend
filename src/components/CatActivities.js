import { React, useState } from 'react';
import { Container, Stack, Typography, Button } from '@mui/material';
import HistoryTable from './HistoryTable';
import EnrichmentModal from './Modals/Enrichment';

export default function CatActivities() {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Container>
      <Typography
        textAlign={'left'}
        letterSpacing={0.15}
        fontSize={19}
        fontWeight={'bold'}
      >
        $CatName Activities:
      </Typography>

      <Stack direction="column" spacing={10}>
        <Stack direction="row" justifyContent="space-evenly" spacing={10}>
          <Button variant="outlined" size="large">
            Cat Care
          </Button>
          <Button variant="outlined" size="large" onClick={handleDialogOpen}>
            Enrichment
          </Button>
          <EnrichmentModal open={open} handleClose={handleDialogClose} />
        </Stack>
        <HistoryTable />
      </Stack>
    </Container>
  );
}
