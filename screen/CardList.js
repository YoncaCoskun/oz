import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  FlatList
} from 'react-native';
import { Button, List, ListItem, Header } from 'react-native-elements';

import Tip from '../model/Tip';

class CardList extends React.Component {
  state = {
    data: [],
    isLike: false
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

    /* <View style={styles.view}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <View style={styles.separator}>
                <Text style={styles.text}>{item.tip}</Text>
              </View>
            )}
          />
        </View>*/
    /*   <View style={styles.v_container}>
          <FlatList
            data={this.state.data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.flatview}>
                <Text style={styles.t_listTip}>{item.tip}</Text>
                <Button
                  style={{ flex: 1 }}
                  large
                  fontWeight="bold"
                  backgroundColor="transparent"
                  icon={{ name: 'heart', type: 'evilicon', color: 'red' }}
                />
              </View>
            )}
            ItemSeparatorComponent={this.renderLineSeparator}
            keyExtractor={item => item.id}
          />
        </View>*/
  }

  render() {
    return (
      <View style={styles.v_container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{
            text: 'Dr. Oz Diet Tips',
            style: { color: '#fff' }
          }}
          outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
          innerContainerStyles={{ justifyContent: 'space-around' }}
        />
        <List>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <ListItem
                key={item.id}
                style={styles.t_listTip}
                title={item.tip}
                rightIcon={
                  item.isLike
                    ? { name: 'heart', type: 'font-awesome', color: 'red' }
                    : { name: 'heart', type: 'evilicon', color: 'red' }
                }
                onPressRightIcon={() => {
                  //Toggle playing or stopped state with code that kind of looks like:
                  if (item.isLike) {
                    item.isLike = false;
                  } else if (!item.like) {
                    item.isLike = true;
                  } else {
                    item.isLike = true;
                  }
                }}
                extraData={this.state}
              />
            )}
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  v_container: {
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  flatview: {
    flex: 1,
    flexDirection: 'row'
  },
  t_listTip: {
    fontSize: 12,
    flex: 0
  },
  email: {
    color: 'red'
  },
  b_listStyle: {
    backgroundColor: 'transparent'
  }
});

export default CardList;
