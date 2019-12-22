import React,{useState} from 'react';
import {View,Text,Button,StyleSheet,FlatList} from 'react-native';

const ColorScreen =()=>{
    const [color,setColor]=useState([]);
    return(
        <View>
            <Button title='add a random color' onPress={()=>{
                setColor([...color,randomColorGenerator()]);
            }}/>
            <FlatList
                keyExtractor={item=>item}
                data={color}
                renderItem={({item})=>{
                    return <View style={{height:50,backgroundColor:item}}></View>
                }}
            />
        </View>
    )
}

const randomColorGenerator =()=>{
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    return `rgb(${red},${blue},${green})`;
}
const style=StyleSheet.create({

});

export default ColorScreen;
