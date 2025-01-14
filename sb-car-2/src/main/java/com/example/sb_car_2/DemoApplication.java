package com.example.sb_car_2;

import com.example.sb_car_2.domain.Car;
import com.example.sb_car_2.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

    @Autowired
    private CarRepository carRepository;

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        carRepository.save(new Car("Toyota", "Corolla", "Blue", "AB-123-CD", 2020, 15000));
        carRepository.save(new Car("Honda", "Civic", "Red", "EF-456-GH", 2019, 18000));
        carRepository.save(new Car("Ford", "Focus", "White", "DEF-789", 2021, 25000));
    }
}
