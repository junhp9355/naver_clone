# Naver Clone : Front-End

>🔥 **INTRODUCE**<br /><br />
이 프로젝트는 리액트와 스프링부트를 이용하여 네이버 메인페이지 클론을 위해 만들어졌습니다.<br />
메인페이지 기본적인 구성을 구현하였으며, 회원가입, 로그인, 블로그 작성 기능을 구현하였습니다. <br />

<br />

## 🛠 기술 스택
- JavaScript
- **Framework** : React
- **AWS EC2 배포** : AWS EC2를 사용하여 '넌 어때?' 에 리액트 프로젝트와 스프링부트 프로젝트를 배포하였습니다.
<br />

## 📌 주요 기능
<br />

**1. 회원 기능**
- 회원가입
- 로그인<br />

![회원가입 & 로그인](https://user-images.githubusercontent.com/109199214/212074977-c4e6411a-e5ab-45a0-8a33-b92455c22b09.gif)

- 로그인 상태에서 비밀번호 검증을 한번 거친 후 회원 정보(닉네임, 이메일, 패스워드)를 변경할 수 있습니다.<br />

![회원정보 수정](https://user-images.githubusercontent.com/109199214/212076814-14da75ce-0967-4534-93f0-436a0fe31d7c.gif)

**2. 장소 검색**
- 카카오맵 api를 활용하여 카카오에서 제공하는 데이터로 장소 검색과 상세정보를 확인할 수 있습니다.<br />

![검색기능](https://user-images.githubusercontent.com/109199214/212091892-61b48477-fdfb-4a18-b1b9-856a27ebbb35.gif)


**3. 댓글 업로드**
- AWS S3 버킷을 활용하여 사진을 포함한 댓글을 작성할 수 있습니다.
- 작성된 댓글의 사진은 페이지 상단에 후기 사진으로 보여집니다.<br />

![댓글 기능](https://user-images.githubusercontent.com/109199214/212094581-77b4a1b7-9be4-4a33-a52b-86c83749143c.gif)


**4. 좋아요 / 북마크 기능**
- 검색한 장소의 페이지에서 좋아요 또는 북마크 표시를 할 수 있고, 북마크 한 장소는 `MY PLACE` 페이지에서 확인하고, 공유할 수 있습니다.<br />

![북마크](https://user-images.githubusercontent.com/109199214/212094644-af6808ae-8891-4259-bce8-1e1c5edbc0ff.gif)


**5. 후기 및 개선 방향**
