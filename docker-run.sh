#!/usr/bin/env bash

# Lauching API server

cd restaurant-menu-api
sudo docker-compose up -d --build

# Lauching React server

cd ../restaurant-menu-front
sudo docker-compose up -d --build