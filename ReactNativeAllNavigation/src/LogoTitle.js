import React from 'react';
import {Image, Text, View, Alert, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

class LogoTitle extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.openDrawer();
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 8,
          }}>
          <Image
            source={require('./Image/pumpkin.png')}
            style={{width: 30, height: 30}}
          />
          <Text style={{marginLeft: 8, color: 'white'}}>Farhan</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(LogoTitle);
