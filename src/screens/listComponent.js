import React from 'react';
import {Text,StyleSheet,FlatList} from 'react-native';

const ListComponentsScreen = ()=>{
    const friends=[
        {name:'Friend #1',age:'21'},
        {name:'Friend #2',age:'24'},
        {name:'Friend #3',age:'20'},
        {name:'Friend #4',age:'26'},
        {name:'Friend #5',age:'27'},
        {name:'Friend #6',age:'23'},
        {name:'Friend #7',age:'22'},
        {name:'Friend #8',age:'20'},
        {name:'Friend #9',age:'26'},
        {name:'Friend #10',age:'25'},
        {name:'Friend #11',age:'21'},
        {name:'Friend #12',age:'25'},
        {name:'Friend #13',age:'24'},
        {name:'Friend #14',age:'20'},
        {name:'Friend #15',age:'27'},
        {name:'Friend #16',age:'24'},
        {name:'Friend #17',age:'23'},
        {name:'Friend #18',age:'24'},
        {name:'Friend #19',age:'20'},
        {name:'Friend #20',age:'21'}
    ]
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={friend=>friend.name}
            data={friends}
            renderItem={({item})=>{
                return <Text style={style.textStyle}>{item.name} Age-{item.age}</Text>
            }}
        />
    )
}

const style = StyleSheet.create({
    textStyle:{
        marginVertical:30,
        paddingVertical:5,
        paddingHorizontal:10,
        fontSize:20
    }
});

export default ListComponentsScreen;
