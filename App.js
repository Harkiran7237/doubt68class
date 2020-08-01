import React from 'react';
import {View,Text} from 'react-native';
import BookTransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
    render(){
        return(
            <AppContainer/>
        )
    }
}
const TabNavigator = createBottomTabNavigator({
  Transaction: {screens:BookTransactionScreen},
  Search: {screens:SearchScreen}
})
const AppContainer = createAppContainer(TabNavigator);