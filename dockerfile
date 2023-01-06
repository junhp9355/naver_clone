FROM node
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "run", "start"]



FROM nginx 
EXPOSE 3000
COPY ./defalut.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build  /usr/share/nginx/html 