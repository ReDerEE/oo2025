package ee.cesepp.kymnev6istlus.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Points {
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
    private Double sumPoints;

}
