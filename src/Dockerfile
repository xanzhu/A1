FROM node:latest

# Install node modules
RUN yarn global add nodemon

# Create app directory
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

ONBUILD RUN yarn install

ENV HOST 0.0.0.0
# Install app dependencies
CMD [ "yarn", "production"]
