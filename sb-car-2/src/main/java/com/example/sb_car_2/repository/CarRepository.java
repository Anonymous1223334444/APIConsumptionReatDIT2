package com.example.sb_car_2.repository;

import com.example.sb_car_2.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {
}
