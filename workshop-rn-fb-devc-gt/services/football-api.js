import { AsyncStorage } from 'react-native';
import axios from "axios";
const secondaryDate = require('../teams.json');

const API_URL = 'http://api.football-data.org/v1';

export default {
  async getTeamsByCompetition(competitionId) {
    const teamsRequestUrl = `${API_URL}/competitions/${competitionId}/teams`;
    try {
      const teams = await axios.get(teamsRequestUrl);
      return teams.data;
    } catch(err) {
      return secondaryDate;
    }
  },
  async saveCountry(country) {
    let countriesList = await AsyncStorage.getItem('countries');
    countriesList = JSON.parse(countriesList);
  }
};