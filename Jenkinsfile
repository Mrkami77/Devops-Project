pipeline {
    agent any
    environment {
        BUILD_ID = "${env.BUILD_ID}"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Mrkami77/Devops-Project.git'
            }
        }
        stage('Docker Login') {
            steps {
                powershell 'docker login -u mrkami777 -p mr_kami777'
            }
        }
        stage('Build and Push Images') {
            steps {
                powershell 'docker-compose build'
                powershell 'docker-compose push'
            }
        }
        stage('Run Containers') {
            steps {
                powershell '''
                    docker-compose down
                    docker-compose up -d
                '''
            }
        }
        stage('Setup Kubernetes Config') {
            steps {
                withCredentials([file(credentialsId: 'kubeconfig-file', variable: 'KUBECONFIG')]) {
                    powershell '''
                        $env:KUBECONFIG = "$env:KUBECONFIG"
                        New-Item -ItemType Directory -Force -Path "$HOME\\.kube"
                        Copy-Item -Path $env:KUBECONFIG -Destination "$HOME\\.kube\\config" -Force
                    '''
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                powershell '''
                    kubectl apply -f k8s-deployment.yml
                '''
            }
        }
    }
    post {
        always {
            echo 'Pipeline execution complete.'
        }
        success {
            echo 'Deployment succeeded!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
    }
}
