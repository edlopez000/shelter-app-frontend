import * as React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import HistoryTable from './HistoryTable';

export default function Activities() {
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
          <Button variant="outlined" size="large">
            Enrichment
          </Button>
        </Stack>

        <HistoryTable />
      </Stack>
    </Container>
  );
}
