pipeline {
    agent { docker 'node:12' }
    stages {
        // stage('setHost') {
        //     steps {
        //         sh 'echo set hosts'
        //     }
        // }
        stage('install') {
            steps {
                sh 'echo "install dependencies"'
                sh 'npm i --registry=http://121.41.142.212:7001'
            }
        }
        stage('build') {
            steps {
                sh 'echo "npm run build"'
            }
        }
        stage('push oss') {
            steps {
                sh 'echo "check oss is exists"'
                sh 'echo "push resource to oss"'
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