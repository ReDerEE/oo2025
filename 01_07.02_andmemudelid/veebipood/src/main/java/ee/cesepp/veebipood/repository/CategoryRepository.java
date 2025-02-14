package ee.cesepp.veebipood.repository;

import ee.cesepp.veebipood.entity.Category;
import ee.cesepp.veebipood.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
