package com.webshop.dto;

import com.webshop.model.Order;

import java.time.LocalDateTime;

public class OrderDTO {

    private Long id;
    private String orderNumber;
    private Double totalAmount;
    private String currency;
    private String status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Long userId; // User ID instead of full User object

    // Constructors
    public OrderDTO() {}

    public OrderDTO(Long id, String orderNumber, Double totalAmount, String currency, String status,
                    LocalDateTime createdAt, LocalDateTime updatedAt, Long userId) {
        this.id = id;
        this.orderNumber = orderNumber;
        this.totalAmount = totalAmount;
        this.currency = currency;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.userId = userId;
    }
    public OrderDTO(Order o) {
        this.id = o.getId();
        this.orderNumber = o.getOrderNumber();
        this.totalAmount = o.getTotalAmount();
        this.currency = o.getCurrency();
        this.status = o.getStatus();
        this.createdAt = o.getCreatedAt();
        this.updatedAt = o.getUpdatedAt();
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
