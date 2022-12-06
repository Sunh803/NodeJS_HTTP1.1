# NodeJS로 HTTP1.1통신
----------
### 1.2는 serverport 8080을 설정해서 열어두고 클라이언트가 get과 Post요청을 했을때 요청을 받아 응답해주는 코드. uri에 ?가 들어가면 곱셈해주는 계산
<img width="571" alt="스크린샷 2022-12-06 오후 6 27 42" src="https://user-images.githubusercontent.com/76695159/205872612-dd187bb8-a86a-41b0-be5c-de89430b6467.png">
<img width="698" alt="스크린샷 2022-12-06 오후 6 27 16" src="https://user-images.githubusercontent.com/76695159/205872502-808468cc-a16a-406b-95c2-f6666ecc9334.png">

----------------
### 3은 jsondata를 받아서 원하는 값 추출.
<img width="474" alt="스크린샷 2022-12-06 오후 6 29 25" src="https://user-images.githubusercontent.com/76695159/205873047-96a192cb-bb96-49cc-a649-618aeb9fe40a.png">

----------
### 4는 딕셔너리형식을 json파일로 생성해주는 코드
5는 딕셔너리 데이터를 jSON형태 문자열 저장
6은 JSON문자열을 딕셔너리형식으로 변환해주는코드

-----------

### 7과8은 REST형식을 지켜서버를 짜고 클라이언트가 CRUD를 요청하면 서버가 받아서 리스폰스 해주는 코드이다.
<img width="509" alt="스크린샷 2022-12-06 오후 6 35 52" src="https://user-images.githubusercontent.com/76695159/205874470-2221ba8d-6cdb-4ab4-91a6-e970a8f8419c.png">
