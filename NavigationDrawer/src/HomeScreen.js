import React , {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class HomeScreen extends Component {
// static navigationOptions = {
//     drawerIcon: (
//         <Image source={require('./Image/')}
//         style={{width: 30, height: 30}} />
//     )
//   };

  render() {
    return (
      <View style={style.mainView}>
        <Text>Hello world from home</Text>
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
