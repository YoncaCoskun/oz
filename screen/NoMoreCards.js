import React from "react";
import { Text, View, FlatList, Animated, StyleSheet } from "react-native";

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    );
  }
}
export default NoMoreCards;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300
  },
  noMoreCardsText: {
    fontSize: 22
  }
});
