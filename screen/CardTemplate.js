import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  Card,
  Button,
  Icon,
  TouchableNativeFeedback,
  ListView
} from 'react-native-elements';
import { Right } from 'native-base';
import Carousel from 'react-native-snap-carousel';
//import Button from 'react-native-button';
//import ActionButton from 'react-native-action-button';

var taskArray = [];
class CardTemplate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card
        image={{ uri: this.props.image }}
        containerStyle={styles.card}
        imageStyle={styles.image}
      >
        <Text style={styles.name}>{this.props.tip}</Text>

        <Icon
          component={TouchableNativeFeedback}
          name="heart"
          color="#fff"
          type={false ? 'font-awesome' : 'evilicon'}
          size={24}
          raised
          iconStyle={{ fontSize: 30, color: 'red' }}
          containerStyle={{ marginRight: 0, alignSelf: 'flex-end' }}
          onPress={console.log(this.props.id)}
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 430,
    borderWidth: 1,
    borderRadius: 10,
    borderBottomWidth: 0,
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  image: {
    width: 335,
    height: 250
  },
  icon: {
    alignSelf: 'flex-end'
  }
});
export default CardTemplate;
