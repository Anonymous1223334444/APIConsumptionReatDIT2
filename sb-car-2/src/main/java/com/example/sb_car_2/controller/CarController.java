package com.example.sb_car_2.controller;

import com.example.sb_car_2.domain.Car;
import com.example.sb_car_2.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("/api/cars")
@CrossOrigin(origins = "http://localhost:5173")
public class CarController {

    @Autowired
    private CarRepository carRepository;

    @GetMapping
    public List<Car> getAllCars() {
        Iterable<Car> cars = carRepository.findAll();
        return StreamSupport.stream(cars.spliterator(), false).toList();
    }

    @PostMapping
    public Car addCar(@RequestBody Car car) {
        return carRepository.save(car);
    }
    
}
