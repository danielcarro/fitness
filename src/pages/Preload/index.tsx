import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/useAppSelector';

export type RootStackParamList = {
  AppTab: undefined;
  StarterStack: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Preload: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

const user = useAppSelector(state => state.user);


  useEffect(() => {    
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
    }
  }, []);

  const handleNavigation = (screen: keyof RootStackParamList) => () => navigation.navigate(screen);

  return(<></>);
}

export default Preload;