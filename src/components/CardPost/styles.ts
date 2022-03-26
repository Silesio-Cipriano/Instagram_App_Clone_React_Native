import styled from 'styled-components/native';

export const Container = styled.View`
width: 100%;
`;
export const Header = styled.View`
  padding:10px 24px;

  
flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Photo = styled.Image`
width: 50px;
height: 50px;
border-radius:100px;
`;
export const Name = styled.Text`
  color:${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.roboto_700};
padding-left:15px;

`;

export const PostImage = styled.Image`
  width:100%;
  height: 320px;
`;
export const Actions = styled.View`
flex-direction:row;
justify-content: space-between;
align-items: center;

padding:10px;
`

export const Footer = styled.View`


`;
export const PrimaryAction = styled.View`
  flex-direction:row;

`;


export const Likes = styled.Text`
  font-size:14px;
  color:white;
  font-family: ${({ theme }) => theme.fonts.roboto_700};

  padding:0 15px;
  padding-bottom: 20px;

`