import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../config/styles.js';

export default class Home extends Component {
  /*
  static navigationOptions = {
    header: null
  }
  */
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}
