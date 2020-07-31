import React, { Component } from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, FlatList, SafeAreaView, Image } from 'react-native';
import Header from '../component/Header';
import CommentCard from '../component/CommentCard';

import forwardIcon from '../assets/images/icons/forward_icon.png';
import AppStyle from '../values/AppStyle';
import AppColor from '../values/AppColor';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      data: [
        {
          name: 'Mandeep',
          time: '1m',
          comment: 'Do you like this pic? asdf asdf asdf asdfadsfdsf adsf ',
          image: 'https://i.pinimg.com/736x/c6/95/36/c69536f37e4c06e9393d14f5871318fc.jpg'

        },
        {
          name: 'Rahul Raj',
          time: '5m',
          comment: 'Love this pic',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj726MvzlnDm2GY8zY-DF98G85YVhmBdur-FE1Vvu9bQiuD8U&s'
        },
        {
          name: 'Tripti',
          time: '7m',
          comment: 'So nice',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdVP_t4rAE4JC9nmZNNPg1Py0znkWjsHkZ7f8oM3c9X_mxd_s&s'
        },
        {
          name: 'Anubhuti',
          time: '16m',
          comment: 'wow!',
          image: 'https://cdn.wallpapersafari.com/7/14/Z4ckM5.jpg'
        }
      ]
    };
    this.contentView = this.contentView.bind(this);
  }

  addComment() {
    const commentObj = {
      name: 'Mandeep',
      time: 'Now',
      comment: this.state.comment,
      image: 'https://i.pinimg.com/736x/c6/95/36/c69536f37e4c06e9393d14f5871318fc.jpg'

    }

    this.setState({ data: [...this.state.data, commentObj], comment: '' });
  }

  onChangeText(value) {
    this.setState({ comment: value });
  }

  contentView() {
    const { comment } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => {
            return <CommentCard
              item={item}
              index={index}
            />
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        <View >
          <View style={{ height: .5, backgroundColor: AppColor.appGrayLight1 }} />
          <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center', justifyContent: 'space-between' }}>
            <TextInput style={{ padding: 5 }} value={comment} onChangeText={text => this.onChangeText(text)} placeholder='Add a comment...' />
            <TouchableOpacity
              onPress={() => {
                if (comment !== '') {
                  this.addComment();
                }
              }}>


              <Text style={AppStyle.blueText}>
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Header title='Comments' showBackIcon={true} navigation={navigation} />
        <this.contentView />
      </KeyboardAvoidingView>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,

  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});

export default Comments;
