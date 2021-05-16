import {React, useEffect, useState} from 'react'
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { useParams } from 'react-router-dom'

export const MatchPage = () => {

    const [match, setMatches] = useState({});
    const { teamName, year } = useParams();

    useEffect (
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:8082/team/${teamName}/matches=?${year}`);
                const data = await response.json();
                setMatches(data);
            }
            fetchMatches();
        }, []

    );

  return(
    <div className="MatchPage">
        <h1>Match Page</h1>
    </div>
  );
}

