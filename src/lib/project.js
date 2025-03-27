export const project_data = [
  {
    id: "portfolio",
    title: "포트폴리오",
    img: "/images/portfolio.png",
    during: "2025.01\t(1주 진행)",
    description: "포트폴리오를 React를 활용하여 제작",
    member: "개인프로젝트",
    projectKind: ["사이드프로젝트", "개인 프로젝트"],
    projectSkill: ["React", "Styled-Components"],
    impact: [
      {
        impactTitle: "Styled-Component 등 CSS툴 활용 능력 향상",
        impactContent: [
          "styled-components로 직접 컴포넌트를 구현하면서, css 속성에 대한 이해도 향상",
        ],
      },

      {
        impactTitle: "화면 구조와 UI 설계에 대한 고려",
        impactContent: [
          "반응형을 적용하면서 모바일 환경에서는 어떤 식으로 레이아웃을 구성해야하는지 생각\n",
          "세세한 디테일들을 신경쓰면서 UX적으로 어떻게 더 좋은 경험을 갖게 할 지 고민",
        ],
      },
    ],
    link: "https://github.com/LuvHub1001/herb-portfolio",
    link2: "https://dongyeop-portfolio.netlify.app/",
  },

  {
    id: "herb-culture",
    title: "서울시 문화행사 정보 조회 페이지",
    img: "/images/herb-culture.png",
    during: "2025.03\t(2주 진행)",
    description:
      "서울시 공공데이터 API를 활용하여 문화행서 정보 조회하는 페이지를 제작",
    member: "개인프로젝트",
    projectKind: ["사이드프로젝트", "개인 프로젝트"],
    projectSkill: ["React", "TypeScript", "jotai", "Axios", "tailwind-css"],
    impact: [
      {
        impactTitle: "tailwind-css를 활용하여 새로운 css툴 학습",
        impactContent: [
          "현업에서 많이 사용되고, 렌더링이 빠르다는 장점을 가진 tailwind를 직접 사용해보며 반응형까지 반영하면서 적응",
          "커스텀 클래스를 직접 제작하여 현재 '월'에 맞는 이미지로 헤더를 계절감 있게 표현",
        ],
      },

      {
        impactTitle: "프론트엔드에서의 API 통신",
        impactContent: [
          "axiosInstance를 통해 api 통신을 하기위한 기본적인 HTTP 메서드 작성",
          "pending 단계에서 promise를 throw하여 Suspense를 활용할 수 있는 훅 구현",
        ],
      },
    ],
    link: "https://github.com/LuvHub1001/herb-culture",
    link2: "https://herb-culture.netlify.app/",
  },

  {
    id: "toy-js",
    title: "토이 바닐라 프로젝트 + 자료구조 구현",
    img: "/images/ToyProject.webp",
    during: "2025.01 ~ ",
    description:
      "JS만을 이용하여서, 간단한 모듈 및 자료구조를 직접 구현해보며 연습",
    member: "개인프로젝트",
    projectKind: ["사이드프로젝트", "개인 프로젝트"],
    projectSkill: ["JavaScript"],
    impact: [
      {
        impactTitle: "Window 객체에 대한 이해와 JS의 심화 학습",
        impactContent: [
          "Window 객체의 동작 방식 및 메서드를 학습하였고, 자료구조를 직접 구현해가며 JS 역량 향상",
        ],
      },
      {
        impactTitle: "알고리즘 학습",
        impactContent: [
          "BFS, DFS, 그래프 등 대표적인 문제들을 학습하며, 컴퓨팅적 사고에 대해서 고민",
        ],
      },
    ],
    link: `https://github.com/LuvHub1001/Data_Algo`,
    link2: `https://github.com/LuvHub1001/herb-toy-js`,
  },

  {
    id: "address",
    title: "인사시스템 리뉴얼",
    img: "/images/address.png",
    during: "2023.01 ~ 2023.05",
    description: "사내 인사시스템을 리뉴얼",
    member:
      "프론트엔드 3명 / 관계사 관련 기능 담당, API설계 및 구축(기여도 40%)",
    projectKind: ["사내 프로젝트", "팀 프로젝트"],
    projectSkill: [
      "TypeScript",
      "\tReact",
      "\tAxios",
      "\tRecoil",
      "\tMUI",
      "\tNode JS",
    ],
    impact: [
      {
        impactTitle: "협업 부서와의 소통 경험",
        impactContent: [
          "디자인팀, 기획팀과의 회의를 통해 의견을 조율하고, 현재 가능한 부분과 그렇지 못한 부분에 대해서 \n",
          "이해를 통해 다른 방안을 찾아가며, 피드백을 주고 받음으로써 성장에 큰 기여",
        ],
      },
      {
        impactTitle: "사용자에게 편의를",
        impactContent: [
          "기존 Classic ASP로 되어있던 시스템보다 5s 이상 빨라졌고, 조직 개편 등이 발생할 때에도 \n",
          "매일 새벽 시간에 배치 프로그램을 돌며 자동화하여서 추후 유지보수 시에도 용이",
        ],
      },
    ],
  },
];
