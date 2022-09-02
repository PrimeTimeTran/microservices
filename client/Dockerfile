FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json ./

RUN yarn
COPY . .

CMD ["yarn", "start"]
