FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ${service_src} ./service/src
CMD [ "pm2", "start", "process.json" ]
