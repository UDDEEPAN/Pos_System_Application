package POS_SYSTEM.POS_SYSTEM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import POS_SYSTEM.POS_SYSTEM.dto.CustomDto;
import POS_SYSTEM.POS_SYSTEM.entity.Order;
import POS_SYSTEM.POS_SYSTEM.entity.Product;
import POS_SYSTEM.POS_SYSTEM.repositary.OrderRepositary;
import POS_SYSTEM.POS_SYSTEM.repositary.ProductRepositary;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepositary orderRepositray;

    @Autowired
    private ProductRepositary productRepositary;

    @Override
    public List<Order> getAllOrders() {
        return orderRepositray.findAll();

    }

    @Override
    public Order getOrderById(Long id) {
        return orderRepositray.findById(id).orElse(null);
    }

    @Override
    public Order createOrder(Order order) {
        return orderRepositray.save(order);
    }

    @Override
    public Order addProductToOrder(Long orderId, Long productId, Integer Quntity) {
        Order order = orderRepositray.findById(orderId).orElse(null);

        if (order == null) {
            return null;
        }
        Product product = productRepositary.findById(productId).orElse(null);

        if (product == null) {
            return null;
        }
        order.getOrderedProducts().add(product);
        order.setTotalprice(order.getTotalprice() + product.getPrice() * Quntity);
        return orderRepositray.save(order);
    }

    @Override
    public Order reomveProductFromOrder(Long orderId, Long productId) {
        Order order = orderRepositray.findById(orderId).orElse(null);

        if (order == null) {
            return null;
        }
        Product product = productRepositary.findById(productId).orElse(null);
        if (product == null) {
            return null;
        }
        order.getOrderedProducts().remove(product);
        order.setTotalprice(order.getTotalprice() - product.getPrice());
        return orderRepositray.save(order);
    }

    @Override
    public CustomDto getSumOrder() {
        return new CustomDto(orderRepositray.getSumOrder());
    }

}
