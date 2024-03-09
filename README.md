# [React] 20231028 포트폴리오 사이트
## 1. 프로젝트 정보
### 1. 기본정보
|            | 설명                                                                                                                                                                                                            |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 작업기간   | 2023.10.28 ~ 2024.03.10                                                                                                                                                                                         |
| 작업인원   | 1                                                                                                                                                                                                               |
| 빌드툴     | <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white">                                                                                                                |
| 라이브러리 | <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black">                                                                                                              |
| 언어       | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white">                                                                                                    |
| 상태관리   | <img src="https://img.shields.io/badge/zustand-999999?style=flat-square&logo=react&logoColor=black">                                                                                                            |
| CSS        | <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat-square&logo=tailwindcss&logoColor=black"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"> |


[사이트 바로가기](https://portfolio-b85gnx9nq-myunkwan-lees-projects.vercel.app/)

## 2. 문제 해결
 1. 최초 로딩시간 개선
      1. 이미지 리사이징을 통한 개선
      2. 결과
         1. 개선전
         ![개선전](https://github.com/audrhks29/portfolio/assets/130128690/7c849dd3-f7a0-422a-adb0-cc310e3e5e20)
         
         2. 개선후
         ![개선후](https://github.com/audrhks29/portfolio/assets/130128690/a48b30ff-8222-40aa-97f3-fbf9e8397fb1)

         3. 요약
            |        | 네트워크 전송 | 리소스 |   완료    |   로드    |
            | :----: | :-----------: | :----: | :-------: | :-------: |
            | 개선전 |     1.5MB     | 1.6MB  |  13.02초  |  13.02초  |
            | 개선후 |     165KB     | 303KB  | 835밀리초 | 840밀리초 |
            
## 3. 추후 해결해 볼 사항
 <details>
<summary>도커라이즈</summary>
<div markdown="1">       

### 1. Dockerfile
  ```js
    FROM node:20.9.0 as build

    WORKDIR /app

    COPY yarn.lock .
    COPY package.json ./package.json

    RUN yarn install

    COPY . ./

    RUN yarn build

    FROM nginx:1.25.3-alpine as start

    COPY ./nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
    COPY --from=build /app/dist /usr/share/nginx/html

    EXPOSE 80

    ENTRYPOINT ["nginx", "-g", "daemon off;"]
  ```
### 2. nginx.conf
  ```js
    server {
      listen 80;
      server_name localhost;

      location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html;
      }
    }
  ```
### 3. DockerHub에 이미지 push
![image](https://github.com/audrhks29/portfolio/assets/130128690/9f31b160-74a7-41bd-b961-c40227023b6d)
### 4. Google Cloud Run
![image](https://github.com/audrhks29/portfolio/assets/130128690/00c2bb92-9579-4768-8655-1331ddb9e115)
 <pre>Revision 'portfolio-00001-zbm' is not ready and cannot serve traffic. The user-provided container failed to start and listen on the port defined provided by the PORT=8080 environment variable. Logs for this revision might contain more information. Logs URL: Cloud Logging 열기  For more troubleshooting guidance, see https://cloud.google.com/run/docs/troubleshooting#container-failed-to-start</pre> 라는 오류가 발생

</div>
</details>