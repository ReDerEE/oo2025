package ee.cesepp.veebipood.repository;

import ee.cesepp.veebipood.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // Repository tagastab ainult kas Product või List<Product>
    // on juba kirjutatud:
    // .findall() --> SELECT * FROM products
    // .save() --> INSERT values() INTO products
    // .findById() --> SELECT products FROM products
    // .deleteById() --> DELETE FROM products WHERE id=



    //List<Product>

    Page<Product> findByCategory_Id(Long id, Pageable pageable);

}
