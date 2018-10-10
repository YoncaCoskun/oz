import React from 'react';

import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';
import CardList from '../screen/CardList';
import CardSwipe from '../screen/CardSwipe';

const Home = createBottomTabNavigator({
  CardSwipe: {
    screen: CardSwipe,
    navigationOptions: {
      tabBarLabel: 'Cards',
      tabBarIcon: ({ tintColor }) => <Icon name="credit-card" size={24} />
    }
  },
  CardList: {
    screen: CardList,
    navigationOptions: {
      tabBarLabel: 'List',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={24} />
    }
  }
});

export default Home;
