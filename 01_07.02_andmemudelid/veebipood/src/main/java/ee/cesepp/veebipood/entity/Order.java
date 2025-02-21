package ee.cesepp.veebipood.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="orders")//andmebaasis tuleb tabeli nimi "orders"

public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; //int
    private Date created;
    @ManyToOne //Personil võib olla mitu tellimust
    private Person person;
    @ManyToMany
    private List<Product> products;
    private double totalSum;
}
