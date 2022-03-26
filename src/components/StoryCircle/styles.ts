import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
export const Container = styled.View`
  margin:0 10px;
`;

export const Photo = styled.Image`
width: 75px; 
height: 75px; 
border-radius:${RFPercentage(100)}px;
align-self: center; 
border-color: black; 
border-width: 5px; 
`;


export const LineArea = styled.View`
    height: 195px;
  `;

export const Name = styled.Text`
  color:white;
  font-size:12px;
  font-family:${({ theme }) => theme.fonts.roboto_400};
`;