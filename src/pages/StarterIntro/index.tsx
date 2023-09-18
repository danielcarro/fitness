import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    WelcomeText,
    WelcomeImage,
    WelcomeLogo,
    BeginConfigArea,
    Main
} from './styles';
import DefaultButton from '../../components/DefaultButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    StarterName: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const StarterIntro = () => {    
    const navigation = useNavigation<NavigationProp>();

    const start = () => {
        navigation.navigate('StarterName');
    }

    return (
        <Container>
            <Main>
                <WelcomeText>Bem Vindo a Web  Personal  </WelcomeText>
                <WelcomeImage>
                    <WelcomeLogo source={require('../../assets/boneco.png')} />
                </WelcomeImage>
                <BeginConfigArea>
                    <DefaultButton title='Iniciar configuração' width="100%" marginBottom='1px'  backgroundColor="#0072c0"  underlayColor="#0B7Ac6" color="#fff" onPress={start} />
                </BeginConfigArea>
            </Main>
        </Container>
         )        }

export default StarterIntro;