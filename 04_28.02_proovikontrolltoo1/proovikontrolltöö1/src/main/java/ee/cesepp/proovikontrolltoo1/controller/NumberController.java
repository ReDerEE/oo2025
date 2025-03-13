package ee.cesepp.proovikontrolltoo1.controller;

import ee.cesepp.proovikontrolltoo1.entity.Numbrid;
import ee.cesepp.proovikontrolltoo1.repository.NumberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NumberController {
    @Autowired
    NumberRepository numberRepository;


    @PostMapping("number")
    public List<Numbrid> addNumber(@RequestBody Numbrid arv){
        numberRepository.save(arv);
        return numberRepository.findAll();
    }

    @GetMapping("number")
    public List<Numbrid> getNumber() {
        //List list = numberRepository.findAll();
        return numberRepository.findAll();
    }

    @GetMapping("numberSum")
    public int getNumberSum(){
        int numberSum = 0;
        for(int i = 1;i<=numberRepository.count();i++){
            Numbrid arv = numberRepository.findById(Long.parseLong(String.valueOf(i))).orElseThrow();
            numberSum += arv.getNumber();
        }
        System.out.println(numberSum);
        return numberSum;
    }

    @GetMapping("numberAvg")
    public double getNumberAvg() {
        int numberSum = 0;
        double numberAvg = 0;
        for(int i = 1;i<=numberRepository.count();i++){
            Numbrid arv = numberRepository.findById(Long.parseLong(String.valueOf(i))).orElseThrow();
            numberSum += arv.getNumber();
        }
        numberAvg = (double) numberSum /numberRepository.count();
        return numberAvg;
    }

    @GetMapping("biggestNum")
    public int getBiggestNum() {
        int biggestNum;
        Numbrid firstNum = numberRepository.findById(Long.parseLong(String.valueOf(1))).orElseThrow();
        biggestNum = firstNum.getNumber();
        for(int i = 1;i<=numberRepository.count();i++){
            Numbrid arv = numberRepository.findById(Long.parseLong(String.valueOf(i))).orElseThrow();
            if(arv.getNumber()>biggestNum){
                biggestNum= arv.getNumber();
            }
        }
        return biggestNum;
    }
    /*
    FIRST ITERATION OF FLOATING AVERAGE

    @GetMapping("floatingAvg")
    public double[] getfloatingAvg() {
        double floatingAvg[] = new double[(Integer.parseInt(String.valueOf(numberRepository.count()-2)))];
        for (int i = 1; i <= (numberRepository.count() - 2); i++) {
            Numbrid arvOne = numberRepository.findById(Long.parseLong(String.valueOf(i))).orElseThrow();
            Numbrid arvTwo = numberRepository.findById(Long.parseLong(String.valueOf(i + 1))).orElseThrow();
            Numbrid arvThree = numberRepository.findById(Long.parseLong(String.valueOf(i + 2))).orElseThrow();
            floatingAvg[i-1] = ((double) (arvOne.getNumber() + arvTwo.getNumber() + arvThree.getNumber()) / 3);
        }
        return floatingAvg;
    }*/

    @GetMapping("floatingAvg")
    public double[] testNums(){
        List<Numbrid> arv = numberRepository.findAll();
        double floatingAvg[] = new double[(Integer.parseInt(String.valueOf(numberRepository.count()-2)))];
        for(int i=0;i<(numberRepository.count()-2);i++){
            floatingAvg[i] = (double) (arv.get(i).getNumber() + arv.get(i + 1).getNumber() + arv.get(i + 2).getNumber()) /3;
        }
        return floatingAvg;
    }
}
