import React,{useReducer} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import ColorManipulator from '../components/ColorManipulatorComponent';

const reducer=(state,action)=>{
    switch (action.toChange) {
        case 'red':
            if(state.red+action.amount>255){
                return {...state,red:255}
            }else if(state.red+action.amount<0){
                return {...state,red:0}
            }else {
                return {...state,red:state.red+action.amount}
            };
            break;
        case 'green':
            if(state.green+action.amount>255){
                return {...state,green:255}
            }else if(state.green+action.amount<0){
                return {...state,green:0}
            }else {
                return {...state,green:state.green+action.amount}
            };
            break;
        case 'blue':
            if(state.blue+action.amount>255){
                return {...state,blue:255}
            }else if(state.blue+action.amount<0){
                return {...state,blue:0}
            }else {
                return {...state,blue:state.blue+action.amount}
            };
            break;
        case 'colorIncreament':
            return {...state,colorIncreament:state.colorIncreament+action.amount}
            break;
        default:
            return state;
            break;
    }
}

const SquareScreen = ()=>{
    const[state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0,colorIncreament:10});
    return(
        <View>
            <Text>Tune</Text>
            <View style={styles.ColorIncreament}>
                <Button onPress={()=>dispatch({toChange:'colorIncreament',amount:-1})} title='-'/>
                <Text style={{flex: 4}}>{state.colorIncreament}</Text>
                <Button onPress={()=>dispatch({toChange:'colorIncreament',amount:1})} title='+'/>
            </View>
            <ColorManipulator
                color='Red'
                intensity={state.red}
                onIncrease={()=>dispatch({toChange:'red',amount:state.colorIncreament})}
                onDecrease={()=>dispatch({toChange:'red',amount:-1*state.colorIncreament})}
            />
            <ColorManipulator
                color='Green'
                intensity={state.green}
                onIncrease={()=>dispatch({toChange:'green',amount:state.colorIncreament})}
                onDecrease={()=>dispatch({toChange:'green',amount:-1*state.colorIncreament})}
            />
            <ColorManipulator
                color='Blue'
                intensity={state.blue}
                onIncrease={()=>dispatch({toChange:'blue',amount:state.colorIncreament})}
                onDecrease={()=>dispatch({toChange:'blue',amount:-1*state.colorIncreament})}
            />
            <View style={{height:100, backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}}/>
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
