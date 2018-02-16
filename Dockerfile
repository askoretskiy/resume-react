FROM node:9-alpine

WORKDIR /home/app

COPY package.json yarn.lock /home/app/

RUN yarn install
