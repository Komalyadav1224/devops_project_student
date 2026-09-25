pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test Docker') {
            steps {
                bat 'where docker'
                bat 'docker --version'

                bat 'dir C:\\Users\\Komal\\.docker\\cli-plugins\\docker-compose.exe'

                bat 'C:\\Users\\Komal\\.docker\\cli-plugins\\docker-compose.exe version'

                bat 'docker info'
            }
        }

    }

    post {
        success {
            echo 'Docker and Docker Compose are working from Jenkins!'
        }

        failure {
            echo 'Docker test failed.'
        }
    }
}