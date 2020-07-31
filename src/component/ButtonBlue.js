import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AppColor from '../values/AppColor';


export default ButtonBlue = (props) => {

  
    return (
        <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => props.onPress()}
            underlayColor='#fff'>
            <Text style={styles.btnText}>{props.text}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    btnStyle: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: AppColor.appBlue,
        height: 30,
        backgroundColor: AppColor.appBlue,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 13,
    },
});