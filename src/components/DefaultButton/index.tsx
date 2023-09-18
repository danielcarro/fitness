import React from 'react';
import { Button, TextButton } from './styles';

interface Props {
  width: string ;
  title: string;
  backgroundColor: string;
  marginBottom: string;
  underlayColor: string;
  color: string;
  onPress: ()=>void;  
}

const DefaultButton = ({title, width, backgroundColor, marginBottom, underlayColor,  color, onPress}: Props) => {
  return(
    <Button width={width} backgroundColor={backgroundColor} marginBottom={marginBottom} underlayColor={underlayColor} onPress={onPress}>
      <TextButton color={color}>{title}</TextButton>
    </Button>
  )
}

export default DefaultButton