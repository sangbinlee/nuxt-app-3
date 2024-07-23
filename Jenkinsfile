pipeline {
    agent any
    environment {
        NODE_ENV = 'production'
        BUILD_ID = 'dontKillMe' // Jenkins의 ProcessTreeKiller 방지
        // JENKINS_NODE_COOKIE = 'dontKillMe' // Jenkins의 ProcessTreeKiller 방지
    }
    stages {
        stage('Clone Sources') {
          steps {
            echo 'nuxt-app-3 building the application...'
            // git 'https://gitlab.com/chiminyau/ci-test.git'
          }
        }
        stage('Information') {
          steps {
            echo 'nuxt-app-3 Information...'
            sh 'node -v'
            sh 'npm -v'
          }
        }
        stage('Config') {
          steps {
            echo 'nuxt-app-3 Config...  now....'
            // sh 'npm set registry https://registry.npm.taobao.org'
            // sh 'npm set disturl https://npm.taobao.org/dist'
            // sh 'npm set chromedriver_cdnurl http://cdn.npm.taobao.org/dist/chromedriver'
            // sh 'npm set operadriver_cdnurl http://cdn.npm.taobao.org/dist/operadriver'
            // sh 'npm set phantomjs_cdnurl http://cdn.npm.taobao.org/dist/phantomjs'
            // sh 'npm set fse_binary_host_mirror https://npm.taobao.org/mirrors/fsevents'
            // sh 'npm set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass'
            // sh 'npm set electron_mirror http://cdn.npm.taobao.org/dist/electron/'
          }
        }
        stage('Dependencies') {
          steps {
            sh 'npm install'
          }
        }
        // stage('Unit Test') {
        //   steps {
        //     sh 'npm run unit'
        //   }
        // }
        stage('Build') {
          steps {
            echo 'nuxt-app-3 building the application...  now....'
            sh 'npm run build'
          }
        }
        // stage('build') {
        //     steps {
        //         echo 'building the application...'
        //         cd "/var/jenkins_home/workspace/Book Management App/src/frontend"
        //         yarn install
        //         yarn clean
        //         yarn build
        //     }
        // }
        stage('test') {
            steps {
                echo 'nuxt-app-3 testing the application...'
            }
        }
        stage('deploy') {
            steps {
                echo 'nuxt-app-3 deploying the application...'
            }
        }
        stage('run') {
            steps {
                echo 'nuxt-app-3 run the application... by node 명령  important https://jenkins.sodi9.store/github-webhook/'
                echo 'nuxt-app-3 run the application... by 백그라운드 로 실행해야함'
                echo 'nuxt-app-3 run the application... by node .output/server/index.mjs'
                // sh 'node .output/server/index.mjs'
                // sh 'export BUILD_ID=dontKillMe'
                sh 'pm2 start .output/server/index.mjs -i max --name "nuxt-app-3"'
                sh 'pm2 save'
            }
        }
    }
}
