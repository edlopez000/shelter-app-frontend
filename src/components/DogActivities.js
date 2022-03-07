import { React, useState } from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import HistoryTable from './HistoryTable';
import EnrichmentModal from './Modals/Enrichment';

export default function DogActivities() {
  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Typography
        textAlign={'left'}
        letterSpacing={0.15}
        fontSize={19}
        fontWeight={'bold'}
      >
        $DogName Activities
      </Typography>

      <Stack direction={'column'} spacing={10}>
        <Stack direction="row" justifyContent="space-evenly" spacing={10}>
          <Button variant="outlined" size="large">
            Dog Walking
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
