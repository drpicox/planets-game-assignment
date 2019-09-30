package com.drpicox.game.blog;

import com.fasterxml.jackson.annotation.JsonValue;

import java.util.LinkedHashMap;

public class Post {

    private String id;
    private String title;
    private String body;

    public Post(String id, String title) {
        this(id, title, null);
    }

    public Post(String id, String title, String body) {
        this.id = id;
        this.title = title;
        this.body = body;
    }

    public String getBody() {
        return body;
    }

    @JsonValue
    public Object getJsonValue() {
        return new LinkedHashMap() {{
            put("id", id);
            put("title", title);
            if (body != null) put("body", body);
        }};
    }

    public String getSection(String section) {
        var result = new StringBuilder();

        var lines = getBody().split("\n");
        var current = 0;
        while (current < lines.length && !isSection(lines[current], section)) current += 1;
        current += 1;
        while (current < lines.length && !isSection(lines[current])) {
            result.append(lines[current]).append("\n");
            current += 1;
        }

        return result.toString();
    }

    private boolean isSection(String line, String section) {
        return isSection(line) &&
                line.substring(4)
                        .toLowerCase()
                        .trim()
                        .replace(" ", "-")
                        .equals(section);
    }

    private boolean isSection(String line) {
        return line.startsWith("### ");
    }
}
