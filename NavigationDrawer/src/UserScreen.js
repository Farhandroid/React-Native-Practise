import React  from 'react';
import { StyleSheet , Text , View } from "react-native";

const UserScreen = (props) =>{
    return(
        <View style={style.mainView}>
           <Text>Hello world from user</Text>
        </View>
    )
}

const style= StyleSheet.create({
    mainView:{
        backgroundColor: 'white',
        flex: 1
    }
})

export default UserScreen;
