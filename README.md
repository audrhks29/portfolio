# [React] 20231028 포트폴리오 사이트
## 1. 사용기술
### 사용된 기술
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">   <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/zustand-999999?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=black">

## 2. 추후 해결해 볼 사항
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