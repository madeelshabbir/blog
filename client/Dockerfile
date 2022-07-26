FROM node:alpine

ENV CI=true
ENV WDS_SOCKET_PORT=0

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]
