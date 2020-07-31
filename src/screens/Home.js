import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AppStyle from '../values/AppStyle';
import Header from '../component/Header';


class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={{flex:1}}>
        <Header title='Home' />
        <View style={AppStyle.container}>
          <Text> Home </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Comments');
            }}>
            <Text>Comments</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

export default Home;
