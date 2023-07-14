import React from 'react';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';
import { Container, Texto, Botao } from './styles';

const AppTab = () => {
    const user = useAppSelector(state => state.user);
    const navigation = useNavigation();

    const handlePreload = () => {
        navigation.navigate('Preload' as never);
      };

    return (
        <Container>
            <Texto>AppTab - {user.name}</Texto>
            <Botao title='ir para Preload' onPress={handlePreload}/>
        </Container>
    )
}

export default AppTab;