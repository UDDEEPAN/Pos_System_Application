package POS_SYSTEM.POS_SYSTEM.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import POS_SYSTEM.POS_SYSTEM.dto.CustomDto;
import POS_SYSTEM.POS_SYSTEM.entity.User;
import POS_SYSTEM.POS_SYSTEM.repositary.UserRepositary;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepositary userRepositray;

    @Override
    public List<User> getAllUsers() {
        return userRepositray.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepositray.findById(id).orElse(null);
    }

    @Override
    public User createUser(User user) {
        return userRepositray.save(user);
    }

    @Override
    public User updateUser(Long id, User user) {
        User existUser = userRepositray.findById(id).orElse(null);

        if (existUser != null) {
            existUser.setUsername(user.getUsername());
            existUser.setAddress(user.getAddress());
            existUser.setNumber(user.getNumber());
            existUser.setEmail(user.getEmail());

            return userRepositray.save(existUser);

        } else {
            return null;
        }
    }

    @Override
    public void deleteuser(Long id) {
        userRepositray.deleteById(id);
    }

    @Override
    public CustomDto getSumCustomer() {
      return new CustomDto(userRepositray.getSumCustomer());
    }
}
