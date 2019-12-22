import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/Components';
import ListComponentsScreen from './src/screens/listComponent';
import ImageComponentScreen from './src/screens/image';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/squareScreen';
import TextScreen from './src/screens/TextScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component:ComponentsScreen,
    List:ListComponentsScreen,
    Image:ImageComponentScreen,
    Counter:CounterScreen,
    Color:ColorScreen,
      Square:SquareScreen,
      Text:TextScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
