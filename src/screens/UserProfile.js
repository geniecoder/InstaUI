import React, { Component } from 'react';
import { View, Text, Image, Button, TouchableWithoutFeedback, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import Header from '../component/Header';
import profilePic from '../assets/images/profile_pic.jpg'
import CircleImg from '../component/CircleImg';
import ButtonBlue from '../component/ButtonBlue';
import AppStyle from '../values/AppStyle';
import AppColor from '../values/AppColor';

import gridIcon from '../assets/images/icons/grid_icon.png';
import listIcon from '../assets/images/icons/list_icon.png';
import profileIcon from '../assets/images/icons/profile_icon.png';
import { GetApiRequest } from '../utils/ApiCall';


class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            selectedTab: 1,
            data: null
        };

        this.userInfoView = this.userInfoView.bind(this);
        this.contentView = this.contentView.bind(this);
        this.gridPostView = this.gridPostView.bind(this);
    }

    componentDidMount() {
        this.loadPost();
    }

    loadPost() {
        GetApiRequest('https://api.jsonbin.io/b/5f1da78991806166284947fd').then(response => {
            this.setState({ data: response, isLoading: false });
            console.log(`response: ${JSON.stringify(response)}`);
        })
    }


    userInfoView() {
        return (
            <View style={{ margin: 10 }} >
                <View style={{ flexDirection: 'row' }}>
                    <CircleImg source={profilePic} size={100} borderWidth={1} borderColor={'gray'} />
                    <View style={{ flex: 1, marginLeft: 25, marginRight: 20, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={AppStyle.boldText1}>456</Text>
                                <Text style={AppStyle.bodyTextLight}>Posts</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={AppStyle.boldText1}>133K</Text>
                                <Text style={AppStyle.bodyTextLight}>followers</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={AppStyle.boldText1}>456</Text>
                                <Text style={AppStyle.bodyTextLight}>following</Text>
                            </View>
                        </View>
                        <View style={{ height: 10 }} />
                        <ButtonBlue text='Follow' onPress={() => console.log(`follow`)} />
                    </View>
                </View>
                <Text style={[AppStyle.boldText2, { marginTop: 10 }]}>Mandeep Singh</Text>
                <Text style={AppStyle.bodyTextLight}>App Developer</Text>
                <Text style={[AppStyle.boldText2, { marginTop: 5 }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis rutrum nisl, et mattis sapien. Integer sollicitudin lacusaaugue vestibulum ultrices.</Text>
                <View style={{ height: .5, backgroundColor: AppColor.appGrayLight1, marginTop: 20 }} />
                <Text style={[AppStyle.blueText, { alignSelf: 'center', marginVertical: 7 }]}>Call</Text>
                <View style={{ height: .5, backgroundColor: AppColor.appGrayLight1 }} />
            </View>
        );
    }

    selectTab(tabNo) {
        this.setState({ selectedTab: tabNo });
    }


    contentView() {
        const { selectedTab } = this.state;
        return (
            <View style={{flex:1}}>
                <this.userInfoView />
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 50, marginBottom: 8 }}>
                        <TouchableWithoutFeedback
                            onPress={() => this.selectTab(1)}>
                            <Image source={gridIcon} style={{ tintColor: selectedTab === 1 ? AppColor.appBlue : AppColor.appGrayLight1 }} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => this.selectTab(2)}>
                            <Image source={listIcon} style={{ tintColor: selectedTab === 2 ? AppColor.appBlue : AppColor.appGrayLight1 }} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => this.selectTab(3)}>
                            <Image source={profileIcon} style={{ tintColor: selectedTab === 3 ? AppColor.appBlue : AppColor.appGrayLight1 }} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <this.gridPostView />
            </View>

        );
    }

    gridPostView() {
        const gridMargin = 1
        const imageSize = Dimensions.get('window').width / 3 - gridMargin;
        if (this.state.isLoading) {
            return <ActivityIndicator style={{justifyContent:'center', flex:1}} size="large" color="#000" />;
        } else {
            return (
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        this.props.navigation.navigate('Posts', {data: this.state.data, index: index});
                                    }}
                                >
                                    <View >
                                        <Image style={{ height: imageSize, width: imageSize, backgroundColor: 'gray', marginLeft: index % 3 == 0 ? 0 : gridMargin }}
                                            source={{ uri: item.image }}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            );
                        }}
                        numColumns={3}
                        columnWrapperStyle={{ justifyContent: 'flex-start', margin: gridMargin / 2 }}
                    />
                
            );
        }

    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title='User Profile' />
                <this.contentView />
            </View>
        );
    }
}

export default UserProfile;
