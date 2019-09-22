package com.drpicox.game.game;

import com.drpicox.game.players.Player;
import com.fasterxml.jackson.annotation.JsonValue;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class PlayerGameResponse {

    private Map<String, Object> json = new HashMap<>();
    private Map<String, Object> entities = new HashMap<>();
    private List<Object> commands = new LinkedList<>();

    public PlayerGameResponse(Player player) {
        json.put("playerId", player.getId());
        json.put("map", new HashMap<>() {{
            put("rows", 8);
            put("columns", 8);
        }});
        json.put("entities", entities.values());
        json.put("commands", commands);
    }

    void addEntity(Map<String, Object> entity) {
        entities.put(entity.get("id").toString(), entity);
    }

    void addCommand(Map<String, Object> command) {
        commands.add(command);
    }

    @JsonValue
    public Object getJson() {
        return json;
    }
}
