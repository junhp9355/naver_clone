pipline {
    agent any

    stages {
        stage('connect test') {
            step{
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
            step {
                sh 'npm install'
                sh 'CI=false npm run build'
            }
        }
    }
}