package POS_SYSTEM.POS_SYSTEM.service;

import java.util.List;

import org.springframework.stereotype.Service;

import POS_SYSTEM.POS_SYSTEM.entity.Category;

@Service
public interface CategoryService {
    List<Category> getAllCategories();
    Category getCategoryById(Long id);
    Category craetCategory(Category category);
}
