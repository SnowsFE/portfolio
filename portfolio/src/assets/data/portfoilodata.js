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
          name: "muzinut/addalbum.gif",
          tit: "음악 업로드",
          desc: "업로드할 곡의 다양한 정보를 입력하여 등록할 수 있습니다.",
        },
        {
          name: "muzinut/addalbum2.gif",
          tit: "음악 업로드2",
          desc: "업로드한 곡이 등록되며, 메인 페이지와 검색 기능을 통해 확인할 수 있습니다.",
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
      name: "Minecraft 랭킹 사이트",
      project: "cpvp",
      logo: "cpvp",
      period: "2024.08 - 2024.11",
      percent: "100%",
      link: "https://www.cpvp.kr",
      description:
        "마인크래프트 Crystal PVP 랭킹 사이트를 기획하고, 유튜브와 디스코드를 활용해 홍보를 진행했으며, 퍼블리싱부터 프론트엔드, 백엔드 개발, 그리고 배포 작업까지 모두 직접 수행하였습니다. 또한, 실제 유저들과의 소통을 통해 CI/CD를 적용하고 운영하고 있습니다.",
      tech: [
        "Html & CSS",
        "Javascript",
        "React",
        "Node.js",
        "MongoDB",
        "JWT",
        "GCP",
        "Ubuntu",
        "Nginx",
      ],
      image: [
        {
          name: "cpvp/main.png",
          tit: "메인페이지",
          desc: "유저들은 자신의 랭킹을 조회할 수 있으며 sort 기능을 이용하여 종합, 평엔, 나락 각각 개별로 자신의 랭킹을 조회할 수 있습니다. 또한 검색, 신청, 닉네임 등록, 심사위원(랭크업 테스터), 디스코드로 이동을 할 수 있습니다.",
        },
        {
          name: "cpvp/search.png",
          tit: "유저 검색",
          desc: "검색창에 자신의 닉네임 또는 검색하려는 유저의 닉네임을 입력하면, 해당 유저의 랭킹 위치로 스크롤이 이동하도록 구현하였습니다. 이를 위해 keydown 이벤트 핸들러와 scrollIntoView 메서드를 활용하였습니다.",
        },
        {
          name: "cpvp/apply.png",
          tit: "신청",
          desc: "유저들은 랭크업을 위해서 신청서를 제출할 수 있으며 아이피당 하루(24시간)에 한 번만 신청서를 제출할 수 있습니다. 신청서는 리액트 퀼을 이용해 구현하였습니다.",
        },
        {
          name: "cpvp/nickname.png",
          tit: "닉네임 등록",
          desc: "유저들은 자신의 마인크래프트 닉네임을 사이트에 등록할 수 있습니다. 정규식을 이용하여 명확한 닉네임 작성을 유도하였고, Mojang API를 활용하여 존재하지 않는 닉네임이면 등록할 수 없도록 구현하였습니다.",
        },
        {
          name: "cpvp/judge.png",
          tit: "심사위원",
          desc: "유저들의 랭킹을 심사할 테스터입니다. 유튜브 커뮤니티에 모집 공고를 올려 테스터를 직접 뽑았습니다.",
        },
        {
          name: "cpvp/discord.png",
          tit: "디스코드",
          desc: "왼쪽 하단에 있는 디스코드 아이콘을 클릭하면 새 창이 열리며 이곳으로 이동됩니다.",
        },
        {
          name: "cpvp/admin.png",
          tit: "어드민 페이지",
          desc: "유저가 제출한 신청서를 어드민 페이지에서 확인할 수 있으며, 유저 관리를 통해 유저 정보 업데이트가 가능합니다.",
        },
        {
          name: "cpvp/userinfo.png",
          tit: "유저 정보",
          desc: "유저 관리에서는 모든 유저를 확인할 수 있으며 검색 필터를 통해 해당하는 유저의 닉네임을 검색할 수 있습니다. 웹킷을 통해 스크롤을 구현하였습니다.",
        },
        {
          name: "cpvp/userupdate.png",
          tit: "유저 랭킹 업데이트",
          desc: "PATCH 메서드를 통해 유저 정보를 수정하여 업데이트 할 수 있는 기능을 구현하였습니다.",
        },
        {
          name: "cpvp/detailapply.png",
          tit: "신청서 상세페이지",
          desc: "유저 신청서 데이터를 useLocation을 통해 가져오고, useParams를 사용하여 상세페이지를 구현했습니다.",
        },
      ],
    },
  ],
};

export default portfolioData;
