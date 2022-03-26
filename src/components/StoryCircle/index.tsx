import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import {
  Container,
  Photo,
  LineArea,
  Name
} from './styles';

interface StoryCircleProps {
  url: string;
  name: string;
}

export function StoryCircle({ url, name }: StoryCircleProps) {
  return (
    <Container>
      <LineArea>

        <LinearGradient
          colors={['#CA1D7E', '#E35157', '#F2703F']}
          start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
          style={{ height: 80, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
          <Photo
            source={{ uri: url }}
          />
        </LinearGradient>
        <Name>
          {name}
        </Name>
      </LineArea>


    </Container >
  );
}