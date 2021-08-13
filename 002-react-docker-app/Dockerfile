# providing base image for running
FROM node:lts-alpine3.14

ENV NODE_ENV=testing

# Directory where all command will run in image/container
WORKDIR /usr/src/app

# copying package.json to working(app) directory
COPY package.json /usr/src/app/

# installing all dependencies (this command will run in working dorectory)
RUN npm install 

# now copying src and other project files
COPY . /usr/src/app/

# image port (like nginx has port 80)
EXPOSE 3000

# will run npm start at end
CMD ["npm", "start"]

