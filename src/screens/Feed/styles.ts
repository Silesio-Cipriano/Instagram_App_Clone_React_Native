import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 background-color:${({ theme }) => theme.colors.background}  ;
`;

export const Header = styled.View`
 padding:20px 24px;
align-items: center;
  flex-direction:row;
  justify-content: space-between;
`;

export const Logo = styled.Text`
  font-size:30px;
  color:${({ theme }) => theme.colors.text} ;
  font-family: ${({ theme }) => theme.fonts.dancing_700};
`
export const StoryArea = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingRight: 14, paddingLeft: 14 }
})
  `

  width: 100%;
  margin-top:15px;
  flex-direction: row;
`

export const PostArea = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
})
  `
  width: 100%;
`


export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

 padding:10px 24px;

`;
export const Perfil = styled.Image`
  width: 35px;
  height: 35px;
  border-radius:100px;
`;
