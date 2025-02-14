package ee.cesepp.veebipood.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    //kui on väikse tähega
    //long
    //char
    //double
    //boolean
    //primitiivsed väärtused. ainult väärtuse hoidmisekd

    //kui on suure tähega
    ///Long
    //String
    //Character
    //Double
    //Boolean
    //klassiväärtused

}
