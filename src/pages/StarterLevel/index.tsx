import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    LevelArea,
    HeaderText,
    Main,
    BoldText
} from './styles';
import DefaultButton from '../../components/DefaultButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    setLevel
} from '../../redux/reducers/userReducer';


export type RootStackParamList = {
    StarterName: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const StarterLevel = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user);
    const level = user.level;

    const navigation = useNavigation<NavigationProp>();

    const setMyLevel = (l: any) => {
        dispatch(setLevel(l));
        navigation.setParams({ level: l });
    }



    let funnyPhrase = '...';
    switch (user.workoutDays.length) {
        case 1:
            funnyPhrase = 'Só 1 dia não vai adiantar muito, mais...';
            break;
        case 2:
            funnyPhrase = '2 dias acho pouco, mas quem sou eu pra te julgar?';
            break;
        case 3:
            funnyPhrase = 'Legal, 3 dias dá pro gasto...';
            break;
        case 4:
            funnyPhrase = 'Legal, 4 dias vai ser TOP';
            break;
        case 5:
            funnyPhrase = 'É iso ai, 5 dias é o mínimo, lets GO!';
            break;
        case 6:
            funnyPhrase = 'É, 6 dias não é pra todo mundo...';
            break;
        case 7:
            funnyPhrase = 'Woow! Todo dia?! WTF?!';
            break;
    }

    return (
        <Container>
            <Main>
                <HeaderText>{funnyPhrase}</HeaderText>
                <HeaderText><BoldText>Qual seu nivel hoje?</BoldText></HeaderText>
                <LevelArea>
                    <DefaultButton title='Iniciante / Um frango' width='auto' backgroundColor={level == 'beginner' ? '#a5e88c' : '#d3d3d3'} marginBottom='20px' underlayColor='#ccc' color='#000' onPress={() => setMyLevel('beginner')} />
                    <DefaultButton title='Intermediário / Me viro bem' width='auto' backgroundColor={level == 'intermediate' ? '#a5e88c' : '#d3d3d3'} marginBottom='20px' underlayColor='#ccc' color='#000' onPress={() => setMyLevel('intermediate')} />
                    <DefaultButton title='Avançado / Primo do The Rock' width='auto' backgroundColor={level == 'advanced' ? '#a5e88c' : '#d3d3d3'} marginBottom='20px' underlayColor='#ccc' color='#000' onPress={() => setMyLevel('advanced')} />

                </LevelArea>
            </Main>
        </Container>
    )
}

export default StarterLevel;