import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AppColor from '../values/AppColor';
import backIcon from '../assets/images/icons/left-arrow.png'

const Header = (props) => (
    <SafeAreaView style={{backgroundColor:AppColor.appGrayLight}}>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', flex:1}}>
            {props.showBackIcon ?<TouchableOpacity onPress={() => {
                  props.navigation.goBack();
            }}>
              <Image style={{ margin: 10, tintColor:AppColor.appGrayDark }} source={backIcon} />
            </TouchableOpacity> :
            <View style={{marginLeft:25}}/>}
            <View style={{ justifyContent: 'center', flex:1, marginLeft: 10, alignItems:'center' }}>
              <Text numberOfLines={1} style={{ fontSize: 18, marginRight:25, color: AppColor.appGrayDark }}>{props.title}</Text>
            </View>
          </View>
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
      height: 55,
      alignSelf: 'stretch',
      backgroundColor: AppColor.appGrayLight,
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: "center",
      paddingRight: 15,
      paddingLeft: 5,
      borderBottomColor: AppColor.appGrayLight1,
      borderBottomWidth:1
      
    },
  });

export default Header;

