package POS_SYSTEM.POS_SYSTEM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import POS_SYSTEM.POS_SYSTEM.dto.CustomDto;
import POS_SYSTEM.POS_SYSTEM.entity.Product;
import POS_SYSTEM.POS_SYSTEM.repositary.ProductRepositary;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepositary productRepositary;

    @Override
    public List<Product> getAllProducts() {
        return productRepositary.findAll();
    }

    @Override
    public Product getProductById(Long id) {

        return productRepositary.findById(id).orElse(null);
    }

    @Override
    public Product craeteProduct(Product product) {
        return productRepositary.save(product);
    }

    @Override
    public Product updateProduct(Long id, Product product) {
        Product exsistProduct = productRepositary.findById(id).orElse(null);

        if (exsistProduct == null) {
            return null;
        }
        exsistProduct.setName(product.getName());
        exsistProduct.setPrice(product.getPrice());
        exsistProduct.setQuantity(product.getQuantity());
        exsistProduct.setCategory(product.getCategory());

        return productRepositary.save(exsistProduct);
    }

    @Override
    public CustomDto getSumProduct() {
        return new CustomDto(productRepositary.getSumProduct());
    }

}
