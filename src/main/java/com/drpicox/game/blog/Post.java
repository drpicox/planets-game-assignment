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

}
