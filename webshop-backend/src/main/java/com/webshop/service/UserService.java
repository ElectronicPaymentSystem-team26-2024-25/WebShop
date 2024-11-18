package com.webshop.service;

import com.webshop.model.User;
import com.webshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @Transactional
    public User saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public boolean validateCredentials(String email, String rawPassword) {

        User user = userRepository.findByEmail(email);
        if(user !=null) return passwordEncoder.matches(rawPassword, user.getPassword());
        else return false;
    }
    public boolean userExists(String username) {
        return userRepository.findByUsername(username)!=null;
    }
    public User findUserByUsername(String username){
        return userRepository.findByUsername(username);
    }

}
