FROM node:14.4.0-slim

# Install node modules
RUN yarn global add nodemon

# Create app directory
RUN mkdir -p /Applications/A1.1/
WORKDIR /Applications/A1.1/

ONBUILD RUN yarn install

ENV HOST 0.0.0.0
# Install app dependencies
CMD [ "yarn", "production"]
