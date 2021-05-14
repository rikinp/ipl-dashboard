package io.rikin.ipldashboard.Repository;

import java.util.List;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.CrudRepository;

import io.rikin.ipldashboard.model.Match;

public interface MatchRepository extends CrudRepository<Match,Long>{
    
    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, org.springframework.data.domain.Pageable pageable);

    default List<Match> getLatestMatchesByTeam(String teamName, int count){
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
    }
}
