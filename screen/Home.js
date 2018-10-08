import React from 'react';
import {
  Text,
  View,
  Animated,
  StyleSheet,
  Image,
  ImageBackground,
  ListView,
  FlatList,
  TouchableOpacity,
  Navigator
} from 'react-native';

import { Header, Button, Icon, ListItem, List } from 'react-native-elements';

import Tip from '../model/Tip';
import SwipeCards from 'react-native-swipe-cards';
import NoMoreCards from './NoMoreCards';
import Card from './Card';
import { createBottomTabNavigator } from 'react-navigation';

class Cards extends React.Component {
  state = {
    data: []
  };
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.getObject();
  }
  async getObject() {
    const json = await new Tip().getDataFromApi();
    this.setState({ data: json.tips });
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/bg.png')}
        style={{
          width: '100%',
          opacity: 0.95,
          height: '100%',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center'
        }}
      >
        <View>
          <Header
            statusBarProps={{ barStyle: 'light-content' }}
            centerComponent={{
              text: 'Dr. Oz Diet Tips',
              style: { color: '#fff' }
            }}
            outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
            innerContainerStyles={{ justifyContent: 'space-around' }}
          />
          <SwipeCards
            cards={this.state.data}
            renderCard={cardData => <Card {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}
          />
        </View>
      </ImageBackground>
    );
  }
}

//let data = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
let listeners = [];
class CardList extends React.Component {
  state = {
    data: []
  };
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.getObject();
  }
  async getObject() {
    const json = await new Tip().getDataFromApi();
    this.setState({ data: json.tips });
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/bg.png')}
        style={{
          width: '100%',
          opacity: 0.95,
          height: '100%',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center'
        }}
      >
        <View style={styles.view}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <View style={styles.separator}>
                <Text style={styles.text}>{item.tip}</Text>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default createBottomTabNavigator({
  Cards: {
    screen: Cards,
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

const styles = StyleSheet.create({
  view: {
    paddingTop: 30
  },
  text: {
    flex: 1,
    fontSize: 15,
    textAlign: 'left'
  },
  separator: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red'
  },
  container: {
    height: 1,
    width: '86%',
    backgroundColor: '#CED0CE',
    marginLeft: '14%'
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  listNavBar: {
    height: 64,
    backgroundColor: '#CCC'
  },
  row: {
    padding: 10,
    height: 44
  }
});
