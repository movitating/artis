# Default Setting

해당 레포지토리는 개인적 용도로 사용하기 위한 사이드 프로젝트의 기본 환경 설정 정보를 포함하고 있습니다.

<br />

## Tools

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
![Javascript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black)
![Typescript](https://img.shields.io/badge/typescript-%233178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2361DAFB.svg?&style=for-the-badge&logo=react&logoColor=black)
![Babel](https://img.shields.io/badge/babel-%23F9DC3E.svg?&style=for-the-badge&logo=babel&logoColor=black)
![Tailwindcss](https://img.shields.io/badge/tailwind%20css-%2338B2AC.svg?&style=for-the-badge&logo=tailwind%20css&logoColor=white)
![VSCode](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

<br />

## Architecture

해당 프로젝트는 FSD 아키텍처를 차용하여 폴더를 구조화하였습니다.

```text
📦 src
├── app                           # 애플리케이션의 진입점과 전역 설정
|    ├── routes                   # 라우팅 정의
|    |    ├── 🚏 Routes.tsx       # 라우팅 전체 경로 통합 설정
|    |    ├── 🚏 app.Routes.tsx
|    |    ├── 🚏 admin.Routes.tsx
|    |    └── 🚏 auth.Routes.tsx
|    ├── styles                   # 스타일 정의
|    |    └── 💄 style.css
|    ├── 📄 main.tsx
|    └── 📄 App.tsx
├── entities                      # 독립적이고 분명하게 구분되는 비즈니스 주체
|    ├──
|    ├──
|    ├──
|    └──
├── features                      # 사용자 시나리오 및 비즈니스 로직 (핵심 기능)
|    ├──
|    ├──
|    ├──
|    └──
├── pages                         # 화면 정의 (페이지)
|    ├── Layout                   # 공통 레이아웃 정의
|    ├── Home
|    ├──
|    └──
├── shared                        # UI 컴포넌트 및 유틸리티
|    ├──
|    ├──
|    ├──
|    └──
└── widgets                       # 페이지 레이아웃을 위한 UI 블록
     ├── header
     |    ├── 📄 header.html
     |    └── 📄 Header.tsx
     ├── navigation
     |    ├── 📄 navigation.html
     |    └── 📄 Navigation.tsx
     └── footer
          ├── 📄 footer.html
          └── 📄 Footer.tsx
```

<br />

## Features

1.

<br />

## Conventions

### Naming Rule

1. CSS

- 클래스 : BEM(Block Element Modifier) 방법론 사용
  - 블록 내부 요소는 언더스코어 두 개(\_\_)를 연결하여 사용한다.
  - 2개 이상의 단어로 된 이름은 단어 사이에 하이픈 한 개(-)를 연결하여 사용한다.
  - 블록이나 요소의 변형은 하이픈 두 개(--)를 연결하여 사용한다.

2. Javascript

- 변수, 함수 : camelCase
  - 두 개 이상의 단어로 된 이름은 두 번째 단어의 첫 글자를 대문자로 표기한다.
  - 의미가 명확히 표현되는 구체적인 이름을 사용한다.
  - @example let userId
  - @example function getUserName
- 상수 : camelCase
  - 두 개 이상의 단어로 된 이름은 두 번째 단어의 첫 글자를 대문자로 표기한다.
  - 의미가 명확히 표현되는 구체적인 이름을 사용한다.
  - @example const originData
  - 단, 변하지 않는 값(특히 Number)을 명확하게 사용하고 싶은 경우, 스네이크 케이스(대문자)를 사용한다.
    - 두 개 이상의 단어로 된 이름은 단어 사이에 언더바 한 개(\_)를 연결하여 사용한다.
    - @example const TAX_RATE
- 인터페이스 : PascalCase
  - 두 개 이상의 단어로 된 이름은 두 번째 단어의 첫 글자를 대문자로 표기한다.
  - @example interface UserData

3. 폴더 및 파일

- 파일: camelCase
  - React 컴포넌트 파일: PascalCase
- 폴더: camelCase

### Breakpoints

- Mobile : 320px ~ 767px
- Tablet : 768px ~ 1279px
- Desktop : 1280px ~

<br />
