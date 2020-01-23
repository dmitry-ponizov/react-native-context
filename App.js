import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './src/screens/indexScreen';
import { Provider } from './src/context/BlogContex'

const AppNavigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  },
);

const App = createAppContainer(AppNavigator);

export default () => {
  return <Provider><App /></Provider>
}
