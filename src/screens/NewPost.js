import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../component/Header';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header title='New Post' />
        <Text> NewPost </Text>
      </View>
    );
  }
}

export default NewPost;
