import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  ListView,
  Image,
  Text
} from 'react-native';
import { List, ListItem, Header } from 'react-native-elements';
import Tip from '../model/Tip';
import PopupDialog from 'react-native-popup-dialog';

var taskArray = [];

class CardList extends React.Component {
  constructor(props) {
    super(props);

    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.Id != r2.Id
    });

    this.state = {
      tasks: taskArray,
      dataSource: dataSource.cloneWithRows(taskArray),
      isReady: false,
      editMode: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ isReady: true });
  }
  componentDidMount() {
    this.getObject();
  }
  async getObject() {
    const json = await new Tip().getDataFromApi();
    taskArray = json.tips;

    //add property isChecked
    taskArray = taskArray.map(data => {
      var o = Object.assign({}, data);
      o.isChecked = false;
      return o;
    });
    //add property isLike
    taskArray = taskArray.map(data => {
      var oLike = Object.assign({}, data);
      oLike.isLike = false;
      return oLike;
    });

    this.setState({
      tasks: taskArray,
      dataSource: this.state.dataSource.cloneWithRows(taskArray),
      isReady: true
    });
  }
  findTaskIndex(taskId) {
    let { tasks } = this.state;
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].id == taskId) {
        return i;
      }
    }
    return -1;
  }
  toggleCheckForLikeTask(taskId) {
    var foundIndex = this.findTaskIndex(taskId);

    var newTasks = this.state.tasks;
    newTasks[foundIndex].isLike = !newTasks[foundIndex.isLike];

    var newDataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.Id != r2.Id
    });
    this.setState({
      tasks: taskArray,
      dataSource: newDataSource.cloneWithRows(newTasks)
    });

    console.log('index', foundIndex);
  }
  renderRow(rowData, sectionId, rowId) {
    return (
      <ListItem
        avatar={{ uri: rowData.image }}
        style={styles.t_listTip}
        title={rowData.tip}
        rightIcon={
          rowData.isLike
            ? {
                name: 'heart',
                type: 'font-awesome',
                color: 'red',
                fontSize: 30
              }
            : { name: 'heart', type: 'evilicon', color: 'red', fontSize: 30 }
        }
        onPressRightIcon={() => this.toggleCheckForLikeTask(rowData.id)}
        onPress={() => this.popupDialog.show()}
      />
    );
  }
  render() {
    let currentView = <View />;

    currentView = (
      <ListView
        style={styles.taskListView}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        enableEmptySections={true}
      />
    );
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
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

        <ListView
          style={styles.taskListView}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          enableEmptySections={true}
        />
        <PopupDialog
          ref={popupDialog => {
            this.popupDialog = popupDialog;
          }}
        >
          <View>
            <Text>Hello</Text>
          </View>
        </PopupDialog>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent'
  },
  taskListView: {
    paddingBottom: 100
  }
});

export default CardList;
