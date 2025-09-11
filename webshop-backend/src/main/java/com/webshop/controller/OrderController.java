package com.webshop.controller;

import com.webshop.dto.OrderDTO;
import com.webshop.dto.PaymentRequest;
import com.webshop.dto.PspDTO;
import com.webshop.dto.UrlDto;
import com.webshop.model.Order;
import com.webshop.service.OrderService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.math.RoundingMode;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final RestTemplate restTemplate;
    private final OrderService orderService;
    @Value("${merchant.id}")
    private String merchantId;

    @Value("${merchant.password}")
    private String merchantPassword;

    // Injecting RestTemplate and OrderService
    public OrderController(RestTemplate restTemplate, OrderService orderService) {
        this.restTemplate = restTemplate;
        this.orderService = orderService;
    }
    @PostMapping
    public ResponseEntity<UrlDto> createOrder(@RequestBody Order order) {
        Order o = orderService.createOrder(order);
        //setting payment request for psp
        PaymentRequest pr = new PaymentRequest();
        pr.setAmount((int) Math.round(order.getTotalAmount()));
        pr.setMerchantPassword(merchantPassword);
        pr.setMerchantId(merchantId);
        pr.setMerchantOrderId(o.getId().intValue());

        //psp poziv
        //Note: podesi ime response varijable za link i ovde i na frontu


        String paymentUrl = "https://localhost:8080/payment/create-order";//
        try {
            ResponseEntity<UrlDto> PspDTO = restTemplate.postForEntity(paymentUrl, pr, UrlDto.class);
            if (PspDTO.getStatusCode().is2xxSuccessful()) {//uspesno
                return ResponseEntity.ok(PspDTO.getBody());
            } else return ResponseEntity.status(PspDTO.getStatusCode()).body(PspDTO.getBody());

        } catch (Exception e) {//greska
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null); // Or return a custom error response if needed
        }
    }
    @PostMapping("/order-status")
    public ResponseEntity<?> orderCompletion(@RequestBody PspDTO pspDto) {

        Optional<Order> optionalOrder = orderService.getOrderById(pspDto.getOrderId());
        if (optionalOrder.isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Order not found");
        Order order = optionalOrder.get(); // Safely retrieve the Order object

        orderService.updateOrderStatus(order.getId(),pspDto.getOrderStatus());
        return new ResponseEntity<>(HttpStatus.OK);
    }



    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDTO> getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id)
                .map(order -> ResponseEntity.ok(new OrderDTO(order))) // Use constructor to create DTO
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<Order>> getOrdersByStatus(@PathVariable String status) {
        return ResponseEntity.ok(orderService.getOrdersByStatus(status));
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable Long id, @RequestBody String status) {
        return ResponseEntity.ok(orderService.updateOrderStatus(id, status));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }
}
