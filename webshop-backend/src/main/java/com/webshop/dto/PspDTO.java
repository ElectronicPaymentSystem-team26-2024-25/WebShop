package com.webshop.dto;

public class PspDTO {
    private Long orderId;
    private String orderStatus;
    private String url;
    public PspDTO(){}

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getPspUrl() {
        return url;
    }

    public void setPspUrl(String pspUrl) {
        this.url = pspUrl;
    }
}
