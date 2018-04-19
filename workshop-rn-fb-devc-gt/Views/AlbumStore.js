import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from '../config/styles.js';

export default class AlbumStore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Album Store</Text>
      </View>
    );
  }
}
