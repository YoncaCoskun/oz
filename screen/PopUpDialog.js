import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  Card,
  Button,
  Icon,
  TouchableNativeFeedback,
  ListView
} from 'react-native-elements';

var taskArray = [];
class PopupDialog extends React.Component {
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
  icon: {
    alignSelf: 'flex-end'
  }
});
export default PopupDialog;
