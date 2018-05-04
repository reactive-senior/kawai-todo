import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform } from 'react-native';

import ToDo from './ToDo';
import { ScrollView } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get("window");

export default class App extends React.Component {

  state = {
    newToDo: ""
  };

  render() {

    const { newToDo } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Text style={styles.title}>Kawai Todo</Text>
        <View style={styles.card}>
          <TextInput 
            style={styles.input} 
            value={newToDo}
            onChangeText={this._controllNewToDo}
            placeholder={"New To Do"} 
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
          />
          <ScrollView>
            <ToDo />
          </ScrollView>
        </View>
      </View>
    );
  }

  _controllNewToDo = text => {
    this.setState({
      newToDo: text
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 70,
    fontWeight: "200",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5.0,
        shadowOffset:{width: 0, height: -1},
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25,
  }
});
