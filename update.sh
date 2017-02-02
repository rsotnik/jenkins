
#npm install
sudo docker build -t shub/message-service-image .
sudo docker stop message-service
sudo docker rm message-service
sudo docker run -d --name message-service shub/message-service-image
