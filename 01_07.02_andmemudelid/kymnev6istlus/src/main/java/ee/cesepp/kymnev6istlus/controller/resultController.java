package ee.cesepp.kymnev6istlus.controller;


import ee.cesepp.kymnev6istlus.entity.Points;
import ee.cesepp.kymnev6istlus.entity.Results;
import ee.cesepp.kymnev6istlus.repository.PointRepository;
import ee.cesepp.kymnev6istlus.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class ResultController {
    @Autowired
    ResultRepository resultRepository;
    @Autowired
    private PointRepository pointRepository;

    @GetMapping("results")
    public List<Results> getResults(){
        return resultRepository.findAll();
    }

    @PostMapping("results")
    public List<Results> addResults(@RequestBody Results results){
        if (results.getHundredMeter()!=null && results.getHundredMeter()<0 ||
                results.getLongJump()!=null && results.getLongJump()<0||
                results.getShotPut()!=null && results.getShotPut()<0||
                results.getHighJump()!=null && results.getHighJump()<0||
                results.getFourHundredMeter()!=null && results.getFourHundredMeter()<0||
                results.getHurdles()!=null && results.getHurdles()<0||
                results.getDiscThrow()!=null && results.getDiscThrow()<0||
                results.getPoleVault()!=null && results.getPoleVault()<0||
                results.getJavelinThrow()!=null && results.getJavelinThrow()<0||
                results.getOneFiveMeter()!=null && results.getOneFiveMeter()<0){
            throw new RuntimeException("ERROR_FIELDS_MUST_CONTAIN_0_OR_POSITIVE_NUMBER");
        }
        resultRepository.save(results);
        Results result = resultRepository.findById(results.getId()).orElseThrow();
        System.out.println(result);




        Points point = new Points();

        point.setPlayer_id(results.getPlayer_id());
        //Track events (A(B-P)^C)
        //Field events (A(P-B)^C)
        //Track - hundredMeter, fourHundredMeter, hurdles, oneFiveMeter
        //Field - shotPut, discThrow, javelinThrow, longJump, highJump, poleVault
        //A,B,C parameters
        //https://en.wikipedia.org/wiki/Decathlon
        //under "Points system"

        if(results.getHundredMeter() != null) {
            point.setHundredMeter(25.4347 * (Math.pow(18 - results.getHundredMeter(), 1.81)));
        }
        else {
            point.setHundredMeter(0.0);
        }

        if(results.getLongJump() !=null) {
            point.setLongJump(0.14354 * (Math.pow((results.getLongJump() * 100) - 220, 1.4))); //TODO gives NaN FIXED
        }
        else {
            point.setLongJump(0.0);
        }

        if(results.getShotPut()!=null) {
            point.setShotPut(51.39 * (Math.pow(results.getShotPut() - 1.5, 1.05)));
        }
        else {
            point.setShotPut(0.0);
        }

        if(results.getHighJump()!=null) {
            point.setHighJump(0.8465 * (Math.pow((results.getHighJump() * 100) - 75, 1.42))); //TODO gives NaN FIXED
        }
        else {
            point.setHighJump(0.0);
        }
        if(results.getFourHundredMeter()!=null) {
            point.setFourHundredMeter(1.53775 * (Math.pow(82 - results.getFourHundredMeter(), 1.81)));
        }
        else {
            point.setFourHundredMeter(0.0);
        }

        if (results.getHurdles() != null) {
            point.setHurdles(5.74352 * (Math.pow(28.5 - results.getHurdles(), 1.92)));
        }
        else {
            point.setHurdles(0.0);
        }

        if(results.getDiscThrow()!=null) {
            point.setDiscThrow(12.91 * (Math.pow(results.getDiscThrow() - 4, 1.1)));
        }
        else {
            point.setDiscThrow(0.0);
        }

        if(results.getPoleVault()!=null) {
            point.setPoleVault(0.2797 * (Math.pow((results.getPoleVault() * 100) - 100, 1.35))); //TODO gives NaN FIXED
        }
        else {
            point.setPoleVault(0.0);
        }

        if(results.getJavelinThrow()!=null) {
            point.setJavelinThrow(10.14 * (Math.pow(results.getJavelinThrow() - 7, 1.08)));
        }
        else {
            point.setJavelinThrow(0.0);
        }

        if(results.getOneFiveMeter()!=null) {
            point.setOneFiveMeter(0.03768 * (Math.pow(480 - results.getOneFiveMeter(), 1.85)));
        }
        else {
            point.setOneFiveMeter(0.0);
        }

        pointRepository.save(point);


        return resultRepository.findAll();
    }
}
