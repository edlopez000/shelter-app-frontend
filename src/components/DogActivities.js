import { React, useState } from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import HistoryTable from './HistoryTable';
import EnrichmentModal from './Modals/Enrichment';
import DogWalking from './Modals/DogWalking';

export default function DogActivities(props) {
  const [open, setOpen] = useState({ dog: false, enrich: false});

  const handleDialogOpen = (event) => {
    setOpen({[event.target.name]: true});
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
        marginBottom={10}
      >
        {props.animalName} Activities
      </Typography>

      <Stack direction="column" spacing={10}>
        <Stack direction="row" justifyContent="space-evenly" spacing={10}>
          <Button 
          variant="outlined" 
          size="large"
          onClick={handleDialogOpen}
          name={'dog'}
          >
            Dog Walking
          </Button>
          <Button variant="outlined" size="large" onClick={handleDialogOpen}
          name={'enrich'}>
            Enrichment
          </Button>
          <EnrichmentModal open={open.enrich} handleClose={handleDialogClose} />
          <DogWalking open={open.dog} handleClose={handleDialogClose} />
        </Stack>

        <HistoryTable />
      </Stack>
    </Container>
  );
}
