import React  from 'react';
import { StyleSheet , Text , View } from "react-native";


const Nav = (props) =>{

 

    return(
        <View style={style.mainView}>
            <Text>{props.name}</Text>
        </View>
    )
}

const style= StyleSheet.create({
    mainView:{
        backgroundColor: 'white'
    }
})
export default Nav;
