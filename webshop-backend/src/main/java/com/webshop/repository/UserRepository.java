package com.webshop.repository;

import com.webshop.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // You can add custom queries here if needed
    User findByUsername(String username);
    User findByEmail(String email);
}
