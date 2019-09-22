package com.drpicox.game.ships;

import com.drpicox.game.entities.Coordinates;
import com.drpicox.game.entities.Entity;
import com.drpicox.game.players.Player;

import java.util.Map;

@javax.persistence.Entity
public class Ship extends Entity {

    private int population = 0;

    Ship(Player player, String name, Coordinates coordinates) {
        super(player, name, coordinates, "ship");
    }

    Ship() {
    } // JPA constructor

    public void loadPopulation(int amount) {
        this.population += amount;
    }

    @Override
    public Map<String, Object> getOwnJson() {
        var result = super.getOwnJson();
        result.put("population", population);
        return result;
    }
}
