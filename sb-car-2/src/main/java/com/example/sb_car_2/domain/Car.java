package com.example.sb_car_2.domain;

import jakarta.persistence.*;

@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String brand;
    private String model;
    private String color;
    @Column(name = "register_number")
    private String registerNumber;
    @Column(name = "production_year")
    private int year;
    private double price;

    public Car() {
    }

    public Long getId() {
        return id;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public String getColor() {
        return color;
    }

    public String getRegisterNumber() {
        return registerNumber;
    }

    public int getYear() {
        return year;
    }

    public double getPrice() {
        return price;
    }

    public Car(String brand, String model, String color, String registerNumber, int year, double price) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.registerNumber = registerNumber;
        this.year = year;
        this.price = price;
    }

    
}
