import React from 'react';

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import {
  Container,
  Header,
  UserInfo,
  Photo,
  Name,
  PostImage,
  Footer,
  PrimaryAction,
  Actions,
  Likes,
} from './styles';
import { LineSeparator } from '../LineSeparator';


interface CardPostProps {
  name: string;
  perfilImage: string;
  postImage: string;
  like: string;
}

export function CardPost({ name, like, perfilImage = "https://avatars.githubusercontent.com/u/68440141?v=4", postImage = "https://avatars.githubusercontent.com/u/68440141?v=4" }: CardPostProps) {
  return (
    <Container>
      <Header>
        <UserInfo>
          <Photo source={{ uri: perfilImage }} />
          <Name>{name}</Name>
        </UserInfo>
        <MaterialCommunityIcons name='dots-vertical' size={24} color="white" />
      </Header>
      <PostImage source={{ uri: postImage }} />
      <Footer>
        <Actions>

          <PrimaryAction>
            <Feather name='heart' size={30} color="white" />
            <Feather name='message-circle' size={30} color="white" />
            <Feather name='navigation' size={30} color="white" />
          </PrimaryAction>
          <Feather name='bookmark' size={30} color="white"
          />
        </Actions>
        <Likes>
          {like} likes
        </Likes>
      </Footer>
      <LineSeparator />
    </Container>
  );
}