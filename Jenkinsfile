pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  stages {
    stage('Checkout') {
      steps {
        echo 'Checking out the code...'
        checkout scm
      }
    }
    stage('Install Dependencies') {
      steps {
        echo 'Installing dependencies...'
        bat 'npm install'
      }
    }
    stage('Build') {
      steps {
        echo 'Building the application...'
        bat 'npm run build'
      }
    }
     stage('Deploy') {
            steps {
                 script {
                    def buildDir = 'build'
                    def deployDir = 'C:\\My PC\\MCA-SEM-4\\NewReactProject\\Deployments\\portfolio' // Change to your deployment directory
                    bat """
                        if exist ${deployDir} (
                            rmdir /S /Q ${deployDir}
                        )
                        mkdir ${deployDir}
                        xcopy "${buildDir}\\*" "${deployDir}" /E /I /Y /Q
                    """
                    echo "deployed on https://localhost:8050"
                }
            }
        }
  }
}