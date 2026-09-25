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

                // Check Docker location
                bat 'where docker'

                // Check Docker version
                bat 'docker --version'

                // Add Docker CLI plugins path for this Jenkins step
                bat 'set PATH=C:\\Users\\Komal\\.docker\\cli-plugins;%PATH% && docker compose version'

                // Test Docker Engine
                bat 'docker info'

                // Test Docker Compose again
                bat 'set PATH=C:\\Users\\Komal\\.docker\\cli-plugins;%PATH% && docker compose version'
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