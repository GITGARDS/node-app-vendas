FROM node:latest
RUN mkdir -p /usr/src/app_vendas
WORKDIR /usr/src/app_vendas

RUN rm -rf ./node_modules
RUN rm -rf package-lock.json

COPY ./package.json .
RUN npm install

COPY . .

CMD ["npm", "start"]