package POS_SYSTEM.POS_SYSTEM.repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import POS_SYSTEM.POS_SYSTEM.entity.User;

@Repository
public interface UserRepositary extends JpaRepository<User, Long> {
   @Query (value = "SELECT COUNT(id) FROM user", nativeQuery = true)
   int getSumCustomer();
}
