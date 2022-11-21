pipeline {
  environment {
    dockerimagename = "mvdijk01/quantifiedstudentfrontend"
  }

  agent any

  stages {
    stage('Build Image') {
      steps {
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }

    stage('Pushing Image') {
      environment {
        registryCredential = 'dockerhubqs'
      }
      steps {
          script {
            docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
              dockerImage.push("latest")
            }
          }
      }
    }

    stage('Deploy to Kubernetes Cluster') {
      steps {
        sh "cp ./kubernetes.yml /var/lib/jenkins/qsfront/kubernetes.yml"
        sh "cd /var/lib/jenkins/qsfront/; /usr/local/bin/kubectl apply -f ."
        sh "/usr/local/bin/kubectl rollout restart deployment/qsfront-deployment -n default"
      }
    }
  }
}
