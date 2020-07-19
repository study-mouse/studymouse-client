# StudyMouse Frontend

StudyMouse는 영어 단어 학습을 쉽고 빠르게 도와주는 웹 어플리케이션입니다. 크롬 익스텐션과 연동하여 사용합니다.

### 어플리케이션 실행 및 빌드
```
git clone https://github.com/study-mouse/studymouse-client.git

npm install

npm run start


docker build -t owen/studymouse-frontend .

docker images

docker run -p 80:80 -d owen/studymouse-frontend
```





### Language

- JavaScript ES6

### Libraries

- React v16.13
- redux
- redux-saga
- styled-component

### ETC

- webpack
- babel
- jest
- eslint
