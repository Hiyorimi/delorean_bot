FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g pm2
COPY ./src ./src
COPY process.json ./
COPY docker.env ./.env
CMD [ "pm2-docker", "start", "process.json" ]
