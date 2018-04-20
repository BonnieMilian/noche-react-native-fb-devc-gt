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

  renderTeams() {
    return (
      <View>
        <Text>{JSON.stringify(this.state.teams)}</Text>;
      </View>
    );
  }

  renderLoading() {
    return (
      <View>
        <Text> Loading... </Text>
      </View>
    )
  }

  render() {
    const {
      isLoading
    } = this.state;

    return (isLoading) ? this.renderLoading() : this.renderTeams();
  }
}
