import React from 'react';
import {Alert, StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import ButtonFunctionality from './src/ButtonFunctionality';
import ListItem from './src/ListItem';
import {createAppContainer} from 'react-navigation';
import UserScreen from './src/User';
import LogoTitle from "./src/LogoTitle";
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
    
  };

  state = {
    random: [20, 837],
  };

  addRandomNumber = () => {
    const randomNumberGenerator = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNumberGenerator],
      };
    });
  };

  deleteItem = position => {
    //Alert.alert('Delete');
    const newArray = this.state.random.filter((item, index) => {
      return position != index;
    });

    this.setState({
      random: newArray,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Button
          title="Go to user Screen"
          onPress={() => this.props.navigation.navigate('User')}></Button>
        <ButtonFunctionality show={this.addRandomNumber} />
        <ScrollView style={styles.scrollViewStyle}>
          <ListItem item={this.state.random} delete={this.deleteItem} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
  },
  scrollViewStyle: {
    width: '100%'
  },
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    User: UserScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitle: <LogoTitle />,
      headerStyle: {
        backgroundColor: '#7a42f4',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(AppNavigator);
