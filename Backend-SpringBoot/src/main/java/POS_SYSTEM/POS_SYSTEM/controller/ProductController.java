package POS_SYSTEM.POS_SYSTEM.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import POS_SYSTEM.POS_SYSTEM.dto.CustomDto;
import POS_SYSTEM.POS_SYSTEM.dto.ProductDto;
import POS_SYSTEM.POS_SYSTEM.entity.Category;
import POS_SYSTEM.POS_SYSTEM.entity.Product;
import POS_SYSTEM.POS_SYSTEM.service.CategoryService;
import POS_SYSTEM.POS_SYSTEM.service.ProductService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@RestController
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        if (product == null) {
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.status(200).body(product);
        }
    }

    @PostMapping("/products")
    public ResponseEntity<Product> craeteProduct(@RequestBody ProductDto productDto) {
        Product product = new Product();
        product.setName(productDto.getName());
        product.setPrice(productDto.getPrice());
        product.setQuantity(productDto.getQuantity()); // Corrected typo

        // Find category using categoryId in the ProductDTO
        Category category = categoryService.getCategoryById(productDto.getCategoryid()); // Corrected field name
        product.setCategory(category);

        Product createdProduct = productService.craeteProduct(product);

        return ResponseEntity.status(201).body(createdProduct);
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody ProductDto productdto) {
        Product product = new Product();
        product.setName(productdto.getName());
        product.setPrice(productdto.getPrice());
        product.setQuantity(productdto.getQuantity());

        // find category using categoryId in the ProductDTO
        Category category = categoryService.getCategoryById(productdto.getCategoryid());
        product.setCategory(category);

        Product updatedProduct = productService.updateProduct(id, product);

        if (updatedProduct != null) {
            return ResponseEntity.status(200).body(updatedProduct);
        } else {
            return ResponseEntity.status(404).body(null);
        }
    }

    @GetMapping("/productcount")
    public @ResponseBody CustomDto getSumProduct() {
        return productService.getSumProduct();
    }

}
