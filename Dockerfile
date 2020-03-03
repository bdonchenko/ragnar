# Stage 1 - builder image
FROM mhart/alpine-node:12 as build-stage

# build-time variables
# prod|sandbox its value will be come from outside
ARG env=prod

# Move our files into directory name "app"
WORKDIR /app

#Copy source
COPY package.json yarn.lock  /app/
RUN yarn install

COPY .  /app
RUN yarn build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# docker build -t ragnar:v1 .
# docker run --rm -it -p 80:80/tcp ragnar:latest
