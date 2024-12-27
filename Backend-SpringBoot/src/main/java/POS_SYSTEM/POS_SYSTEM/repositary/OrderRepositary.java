package POS_SYSTEM.POS_SYSTEM.repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import POS_SYSTEM.POS_SYSTEM.entity.Order;

@Repository
public interface OrderRepositary extends JpaRepository<Order, Long> {
    @Query(value = "SELECT COUNT(id) FROM orders", nativeQuery = true)
    int getSumOrder();
}
