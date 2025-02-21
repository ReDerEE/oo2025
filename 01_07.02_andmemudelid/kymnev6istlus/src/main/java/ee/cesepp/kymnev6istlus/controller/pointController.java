package ee.cesepp.kymnev6istlus.controller;

import ee.cesepp.kymnev6istlus.entity.Points;
import ee.cesepp.kymnev6istlus.repository.PointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@RestController

public class PointController {
    @Autowired
    PointRepository pointRepository;

    @GetMapping("points")
    public List<Points> getResults(){
        System.out.println(pointRepository.count());
        for (long i = 1; i <= pointRepository.count(); i++) {
            Points points = pointRepository.findById(i).orElseThrow();
            System.out.println(points.getHurdles());
            double sum = 0;

            sum = points.getHundredMeter()+
                    points.getLongJump()+
                    points.getShotPut()+
                    points.getHighJump()+
                    points.getFourHundredMeter()+
                    points.getHurdles()+
                    points.getDiscThrow()+
                    points.getPoleVault()+
                    points.getJavelinThrow()+
                    points.getOneFiveMeter();
                    points.setSumPoints(sum);
                    System.out.println(i);
                    pointRepository.save(points);
        }
        return pointRepository.findAll();
    }


}
