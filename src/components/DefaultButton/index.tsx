import React from 'react';
import { Button, TextButton } from './styles';

interface Props {
  width: string;
  text: string;
  backgroundColor: string;
  underlayColor: string
  color: string;
  onPress: ()=>void;
}

const DefaultButton = ({width, text, backgroundColor, underlayColor,  color, onPress}: Props) => {
  return(
    <Button width={width} backgroundColor={backgroundColor} underlayColor={underlayColor} onPress={onPress}>
      <TextButton color={color}>{text}</TextButton>
    </Button>
  )
}

export default DefaultButton