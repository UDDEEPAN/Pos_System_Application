package POS_SYSTEM.POS_SYSTEM.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDto {
    private Long id;
    private String name;
    private Double price;
    private Integer quantity;
    private Long categoryid;
}
