# Project Name

Express template project

## Description

The template with express, docker, redis and bull queue

## Clone the repository

git clone https://github.com/fifteen1309/express-template.git

## Install packages

npm install

## Copy environment

cp .env.example .env

## Create symbol links with docker compose file

ln -s docker-compose.local.yml docker-compose.yml

## Run docker container

docker compose up -d

## Run project

npm run dev
