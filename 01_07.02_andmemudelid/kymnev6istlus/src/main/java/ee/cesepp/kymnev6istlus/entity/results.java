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
public class results {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long player_id;
    private Long hundredMeter;
    private Long longJump;
    private Long shotPut;
    private Long highJump;
    private Long fourHundredMeter;
    private Long hurdles;
    private Long discThrow;
    private Long poleVault;
    private Long javelinThrow;
    private Long oneFiveMeter;

}
