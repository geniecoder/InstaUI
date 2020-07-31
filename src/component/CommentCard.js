import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import CircleImg from './CircleImg';
import profilePic from '../assets/images/profile_pic.jpg'
import AppStyle from '../values/AppStyle';
import HTML from 'react-native-render-html';
import AppColor from '../values/AppColor';


const CommentCard = (props) => (

    <View>
        <View style={{ flexDirection: 'row', margin: 8 }}>
            <CircleImg source={{ uri: props.item.image }} size={42} />
            <View style={{ marginLeft: 8, flex: 1 }}>
                <HTML html={`<strong>${props.item.name}</strong> ${props.item.comment}`} imagesMaxWidth={Dimensions.get('window').width} />
                <View style={{ flexDirection: 'row', marginTop:8 }}>
                    <Text style={AppStyle.bodyTextLight}>{props.item.time}</Text>
                    <Text style={[AppStyle.bodyTextLight, {marginHorizontal:8}]}>4 like</Text>
                    <Text style={[AppStyle.bodyTextLight, {marginHorizontal:8, fontWeight:'bold'}]}>Reply</Text>
                </View>
            </View>
        </View>
        <View style={{flex:1, height:.5, backgroundColor:AppColor.appGrayLight1, marginLeft:57, marginRight:10}}/>
    </View>
);

export default CommentCard;
