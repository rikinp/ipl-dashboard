import {React, useEffect, useState} from 'react'
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { Link, useParams } from 'react-router-dom'
import { PieChart } from 'react-minimal-pie-chart'

import './TeamPage.scss'

export const TeamPage = () => {

    const [team, setTeam] = useState({matches : []});
    const { teamName } = useParams();
    const someVariable = teamName;

    useEffect (
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
                const data = await response.json();
                console.log(data);
                setTeam(data);
            }
            fetchMatches();
        }, [teamName]

    );

    if(!team || !team.teamName){
        return <h1>Team Not Found</h1>
    }

  return (
    <div className="TeamPage">
        <div className="team-logo">
            <img src={`../images/${someVariable}.svg`} alt="Logo" width="295" height="200"/>
        </div>
        <div className="team-name-section">
            <h1 className="team-name">{team.teamName}</h1>
        </div>
        <div className="win-loss-section">
            Wins / Losses
                <PieChart
                    data={[
                        { title: 'Losses', value: team.totalMatches - team.totalWins, color: '#a34d5d' },
                        { title: 'Wins', value: team.totalWins, color: '#4da375' },
                    ]}
                    />
        </div>
        <div className="match-detail-section">
            <h3>Latest Matches</h3>
            <MatchDetailsCard teamName = { team.teamName } match={team.matches[0]}/>
        </div>
        {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName = { team.teamName } match={match} />)}
        <div className="more-link">
            <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More ></Link>
        </div>
    </div>
  );
}

