import React from 'react';

import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';
import { IconName } from '@fortawesome/fontawesome-common-types';

import {
  Container,
  Logo,
  Header,
  StoryArea,
  PostArea,
  Footer,
  Perfil,
} from './styles';
import { StoryCircle } from '../../components/StoryCircle';
import { LineSeparator } from '../../components/LineSeparator';
import { CardPost } from '../../components/CardPost';

export function Feed() {
  const MyIcon: IconName = 'facebook-messenger';
  return (
    <Container>
      <Header>
        <Logo>Instagram</Logo>
        <FontAwesome5 name={MyIcon} size={24} color="white" />
      </Header>
      <LineSeparator />
      <StoryArea
        horizontal
      >

        <StoryCircle name="Cipriano Silesio" url="https://avatars.githubusercontent.com/u/68440141?v=4" />
        <StoryCircle name="Valden Lizai" url="https://user-images.githubusercontent.com/68440141/160222006-28b694cb-2b3e-4f6a-9df9-8a25c548f226.jpg" />
        <StoryCircle name="Adelina da Silva" url="https://user-images.githubusercontent.com/68440141/160222008-9611c39c-8e84-452b-82c1-d47989889373.jpg" />
        <StoryCircle name="Ethan Hedimerx" url="https://user-images.githubusercontent.com/68440141/160223448-406dafa6-aa93-49ed-802a-2d6d90eb1b82.jpg" />
        <StoryCircle name="Helena Cipriano" url="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compresscs=tinysrgbdpr=1w=500" />
        <StoryCircle name="Cipriano Silesio" url="https://avatars.githubusercontent.com/u/68440141?v=4" />
        <StoryCircle name="Cipriano Silesio" url="https://avatars.githubusercontent.com/u/68440141?v=4" />



      </StoryArea>
      <LineSeparator />
      <PostArea>
        <CardPost
          name="Valden Lizai"
          perfilImage="https://user-images.githubusercontent.com/68440141/160222006-28b694cb-2b3e-4f6a-9df9-8a25c548f226.jpg"
          postImage="https://user-images.githubusercontent.com/68440141/160222006-28b694cb-2b3e-4f6a-9df9-8a25c548f226.jpg"
          like="10,320"
        />

        <CardPost
          name="Adelina da Silva"
          perfilImage="https://user-images.githubusercontent.com/68440141/160222008-9611c39c-8e84-452b-82c1-d47989889373.jpg"
          postImage="https://user-images.githubusercontent.com/68440141/160222008-9611c39c-8e84-452b-82c1-d47989889373.jpg"
          like="8,490"
        />


        <CardPost
          name="Ethan Hedimerx"
          perfilImage="https://user-images.githubusercontent.com/68440141/160223448-406dafa6-aa93-49ed-802a-2d6d90eb1b82.jpg"
          postImage="https://user-images.githubusercontent.com/68440141/160223445-05535319-d415-49c3-8afa-99c5d170159b.jpg"
          like="26,320"
        />

        <CardPost
          name="Cipriano Silesio"
          perfilImage="https://avatars.githubusercontent.com/u/68440141?v=4"
          postImage="https://avatars.githubusercontent.com/u/68440141?v=4"
          like="6,320"
        />


      </PostArea>
      <Footer>
        <MaterialIcons name="home" size={28} color="white" />
        <Feather name="search" size={28} color="white" />
        <Feather name="plus-square" size={28} color="white" />
        <Feather name="heart" size={28} color="white" />
        <Perfil source={{ uri: "https://avatars.githubusercontent.com/u/68440141?v=4" }} />
      </Footer>
    </Container>
  );
}