import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'User',
  };
  state = {
    myTextInput: '',
    users: [
      'John',
      'James',
      'Lisa',
      'Ron',
      'Michael',
      'Steve',
      'Jon',
      'Martin',
      'Lin',
    ],
  };

  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };

  onAddUser = () => {
    this.textInput.clear();
    this.setState(prevState => {
      return {
        myTextInput: '',
        users: [...prevState.users, prevState.myTextInput],
        
      };
    });
  };

  render() {
    return (
      <View style={styles.inputWrapper}>
        <TextInput
          ref={input => {
            this.textInput = input;
          }}
          underlineColorAndroid="transparent"
          placeholder="User Name"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          style={styles.input}
          value={this.state.textToinput}
          onChangeText={this.onChangeInput}></TextInput>
        <TouchableOpacity style={styles.addUserButton} onPress={this.onAddUser}>
          <Text style={styles.addUserButtonText}>Add user name</Text>
        </TouchableOpacity>
        <ScrollView>
          {this.state.users.map((item, id) => (
            <Text style={styles.listItem} key={id}>
              {item}
            </Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  addUserButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    height: 40,
    marginTop: 16,
  },
  addUserButtonText: {
    color: 'white',
  },
  listItem: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
});

export default UserScreen;
