import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ListView,
  Button
} from "react-native";

import Tip from "../model/Tip";

class Deck extends React.Component {
  state = {
    data: []
  };
  componentWillMount() {
    this.getObject();
  }
  async getObject() {
    const json = await new Tip().getDataFromApi();
    this.setState({ data: json.tips });
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <Text>{item.tip}</Text>}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}

export default Deck;
