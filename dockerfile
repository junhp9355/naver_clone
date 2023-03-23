# FROM nginx

# RUN mkdir /app

# WORKDIR /app

# RUN mkdir ./build

# ADD ./build ./build

# RUN rm /etc/nginx/conf.d/default.conf

# COPY ./nginx.conf /etc/nginx/conf.d

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

FROM node
WORKDIR usr/src/app
COPY package.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "run", "start"]