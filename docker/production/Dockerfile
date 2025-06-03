# Stage 1: Build the app
FROM node:21 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the app using a minimal web server
FROM node:21-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist /app/dist

EXPOSE 3002

CMD ["serve", "-s", "dist", "-l", "3002"]