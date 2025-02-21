package ee.cesepp.kymnev6istlus.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@ToString
public class Results {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long player_id;
    private Double hundredMeter;
    private Double longJump;
    private Double shotPut;
    private Double highJump;
    private Double fourHundredMeter;
    private Double hurdles;
    private Double discThrow;
    private Double poleVault;
    private Double javelinThrow;
    private Double oneFiveMeter;

}
