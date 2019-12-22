import React,{useState} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const CounterScreen =()=>{
    const [counter,setCounter]=useState(0);
    return(
        <View>
            <Button title='Count +1' onPress={()=>{
                setCounter(counter+1);
            }}/>
            <Button title='Count -1' onPress={()=>{
                setCounter(counter-1);
            }}/>
            <Text>Count = {counter}</Text>
        </View>
    )
}

const style=StyleSheet.create({

});

export default CounterScreen;
