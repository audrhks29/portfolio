# [React] 20231028 포트폴리오 사이트
## 1. 사용기술
### 사용된 기술
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">   <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/zustand-999999?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=black">

## 2. 문제 해결
 1. 최초 로딩시간 개선
      1. 이미지 리사이징 및 압축을 통한 개선
      2. 결과
         1. 개선전
         ![개선전](https://github.com/audrhks29/MegaBox/assets/130128690/52c9ad6b-274d-4a6c-8b77-be4197c943de)
         
         2. 개선후
         ![개선후](https://github.com/audrhks29/MegaBox/assets/130128690/ace698b1-22fc-4119-b2b9-31377eb0439a)

         3. 요약
            |        | 네트워크 전송 | 리소스 |  완료  |  로드  |
            | :----: | :-----------: | :----: | :----: | :----: |
            | 개선전 |     20MB      | 20.1MB | 6.47초 | 6.08초 |
            | 개선후 |     1.8MB     | 1.9MB  | 1.02초 | 1.09초 |
            
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