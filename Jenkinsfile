pipeline {
    agent any
    options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
    }
    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-token') 
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'checking out the code..'
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Deploy to Netlify') {
            steps {
                bat 'npm install -g netlify-cli'
                bat 'netlify deploy --prod --dir=build'
            }
        }
    }
}
