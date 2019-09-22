package com.drpicox.game.players;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Player {

    @Id
    private String id;

    public Player(String id) {
        this.id = id;
    }

    Player() {
    }

    public String getId() {
        return id;
    }

}
