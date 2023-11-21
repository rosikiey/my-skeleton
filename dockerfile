# Dockerfile
FROM node:18-alpine as builder

WORKDIR /home/sveltekit-app
COPY . .

RUN npm cache clean --force

RUN npm cache verify

RUN npm install

RUN npm run build

#-----------------
FROM node:18-alpine as express_server
WORKDIR /home/app

COPY --from=builder /home/sveltekit-app/build /home/app/build

COPY --from=builder /home/sveltekit-app/server.js /home/app/server.js

COPY --from=builder /home/sveltekit-app/package.json /home/app/package.json

RUN npm install express

EXPOSE 8080

CMD ["node","server.js"]