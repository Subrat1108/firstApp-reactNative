import React from 'react';
import {View,StyleSheet} from 'react-native';

import ImageDetailsComponent from '../components/imageDetailsComponent';

const ImageComponentScreen = ()=>{
    return (
        <View style={styles.viewStyle}>
            <ImageDetailsComponent title='Mountain' rating='47' imageSource={require('../../assets/mountain.jpg')}/>
            <ImageDetailsComponent title='Beach' rating='65' imageSource={require('../../assets/beach.jpg')}/>
            <ImageDetailsComponent title='Forest' rating='32'  imageSource={require('../../assets/forest.jpg')}/>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle:{
        padding:5,
        backgroundColor:'#29303b',
        flexDirection:'column',
        flex:1
    }
});

export default ImageComponentScreen;
