package com.drpicox.game.players;

import org.springframework.stereotype.Controller;

@Controller
public class PlayerController {

    private PlayerRepository playerRepository;

    public PlayerController(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public Player get(String playerId) {
        return playerRepository.findById(playerId).orElse(null);
    }

    public Player create(String playerId) {
        var player = new Player(playerId);
        playerRepository.save(player);
        return player;
    }
}
