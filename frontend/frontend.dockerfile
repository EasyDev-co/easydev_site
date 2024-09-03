FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production
RUN npm install framer-motion
RUN npm install react-intersection-observer

COPY . .
EXPOSE 3000

CMD ["npm", "start"]