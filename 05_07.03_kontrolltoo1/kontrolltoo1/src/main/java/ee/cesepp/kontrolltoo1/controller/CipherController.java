package ee.cesepp.kontrolltoo1.controller;

import ee.cesepp.kontrolltoo1.entity.Cipher;
import ee.cesepp.kontrolltoo1.entity.Word;
import ee.cesepp.kontrolltoo1.repository.CipherRepository;
import ee.cesepp.kontrolltoo1.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CipherController {
    @Autowired
    CipherRepository cipherRepository;
    @Autowired
    WordRepository wordRepository;
    //String[] characters =new String[] {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"};
    String characterTest = "abcdefghijklmnopqrstuvwxyz";

    @PostMapping("shiftCipher")
    public List<Cipher> cipherWord(@RequestBody Cipher cipher){
        int shift = cipher.getShift();
        String cipherWord = new String();
        for(int i = 1; i<= wordRepository.count(); i++){
            Cipher newcipher = new Cipher();
            cipherWord = "";
            String word = wordRepository.findById(Long.parseLong(String.valueOf(i))).orElseThrow().getWord();
            //System.out.println(word);

            for(int j = 0; j<word.length(); j++){
                if (characterTest.indexOf(word.charAt(j))+shift > characterTest.length()){
                    cipherWord += characterTest.charAt((characterTest.indexOf(word.charAt(j))+shift-(characterTest.length()-1)));
                }
                else {
                    cipherWord += characterTest.charAt((characterTest.indexOf(word.charAt(j))+shift));
                }

                //System.out.print(cipherWord);
            }
            newcipher.setCipheredWords(cipherWord);
            newcipher.setId(cipher.getId());
            newcipher.setUsesLength(false);
            newcipher.setShift(shift);
            cipherRepository.save(newcipher);
        }
        System.out.print(cipherWord);
        return cipherRepository.findAll();
    }
    @GetMapping("lengthCipher")
    public String lengthCipher(){
        String cipherWord = new String();
        for(int i = 1; i<= wordRepository.count(); i++){
            cipherWord = "";
            Cipher cipher = new Cipher();
            String word = wordRepository.findById(Long.parseLong(String.valueOf(i))).orElseThrow().getWord();
            //System.out.println(word);
            int shift = word.length();
            for(int j = 0; j<word.length(); j++){
                if (characterTest.indexOf(word.charAt(j))+shift > characterTest.length()){
                    cipherWord += characterTest.charAt((characterTest.indexOf(word.charAt(j))+shift-(characterTest.length()-1)));
                }
                else {
                    cipherWord += characterTest.charAt((characterTest.indexOf(word.charAt(j))+shift));
                }

                //System.out.print(cipherWord);
            }
            cipher.setCipheredWords(cipherWord);
            cipher.setUsesLength(true);
            cipherRepository.save(cipher);
        }

        return cipherWord;
    }

    @GetMapping("getCipher")
    public List<Cipher> getCipher(){
        return cipherRepository.findAll();
    }
    @GetMapping("deCipher")
    public String deCipher(){
        String decipherWord = new String();
        decipherWord = "";
        for(int i = 1; i<=cipherRepository.count(); i++) {
             Cipher help = cipherRepository.findById(Long.parseLong(String.valueOf(i))).orElseThrow();
             int length = help.getCipheredWords().length();
             String word = help.getCipheredWords();
             System.out.print(word);
                if(help.getUsesLength()){
                    for(int j=0; j<length; j++){
                        if (characterTest.indexOf(word.charAt(j))-length < 0){
                            decipherWord += characterTest.charAt((characterTest.indexOf(word.charAt(j))-length+(characterTest.length()-1)));
                        }
                        else {
                            decipherWord += characterTest.charAt((characterTest.indexOf(word.charAt(j))-length));
                        }
                    }

            }
                decipherWord += " | ";
        }
        System.out.print(decipherWord);
        return decipherWord;
    }

}
