FROM node:10
LABEL maintainer="Eli Mernit"
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app
CMD npm run start

EXPOSE 3000