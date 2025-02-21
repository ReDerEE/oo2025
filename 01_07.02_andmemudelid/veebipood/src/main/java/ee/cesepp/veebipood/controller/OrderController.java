package ee.cesepp.veebipood.controller;

import ee.cesepp.veebipood.entity.Order;
import ee.cesepp.veebipood.entity.Product;
import ee.cesepp.veebipood.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @PostMapping("orders")
    public List<Order> addOrder(@RequestBody Order order){
        order.setCreated(new Date());
        double sum = 0;
        for (Product p: order.getProducts()){
            sum = + p.getPrice();
        }
        /*
        for (int i = 0; i<order.getProducts().size();i++){
        Product p = order.getProduct.get(i);
        sum = sum + p.getPrice();
        }
         */
        order.setTotalSum(sum);
        orderRepository.save(order);

        return orderRepository.findAll();
    }
}
