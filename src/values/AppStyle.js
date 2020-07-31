import { StyleSheet, Dimensions } from 'react-native';
import AppColor from './AppColor';

const AppStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    bodyText: {

    },
    headText: {

    },
    boldText1:{
        fontSize: 14,
        fontWeight:'bold',
        color: AppColor.appGrayDark
    },
    boldText2:{
        fontSize: 12,
        fontWeight:'bold',
        color: AppColor.appGrayDark
    },
    bodyTextLight: {
        fontSize:11,
        color: 'gray'
    },
    blueText:{
        fontSize: 14,
        fontWeight: '500',
        color: AppColor.appBlue
    }
});
export default AppStyle;