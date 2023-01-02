FROM node
WORKDIR /src/app
COPY package.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "start"]

EXPOSE 3000


# 그리고 Dockerfile로 docker 이미지를 빌드해야한다.
# $ docker build .