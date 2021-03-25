FROM node:12.16.3

WORKDIR /app

COPY package.json /app/package.json

RUN npm install
RUN npm audit fix
RUN npm install

CMD ["npm","start"]
