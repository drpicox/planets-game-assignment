package com.drpicox.game.stars;

import com.drpicox.game.entities.Coordinates;
import com.drpicox.game.entities.Entity;

import java.util.Map;

@javax.persistence.Entity
public class Star extends Entity {

    private int size;
    private int population;

    public Star(String name, Coordinates coordinates, int size, int population) {
        super(name, coordinates, "star");
        this.size = size;
        this.population = population;
    }

    Star() {
    } // JPA constructor

    public Map<String, Object> getDistantJson() {
        var result = super.getVisibleJson();
        result.remove("playerId");
        return result;
    }

    public Map<String, Object> getVisibleJson() {
        var result = super.getVisibleJson();
        result.put("size", size);
        result.put("population", population);
        return result;
    }

    public int extractPopulation(int amount) {
        amount = Math.min(amount, population);
        this.population -= amount;
        return amount;
    }

    public void reproducePopulation() {
        this.population = Math.min(size, population + population / 10);
    }
}
