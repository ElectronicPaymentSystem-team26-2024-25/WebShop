package com.webshop.response;

public class LoginResponse {

    private String token;

    private long expiresIn;
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    // Getters
    public String getToken() {
        return token;
    }

    public long getExpiresIn() {
        return expiresIn;
    }

    // Setters with chaining
    public LoginResponse setToken(String token) {
        this.token = token;
        return this;
    }

    public LoginResponse setExpiresIn(long expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
}

