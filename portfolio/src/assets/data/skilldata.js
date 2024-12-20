const skillData = {
  skillList: [
    {
      label: "HTML/CSS",
      detail: [
        "원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.",
        "반응형 웹 디자인을 위해 미디어 쿼리를 활용할 수 있습니다.",
        "CSS Flexbox와 Grid 레이아웃을 사용하여 레이아웃을 구성할 수 있습니다.",
        "애니메이션 및 전환 효과를 통해 사용자 경험을 향상시킬 수 있습니다.",
      ],
      icon: "fab fa-html5",
    },

    {
      label: "Javascript/Typescript",
      detail: [
        "ES6와 이후의 자바스크립트 문법을 사용할 수 있습니다.",
        "Vanilla JS의 웹 제작이 가능하고 필요 이유에 대해 충분히 이해하고 있습니다.",
        "타입에 대한 이해를 하고 있고, 인터페이스의 사용이 가능합니다.",
      ],
      icon: "fab fa-js-square",
    },
    {
      label: "Java",
      detail: [
        "객체지향 프로그래밍에 대한 이해와 설계 패턴을 활용할 수 있습니다.",
        "파일 입출력, 예외 처리, 스레드, 컬렉션 등의 자바 핵심 기능 사용할 수 있습니다.",
        "JavaFX를 활용한 GUI 개발 경험이 있습니다.",
        "JDBC를 사용한 데이터베이스 연동 및 트랜잭션 처리가 가능합니다.",
      ],
      icon: "fab fa-java",
    },
    {
      label: "React",
      detail: [
        "컴포넌트 생명주기와 속성을 사용할 수 있습니다.",
        "function 컴포넌트를 유연하게 사용 할 수 있습니다.",
        "리덕스를 사용하여 상태관리를 할 수 있습니다.",
      ],
      icon: "fab fa-react",
    },
    {
      label: "Next.js",
      detail: [
        "서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG)을 활용하여 성능과 SEO를 개선할 수 있습니다.",
        "API 라우트를 사용하여 서버리스 함수와 백엔드 로직을 처리할 수 있습니다.",
        "Dynamic Routing과 Static Generation을 통해 동적인 페이지와 정적 페이지를 효율적으로 관리할 수 있습니다.",
      ],
      icon: "fab fa-react",
    },

    {
      label: "Git/Github",
      detail: [
        "깃과 깃헙을 사용하여 다른 개발자들과 협업을 할 수 있습니다.",
        "풀 리퀘스트(PR)를 생성하고, 코드 리뷰를 진행하며, 병합 작업을 수행한 경험이 있습니다.",
        "브랜치 관리와 충돌 해결, 코드 리뷰를 통한 협업 능력을 보유하고 있습니다.",
      ],
      icon: "fab fa-git-square",
    },
    {
      label: "Node.js",
      detail: [
        "React 애플리케이션을 Node.js 서버에서 호스팅한 경험이 있습니다.",
        "Node.js를 사용하여 백엔드 작업과 MongoDB 연결, 스키마 생성 및 DB 구성 경험이 있습니다.",
        "배포까지 포함한 전체 개발 프로세스를 경험했습니다.",
      ],
      icon: "fab fa-node",
    },
    {
      label: "MongoDB",
      detail: [
        "MongoDB 클러스터를 생성하고 네트워크 IP 추가 및 관리한 경험이 있습니다.",
        "MongoDB의 스키마 설계, 데이터베이스 구성 및 연결을 설정한 경험이 있습니다.",
        "Node.js와 MongoDB를 연동하여 백엔드 작업을 수행한 경험이 있습니다.",
      ],
      icon: "fas fa-database",
    },
    {
      label: "MySQL",
      detail: [
        "MySQL을 사용한 데이터베이스 설계 및 최적화가 가능합니다.",
        "CRUD(Create, Read, Update, Delete)기능 구현을 통한 데이터 처리가 가능합니다.",
        "복잡한 SQL 쿼리 작성 및 인덱스, 조인 등을 활용한 성능 향상 경험이 있습니다.",
        "JDBC를 통한 자바 애플리케이션과 MySQL의 연동 경험이 있습니다.",
      ],
      icon: "fas fa-database",
    },
    {
      label: "H2 Database",
      detail: [
        "H2를 사용한 데이터베이스 설정 및 연동 경험이 있습니다.",
        "메모리 모드 및 파일 모드를 활용한 임시 데이터 저장 및 빠른 데이터베이스 체크 경험이 있습니다.",
        "JDBC를 통한 H2 데이터베이스와 자바 애플리케이션 연동 경험이 있습니다.",
        "SQL 쿼리 작성 및 데이터베이스 초기화 작업 수행을 해본 경험이 있습니다.",
      ],
      icon: "fas fa-database",
    },
    {
      label: "GCP (Google Cloud Platform)",
      detail: [
        "GCP Shell 환경에서 Nginx를 사용하여 웹 서버를 설정하고 구성한 경험이 있습니다.",
        "Google Cloud Compute Engine을 사용하여 가상 머신을 생성하고 관리한 경험이 있습니다.",
        "Google Cloud Storage를 활용하여 데이터를 저장 및 관리한 경험이 있습니다.",
        "Cloud Monitoring을 통해 서버의 상태를 모니터링하고 로그를 관리한 경험이 있습니다.",
      ],
      icon: "fab fa-google",
    },
    {
      label: "Ubuntu",
      detail: [
        "Ubuntu 서버 환경에서 웹 애플리케이션을 호스팅한 경험이 있습니다.",
        "Nginx를 사용하여 웹 서버를 설정하고 관리한 경험이 있습니다.",
        "SSH를 활용한 원격 서버 접속 및 관리 경험이 있습니다.",
        "Ubuntu 환경에서 패키지 관리 도구(apt)를 사용하여 소프트웨어를 설치 및 관리할 수 있습니다.",
        "방화벽(UFW) 설정 및 서버 보안 작업을 수행한 경험이 있습니다.",
      ],
      icon: "fab fa-linux",
    },
    {
      label: "PM2",
      detail: [
        "GCP에서 Node.js 서버를 PM2로 관리하며 자동 재시작 기능을 설정한 경험이 있습니다.",
        "Node.js 애플리케이션의 성능 모니터링과 로그 관리 기능을 PM2를 통해 설정한 경험이 있습니다.",
      ],
      icon: "fas fa-cogs",
    },
    {
      label: "Terbot",
      detail: [
        "Terbot을 활용해 자동화된 작업을 처리하고 배포 및 관리한 경험이 있습니다.",
      ],
      icon: "fas fa-robot",
    },
  ],

  experienceList: [
    {
      period: "2024.1 - 2024.6",
      position: "Full Stack Developer Education",
      company: "KG ITBANK",
      explain:
        "프론트엔드 전문 학원은 주로 프론트엔드 기술만을 집중적으로 다루기 때문에, 백엔드 기술이나 API 통신 경험이 부족할 수 있다는 우려가 있었습니다. 이를 보완하기 위해 KG ITBANK에서 풀스택 개발 과정을 선택하여 백엔드에 대한 이해를 높였고, 그 결과 프론트엔드 개발자로서 백엔드 팀과 효과적으로 협업할 수 있는 능력을 갖추게 되었습니다.",
    },
    {
      period: "2023.2 - 2024.1",
      position: "Core Education",
      company: "KG ITBANK",
      explain: `KG ITBANK에서 1년 동안 다양한 기술 스택(Python, C, 자료구조, JAVA, JSP, 리눅스, 네트워크, HTML/CSS, Spring Framework, Jquery)을 학습하며 실무 기술과 CS지식의 기초적인 개념을 강화하였습니다.`,
    },
  ],

  educationList: [
    {
      period: "2023.03.01 - 2023.03.31",
      position: "클라우드 이해",
      company: "K-디지털 기초역량훈련",
      explain:
        "클라우드 컴퓨팅의 원리와 IaaS, PaaS, SaaS 모델에 대해 학습하였으며, AWS를 활용한 클라우드 인프라 구축과 관리 방법을 익혔습니다. 또한, 데이터 보안과 처리에 대한 기본 개념을 습득했습니다.",
    },
    {
      period: "2023.03.01 - 2023.03.31",
      position: "빅데이터 분석",
      company: "K-디지털 기초역량훈련",
      explain:
        "빅데이터의 구조와 처리 방법을 학습하였으며, Hadoop을 활용한 데이터 수집, 저장, 분석 기술을 익혔습니다. 또한, 데이터를 정제하고 시각화하여 분석하는 능력을 향상시켰습니다.",
    },
  ],
};

export default skillData;
