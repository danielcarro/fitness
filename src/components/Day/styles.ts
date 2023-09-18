import { styled } from "styled-components/native";

interface DayButtonProps {
    width: number;
}

interface DayItemProps {
    bgColor: string;
    opacity: number;
}


export const DayButton = styled.TouchableHighlight<DayButtonProps>`
width:${props => props.width};
justify-content:center;
align-items:center;
`;

export const DayItem = styled.View<DayItemProps>`
width:30px;
height:30px;
border-radius:15px;
background-color:${props=>props.bgColor};
justify-content:center;
align-items:center;
opacity: ${props=>props.opacity};
`;

export const DayText = styled.Text`

`;