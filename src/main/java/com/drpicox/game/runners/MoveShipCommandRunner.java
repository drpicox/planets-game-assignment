package com.drpicox.game.runners;

import com.drpicox.game.commands.CommandController;
import com.drpicox.game.ships.Ship;
import com.drpicox.game.ships.ShipController;
import org.springframework.stereotype.Component;

@Component
public class MoveShipCommandRunner implements CommandRunner {

    private CommandController commandController;
    private ShipController shipController;

    public MoveShipCommandRunner(CommandController commandController, ShipController shipController) {
        this.commandController = commandController;
        this.shipController = shipController;
    }

    @Override
    public int getPriority() {
        return 300;
    }

    @Override
    public void run() {
        var commands = commandController.listAllByType("MoveShip");

        for (var command : commands) {
            var ship = (Ship) command.getEntity();
            var direction = command.getValue();
            var coordinates = ship.getCoordinates().move(direction);

            shipController.moveShip(ship, coordinates);
        }
    }
}
