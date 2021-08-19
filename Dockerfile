# pull the base image

FROM node:alpine


# set the working direction

WORKDIR /app


# add `/app/node_modules/.bin` to $PATH

ENV PATH /app/node_modules/.bin:$PATH


# install app dependencies

COPY package.json ./


COPY package-lock.json ./


RUN npm install


# add app

COPY . ./


# start app

CMD ["npm", "start"]

FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html