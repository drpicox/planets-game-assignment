package com.drpicox.game.rest;

public class GlobalRestException extends RuntimeException {

    public GlobalRestException(String message) {
        super(message);
    }

    public GlobalRestException(String message, Throwable cause) {
        super(message, cause);
    }

}
