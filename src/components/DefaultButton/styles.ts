import styled from 'styled-components/native';

interface ButtonStyleProps {
  width: string;
  backgroundColor: string;
  marginBottom: string;
}

interface TextButtonProps {
  color: string;
}

export const Button = styled.TouchableHighlight<ButtonStyleProps>`
  width: ${props => props.width || 'auto'};
  background-color: ${props => props.backgroundColor || '#eee'};
  padding: 10px 20px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;  
  margin-bottom: ${props => props.marginBottom || '1px'} ;
  
`;

export const TextButton = styled.Text<TextButtonProps>`
  color: ${props => props.color || '#000'};
`;

