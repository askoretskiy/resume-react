#!/bin/sh

docker-compose kill
exec docker-compose up -t0
