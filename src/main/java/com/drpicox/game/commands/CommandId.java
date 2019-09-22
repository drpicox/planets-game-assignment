package com.drpicox.game.commands;

import java.io.Serializable;

public class CommandId implements Serializable {
    private String player;
    private Long entity;
    private String type;

    public CommandId(String player, Long entity, String type) {
        this.player = player;
        this.entity = entity;
        this.type = type;
    }

    CommandId() {
    }
}
