import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const ListItem = props => {
  return props.item.map((item, id) => (
    
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.listItem}
          key={id}
          onPress={() => props.delete(id)}>
          <Text style={styles.title}>{item}</Text>
        </TouchableOpacity>
      </View>

    /*   <View style={styles.listItem} key={id}>
      <Text>{item}</Text>
    </View> */
  ));
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
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

export default ListItem;
