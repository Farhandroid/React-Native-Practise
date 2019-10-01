import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const ButtonFunctionality = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        underlineColorAndroid="transparent"
        placeholder="User Name"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        style={styles.addButton}
        onPress={props.show}>
        <Text style={styles.addButtonText}>Press me</Text>
      </TouchableOpacity>
    </View>

    /* <Button
          title="Press me"
          onPress={props.show}
        /> */
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%'
  },
  addButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    height: 40,
    marginTop: 16,
  },
  addButtonText: {
    color: 'white',
  },
});

export default ButtonFunctionality;
