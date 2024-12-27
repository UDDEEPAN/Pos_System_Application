package POS_SYSTEM.POS_SYSTEM.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import POS_SYSTEM.POS_SYSTEM.dto.CustomDto;
import POS_SYSTEM.POS_SYSTEM.entity.User;
import POS_SYSTEM.POS_SYSTEM.service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();

    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/users")
    public User CreateUser(@RequestBody User user) {

        return userService.createUser(user);

    }

    @PutMapping("/users/{id}")
    public User UpdateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @DeleteMapping("/users/{id}")
    public void deleteuser(@PathVariable Long id) {
        userService.deleteuser(id);
    }

    @GetMapping("/customercount")
    public @ResponseBody CustomDto getSumCustomer() {
        return userService.getSumCustomer();
    }
}
