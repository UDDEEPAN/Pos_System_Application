package POS_SYSTEM.POS_SYSTEM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import POS_SYSTEM.POS_SYSTEM.entity.Category;
import POS_SYSTEM.POS_SYSTEM.repositary.CategoryRepositray;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryRepositray categoryRepositary;

    @Override
    public List<Category> getAllCategories() {
        
        return categoryRepositary.findAll();    }

    @Override
    public Category getCategoryById(Long id) {
       
        return categoryRepositary.findById(id).orElse(null);
    }

    @Override
    public Category craetCategory(Category category) {
        return categoryRepositary.save(category);
    }
    
}
