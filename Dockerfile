FROM node:22-alpine
RUN mkdir -p /usr/src/api_vendas/api
WORKDIR /usr/src/api_vendas/api

RUN rm -rf ./node_modules
RUN rm -rf package-lock.json

COPY ./package.json .
RUN npm install

COPY . .

CMD ["npm", "run", "start:tsnode"]