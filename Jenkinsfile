node {
	
  	def nodeHome = tool name: 'NodeJS'
  	sh "${nodeHome}/bin/node -v"


	stage "Prepare environment"
  		checkout scm

	stage "Checkout and build deps"
		sh "http_proxy=http://10.151.249.77:8080"  
		sh "https_proxy=http://10.151.249.77:8080" 
		sh "HTTP_PROXY=http://10.151.249.77:8080"  
		sh "HTTPS_PROXY=http://10.151.249.77:8080" 
	  				
		//sh "npm config set proxy  http://10.151.249.77:8080"
		//sh "npm config set https-proxy  http://10.151.249.77:8080"
		  	
		sh "npm install"
		  


	stage "Test and validate"
                sh "npm test"
          
}
