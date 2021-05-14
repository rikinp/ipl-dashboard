package io.rikin.ipldashboard.Repository;

import org.springframework.data.repository.CrudRepository;

import io.rikin.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>{

    Team findByTeamName(String teamName);

}
