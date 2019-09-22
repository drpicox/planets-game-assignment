package com.drpicox.game.rest.players;

import com.drpicox.game.commands.CommandController;
import com.drpicox.game.entities.EntityController;
import com.drpicox.game.game.GameController;
import com.drpicox.game.game.PlayerGameResponse;
import com.drpicox.game.maps.MapBuilderCollector;
import com.drpicox.game.players.PlayerController;
import com.drpicox.game.stars.StarController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/players")
public class PlayerRestController {

    private EntityController entityController;
    private PlayerController playerController;
    private StarController starController;
    private MapBuilderCollector mapBuilderCollector;
    private GameController gameController;
    private CommandController commandController;

    public PlayerRestController(EntityController entityController, PlayerController playerController, StarController starController, MapBuilderCollector mapBuilderCollector, GameController gameController, CommandController commandController) {
        this.entityController = entityController;
        this.playerController = playerController;
        this.starController = starController;
        this.mapBuilderCollector = mapBuilderCollector;
        this.gameController = gameController;
        this.commandController = commandController;
    }

    @GetMapping("/{playerId}")
    public PlayerGameResponse login(@PathVariable String playerId) {
        var player = playerController.get(playerId);
        if (player == null) {
            player = playerController.create(playerId);
            starController.assignHomeworld(player);
        }

        var response = gameController.getPlayerGame(player);
        return response;
    }

    @PutMapping("/{playerId}/commands")
    public PlayerGameResponse replaceCommands(@PathVariable String playerId, @RequestBody List<CommandForm> commands) {
        var player = playerController.get(playerId);
        commandController.deleteAllByPlayer(player);
        for (var command : commands) {
            var entity = entityController.get(command.getEntityId());
            var type = command.getType();
            var value = command.getValue();
            commandController.createCommand(player, entity, type, value);
        }

        var response = gameController.getPlayerGame(player);
        return response;
    }

    @PostMapping("/{playerId}/compile")
    public PlayerGameResponse compileGame(@PathVariable String playerId) {
        var player = playerController.get(playerId);
        gameController.compile();

        var response = gameController.getPlayerGame(player);
        return response;
    }
}
