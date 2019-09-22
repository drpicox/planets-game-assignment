package com.drpicox.game.maps;

import com.drpicox.game.entities.Coordinates;
import com.drpicox.game.stars.StarController;
import org.springframework.stereotype.Component;

@Component
public class TwoStarsMap implements MapBuilder {

    private StarController starController;

    public TwoStarsMap(StarController starController) {
        this.starController = starController;
    }

    @Override
    public String getName() {
        return "TwoStars";
    }

    @Override
    public void build() {
        starController.createHomeworld("Bajor", new Coordinates(3, 3));
        starController.createHomeworld("Cardassia", new Coordinates(3, 4));
    }
}
