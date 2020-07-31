import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../component/Header';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header title='User Profile' />
        <Text> Search </Text>
      </View>
    );
  }
}

export default Search;
