node {
	
	stage "Checking Node"	
  		def nodeHome = tool name: 'NodeJS'
  		sh "${nodeHome}/bin/node -v"
	
	stage "Starting the MongoDB container"
		def mongoImage = docker.image("mongo")
		def mongoContainer = mongoImage.run("--name thub-mongo -p 27017:27017 -d mongo")
	
	stage "Starting the RabbitMQ container"
		def rabbitMQImage = docker.image("rabbitmq:3-management")
		def rabbitMQContainer = rabbitMQImage.run("-d -p 5672:5672 --name rabbitmq")


	stage "Prepare environment"
  		checkout scm

	stage "Checkout and build deps"
		sh "http_proxy=http://10.151.249.77:8080"  
		sh "https_proxy=http://10.151.249.77:8080" 
		sh "HTTP_PROXY=http://10.151.249.77:8080"  
		sh "HTTPS_PROXY=http://10.151.249.77:8080" 
	  				
		sh "npm config set proxy  http://10.151.249.77:8080"
		sh "npm config set https-proxy  http://10.151.249.77:8080"
		  	
		sh "npm install"
		  


	stage "Test and validate"
                sh "npm test"

	stage "Stopping the MongoDB Container"
		mongoContainer.stop()
	
	stage "Stopping the RabbitMQ container"
          	rabbitMQContainer.stop()
}
