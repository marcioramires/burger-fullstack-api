FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn run build

EXPOSE 3001

CMD [ "node", "build/server.js" ]