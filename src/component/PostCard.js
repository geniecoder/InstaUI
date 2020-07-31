import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import CircleImg from './CircleImg';
import profilePic from '../assets/images/profile_pic.jpg'
import AppStyle from '../values/AppStyle';
import dotedIcon from '../assets/images/icons/grid_icon.png'
import likeIcon from '../assets/images/icons/like_icon.png'
import likeFillIcon from '../assets/images/icons/like_fill_icon.png'
import commentIcon from '../assets/images/icons/comment_icon.png'
import forwardIcon from '../assets/images/icons/forward_icon.png';
import bookmarkIcon from '../assets/images/icons/bookmark_icon.png';

const imageSize = Dimensions.get('window').width;
const PostCard = (props) => {

    const [likeStatus, likeStatusSet] = React.useState(false);


    return(<View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CircleImg source={profilePic} size={42} />
                <View style={{ marginLeft: 8 }}>
                    <Text style={AppStyle.boldText2}>{props.name}</Text>
                    <Text style={AppStyle.bodyTextLight} >{props.subHead}</Text>
                </View>
            </View>
            <Image source={dotedIcon} />
        </View>
        <Image style={{ height: imageSize, width: imageSize, backgroundColor: 'gray' }}
            source={{ uri: props.item.image }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => {
                        var likeCount = parseInt(props.item.like_count);
                        if(likeStatus){
                            likeCount--;
                            likeStatusSet(false);
                        }else{
                            likeCount++;
                            likeStatusSet(true);
                        }
                        props.updateLikeCount(likeCount, props.index);
                    }}>
                    <Image source={likeStatus ? likeFillIcon : likeIcon} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        console.log(`itemid: ${props.item.id}`)
                        props.navigation.navigate('Comments', {id: props.item.id});
                    }}>
                    <Image style={{ marginHorizontal: 15 }} source={commentIcon} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {

                    }}>
                    <Image source={forwardIcon} />
                </TouchableOpacity>
            </View>
            <Image source={bookmarkIcon} />
        </View>
        <View style={{ marginHorizontal: 12, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[AppStyle.boldText, { fontSize: 12 }]}>Liked by </Text>
            <Text style={AppStyle.boldText2}>Abhishake</Text>
            <Text style={[AppStyle.boldText, { fontSize: 12 }]}> and </Text>
            <Text style={AppStyle.boldText2}>{`${props.item.like_count} others`}</Text>
        </View>

        <Text style={[AppStyle.boldText, { fontSize: 12, marginHorizontal: 12, marginVertical: 3 }]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut augue sit amet nunc semper aliquam ut id felis. Vestibulum nec eros tortor.
        </Text>
    </View>)
}

export default PostCard;
