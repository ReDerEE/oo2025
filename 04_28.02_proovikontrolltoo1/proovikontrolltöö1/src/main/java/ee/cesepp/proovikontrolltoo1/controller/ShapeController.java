package ee.cesepp.proovikontrolltoo1.controller;

import ee.cesepp.proovikontrolltoo1.entity.Numbrid;
import ee.cesepp.proovikontrolltoo1.entity.Shape;
import ee.cesepp.proovikontrolltoo1.repository.ShapeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;
import java.util.List;

@RestController
public class ShapeController {
    @Autowired
    ShapeRepository shapeRepository;

    @PostMapping("shape")
    public List<Shape> addCoords(@RequestBody Shape kujund) {
            shapeRepository.save(kujund);
            return shapeRepository.findAll();
    }
    @GetMapping("shape")
    public List<Shape> getShape(){
        return shapeRepository.findAll();
    }

    public double calculation(int coordXone, int coordYone, int coordXtwo, int coordYtwo){
        double length;
        length = Math.sqrt(Math.pow(coordXtwo-coordXone, 2)+Math.pow(coordYone-coordYtwo, 2));
        return length;

    }

    @GetMapping("circ")
    public double getCircumference(){
        int circumference = 0;
        int[] xCoords = new int[Integer.parseInt(String.valueOf(shapeRepository.count()))];
        int[] yCoords = new int[Integer.parseInt(String.valueOf(shapeRepository.count()))];
        List<Shape> koordinaadid = shapeRepository.findAll();
        double area = 0;
        if(shapeRepository.count()<3){
            throw new RuntimeException("ERROR_NOT_ENOUGH_COORDINATES");
        }
        else{

            for (int i = 0; i< shapeRepository.count(); i++) {
                xCoords[i] = koordinaadid.get(i).getCoordX();
                yCoords[i] = koordinaadid.get(i).getCoordY();
            }

            for (int i = 0; i < xCoords.length-1; i++) {
                area += calculation(xCoords[i], xCoords[i+1], yCoords[i], yCoords[i+1]);
                System.out.println(calculation(xCoords[i], xCoords[i+1], yCoords[i], yCoords[i+1])+ " test " +i + "area "+ area);
            }
            area += calculation(xCoords[xCoords.length-1], xCoords[0], yCoords[xCoords.length-1], yCoords[0]);
            System.out.println(calculation(xCoords[xCoords.length-1], xCoords[0], yCoords[xCoords.length-1], yCoords[0])+ " test 2" +  "area "+ area);
            return area;
        }
    }
}
