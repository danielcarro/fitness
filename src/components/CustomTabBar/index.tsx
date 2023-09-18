import React from 'react';
import { TabBarArea, TabBall, TabBallImage, TabRegular, TabImage, TabBarItem } from './styles';
import { Text } from 'react-native';

interface CustomTabBarProps {
  navigate: (route: string) => void;
  items: {
    type: string;
    text?: string | undefined;
    icon?: any;
    route: string;
  }[];
}

const CustomTabBar = (props: CustomTabBarProps) => {
  return (
    <TabBarArea>
      {props.items.map(item => (
        <TabBarItem key={item.route}>
          {item.type === 'regular' && (
            <TabRegular underlayColor='transparent' onPress={() => props.navigate(item.route)}>
              <>
                <TabImage source={item.icon} />
                <Text>{item.text}</Text>
              </>
            </TabRegular>
          )}
          {item.type === 'big' && (
            <TabBall underlayColor='#00ff00' onPress={() => props.navigate(item.route)}>
              <TabBallImage source={item.icon} />
            </TabBall>
          )}
        </TabBarItem>
      ))}
    </TabBarArea>
  );
};

export default CustomTabBar;
