import React from 'react';
import {Image, Text , View } from 'react-native';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
        <Image source={require('./Image/user,png')}
         style={{width: 30, height: 30}} />
        <Text style={{marginLeft: 8 , color: 'white'}} >Farhan</Text>
      </View>
    );
  }
}

export default LogoTitle;
