package POS_SYSTEM.POS_SYSTEM.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import POS_SYSTEM.POS_SYSTEM.dto.CustomDto;
import POS_SYSTEM.POS_SYSTEM.entity.User;

@Service
public interface UserService {
    List<User> getAllUsers();

    User getUserById(Long id);

    User createUser(User user);

    User updateUser(Long id, User user);

    void deleteuser(Long id);

    @ResponseBody
    CustomDto getSumCustomer();
}
