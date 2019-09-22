package com.drpicox.game.game;

import com.drpicox.game.commands.CommandController;
import com.drpicox.game.entities.EntityController;
import com.drpicox.game.players.Player;
import com.drpicox.game.runners.CommandRunnerController;
import com.drpicox.game.stars.StarController;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class GameController {

    private EntityController entityController;
    private StarController starController;
    private CommandController commandController;
    private CommandRunnerController commandRunnerController;

    public GameController(EntityController entityController, StarController starController, CommandController commandController, CommandRunnerController commandRunnerController) {
        this.entityController = entityController;
        this.starController = starController;
        this.commandController = commandController;
        this.commandRunnerController = commandRunnerController;
    }

    public PlayerGameResponse getPlayerGame(Player player) {
        var stars = starController.listAll();
        var owns = entityController.listAllOwnedBy(player);
        var coordinatesSet = owns.stream().map(e -> e.getCoordinates()).collect(Collectors.toSet());
        var seen = entityController.listAllIn(coordinatesSet);
        var commands = commandController.listAllByPlayer(player);

        var gameResponse = new PlayerGameResponse(player);
        stars.forEach(s -> gameResponse.addEntity(s.getDistantJson()));
        seen.forEach(e -> gameResponse.addEntity(e.getVisibleJson()));
        owns.forEach(e -> gameResponse.addEntity(e.getOwnJson()));
        commands.forEach(c -> gameResponse.addCommand(c.getJson()));

        return gameResponse;
    }

    public void compile() {
        commandRunnerController.runAll();
        commandController.clear();
    }
}
