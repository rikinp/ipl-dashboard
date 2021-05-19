import {React, useEffect, useState} from 'react'
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { Link, useParams } from 'react-router-dom'

import './HomePage.scss';
import { TeamTile } from '../components/TeamTile';

export const HomePage = () => {

    const [teams, setTeam] = useState([]);

    useEffect (
        () => {
            const fetchAllTeams = async () => {
                const response = await fetch(`http://localhost:8082/team/`);
                const data = await response.json();
                setTeam(data);
            }
            fetchAllTeams();
        }, []

    );

  return (
    <div className="HomePage">
        <div className="header-section">
            <h1 className="app-name">IPL Dashboard</h1>
        </div>
        <div className="team-grid">
            {teams.map(team => <TeamTile teamName={team.teamName}/>)}
        </div>
    </div>
  );
}

