package com.webshop.service;

import com.webshop.model.User;
import com.webshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Method to save a new user
    @Transactional
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // Method to find a user by username
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    // Method to find a user by email
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User loginUser(String email, String password) {
        // Find user by email
        User user = userRepository.findByEmail(email);
        // Check if user exists and password matches
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        // Return null or throw an exception if login fails
        throw new IllegalArgumentException("Invalid email or password");
    }
}
