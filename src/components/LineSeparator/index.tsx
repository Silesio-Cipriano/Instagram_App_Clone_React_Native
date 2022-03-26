import React from 'react';
import DashedLine from 'react-native-dashed-line';

import {
  Container
} from './styles';

export function LineSeparator() {
  return (
    <Container>
      <DashedLine dashLength={1} dashColor='#fff2' />

    </Container>
  );
}