package POS_SYSTEM.POS_SYSTEM.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/hello") // http://localhost:8080/hello
    public String sayhello() {
        return "Hello Spring Boot";// response is string not JSON
    }

}
