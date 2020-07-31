import React from 'react';
import { Image, StyleSheet } from 'react-native';

const componentName = (props) =>
    <Image style={{
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
        overflow: 'hidden',
        borderWidth: props.borderWidth,
        borderColor: props.borderColor
    }} source={props.source} />



const style = StyleSheet.create({
    circleStyle: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red"
    }
});

export default componentName;
