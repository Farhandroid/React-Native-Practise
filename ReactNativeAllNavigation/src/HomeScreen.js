import React, {Component} from 'react';
import LogoTitle from './LogoTitle';
import {StyleSheet, Text, View, Button} from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTitle: <LogoTitle/>,
    headerStyle: {
      backgroundColor: '#7a42f4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={style.mainView}>
        <Text>Hello world from home</Text>
        <Button
          title="Go to user Screen"
          onPress={() => this.props.navigation.navigate('User')}></Button>
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default HomeScreen;
