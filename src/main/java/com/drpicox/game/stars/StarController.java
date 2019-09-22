package com.drpicox.game.stars;

import com.drpicox.game.entities.Coordinates;
import com.drpicox.game.entities.EntityController;
import com.drpicox.game.players.Player;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class StarController {

    private EntityController entityController;
    private StarRepository starRepository;

    public StarController(EntityController entityController, StarRepository starRepository) {
        this.entityController = entityController;
        this.starRepository = starRepository;
    }

    public void createHomeworld(String name, Coordinates coordinates) {
        starRepository.save(new Star(name, coordinates, 100, 100));
    }
    public void createStar(String name, Coordinates coordinates) {
        starRepository.save(new Star(name, coordinates, 100, 0));
    }

    public void assignHomeworld(Player player) {
        var stars = this.listAll();
        var homeworld = stars.stream().filter(s -> !s.hasPlayer()).findFirst().get();
        entityController.assignPlayer(homeworld, player);
    }

    public List<Star> listAll() {
        return starRepository.findAll();
    }

    public Star getStar(Coordinates coordinates) {
        return starRepository.findByCoordinates(coordinates);
    }

    public int extractPopulation(Star star, int amount) {
        var result = star.extractPopulation(amount);
        starRepository.save(star);
        return result;
    }

    public void reproducePopulation(Star star) {
        star.reproducePopulation();
        starRepository.save(star);
    }
}
