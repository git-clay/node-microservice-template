FROM node:alpine-11

# set working directory
RUN mkdir /usr/src
WORKDIR /usr/src

# add `/usr/src/node_modules/.bin` to $PATH
ENV PATH /usr/src/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json /usr/src/package.json
RUN npm install

ENV NODE_ENV = 'development' #todo -> dynamic with ARG
EXPOSE 80
COPY ./src /usr/src


# start app
CMD ["npm", "start"]