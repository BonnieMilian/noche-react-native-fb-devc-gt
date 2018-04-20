import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import SvgUri from 'react-native-svg-uri';


export default class Country extends React.Component {
  constructor(props) {
    super(props);
  }

  renderImage(image) {
    if(image && image.length > 0) {
      return (
        <SvgUri
          source={{ uri: image }}
          style={styles.image}
          width='50'
          height='50' />);
    }
    return (
      <Image
        source={{ uri: 'https://cdn.onlinewebfonts.com/svg/img_503553.png'}}
        style={styles.image} />);
  }

  render() {
    const {
      name,
      image,
      onPressCountry
    } = this.props;
    
    return (
      <TouchableOpacity style={styles.countryContainer} onPress={onPressCountry}>
        <View>
          {this.renderImage(image)}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.countryTitle}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  countryContainer: {
    backgroundColor: '#485460',
    borderBottomWidth: 1,
    borderColor: '#000000',
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  countryTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    justifyContent: 'center'
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
});
