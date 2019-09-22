package com.drpicox.game.runners;

import com.drpicox.game.commands.CommandController;
import com.drpicox.game.ships.Ship;
import com.drpicox.game.ships.ShipController;
import com.drpicox.game.stars.StarController;
import org.springframework.stereotype.Component;

@Component
public class LoadShipCommandRunner implements CommandRunner {

    private CommandController commandController;
    private StarController starController;
    private ShipController shipController;

    public LoadShipCommandRunner(CommandController commandController, StarController starController, ShipController shipController) {
        this.commandController = commandController;
        this.starController = starController;
        this.shipController = shipController;
    }

    @Override
    public int getPriority() {
        return 200;
    }

    @Override
    public void run() {
        var commands = commandController.listAllByType("LoadShip");

        for (var command : commands) {
            var ship = (Ship) command.getEntity();
            var amount = Integer.parseInt(command.getValue());
            var coordinates = ship.getCoordinates();
            var star = starController.getStar(coordinates);

            amount = starController.extractPopulation(star, amount);
            shipController.loadPopulation(ship, amount);
        }
    }
}
