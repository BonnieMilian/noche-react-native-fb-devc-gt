import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './Views/Home.js';
import AlbumStore from './Views/AlbumStore.js';
import MyAlbum from './Views/MyAlbum.js';

const NavigationMap = StackNavigator(
  {
    Home: { screen: Home },
    AlbumStore: { screen: AlbumStore },
    MyAlbum: { screen: MyAlbum }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return <NavigationMap /> ;
  }
}