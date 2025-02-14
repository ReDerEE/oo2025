package ee.cesepp.kymnev6istlus.controller;


import ee.cesepp.kymnev6istlus.entity.points;
import ee.cesepp.kymnev6istlus.entity.results;
import ee.cesepp.kymnev6istlus.repository.pointRepository;
import ee.cesepp.kymnev6istlus.repository.resultRepository;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class resultController {
    @Autowired
    resultRepository resultRepository;
    @Autowired
    private ee.cesepp.kymnev6istlus.repository.pointRepository pointRepository;

    @GetMapping("results")
    public List<results> getResults(){
        return resultRepository.findAll();
    }

    @PostMapping("results")
    public List<results> addResults(@RequestBody results results){
        if (results.getHundredMeter()==null ||
                results.getLongJump()==null||
                results.getShotPut()==null||
                results.getHighJump()==null||
                results.getFourHundredMeter()==null||
                results.getHurdles()==null||
                results.getDiscThrow()==null||
                results.getPoleVault()==null||
                results.getJavelinThrow()==null||
                results.getOneFiveMeter()==null){
            throw new RuntimeException("ERROR_ALL_FIELDS_MUST_BE_COMPLETE");
        }
        resultRepository.save(results);
        results result = resultRepository.findById(results.getId()).orElseThrow();
        System.out.println(result);




        points point = new points();

        point.setPlayer_id(results.getPlayer_id());

        point.setHundredMeter((Long) results.getHundredMeter()*2);
        point.setLongJump((Long) results.getLongJump()*2);
        point.setShotPut((Long) results.getShotPut()*2);
        point.setHighJump((Long) results.getHighJump()*2);
        point.setFourHundredMeter((Long) results.getFourHundredMeter()*2);
        point.setHurdles((Long) results.getHurdles()*2);
        point.setDiscThrow((Long) results.getDiscThrow()*2);
        point.setPoleVault((Long) results.getPoleVault()*2);
        point.setJavelinThrow((Long) results.getJavelinThrow()*2);
        point.setOneFiveMeter((Long) results.getOneFiveMeter()*2);


        pointRepository.save(point);


        return resultRepository.findAll();
    }
}
