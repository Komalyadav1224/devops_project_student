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
                bat 'docker compose version'
            }
        }

    }

    post {
        success {
            echo 'Docker is working from Jenkins!'
        }

        failure {
            echo 'Docker test failed.'
        }
    }
}