package com.drpicox.game.runners;

import com.drpicox.game.commands.CommandController;
import com.drpicox.game.ships.ShipController;
import org.springframework.stereotype.Component;

@Component
public class BuildShipCommandRunner implements CommandRunner {

    private CommandController commandController;
    private ShipController shipController;

    public BuildShipCommandRunner(CommandController commandController, ShipController shipController) {
        this.commandController = commandController;
        this.shipController = shipController;
    }

    @Override
    public int getPriority() {
        return 500;
    }

    @Override
    public void run() {
        var commands = commandController.listAllByType("BuildShip");

        for (var command : commands) {
            var player = command.getPlayer();
            var entity = command.getEntity();
            var name = command.getValue();
            var coordinates = entity.getCoordinates();

            shipController.createShip(player, name, coordinates);
        }
    }
}
