import { styled } from "styled-components/native";


interface MonthButtonProps {
    width: number;
}

export const Container = styled.View`
width:100%;
height:60px;
`;

export const MonthButton = styled.TouchableHighlight<MonthButtonProps>`
width: ${({ width }) => width}px;
align-items:center;
`;

export const MonthItem = styled.View`
width:90%;
height:30px;
background-color:#eee;
border-radius:15px;
justify-content:center;
align-items:center
`;

export const MonthText = styled.Text`

`;

