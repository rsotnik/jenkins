FROM node:6.9.1
ENV http_proxy http://10.151.249.77:8080  
ENV https_proxy http://10.151.249.77:8080  
ENV HTTP_PROXY http://10.151.249.77:8080 
ENV HTTPS_PROXY http://10.151.249.77:8080
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 8000

