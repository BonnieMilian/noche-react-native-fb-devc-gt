import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 30 }}>FB DevC GT</Text>
        <Image source={require('./assets/database.png')} />
        <Image source={require('./assets/login.png')}
               style={{marginTop: 10}} />
        <Image source={require('./assets/graph.png')}
               style={{width: 100, height: 100, marginTop: 20}} />
        <Image source={require('./assets/cup.png')}
               style={{width: 200, resizeMode: 'contain'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
