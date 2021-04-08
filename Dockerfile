FROM node:15.14.0-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

ENV PORT=3001

RUN npm install

EXPOSE 3001


CMD "npm" "start"