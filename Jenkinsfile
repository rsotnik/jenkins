node {
        stage "Prepare environment"
          checkout scm
          docker.image('node').inside {
            stage "Checkout and build deps"
				sh "export http_proxy http://10.151.249.77:8080"  
				sh "export https_proxy http://10.151.249.77:8080" 
				sh "export HTTP_PROXY http://10.151.249.77:8080"  
				sh "export HTTPS_PROXY http://10.151.249.77:8080"  
				
				sh "npm config set proxy  http://10.151.249.77:8080"
				sh "npm config set https-proxy  http://10.151.249.77:8080"
                
				sh "npm install"

            stage "Test and validate"
                sh "npm test"
          }
}
