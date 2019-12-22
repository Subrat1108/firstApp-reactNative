import React,{useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import ColorManipulator from '../components/ColorManipulatorComponent';

const SquareScreen = ()=>{
    const [red,setRed]=useState(0);
    const [green,setGreen]=useState(0);
    const [blue,setBlue]=useState(0);
    const [colorIncreament,setColorIncreament]=useState(10);
    let colorManipulatorHelper=(color,increament)=>{
        switch (color) {
            case 'red':
                if(red+increament>255){
                    setRed(255);
                }else if(red+increament<0){
                    setRed(0);
                }else {
                    setRed(red+increament)
                };
                break;
            case 'green':
                if(green+increament>255){
                    setGreen(255);
                }else if(green+increament<0){
                    setGreen(0);
                }else {
                    setGreen(green+increament)
                };
                break;
            case 'blue':
                if(blue+increament>255){
                    setBlue(255);
                }else if(blue+increament<0){
                    setBlue(0);
                }else {
                    setBlue(blue+increament)
                };
                break;
            default:
                alert('issue');
                break;
        }
    }
    return(
        <View>
            <Text>Tune</Text>
            <View style={styles.ColorIncreament}>
                <Button onPress={()=>{setColorIncreament(colorIncreament-1)}} title='-'/>
                <Text style={{flex: 4}}>{colorIncreament}</Text>
                <Button onPress={()=>{setColorIncreament(colorIncreament+1)}} title='+'/>
            </View>
            <ColorManipulator
                color='Red'
                intensity={red}
                onIncrease={()=>{colorManipulatorHelper('red',colorIncreament)}}
                onDecrease={()=>{colorManipulatorHelper('red',-1*colorIncreament)}}
            />
            <ColorManipulator
                color='Green'
                intensity={green}
                onIncrease={()=>{colorManipulatorHelper('green',colorIncreament)}}
                onDecrease={()=>{colorManipulatorHelper('green',-1*colorIncreament)}}
            />
            <ColorManipulator
                color='Blue'
                intensity={blue}
                onIncrease={()=>{colorManipulatorHelper('blue',colorIncreament)}}
                onDecrease={()=>{colorManipulatorHelper('blue',-1*colorIncreament)}}
            />
            <View style={{height:100, backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>

    )
}

const styles=StyleSheet.create({
    ColorIncreament:{
        flexDirection:'row',
        height:50
    }
});

export default SquareScreen;
