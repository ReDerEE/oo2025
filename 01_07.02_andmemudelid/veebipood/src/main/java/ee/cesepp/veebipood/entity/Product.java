package ee.cesepp.veebipood.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//automaatselt takkib andmebaasi tabel, mis on klassi nimega

//File- sttings- plugins- jpa buddy
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; //int
    private String name;
    private double price;
    private String img; //.jpg
    private boolean active;

    @ManyToOne
    private Category category;


    //Parem pool tähistab kas on List<>
    //Vasak pool kas saab taaskasutada
    // @ManyToMany
    // @ManyToOne
    // @OneToMany
    // @OneToOne

    // @OneToOne ---> User <-> Contact

    //kui on väikse tähega
    //long
    //char
    //double
    //boolean
    //primitiivsed väärtused. ainult väärtuse hoidmisekd

    //kui on suure tähega
    //Long
    //String
    //Character
    //Double
    //Boolean
    //klassiväärtused

}
