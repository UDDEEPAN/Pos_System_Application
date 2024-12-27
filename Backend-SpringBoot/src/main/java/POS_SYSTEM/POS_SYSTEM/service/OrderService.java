package POS_SYSTEM.POS_SYSTEM.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import POS_SYSTEM.POS_SYSTEM.dto.CustomDto;
import POS_SYSTEM.POS_SYSTEM.entity.Order;

@Service
public interface OrderService {
    List<Order> getAllOrders();

    Order getOrderById(Long id);

    Order createOrder(Order order);

    Order addProductToOrder(Long orderId, Long productId, Integer Quntity);

    Order reomveProductFromOrder(Long orderId, Long productId);

    @ResponseBody
    CustomDto getSumOrder();
}
