import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

class TextInputTest extends React.Component {
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
    this.setState(prevState => {
      return {
        myTextInput: '',
        users: [...prevState.users, prevState.myTextInput],
      };
    });
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          value={this.state.textToinput}
          onChangeText={this.onChangeInput}></TextInput>
        <Button title="Add user name" onPress={this.onAddUser} />
        {this.state.users.map((item,id) => (
          <Text style={styles.users} key={id}>
            {item}
          </Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    marginTop: 20,
    fontSize: 20,
    padding: 10,
  },
});

export default TextInputTest;
