# **Sponsor Me Now**

**Sponsor Me Now**는 후원자와 후원을 받는 사람을 연결하여 서로 상호작용하며 커뮤니티를 형성하는 플랫폼으로, 유저들 간의 지지와 나눔이 어우러져 더 나은 세상을 만들어가는 공간입니다. 함께 참여하여 소중한 연결과 나눔의 가치를 느껴보세요.



<img src="https://github.com/a-honey/sponsor-me-now/assets/75254185/8b860bf9-191b-462f-990e-cdfa5b9beb03" width={200} />

<br />
<br />

## | System Architecture
![server-architecture drawio](https://github.com/daechan-jo/sponsor-me-now/assets/103374153/ba978a00-5415-4572-8134-cb5bcd71f082)


<br />
<br />

## | ERD
![erd](https://github.com/daechan-jo/sponsor-me-now/assets/103374153/332c3b58-c410-4b28-a974-406f57d75f7a)

<br />
<br />

## | Payment Sequence Diagram
![payments-save drawio](https://github.com/daechan-jo/sponsor-me-now/assets/103374153/b468602e-9357-4d6c-ac74-d01375ed95c8)

## **| 주요 기능 및 특징**

### **1. 사용자 등록 및 프로필 관리 기능**

사용자들은 간편한 카카오 로그인이나 간단한 등록을 통해 참여할 수 있습니다. 후원자와 도움을 받는 사람은 각각의 계정으로 쉽게 구분되며, 개인 프로필을 손쉽게 관리할 수 있습니다.

### **2. 후원 결제 기능**

간편하고 안전한 결제 시스템을 통해 후원이 이루어지며, 사용자들은 자유롭게 후원 대상을 선택하거나 추천을 받아 도움의 손길을 보낼 수 있습니다.

### **3. 후원자를 위한 커뮤니티 기능**

도움을 받는 사람은 후원자들과 소통하며 지속적인 커뮤니티를 형성하기 위해 후원자 전용 게시글을 작성할 수 있습니다. 이를 통해 감사의 마음을 전하고 성취를 함께 나눌 수 있습니다.

### **4. 공유 기능**

자신의 페이지를 홍보하기 위해 공유하기 기능을 통해 손쉽게 SNS 프로필 등에 자신의 후원 페이지를 설정할 수 있습니다. 이를 통해 더 많은 후원자들을 유입시킬 수 있습니다.

<br />

## **| 프로젝트 기간**

- 2023.11.08 ~ 2023.12.10

## **| 프로젝트 WIKI**

- 협업규칙
- ERD
- Swagger
- 와이어프레임

[바로가기](https://github.com/a-honey/sponsor-me-now/wiki)

<br />

## **| 기술 스택 및 도구**

### 프론트엔드

![React](https://img.shields.io/badge/React-222222?style=for-the-badge&logo=react&logoColor=ffffff)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=ffffff)
![Axios](https://img.shields.io/badge/Axios-007ACC?style=for-the-badge&logo=axios&logoColor=ffffff)
![zustand](https://img.shields.io/badge/zustand-FFA500?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff)
[![clipboard-copy](https://img.shields.io/badge/clipboard--copy-007ec6?style=for-the-badge&logoColor=white)](https://github.com/lgarron/clipboard-copy)

- **React**: 웹 애플리케이션의 사용자 인터페이스 개발에 사용되었습니다.
- **TypeScript**: 정적 타입 언어로, 프로젝트의 안정성과 개발 생산성을 향상시키기 위해 사용되었습니다.
- **Axios**: 네트워크 요청을 처리하는 데 사용되는 HTTP 클라이언트로, 인터셉터를 활용하여 기본 URL 및 헤더를 설정했습니다.
- **Zustand**: 파일 크기가 작은 Zustand를 사용하여 전역 상태를 효과적으로 관리하였습니다.
- **React Query**: 데이터 가져오기 및 캐싱을 처리하기 위한 라이브러리로, 데이터 관리를 간편하게 수행하기 위해 사용되었습니다.
- **Vite**: 빠른 번들링 및 개발 서버를 제공하는 도구로 사용되었습니다.
- **Clipboard Copy**: 후원을 받기 위한 개인페이지를 편리하게 공유하기 위해 사용되었습니다.

### 백엔드

![Nest.js](https://img.shields.io/badge/Nest.js-E0234E?style=for-the-badge&logo=nestjs&logoColor=ffffff)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-2D3748?style=for-the-badge&logo=typeORM&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=000000)
![iamport](https://img.shields.io/badge/iamport-00AEEF?style=for-the-badge)
![Multer](https://img.shields.io/badge/Multer-FFD700?style=for-the-badge)

- **Nest.js**: 데코레이터와 강력한 추상화로 API 엔드포인트를 정의하고 관리하는 데 용이하며, 모듈 구조와 의존성 주입(DI)을 통해 효율적인 서버 개발을 지원하기 위해 사용되었습니다.
- **TypeScript**: 정적 타입 언어로, 프로젝트의 안정성과 개발 생산성을 향상시키기 위해 사용되었습니다.
- **TypeORM**: 타입스크립트를 위한 ORM라이브러리로 OOP를 지향하므로 개체 간의 관계를 쉽게 설정할 수 있기에 사용되었습니다.
- **Swagger**: 프로젝트의 API 엔드포인트 및 스펙을 문서화하는 API 문서 생성 도구로 사용되었습니다.
- **iamport**: 결제 관련 서비스로, 온라인 결제 시스템을 쉽게 구축하고 관리하기 위해 사용되었습니다.



<br />
<br />

## **| 프로젝트 팀원 및 역할 분담**

|  이름  |     역할     |
| :----: | :----------: |
| 조대찬 | 백엔드/ 배포 |
| 정아현 |  프론트엔드  |
