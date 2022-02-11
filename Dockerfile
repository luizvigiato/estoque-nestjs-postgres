FROM node:16.13-alpine3.14

WORKDIR /home/estoque/backend

#USER node

RUN npm install -g npm@8.4.1
RUN npm install -g @nestjs/cli
#RUN npm install @nestjs/typeorm typeorm --save 
#RUN npm install pg --save
