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
    stage('Deploy to Heroku') {
      steps {
        echo 'Deploying to Heroku...'
        withCredentials([string(credentialsId: 'heroku-api-key', variable: 'HEROKU_API_KEY')]) {
            // bat "echo $HEROKU_API_KEY | heroku auth:token"

            bat """
            echo | set /p="heroku login -i" > login.bat
            echo | set /p="%HEROKU_EMAIL%" >> login.bat
            echo | set /p="%HEROKU_API_KEY%" >> login.bat
            call login.bat

            git init
            git config user.email "%HEROKU_EMAIL%"
            git config user.name "Sagargk2233"
            heroku git:remote -a %APP_NAME%
            git add .
            git commit -m "changes" || echo "No changes to commit"
            git push -f heroku main
            heroku buildpacks:set heroku/nodejs --app %APP_NAME%
            git push -f heroku main
            """
        }
      }
    }
  }
  post {
    always {
      echo 'Cleaning up workspace...'
      deleteDir()
    }
  }
}