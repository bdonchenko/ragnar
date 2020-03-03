# Stage 1 - builder image
FROM node:12.16.1-stretch as builder

# Create stellar app directory
ENV APP_PATH /usr/src/app
WORKDIR $APP_PATH

#Copy source
COPY --chown=node:node . .

USER node

RUN yarn install
RUN yarn build

# Go to the server directory
WORKDIR $APP_PATH/server
RUN yarn install


# Stage 2 - publish image
FROM node:12.16.1-stretch

ENV APP_PATH /usr/src/app

USER node
COPY --from=builder --chown=node:node $APP_PATH/dist             $APP_PATH/dist
COPY --from=builder --chown=node:node $APP_PATH/server           $APP_PATH/server

WORKDIR $APP_PATH/server
ENV NODE_ENV=production

EXPOSE 8080
CMD [ "node", "index.js" ]
