import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

const ImageDetailsComponent = ({title,imageSource,rating})=>{
    return (
        <View style={styles.container}>
            <Image source={imageSource}/>
            <View style={styles.details}>
                <Text style={styles.textStyle}>This is a {title} !</Text>
                <Text style={styles.textStyle}>It's rated - {rating}</Text>
            </View>
        </View>
    );
};

const styles= StyleSheet.create({
    container:{
        padding:5,
        flex:1,
        flexDirection:'row'
    },
    details:{
        flex:1,
        flexDirection:'column'
    },
    textStyle:{
        backgroundColor:'grey',
        color:'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex:1
    }
});

export default ImageDetailsComponent;
