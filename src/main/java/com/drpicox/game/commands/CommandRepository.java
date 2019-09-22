package com.drpicox.game.commands;

import com.drpicox.game.players.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommandRepository extends JpaRepository<Command, CommandId> {

    void deleteAllByPlayer(Player player);

    List<Command> findAllByPlayer(Player player);

    List<Command> findAllByType(String type);
}
