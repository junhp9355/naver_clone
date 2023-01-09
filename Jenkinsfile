pipeline {
    agent any

    stages {
        stage('connect test') {
            steps{
                sh """
                echo connnect test
                """
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'node:18.12.1-alpine'
                }
            }
            steps {
                sh 'npm install'
                sh 'CI=false npm run build'
            }
        }
    }
}