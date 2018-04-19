import axios from "axios";

const API_URL = 'http://api.football-data.org/v1';

export default {
  async getTeamsByCompetition(competitionId) {
    const teamsRequestUrl = `${API_URL}/competitions/${competitionId}/teams`;
    const teams = await axios.get(teamsRequestUrl);
    return teams.data;
  }
};