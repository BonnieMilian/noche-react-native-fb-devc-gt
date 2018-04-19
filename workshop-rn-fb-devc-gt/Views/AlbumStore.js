import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from '../config/styles.js';
//Services
import footballApi from '../services/football-api';

export default class AlbumStore extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      isLoading: true,
    }
  }
  componentDidMount() {
    const worldCupId = 467;
    footballApi.getTeamsByCompetition(worldCupId).then((teams) => {
      this.setState({
        teams,
        isLoading: false
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Album Store</Text>
      </View>
    );
  }
}
