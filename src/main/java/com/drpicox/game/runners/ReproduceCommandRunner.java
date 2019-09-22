package com.drpicox.game.runners;

import com.drpicox.game.commands.CommandController;
import com.drpicox.game.ships.ShipController;
import com.drpicox.game.stars.StarController;
import org.springframework.stereotype.Component;

@Component
public class ReproduceCommandRunner implements CommandRunner {

    private CommandController commandController;
    private StarController starController;
    private ShipController shipController;

    public ReproduceCommandRunner(CommandController commandController, StarController starController, ShipController shipController) {
        this.commandController = commandController;
        this.starController = starController;
        this.shipController = shipController;
    }

    @Override
    public int getPriority() {
        return 100;
    }

    @Override
    public void run() {
        var stars = starController.listAll();
        for (var star: stars) {
            starController.reproducePopulation(star);
        }
    }
}
