pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    HEROKU_API_KEY = 'HRKU-2a800dbd-7b01-4785-ba0f-0f034e0ccf36'
    HEROKU_EMAIL = 'chauhansagargk@gmail.com'
    APP_NAME = 'react-new-portfolio'
  }
  stages {
   stage('Deploy to Heroku') {
      steps {
        echo 'Deploying to Heroku...'
        script {
          echo 'Clearing HEROKU_API_KEY environment variable...'
          bat 'set HEROKU_API_KEY='

          echo 'Logging into Heroku...'
          bat """
            echo ${HEROKU_EMAIL} | heroku login -i
          """
          echo 'Setting up Git...'
          bat """
            git init
            git config user.email "${HEROKU_EMAIL}"
            git config user.name "Sagargk2233"
          """
          echo 'Adding files to Git...'
          bat 'git add .'
          echo 'Committing changes...'
          bat 'git commit -m "Deploy to Heroku" || echo "No changes to commit"'
          echo 'Setting Heroku remote...'
          bat "heroku git:remote -a ${APP_NAME}"
          echo 'Pushing to Heroku...'
          bat 'git push -f heroku main'
          echo 'Setting Node.js buildpack...'
          bat "heroku buildpacks:set heroku/nodejs --app ${APP_NAME}"
          echo 'Pushing again to apply changes...'
          bat 'git push -f heroku main'
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