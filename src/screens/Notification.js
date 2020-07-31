import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../component/Header';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header title='Notifications' />
        <Text> Notification </Text>
      </View>
    );
  }
}

export default Notification;
