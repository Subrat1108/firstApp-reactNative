import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = (props) => {
  return (
      <View>
        <Button
            onPress={()=>props.navigation.navigate('Component')}
            title='Go to Component'
            style={styles.Buttons}
        />

        <Button
            onPress={()=>props.navigation.navigate('List')}
            title='Go to List'
            style={styles.Buttons}
        />

        <Button
            onPress={()=>props.navigation.navigate('Image')}
            title='Go to Image'
            style={styles.Buttons}
        />

          <Button
              onPress={()=>props.navigation.navigate('Counter')}
              title='Go to Counter'
              style={styles.Buttons}
          />

          <Button
              onPress={()=>props.navigation.navigate('Color')}
              title='Go to Colors'
              style={styles.Buttons}
          />

          <Button
              onPress={()=>props.navigation.navigate('Square')}
              title='Go to Color Generator'
              style={styles.Buttons}
          />

          <Button
              onPress={()=>props.navigation.navigate('Text')}
              title='Go to Text'
              style={styles.Buttons}
          />
      </View>
  )
};

const styles = StyleSheet.create({
  Touchable: {
    fontSize: 20,
    padding:25
  },
  Buttons:{
    marginVertical: 40,
    padding:25,
    borderBottomColor:'white',
    borderBottomWidth:2
  }
});

export default HomeScreen;
