package POS_SYSTEM.POS_SYSTEM.controller;


import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import POS_SYSTEM.POS_SYSTEM.dto.AddProductDto;
import POS_SYSTEM.POS_SYSTEM.dto.CustomDto;
import POS_SYSTEM.POS_SYSTEM.entity.Order;
import POS_SYSTEM.POS_SYSTEM.service.OrderService;

@RestController
@CrossOrigin(origins = "*")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping("/orders")
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/orders/{id}")
    public Order getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id);
    }

    @PostMapping("/orders")
    public Order createOrder() {
        Order order = new Order();
        order.setOrderDateTime(LocalDateTime.now());
        order.setTotalprice(0.0);
        order.setOrderedProducts(null);

        return orderService.createOrder(order);
    }

    @PostMapping("/orders/{orderId}/addProducts")
    public Order addProductToOrder(@PathVariable Long orderId, @RequestBody AddProductDto addProductDto) {
        return orderService.addProductToOrder(orderId, addProductDto.getProudctId(), addProductDto.getQuantity());
    }

    @DeleteMapping("/orders/{orderId}/product/{productId}")
    public Order reomveProductFromOrder(@PathVariable Long orderId, @PathVariable Long productId) {
        return orderService.reomveProductFromOrder(orderId, productId);
    }
    @GetMapping("/ordercount")
    public @ResponseBody CustomDto getSumOrder() {
        return orderService.getSumOrder();
    }
}
