pipeline {
    agent { docker 'node:12' }
    stages {
        stage('install') {
            steps {
                sh 'install dependencies'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('push oss') {
            steps {
                sh 'check oss is exists'
                sh 'push resource to oss'
            }
        }
    }
    post {
        always {
            echo 'this will alway run'
        }
        success {
            echo 'this will run only if success'
        }
        failure {
            echo 'this will run only if failed'
        }
        unstable {
            echo 'this will run only if thi run was marked as unstable'
        }
        changed {
            echo 'This will run only'
        }
    }
}