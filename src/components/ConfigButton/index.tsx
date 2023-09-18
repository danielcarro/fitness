import React from 'react-native';
import { ConfigButtonArea, ConfigButtonImage } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export type RootStackParamList = {
    HomeConfig: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;



const ConfigButton = () => {
    const navigation = useNavigation<NavigationProp>();
    const btnAction = () => {
        navigation.navigate('HomeConfig');
    }
    return(
      <ConfigButtonArea underlayColor='transparent' onPress={btnAction}>
        <ConfigButtonImage source={require('../../assets/config.png')}/>
      </ConfigButtonArea>
    )
  }

  export default ConfigButton