package POS_SYSTEM.POS_SYSTEM.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import POS_SYSTEM.POS_SYSTEM.dto.CustomDto;
import POS_SYSTEM.POS_SYSTEM.entity.Product;

@Service
public interface ProductService {
    List<Product> getAllProducts();

    Product getProductById(Long id);

    Product craeteProduct(Product product);

    Product updateProduct(Long id, Product product);

    @ResponseBody
    CustomDto getSumProduct();
}
