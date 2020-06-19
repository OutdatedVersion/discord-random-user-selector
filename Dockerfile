# minimal base
FROM node:12.18.1-alpine3.9

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --production

ENV NODE_ENV=production

ENTRYPOINT [ "node", "./build/index.js" ]