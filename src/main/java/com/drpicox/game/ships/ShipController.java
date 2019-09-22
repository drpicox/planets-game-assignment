package com.drpicox.game.ships;

import com.drpicox.game.entities.Coordinates;
import com.drpicox.game.entities.EntityController;
import com.drpicox.game.players.Player;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ShipController {

    private EntityController entityController;
    private ShipRepository shipRepository;

    public ShipController(EntityController entityController, ShipRepository shipRepository) {
        this.entityController = entityController;
        this.shipRepository = shipRepository;
    }

    public void createShip(Player player, String name, Coordinates coordinates) {
        shipRepository.save(new Ship(player, name, coordinates));
    }

    public List<Ship> listAll() {
        return shipRepository.findAll();
    }

    public void moveShip(Ship ship, Coordinates coordinates) {
        ship.moveEntity(coordinates);
        shipRepository.save(ship);
    }

    public void loadPopulation(Ship ship, int amount) {
        ship.loadPopulation(amount);
        shipRepository.save(ship);
    }
}
