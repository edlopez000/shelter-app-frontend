import { React, useState } from 'react';
import { Container, Stack, Typography, Button } from '@mui/material';
import HistoryTable from './HistoryTable';
import EnrichmentModal from './Modals/Enrichment';
import CatCare from './Modals/CatCare';

export default function CatActivities() {
  const [open, setOpen] = useState({ cat: false, enrich: false });

  const handleDialogOpen = (event) => {
    console.log(event.target.name);
    setOpen({
      [event.target.name]: true,
    });
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
        $CatName Activities:
      </Typography>

      <Stack direction="column" spacing={10}>
        <Stack direction="row" justifyContent="space-evenly" spacing={10}>
          <Button
            variant="outlined"
            size="large"
            onClick={handleDialogOpen}
            name={'cat'}
          >
            Cat Care
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={handleDialogOpen}
            name={'enrich'}
          >
            Enrichment
          </Button>
          <EnrichmentModal open={open.enrich} handleClose={handleDialogClose} />
          <CatCare open={open.cat} handleClose={handleDialogClose} />
        </Stack>
        <HistoryTable />
      </Stack>
    </Container>
  );
}
