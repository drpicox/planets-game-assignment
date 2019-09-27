package com.drpicox.game.maps;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MapBuilderCollector {

    private List<MapBuilder> mapBuilderList;

    public MapBuilderCollector(List<MapBuilder> mapBuilderList) {
        this.mapBuilderList = mapBuilderList;
    }

    public MapBuilder get(String name) {
        return this.mapBuilderList.stream().filter(m -> m.getName().equals(name)).findFirst().orElse(null);
    }
}
