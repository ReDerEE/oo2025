package ee.cesepp.veebipood.controller;

import ee.cesepp.veebipood.entity.Product;
import ee.cesepp.veebipood.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    //localhost:8080/products
    @GetMapping("products")
    public List<Product> getProducts() {
        return productRepository.findAll(); //SELECT * FROM         extends JpaRepository<Product>
    }

    @PostMapping("products") // postman
    public List<Product> addProduct(@RequestBody Product product) {
        if (product.getId() != null) {
            throw new RuntimeException("ERROR_CANNOT_ADD_WITH_ID");
        }
        if (product.getPrice() <= 0) {
            throw new RuntimeException("ERROR_PRICE_MUST_BE_POSITIVE");
        }
        productRepository.save(product); // INSERT INTO products
        return productRepository.findAll();
    }

    //DELETE localhost:8080/products/1
    @DeleteMapping("products/{id}")
    public List<Product> deleteProducts(@PathVariable Long id) {
        productRepository.deleteById(id);
        return productRepository.findAll();
    }

    @PutMapping("products") // postman
    public List<Product> editProduct(@RequestBody Product product) {
        if (product.getId() == null) {
            throw new RuntimeException("ERROR_CANNOT_EDIT_WITHOUT_ID");
        }
        if (product.getPrice() <= 0) {
            throw new RuntimeException("ERROR_PRICE_MUST_BE_POSITIVE");
        }
        productRepository.save(product);
        return productRepository.findAll();
    }

    @GetMapping("products/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productRepository.findById(id).orElseThrow(); //SELECT * FROM         extends JpaRepository<Product>
    }

    //kui on 1 on ilusam kasutada @PathVariable
    //kui on 2 või enam parameetrit peaks kasutama RequestParam
    //localhost:8080/products/4/name/Aura
    @PatchMapping("products") // PATCH localhost:8080/products?id=4&filed=name&value=Aura
    public List<Product> editProductValue(@RequestParam Long id, String field, String value) {
        if (id == null) {
            throw new RuntimeException("ERROR_CANNOT_EDIT_WITHOUT_ID");
        }
        Product product = productRepository.findById(id).orElseThrow();
        switch (field) {
            case "name" -> product.setName(value);
            case "price" -> {
                if (Double.parseDouble(value) <= 0) {
                    throw new RuntimeException("ERROR_PRICE_MUST_BE_POSITIVE");
                }
                product.setPrice(Double.parseDouble(value));
            }
            case "image" -> product.setImg(value);
            case "active" -> product.setActive(Boolean.parseBoolean(value));
        }
        /*if (field.equals("name")){
            product.setName(value);
        } else if (field.equals("price")) {
            product.setPrice(Double.parseDouble(value));
        } else if (field.equals("image")) {
            product.setImg(value);
        }*/
        productRepository.save(product);
        return productRepository.findAll();
    }

    /*@GetMapping("/category-products")
        public List<Product > getCategoryProducts(@RequestParam Long categoryId) {
            List<Product> products = productRepository.findAll();
            List<Product> filteredProduct = new ArrayList<>();

            for(Product p: products){
                if(p.getCategory().getId().equals(categoryId)){
                    filteredProduct.add(p);
                }
            }
        return filteredProduct;
    }*/

    // localhosr:8080/category-products?categoryId=1&page=0&size=2&sort=name, asc
    // localhosr:8080/category-products?categoryId=1&page=0&size=2&sort=price, desc
    @GetMapping("/category-products")
    public Page<Product > getCategoryProducts(@RequestParam Long categoryId, Pageable pageable) {
        if(categoryId == -1){
            return productRepository.findAll(pageable);
        }
        return productRepository.findByCategory_Id(categoryId, pageable);
    }
}

//teated nagu 404
// 1xx -->informatiivsed - meie ei kasuta
// 2xx --> edukad
// 3xx --> suunamine - meie ei kasuta
// 4xx --> päringu tegija veaga (fron-end viga).    client error
//          400 - üldine viga
//          401, 403 - auntentimisega seotud viga
//          402 - maksetega seotud vead
//          404 - api endpoint on vale
//          405 - method not allowed
//          415 - sisu tüüp on vale
// 5xx --> back-end viga