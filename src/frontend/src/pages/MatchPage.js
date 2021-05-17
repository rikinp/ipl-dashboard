import {React, useEffect, useState} from 'react'
import { MatchDetailsCard } from '../components/MatchDetailsCard'
import { useParams } from 'react-router-dom'

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const { teamName, year } = useParams();

    useEffect (
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:8082/team/${teamName}/matches?year=${year}`);
                const data = await response.json();
                console.log(data);
                setMatches(data);
            }
            fetchMatches();
        }, [teamName]

    );

  return(
    <div className="MatchPage">
        <h1>Match Page</h1>
        {
            matches.map(match => <MatchDetailsCard match={match} teamName={teamName}/>)
        }

    </div>
  );
}

