import React, { useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';
import { Container, Texto, Botao } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  AppTab: undefined;
  StarterStack: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Preload: React.FC = () => {
  const user = useAppSelector(state => state.user);
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'StarterStack' }]
    });
    /*
    if (!user.name) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'StarterStack' }]
      });
    }else{
      navigation.reset({
        index: 0,
        routes: [{ name: 'AppTab' }]
      });
    }*/
  }, []);

  const handleNavigation = (screen: keyof RootStackParamList) => () => navigation.navigate(screen);

  return (
    <Container>
      <Texto>Preload - {user?.name}</Texto>
      <Botao title='Ir para StarterStack' onPress={handleNavigation('StarterStack')} />
      <Botao title='Ir para AppTab' onPress={handleNavigation('AppTab')} />
    </Container>
  );
}

export default Preload;