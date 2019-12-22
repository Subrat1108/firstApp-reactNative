import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const ComponentsScreen = ()=>{
    const textVar = 'This is Component Screen. Suck it!';
    const greeting= <Text style={Style.texts}>{textVar}</Text>
    return (
        <View>
            {greeting}
        </View>
    );
}

const Style = StyleSheet.create({
    texts:{
        fontSize:25,
        color:'blue',
        paddingVertical:20,
        paddingHorizontal:10
    }
});

export default ComponentsScreen;
