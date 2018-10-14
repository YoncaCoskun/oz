import React, { Component } from 'react';
import {
  Platform,
  View,
  ScrollView,
  Text,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import { Header } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from './SliderEntry';
import styles from '../styles/index.style';
import Tip from '../model/Tip';
import Righteous_Regular from '../assets/fonts/Righteous-Regular.ttf';
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

var taskArray = [];

export default class CardSwiper extends Component {
  state = { data: [] };
  constructor(props) {
    super(props);
    this.state = { slider1ActiveSlide: SLIDER_1_FIRST_ITEM };
  }

  componentWillMount() {
    this.getObject();
  }
  async getObject() {
    const json = await new Tip().getDataFromApi();
    taskArray = json.tips;
    this.setState({ data: json.tips });
  }

  _renderItem({ item, index }) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  _renderLightItem({ item, index }) {
    return <SliderEntry data={item} even={false} />;
  }

  layoutExample(type) {
    const isTinder = type === 'tinder';
    return (
      <Carousel
        data={taskArray}
        renderItem={isTinder ? this._renderLightItem : this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        layout={type}
        loop={true}
      />
    );
  }

  render() {
    const example3 = this.layoutExample('stack');

    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          backgroundColor: 'rgba(52, 52, 52, 0.7)'
        }}
      >
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{
            text: 'Dr. Oz Diet Tips',
            style: { color: '#fff', fontSize: 20, fontStyle: Righteous_Regular }
          }}
          outerContainerStyles={{ backgroundColor: 'black' }}
          innerContainerStyles={{ justifyContent: 'space-around' }}
        />

        <View style={styles.container}>{example3}</View>
      </View>
    );
  }
}
