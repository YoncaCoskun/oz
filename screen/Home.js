import React from "react";
import {
  Text,
  View,
  FlatList,
  Animated,
  StyleSheet,
  Image,
  ImageBackground
} from "react-native";
import { Header, Button, Icon } from "react-native-elements";

import Tip from "../model/Tip";
import SwipeCards from "react-native-swipe-cards";
import NoMoreCards from "./NoMoreCards";
import Card from "./Card";
import { createBottomTabNavigator } from "react-navigation";
//import Icon from "react-native-vektor-icons/Ionicons";
//import { Ionicons } from "@expo/vector-icons";

class Home extends React.Component {
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
    /*<FlatList
      data={this.state.data}
      renderItem={({ item }) => <Text>{item.tip}</Text>}
      keyExtractor={({ id }, index) => id}

          <SwipeCards
          cards={this.state.data}
          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
        />
    />*/
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{
          width: "100%",
          opacity: 0.95,
          height: "100%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <View>
          <Header
            statusBarProps={{ barStyle: "light-content" }}
            centerComponent={{
              text: "Dr. Oz Diet Tips",
              style: { color: "#fff" }
            }}
            outerContainerStyles={{ backgroundColor: "#3D6DCC" }}
            innerContainerStyles={{ justifyContent: "space-around" }}
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

class Settings extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{
          width: "100%",
          opacity: 0.95,
          height: "100%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <View>
          <Text>Settings!!!</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Cards",
      tabBarIcon: ({ tintColor }) => <Icon name="credit-card" size={24} />
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: "List",
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={24} />
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
