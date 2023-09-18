import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CustomTabBar from '../../components/CustomTabBar';
import { useNavigation } from '@react-navigation/native';
import HomeStack from '../../navigators/HomeStack';
import WorkoutStack from '../../navigators/WorkoutStack';
import MyWorkoutStack from '../../navigators/MyWorkoutStack';
import ConfigButton from '../../components/ConfigButton';

const Tab = createBottomTabNavigator();

const AppTab = () => {
  const navigation = useNavigation<any>(); // Corrigindo o tipo any para evitar erro

  // Defina os itens do TabBar que deseja exibir
  const tabBarItems = [
    {
      type: 'regular',
      text: 'Inicio',
      icon: require('../../assets/home.png'),
      route: 'HomeStack', // Nome da rota corrigido
    },
    {
      type: 'big',
      text: 'Workout',
      icon: require('../../assets/dumbbell.png'),
      route: 'WorkoutStack', // Nome da rota corrigido
    },
    {
      type: 'regular',
      text: 'Meus Treinos',
      icon: require('../../assets/myworkouts.png'),
      route: 'MyWorkout', // Nome da rota corrigido
    },
  ];

  // Função para navegar para a tela correspondente ao item selecionado
  const handleTabPress = (route: string) => {
    navigation.navigate(route);
  };



  return (
    <Tab.Navigator tabBar={props => <CustomTabBar navigate={handleTabPress} items={tabBarItems} {...props} />}>
      <Tab.Screen name="HomeStack" component={HomeStack} options={{title:'Seu Progresso Diário', headerTitleAlign: 'center', headerRight: () => <ConfigButton />, headerRightContainerStyle:{
        marginRight:10
      }}} />
      <Tab.Screen name="WorkoutStack"  component={WorkoutStack} />
      <Tab.Screen name="MyWorkout" component={MyWorkoutStack} />
    </Tab.Navigator>
  );
};

export default AppTab;
