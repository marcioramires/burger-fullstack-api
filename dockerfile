FROM node:lts

WORKDIR /usr/src/app

COPY package.json /user/src/app
RUN npm install --quiet

COPY . /usr/src/app

EXPOSE 3001

CMD [ "node", "src/server.js" ]
