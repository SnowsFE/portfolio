const portfolioData = {
  portfolioList: [
    {
      name: "CodeRoom",
      period: "2024.04 - 2024.05",
      project: "Community",
      logo: "coderoom",
      percent: "100%",
      github:
        "https://github.com/SnowsFE/Portfolio-codeRoom?tab=readme-ov-file",
      description:
        "마음이 맞는 사람들끼리 함께 활동하는 것에 영감을 받아 제작한 팀원 모집 웹사이트 입니다. 관심있는 주제를 보고 지원 신청을 할 수 있으며, 다양한 기술 스택을 가진 사람들이 함께 활동할 수 있도록 웹사이트를 구성하였습니다.",
      tech: ["Html & CSS", "Javascript", "React", "Node.js", "MySQL"],
      image: [
        {
          name: "coderoom/main.gif",
          tit: "메인페이지",
          desc: "사용자가 작성한 글과 다른 사용자의 글을 볼 수 있는 메인 페이지입니다. 글은 카테고리별로 분류되어 있습니다.",
        },
        {
          name: "coderoom/write.gif",
          tit: "글쓰기",
          desc: "로그인을 해야 글쓰기가 가능합니다. 사용자의 목적에 맞는 카테고리 선택이 가능합니다.",
        },
        {
          name: "coderoom/detail.gif",
          tit: "상세페이지",
          desc: "업로드가 된 글을 확인할 수 있습니다. 다른 사용자는 댓글을 작성할 수 있습니다.",
        },
        {
          name: "coderoom/mypage.gif",
          tit: "마이페이지",
          desc: "사용자가 업로드한 글을 확인할 수 있습니다. 작성한 글의 수정 및 삭제가 가능합니다.",
        },
        {
          name: "coderoom/modify.gif",
          tit: "글수정",
          desc: "작성한 글을 수정할 수 있습니다. 이전에 입력한 정보가 유지됩니다.",
        },
      ],
    },
    {
      name: "Muzinut",
      project: "Muzinut",
      logo: "MuziLogo",
      period: "2024.06 - 2024.08",
      percent: "100%",
      github: "https://github.com/youngho3358/Muzinut?tab=readme-ov-file",
      description:
        "무명 가수를 위한 무료 스트리밍 웹사이트입니다. 음원 업로드, 음원 재생, 커뮤니티, 마이페이지, 댓글, 좋아요 등의 기능을 개발하였습니다.",
      tech: [
        "Html & CSS",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Spring",
        "Mysql",
        "Redis",
        "JWT",
      ],
      image: [
        {
          name: "muzinut/join.gif",
          tit: "회원가입",
          desc: "Redis를 이용한 이메일 인증을 통해 회원가입이 이루어집니다.",
        },
        {
          name: "muzinut/login.gif",
          tit: "로그인",
          desc: "이메일 인증 시 작성한 아이디가 뮤지넛 아이디로 설정되며, 이후 비밀번호를 추가로 입력하여 로그인할 수 있습니다.",
        },
        {
          name: "muzinut/메인화면.png",
          tit: "메인페이지 상단",
          desc: "업로드된 음악을 최신순으로 5개씩 슬라이드 형식으로 보여주며, 최신 음악들을 확인할 수 있습니다. 아래에는 좋아요 수를 기준으로 인기 차트와 인기 아티스트가 구성되어 있습니다.",
        },
        {
          name: "muzinut/musicplay.gif",
          tit: "음악 재생",
          desc: "업로드된 음악을 메인 페이지에서 바로 재생 가능하며, 클릭 시 하단에 재생 바가 표시됩니다.",
        },
        {
          name: "muzinut/메인화면 하단.png",
          tit: "메인페이지 하단",
          desc: "인기, 자유, 모집 게시판이 있으며, 인기 게시판은 조회수 순으로, 자유 및 모집 게시판은 글 등록 순으로 메인 페이지에 보이게 됩니다.",
        },
        {
          name: "muzinut/boardadd.gif",
          tit: "게시글 등록",
          desc: "커뮤니티로 이동하면 작성된 게시글을 확인할 수 있으며, 게시글은 인기순, 최신순, 좋아요 순으로 정렬할 수 있습니다. 추가로, 토큰 인증된 사용자만 글쓰기 버튼을 이용하여 글을 작성할 수 있습니다.",
        },
        {
          name: "muzinut/boarddetailcomment.gif",
          tit: "게시글 상세페이지",
          desc: "작성된 게시글을 클릭하면 해당 게시글의 상세 페이지로 이동되며, 좋아요, 댓글 작성, 대댓글 작성, 북마크, 공유하기 등의 기능을 이용할 수 있습니다. 글 작성자인 경우, 삼각바 아이콘을 클릭하여 수정 및 삭제 기능을 이용할 수 있습니다.",
        },
        {
          name: "muzinut/myboard.gif",
          tit: "마이페이지 - 게시글",
          desc: "작성한 글은 마이페이지의 게시글 섹션에서 확인할 수 있으며, 해당 글은 글 작성자의 게시판 DB에 저장됩니다.",
        },
        {
          name: "muzinut/profilebannerchange.gif",
          tit: "배너 및 프로필 이미지 수정",
          desc: "기본으로 배너, 프로필 이미지가 설정됩니다. 이후 사용자가 원하는 대로 변경할 수 있으며, 변경된 이미지는 DB에 저장됩니다.",
        },
        {
          name: "muzinut/main.png",
          tit: "마이페이지 - 메인",
          desc: "자신이 업로드한 곡의 정보가 마이페이지의 메인 섹션에 표시됩니다. 가장 많은 좋아요를 받은 곡이 메인 곡으로 설정되며, 그 아래에는 업로드한 앨범이 나열됩니다.",
        },
        {
          name: "muzinut/lounge1.png",
          tit: "마이페이지 - 라운지",
          desc: "팬들과 소통할 수 있는 창구입니다.",
        },
        {
          name: "muzinut/lounge2.png",
          tit: "마이페이지 - 라운지",
          desc: "글 작성(TALK 클릭)을 통해 팬들과 직접 소통할 수 있으며, 수정, 삭제, 좋아요, 댓글 등의 기능이 제공됩니다.",
        },
      ],
    },
    {
      name: "Hanssem Mobile Renewal",
      project: "Freelancer",
      logo: "hanssem",
      period: "2020.09 - 2020.11",
      percent: "45%",
      link: "http://mall.hanssem.com/m/main.html?module=home",
      description:
        "한샘몰 모바일 리뉴얼 작업하였습니다. 모바일 페이지를 전체 리뉴얼 작업을 하였습니다. 각 요소들을 컴포넌트화 시켜서 작업하였습니다.",
      tech: ["Html & CSS", "Javascript", "SVN", "Zeplin"],
      image: [
        {
          name: "hanssem/main.png",
          tit: "",
          desc: "",
        },
        {
          name: "hanssem/main2.png",
          tit: "",
          desc: "",
        },
      ],
    },
  ],
};

export default portfolioData;
