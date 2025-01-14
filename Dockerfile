# Dockerfile
### STAGE 1: Build ###
# We label our stage as 'builder'
FROM node:12-alpine as builder
COPY package*.json ./
RUN npm i -g @nestjs/cli
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app
WORKDIR /ng-app
COPY . .
## Build the angular app in production mode and store the artifacts in dist folder
#RUN $(npm bin)/ng build --prod --build-optimizer
RUN nest build
CMD ["node", "./dist/main.js"]
### STAGE 2: Setup ###
# FROM node:12-alpine
# COPY --from=builder /ng-app/dist /dist
# CMD ["node", "./dist/main.js"]
