pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    HEROKU_API_KEY = credentials('heroku-api-key')
    HEROKU_EMAIL = 'chauhansagargk@gmail.com'
    APP_NAME = 'react-new-portfolio'
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
                    def buildDir = 'C:\\My PC\\MCA-SEM-4\\NewReactProject\\portfolio'
                    def deployDir = 'C:\\My PC\\MCA-SEM-4\\NewReactProject\\Deployments\\portfolio'
                    bat "if exist ${deployDir}\\* del /Q ${deployDir}\\*"
                    bat "xcopy /E /I ${buildDir} ${deployDir}"
                }
            }
        }
    stage('Serve') {
      steps {
        echo 'Deploying to Local...'
        script {
            def deployDir = 'C:\\My PC\\MCA-SEM-4\\NewReactProject\\Deployments\\portfolio'
            bat "http-server ${deployDir} -p 8080 &"
        }
      }
    }
  }
}