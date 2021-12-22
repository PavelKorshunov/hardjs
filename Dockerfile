FROM node:16.13.1-alpine

MAINTAINER PAVEL KORSHUNOV <info@hard-skills.ru>

COPY . /var/www/hardjs

WORKDIR /var/www/hardjs

RUN npm install

ENTRYPOINT ["npm", "run", "start"]
