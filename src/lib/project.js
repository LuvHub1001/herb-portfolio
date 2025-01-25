export const project_data = [
  {
    id: "portfolio",
    title: "포트폴리오",
    img: "/images/portfolio.png",
    during: "2025.01~",
    description: "포트폴리오를 React를 활용하여 제작하였습니다.",
    member: "개인프로젝트 / 프론트엔드(기여도 100%), UI 디자인(기여도 100%)",
    projectKind: ["사이드프로젝트", "개인 프로젝트"],
    projectSkill: ["React"],
    impact: [
      {
        impactTitle: "Styled-Component 등 CSS툴 활용 능력 향상",
        impactContent: [
          "기존 이미 디자인이 되어있는 MUI의 컴포넌트들을 import 하며 사용해왔는데, styled-components로 직접 컴포넌트를 구현하면서, css 속성에 대한 이해도가 향상하였습니다.",
        ],
      },

      {
        impactTitle: "화면 구조와 UI 설계에 대한 고려",
        impactContent: [
          "반응형을 적용하면서 모바일 환경에서는 어떤 식으로 레이아웃을 구성해야하는지 충분히 생각할 수 있는 기회가 되었습니다.\n",
          "세세한 디테일들을 신경쓰면서 UX적으로 어떻게 더 좋은 경험을 갖게 할 지 생각하는 힘을 가지게 되었습니다.",
        ],
      },
    ],
    link: "https://github.com/LuvHub1001/herb-portfolio",
  },

  {
    id: "toy-js",
    title: "토이 바닐라 프로젝트 + 자료구조 구현",
    img: "/images/ToyProject.webp",
    during: "2025.01 ~ ",
    description:
      "JS만을 이용하여서, 간단한 모듈 및 자료구조를 직접 구현해보며 연습하였습니다",
    member: "개인 / 프론트엔드(기여도 100%), UI 디자인(기여도 100%)",
    projectKind: ["사이드프로젝트", "개인 프로젝트"],
    projectSkill: ["JavaScript"],
    impact: [
      {
        impactTitle: "Window 객체에 대한 이해와 JS의 심화 학습",
        impactContent: [
          "Window 객체의 동작 방식 및 메서드를 학습하였고, 자료구조를 직접 구현해가며 JS 역량을 향상시켰습니다.",
        ],
      },
      {
        impactTitle: "알고리즘 학습",
        impactContent: [
          "BFS, DFS, 그래프 등 대표적인 문제들을 학습하며, 컴퓨팅적 사고에 대해서 고민해보게 되었습니다.",
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
    description: "사내 인사시스템을 리뉴얼하였습니다.",
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
          "이해를 통해 다른 방안을 찾아가며, 피드백을 주고 받았습니다. 그로 인해 실무에 적응하는 것에 큰 도움이 되었습니다.",
        ],
      },
      {
        impactTitle: "사용자에게 편의를",
        impactContent: [
          "기존 Classic ASP로 되어있던 시스템보다 5s 이상 빨라졌고, 조직 개편 등이 발생할 때에도 \n",
          "매일 새벽 시간에 배치 프로그램을 돌며 자동화하여서 추후 유지보수 시에도 용이했습니다.",
        ],
      },
    ],
  },
];
