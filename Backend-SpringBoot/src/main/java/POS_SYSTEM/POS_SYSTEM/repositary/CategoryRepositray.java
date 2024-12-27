package POS_SYSTEM.POS_SYSTEM.repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import POS_SYSTEM.POS_SYSTEM.entity.Category;

@Repository
public interface CategoryRepositray extends JpaRepository<Category,Long> {
    
}
