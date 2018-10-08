import React from 'react';
import { Text, View, FlatList, Animated, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.card]}>
        <Text>{this.props.tip}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 300,
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
  noMoreCardsText: {
    fontSize: 22
  }
});
export default Card;
