FROM node:16.13.0

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "dev"]
