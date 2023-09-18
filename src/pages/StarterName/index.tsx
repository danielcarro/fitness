import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    HeaderText,
    Main,
    NameInput
} from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { setName } from '../../redux/reducers/userReducer';

export type RootStackParamList = {
    StarterDays: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const StarterName = () => {
    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NavigationProp>();


    const nextAction = () => {
        if (!user.name) {
            alert('Você precisa de um nome');
            return;
        }
        navigation.navigate('StarterDays')
    }

    return (
        <Container>
            <Main>
                <HeaderText>Qual o seu nome?</HeaderText>
                <NameInput
                    value={user.name}
                    onChangeText={(t: string) => dispatch(setName(t))}
                    autoFocus={true}
                    autoCapitalize='words'
                    onSubmitEditing={nextAction}
                />
            </Main>
        </Container>
    )
}

export default StarterName;