package com.drpicox.game.rest.game;

import com.drpicox.game.commands.CommandController;
import com.drpicox.game.entities.EntityController;
import com.drpicox.game.game.SuccessResponse;
import com.drpicox.game.maps.MapBuilderCollector;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/game")
public class GameRestController {

    private EntityController entityController;
    private CommandController commandController;
    private MapBuilderCollector mapBuilderCollector;

    public GameRestController(EntityController entityController, CommandController commandController, MapBuilderCollector mapBuilderCollector) {
        this.entityController = entityController;
        this.commandController = commandController;
        this.mapBuilderCollector = mapBuilderCollector;
    }

    @PutMapping
    public SuccessResponse replace(@RequestBody NewGameForm newGameForm) {
        var mapCode = newGameForm.getMapCode();
        var mapBuilder = mapBuilderCollector.get(mapCode);

        if (mapBuilder == null)
            throw new MapCodeNotFoundException(mapCode);

        entityController.clear();
        mapBuilder.build();

        return SuccessResponse.INSTANCE;
    }
}
