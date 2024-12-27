package POS_SYSTEM.POS_SYSTEM.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import POS_SYSTEM.POS_SYSTEM.entity.Category;
import POS_SYSTEM.POS_SYSTEM.service.CategoryService;

@RestController
@CrossOrigin(origins = "*")
public class CategoryController {
      @Autowired
    private CategoryService categoryservice;

    @GetMapping("/categories")
    public List<Category> getAllCategories() {
        return categoryservice.getAllCategories();
    }

    @GetMapping("/categories/{id}")
    public Category getCategoryById(@PathVariable Long id) {
        return categoryservice.getCategoryById(id);
    }

    @PostMapping("/categories")
    public Category craetCategory(@RequestBody Category category) {
        return categoryservice.craetCategory(category);
    }
}
