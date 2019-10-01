import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {StyleSheet, Text, View, Image, ScrollView, Alert} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

class SideMenue extends React.Component {

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
        routeName: route
    });
    this.props.navigation.dispatch(navigateAction)
}

  render() {
    return (
      <ScrollView>
        <SafeAreaView
          style={styles.container}
          forceInset={{top: 'always', horizontal: 'never'}}>
          <View>
            <View style={styles.navImageContainer}>
              <Image
                source={require('./Image/pumpkin.png')}
                style={{
                  width: 150,
                  height: 150,
                }}
              />
            </View>
            <Text style={styles.sectionHeadingStyle}>Section 1</Text>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={() => Alert.alert('Hello Lazy .Whats up')}>
                Home
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('User')}
                >
                Users
              </Text>
              <Text style={styles.navItemStyle}>Contact</Text>
              <Text style={styles.navItemStyle}>Uploads</Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
  },
  navImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },
  sectionHeadingStyle: {
    color: '#fff',
    backgroundColor: '#04b6ff',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  navSectionStyle: {
    backgroundColor: '#2e2e2e',
  },
  navItemStyle: {
    padding: 10,
    color: '#fff',
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey',
  },
});

export default SideMenue;
