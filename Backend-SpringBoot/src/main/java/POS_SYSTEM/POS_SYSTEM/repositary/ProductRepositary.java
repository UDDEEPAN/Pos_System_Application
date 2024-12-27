package POS_SYSTEM.POS_SYSTEM.repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import POS_SYSTEM.POS_SYSTEM.entity.Product;

@Repository
public interface ProductRepositary  extends JpaRepository<Product,Long>{
    @Query (value = "SELECT COUNT(id) FROM product", nativeQuery = true)
   int getSumProduct();
}
