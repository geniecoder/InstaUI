import React, { Component } from 'react';
import { View, Text, Image, Button, TouchableWithoutFeedback, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import Header from '../component/Header';
import PostCard from '../component/PostCard';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.getParam('data', null),
      postIndex: this.props.navigation.getParam('index', 0)
    };

    this.contentView = this.contentView.bind(this);
    this.postView = this.postView.bind(this);
    this.scrollToIndex = this.scrollToIndex.bind(this);

    //console.log(`data ${this.state.data.length}`);

  }



  contentView() {
    const { postIndex, data } = this.state;
    //console.log(`index: ${postIndex} data: ${JSON.stringify(data)}`);
    return (
      <View>
        <this.postView />
      </View>
    );
  }

  scrollToIndex = (index) => {
    this.flatListRef.scrollToIndex({ animated: false, index: index });
  }

  updateLikeCount(text, index) {
    const newArray = [...this.state.data];
    newArray[index].like_count = text;
    this.setState({ available: newArray });
    console.log(`update like count`);
  }

  postView() {
    const gridMargin = 1
    const imageSize = Dimensions.get('window').width;

    if (this.state.isLoading) {
      return <ActivityIndicator style={{ justifyContent: 'center', flex: 1 }} size="large" color="#000" />;
    } else {
      return (
        <FlatList
          data={this.state.data}
          ref={(ref) => { this.flatListRef = ref; }}
          keyExtractor={item => item}
          initialScrollIndex={this.state.postIndex}
          onScrollToIndexFailed={info => {
            const wait = new Promise(resolve => setTimeout(resolve, 100));
            wait.then(() => {
              this.scrollToIndex(this.state.postIndex);
            });
          }}
          renderItem={({ item, index }) => {
            console.log(`index: ${index}`)
            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  this.props.navigation.navigate('Posts', { data: this.state.data, index: index });
                }}
              >
                <PostCard index={index} updateLikeCount={this.updateLikeCount.bind(this)} item={item} name='Mandeep' subHead='Delhi' navigation={this.props.navigation} />
              </TouchableWithoutFeedback>
            );
          }}
          numColumns={1}
          keyExtractor={(item, index) => item.id}

        />

      );
    }

  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Header title='Posts' showBackIcon={true} navigation={navigation} />
        <this.contentView />
      </View>
    );
  }
}

export default Post;
