import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  Dimensions,
  StyleSheet
} from 'react-native';
import { Header } from 'react-native-elements';
import SwipeCards from 'react-native-swipe-cards';
import NoMoreCards from './NoMoreCards';
import Tip from '../model/Tip';
import CardTemplate from './CardTemplate';

class CardSwipe extends React.Component {
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
    /*<SwipeCards
            cards={this.state.data}
            renderCard={cardData => <CardTemplate {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}
            showYup={false}
            showNope={false}
          />
     */
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
            renderCard={cardData => <CardTemplate {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}
            showYup={false}
            showNope={false}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 30
  }
});

export default CardSwipe;
