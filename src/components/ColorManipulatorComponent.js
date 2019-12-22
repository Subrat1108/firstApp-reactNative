import React from 'react';
import {View,Button,StyleSheet,Text} from 'react-native';

const ColorManipulator = ({color,intensity,onIncrease,onDecrease})=>{
    return(
        <View>
            <Text>{`${color} : ${intensity}`}</Text>
            <Button onPress={()=>onIncrease()} title={`Increase ${color}`}/>
            <Button onPress={()=>onDecrease()} title={`Decrease ${color}`}/>
        </View>
    )
}

const styles =StyleSheet.create({

});

export default ColorManipulator;
