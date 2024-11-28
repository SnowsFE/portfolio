(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,t){},26:function(e,t,i){},38:function(e,t,i){"use strict";i.r(t);var o=i(1),a=i.n(o),n=i(17),s=i.n(n),l=(i(26),i(8)),c=i(3),r=i(2),p=i(0);var d=e=>{if("1"===e.level)return Object(p.jsx)("h1",{...e,children:e.children});switch(e.level){case"1":default:return Object(p.jsx)("h1",{...e,children:e.children});case"2":return Object(p.jsx)("h2",{...e,children:e.children});case"3":return Object(p.jsx)("h3",{...e,children:e.children});case"4":return Object(p.jsx)("h4",{...e,children:e.children})}};const m=r.b.div`
	position: relative;
	padding: 80px 0px 80px 0px;
	text-align: center;
	h1 {
		font-size: 56px;
		font-weight: 900;
		text-transform: uppercase;
		margin: 10px auto;
	}
	.title-bg {
		font-size: 110px;
		left: 0;
		letter-spacing: 60px;
		position: absolute;
		right: 0;
		top: 50%;
		text-transform: uppercase;
		font-weight: 800;
		transform: translateY(-53%);
		opacity: 0.07;
		&.on {
			transition: all 1.1s;
			letter-spacing: 10px;
		}
	}
	@media ${e=>e.theme.tablet} {
		padding: 60px 0px 60px 0px;
	}
	@media ${e=>e.theme.mobile} {
		padding: 30px 0px 30px 0px;
		h1 {
			font-size: 46px;
			letter-spacing: 3px;
		}
		.title-bg {
			font-size: 80px;
			letter-spacing: 20px;
			&.on {
			}
		}
	}
`;var h=function(e){const{children:t}=e,[i,a]=Object(o.useState)(!1);return Object(o.useEffect)((()=>(setTimeout((()=>{a(!0)}),450),()=>a(!1))),[]),Object(p.jsxs)(m,{className:"heading-wrap",children:[Object(p.jsx)(d,{children:t}),Object(p.jsx)("span",{className:"title-bg"+(i?" on":""),children:e.titleBg})]})};var x={skillList:[{label:"HTML/CSS",detail:["\uc6d0\ud558\ub294 UI\ub97c \uc2e4\uc6a9\uc801\uc774\uace0, \uc775\uc219\ud558\uac8c \ub9cc\ub4e4\uc5b4 \ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.","\ubc18\uc751\ud615 \uc6f9 \ub514\uc790\uc778\uc744 \uc704\ud574 \ubbf8\ub514\uc5b4 \ucffc\ub9ac\ub97c \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","CSS Flexbox\uc640 Grid \ub808\uc774\uc544\uc6c3\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub808\uc774\uc544\uc6c3\uc744 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","\uc560\ub2c8\uba54\uc774\uc158 \ubc0f \uc804\ud658 \ud6a8\uacfc\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \ud5a5\uc0c1\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fab fa-html5"},{label:"Javascript/Typescript",detail:["ES6\uc640 \uc774\ud6c4\uc758 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubb38\ubc95\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","Vanilla JS\uc758 \uc6f9 \uc81c\uc791\uc774 \uac00\ub2a5\ud558\uace0 \ud544\uc694 \uc774\uc720\uc5d0 \ub300\ud574 \ucda9\ubd84\ud788 \uc774\ud574\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.","\ud0c0\uc785\uc5d0 \ub300\ud55c \uc774\ud574\ub97c \ud558\uace0 \uc788\uace0, \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."],icon:"fab fa-js-square"},{label:"Java",detail:["\uac1d\uccb4\uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0 \ub300\ud55c \uc774\ud574\uc640 \uc124\uacc4 \ud328\ud134\uc744 \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","\ud30c\uc77c \uc785\ucd9c\ub825, \uc608\uc678 \ucc98\ub9ac, \uc2a4\ub808\ub4dc, \uceec\ub809\uc158 \ub4f1\uc758 \uc790\ubc14 \ud575\uc2ec \uae30\ub2a5 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","JavaFX\ub97c \ud65c\uc6a9\ud55c GUI \uac1c\ubc1c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","JDBC\ub97c \uc0ac\uc6a9\ud55c \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5f0\ub3d9 \ubc0f \ud2b8\ub79c\uc7ad\uc158 \ucc98\ub9ac\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."],icon:"fab fa-java"},{label:"React",detail:["\ucef4\ud3ec\ub10c\ud2b8 \uc0dd\uba85\uc8fc\uae30\uc640 \uc18d\uc131\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","function \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc720\uc5f0\ud558\uac8c \uc0ac\uc6a9 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","\ub9ac\ub355\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0c1\ud0dc\uad00\ub9ac\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fab fa-react"},{label:"Next.js",detail:["\uc11c\ubc84 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1(SSR) \ubc0f \uc815\uc801 \uc0ac\uc774\ud2b8 \uc0dd\uc131(SSG)\uc744 \ud65c\uc6a9\ud558\uc5ec \uc131\ub2a5\uacfc SEO\ub97c \uac1c\uc120\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","API \ub77c\uc6b0\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc11c\ubc84\ub9ac\uc2a4 \ud568\uc218\uc640 \ubc31\uc5d4\ub4dc \ub85c\uc9c1\uc744 \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","Dynamic Routing\uacfc Static Generation\uc744 \ud1b5\ud574 \ub3d9\uc801\uc778 \ud398\uc774\uc9c0\uc640 \uc815\uc801 \ud398\uc774\uc9c0\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fab fa-react"},{label:"Git/Github",detail:["\uae43\uacfc \uae43\ud5d9\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub2e4\ub978 \uac1c\ubc1c\uc790\ub4e4\uacfc \ud611\uc5c5\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","\ud480 \ub9ac\ud018\uc2a4\ud2b8(PR)\ub97c \uc0dd\uc131\ud558\uace0, \ucf54\ub4dc \ub9ac\ubdf0\ub97c \uc9c4\ud589\ud558\uba70, \ubcd1\ud569 \uc791\uc5c5\uc744 \uc218\ud589\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","\ube0c\ub79c\uce58 \uad00\ub9ac\uc640 \ucda9\ub3cc \ud574\uacb0, \ucf54\ub4dc \ub9ac\ubdf0\ub97c \ud1b5\ud55c \ud611\uc5c5 \ub2a5\ub825\uc744 \ubcf4\uc720\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fab fa-git-square"},{label:"Node.js",detail:["React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 Node.js \uc11c\ubc84\uc5d0\uc11c \ud638\uc2a4\ud305\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","Node.js\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc31\uc5d4\ub4dc \uc791\uc5c5\uacfc MongoDB \uc5f0\uacb0, \uc2a4\ud0a4\ub9c8 \uc0dd\uc131 \ubc0f DB \uad6c\uc131 \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","\ubc30\ud3ec\uae4c\uc9c0 \ud3ec\ud568\ud55c \uc804\uccb4 \uac1c\ubc1c \ud504\ub85c\uc138\uc2a4\ub97c \uacbd\ud5d8\ud588\uc2b5\ub2c8\ub2e4."],icon:"fab fa-node"},{label:"MongoDB",detail:["MongoDB \ud074\ub7ec\uc2a4\ud130\ub97c \uc0dd\uc131\ud558\uace0 \ub124\ud2b8\uc6cc\ud06c IP \ucd94\uac00 \ubc0f \uad00\ub9ac\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","MongoDB\uc758 \uc2a4\ud0a4\ub9c8 \uc124\uacc4, \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uad6c\uc131 \ubc0f \uc5f0\uacb0\uc744 \uc124\uc815\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","Node.js\uc640 MongoDB\ub97c \uc5f0\ub3d9\ud558\uc5ec \ubc31\uc5d4\ub4dc \uc791\uc5c5\uc744 \uc218\ud589\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fas fa-database"},{label:"MySQL",detail:["MySQL\uc744 \uc0ac\uc6a9\ud55c \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc124\uacc4 \ubc0f \ucd5c\uc801\ud654\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4.","CRUD(Create, Read, Update, Delete)\uae30\ub2a5 \uad6c\ud604\uc744 \ud1b5\ud55c \ub370\uc774\ud130 \ucc98\ub9ac\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4.","\ubcf5\uc7a1\ud55c SQL \ucffc\ub9ac \uc791\uc131 \ubc0f \uc778\ub371\uc2a4, \uc870\uc778 \ub4f1\uc744 \ud65c\uc6a9\ud55c \uc131\ub2a5 \ud5a5\uc0c1 \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","JDBC\ub97c \ud1b5\ud55c \uc790\ubc14 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc MySQL\uc758 \uc5f0\ub3d9 \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fas fa-database"},{label:"H2 Database",detail:["H2\ub97c \uc0ac\uc6a9\ud55c \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc124\uc815 \ubc0f \uc5f0\ub3d9 \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","\uba54\ubaa8\ub9ac \ubaa8\ub4dc \ubc0f \ud30c\uc77c \ubaa8\ub4dc\ub97c \ud65c\uc6a9\ud55c \uc784\uc2dc \ub370\uc774\ud130 \uc800\uc7a5 \ubc0f \ube60\ub978 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uccb4\ud06c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","JDBC\ub97c \ud1b5\ud55c H2 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc640 \uc790\ubc14 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc5f0\ub3d9 \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","SQL \ucffc\ub9ac \uc791\uc131 \ubc0f \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ucd08\uae30\ud654 \uc791\uc5c5 \uc218\ud589\uc744 \ud574\ubcf8 \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fas fa-database"},{label:"GCP (Google Cloud Platform)",detail:["GCP Shell \ud658\uacbd\uc5d0\uc11c Nginx\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc6f9 \uc11c\ubc84\ub97c \uc124\uc815\ud558\uace0 \uad6c\uc131\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","Google Cloud Compute Engine\uc744 \uc0ac\uc6a9\ud558\uc5ec \uac00\uc0c1 \uba38\uc2e0\uc744 \uc0dd\uc131\ud558\uace0 \uad00\ub9ac\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","Google Cloud Storage\ub97c \ud65c\uc6a9\ud558\uc5ec \ub370\uc774\ud130\ub97c \uc800\uc7a5 \ubc0f \uad00\ub9ac\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","Cloud Monitoring\uc744 \ud1b5\ud574 \uc11c\ubc84\uc758 \uc0c1\ud0dc\ub97c \ubaa8\ub2c8\ud130\ub9c1\ud558\uace0 \ub85c\uadf8\ub97c \uad00\ub9ac\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fab fa-google"},{label:"Ubuntu",detail:["Ubuntu \uc11c\ubc84 \ud658\uacbd\uc5d0\uc11c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ud638\uc2a4\ud305\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","Nginx\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc6f9 \uc11c\ubc84\ub97c \uc124\uc815\ud558\uace0 \uad00\ub9ac\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","SSH\ub97c \ud65c\uc6a9\ud55c \uc6d0\uaca9 \uc11c\ubc84 \uc811\uc18d \ubc0f \uad00\ub9ac \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","Ubuntu \ud658\uacbd\uc5d0\uc11c \ud328\ud0a4\uc9c0 \uad00\ub9ac \ub3c4\uad6c(apt)\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uc124\uce58 \ubc0f \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","\ubc29\ud654\ubcbd(UFW) \uc124\uc815 \ubc0f \uc11c\ubc84 \ubcf4\uc548 \uc791\uc5c5\uc744 \uc218\ud589\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fab fa-linux"},{label:"PM2",detail:["GCP\uc5d0\uc11c Node.js \uc11c\ubc84\ub97c PM2\ub85c \uad00\ub9ac\ud558\uba70 \uc790\ub3d9 \uc7ac\uc2dc\uc791 \uae30\ub2a5\uc744 \uc124\uc815\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","Node.js \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc131\ub2a5 \ubaa8\ub2c8\ud130\ub9c1\uacfc \ub85c\uadf8 \uad00\ub9ac \uae30\ub2a5\uc744 PM2\ub97c \ud1b5\ud574 \uc124\uc815\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fas fa-cogs"},{label:"Terbot",detail:["Terbot\uc744 \ud65c\uc6a9\ud574 \uc790\ub3d9\ud654\ub41c \uc791\uc5c5\uc744 \ucc98\ub9ac\ud558\uace0 \ubc30\ud3ec \ubc0f \uad00\ub9ac\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4."],icon:"fas fa-robot"}],experienceList:[{period:"2024.1 - 2024.6",position:"Full Stack Developer Education",company:"KG ITBANK",explain:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uc804\ubb38 \ud559\uc6d0\uc740 \uc8fc\ub85c \ud504\ub860\ud2b8\uc5d4\ub4dc \uae30\uc220\ub9cc\uc744 \uc9d1\uc911\uc801\uc73c\ub85c \ub2e4\ub8e8\uae30 \ub54c\ubb38\uc5d0, \ubc31\uc5d4\ub4dc \uae30\uc220\uc774\ub098 API \ud1b5\uc2e0 \uacbd\ud5d8\uc774 \ubd80\uc871\ud560 \uc218 \uc788\ub2e4\ub294 \uc6b0\ub824\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ubcf4\uc644\ud558\uae30 \uc704\ud574 KG ITBANK\uc5d0\uc11c \ud480\uc2a4\ud0dd \uac1c\ubc1c \uacfc\uc815\uc744 \uc120\ud0dd\ud558\uc5ec \ubc31\uc5d4\ub4dc\uc5d0 \ub300\ud55c \uc774\ud574\ub97c \ub192\uc600\uace0, \uadf8 \uacb0\uacfc \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub85c\uc11c \ubc31\uc5d4\ub4dc \ud300\uacfc \ud6a8\uacfc\uc801\uc73c\ub85c \ud611\uc5c5\ud560 \uc218 \uc788\ub294 \ub2a5\ub825\uc744 \uac16\ucd94\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."},{period:"2023.2 - 2024.1",position:"Core Education",company:"KG ITBANK",explain:"KG ITBANK\uc5d0\uc11c 1\ub144 \ub3d9\uc548 \ub2e4\uc591\ud55c \uae30\uc220 \uc2a4\ud0dd(Python, C, \uc790\ub8cc\uad6c\uc870, JAVA, JSP, \ub9ac\ub205\uc2a4, \ub124\ud2b8\uc6cc\ud06c, HTML/CSS, Spring Framework, Jquery)\uc744 \ud559\uc2b5\ud558\uba70 \uc2e4\ubb34 \uae30\uc220\uacfc CS\uc9c0\uc2dd\uc758 \uae30\ucd08\uc801\uc778 \uac1c\ub150\uc744 \uac15\ud654\ud558\uc600\uc2b5\ub2c8\ub2e4."}],educationList:[{period:"2023.03.01 - 2023.03.31",position:"\ud074\ub77c\uc6b0\ub4dc \uc774\ud574",company:"K-\ub514\uc9c0\ud138 \uae30\ucd08\uc5ed\ub7c9\ud6c8\ub828",explain:"\ud074\ub77c\uc6b0\ub4dc \ucef4\ud4e8\ud305\uc758 \uc6d0\ub9ac\uc640 IaaS, PaaS, SaaS \ubaa8\ub378\uc5d0 \ub300\ud574 \ud559\uc2b5\ud558\uc600\uc73c\uba70, AWS\ub97c \ud65c\uc6a9\ud55c \ud074\ub77c\uc6b0\ub4dc \uc778\ud504\ub77c \uad6c\ucd95\uacfc \uad00\ub9ac \ubc29\ubc95\uc744 \uc775\ud614\uc2b5\ub2c8\ub2e4. \ub610\ud55c, \ub370\uc774\ud130 \ubcf4\uc548\uacfc \ucc98\ub9ac\uc5d0 \ub300\ud55c \uae30\ubcf8 \uac1c\ub150\uc744 \uc2b5\ub4dd\ud588\uc2b5\ub2c8\ub2e4."},{period:"2023.03.01 - 2023.03.31",position:"\ube45\ub370\uc774\ud130 \ubd84\uc11d",company:"K-\ub514\uc9c0\ud138 \uae30\ucd08\uc5ed\ub7c9\ud6c8\ub828",explain:"\ube45\ub370\uc774\ud130\uc758 \uad6c\uc870\uc640 \ucc98\ub9ac \ubc29\ubc95\uc744 \ud559\uc2b5\ud558\uc600\uc73c\uba70, Hadoop\uc744 \ud65c\uc6a9\ud55c \ub370\uc774\ud130 \uc218\uc9d1, \uc800\uc7a5, \ubd84\uc11d \uae30\uc220\uc744 \uc775\ud614\uc2b5\ub2c8\ub2e4. \ub610\ud55c, \ub370\uc774\ud130\ub97c \uc815\uc81c\ud558\uace0 \uc2dc\uac01\ud654\ud558\uc5ec \ubd84\uc11d\ud558\ub294 \ub2a5\ub825\uc744 \ud5a5\uc0c1\uc2dc\ucf30\uc2b5\ub2c8\ub2e4."}]};const b=r.b.div`
  display: flex;
  justify-content: space-between;
  > div {
    width: 50%;
    > ul {
      > li {
        position: relative;
        padding: 0 20px 0 60px;
        margin: 0 0 50px;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 20px;
          bottom: 0;
          border-left: 1px solid #333;
        }
        .icon {
          position: absolute;
          left: 0;
          right: 0;
          z-index: 1;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
          background-color: ${e=>e.theme.mainColor};
        }
        .time {
          display: inline-block;
          padding: 1px 10px;
          margin-bottom: 12px;
          border-radius: 20px;
          background-color: #252525;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.6px;
          opacity: 0.8;
        }
        > h4 {
          margin: 7px 0 10px;
          font-size: 18px;
          font-weight: 500;
          opacity: 0.8;
          span {
            position: relative;
            padding-left: 26px;
            font-size: 15px;
            font-weight: 600;
            opacity: 0.6;
            &::before {
              position: absolute;
              content: "";
              width: 10px;
              height: 2px;
              background-color: #fff;
              left: 7px;
              top: 9px;
              opacity: 0.8;
            }
          }
        }
        > p {
          font-size: 14px;
        }
      }
    }
  }

  @media ${e=>e.theme.laptop} {
    width: 85%;
    margin: auto;
    > div {
    }
  }
  @media ${e=>e.theme.mobile} {
    flex-wrap: wrap;
    width: 90%;

    > div {
      width: 100%;
      > ul {
        > li {
          padding: 0 50px 0 50px;
        }
      }
    }
  }
`;var j=function(){const e=x.educationList.map(((e,t)=>Object(p.jsxs)("li",{children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)("i",{className:"fas fa-graduation-cap"})}),Object(p.jsx)("span",{className:"time",children:e.period}),Object(p.jsxs)(d,{level:"4",children:[e.position,Object(p.jsx)("span",{className:"place",children:e.company})]}),Object(p.jsx)("p",{children:e.explain})]},t))),t=x.experienceList.map(((e,t)=>Object(p.jsxs)("li",{children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)("i",{className:"fas fa-graduation-cap"})}),Object(p.jsx)("span",{className:"time",children:e.period}),Object(p.jsxs)(d,{level:"4",children:[e.company,Object(p.jsx)("span",{className:"place",children:e.position})]}),Object(p.jsx)("p",{children:e.explain})]},t)));return Object(p.jsxs)(b,{children:[Object(p.jsx)("div",{className:"experience",children:Object(p.jsx)("ul",{children:t})}),Object(p.jsx)("div",{className:"education",children:Object(p.jsx)("ul",{children:e})})]})};const g=r.b.div`
	display: flex;
	flex-wrap: wrap;
	.skill-list {
		width: calc(33% - 30px);
		margin: 0 15px 30px;
		padding: 20px 30px 20px 30px;
		border: 1px solid #252525;
		border-radius: 5px;
		cursor: default;
		.skill-label {
			margin-bottom: 10px;
			i {
				color: ${e=>e.theme.mainColor};
				padding-right: 10px;
				font-size: 50px;
				vertical-align: text-top;
			}
		}
		.skill-detail {
			li {
				position: relative;
				padding: 0 0 10px 30px;
				font-size: 14px;
				line-height: 1.5;
				color: rgb(255 255 255 / 80%);
				&::before {
					content: "";
					position: absolute;
					left: 0;
					top: 13px;
					width: 20px;
					height: 1px;
					background: ${e=>e.theme.mainColor};
				}
			}
		}
	}
	@media ${e=>e.theme.laptop} {
		width: 85%;
		margin: auto;
		.skill-list {
			width: calc(50% - 30px);
		}
	}
	@media ${e=>e.theme.mobile} {
		width: 90%;
		.skill-list {
			width: calc(100% - 30px);
		}
	}
	.skill-list {
		position: relative;
		&::before,
		&::after {
			content: "";
			box-sizing: inherit;
			position: absolute;
			width: 100%;
			height: 100%;
			border: 1px solid transparent;
			width: 0;
			height: 0;
			border-radius: 5px;
		}
		&::before {
			top: 0;
			left: 0;
		}
		&::after {
			bottom: 0;
			right: 0;
		}
		&:hover {
			&::before,
			&::after {
				width: 100%;
				height: 100%;
			}
			&::before {
				border-top-color: ${e=>e.theme.mainColor};
				border-right-color: ${e=>e.theme.mainColor};
				transition: width 0.15s ease-out, height 0.15s ease-out 0.15s;
			}
			&::after {
				border-bottom-color: ${e=>e.theme.mainColor};
				border-left-color: ${e=>e.theme.mainColor};
				transition: border-color 0s ease-out 0.3s, width 0.15s ease-out 0.3s, height 0.15s ease-out 0.45s;
			}
		}
	}
`;var f=function(){const e=x.skillList.map(((e,t)=>Object(p.jsxs)("div",{className:"skill-list",children:[Object(p.jsxs)(d,{level:"3",className:"skill-label",children:[Object(p.jsx)("i",{className:e.icon}),": ",e.label]}),Object(p.jsx)("ul",{className:"skill-detail",children:e.detail.map(((e,t)=>Object(p.jsx)("li",{children:e},t)))})]},t)));return Object(p.jsx)(g,{children:e})};const u=r.b.header`
  position: fixed;
  right: 20px;
  top: 60px;
  bottom: 0;
  z-index: 100;
  opacity: 0;
  &.on {
    top: 0;
    opacity: 1;
    transition: all 0.85s;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    height: 100%;
    li {
      position: relative;
      &:not(:last-child) {
        margin: 0 0 20px 0;
      }
      &.active {
        a {
          background-color: ${e=>e.theme.mainColor};
        }
      }
      &:hover {
        a {
          padding: 13px 14px 13px 25px;
          background-color: ${e=>e.theme.mainColor};
          span {
            position: relative;
            opacity: 1;
            padding-right: 10px;
            color: #fff;
          }
        }
      }
      a {
        display: inline-block;
        padding: 13px 14px;
        border-radius: 30px;
        background: #2b2a2a;
        transition: all 0.2s;
        span {
          position: absolute;
          right: 0px;
          display: inline-block;
          opacity: 0;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.5px;
          line-height: 1.2;
          text-transform: uppercase;
          vertical-align: text-top;
          transition: opacity 0.3s ease, padding 0.3s ease;
          color: transparent;
        }
        i {
          width: 25px;
          height: 25px;
          font-size: 20px;
          text-align: center;
          line-height: 25px;
        }
      }
    }
  }
`;var O=function(e){const[t,i]=Object(o.useState)(!1);return Object(o.useEffect)((()=>(setTimeout((()=>{i(!0)}),700),()=>i(!1))),[]),Object(p.jsx)(u,{className:""+(t?"on":""),children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{className:"home"===e.page?"active":"",children:Object(p.jsxs)(l.b,{to:"/",children:[Object(p.jsx)("span",{children:"Home"}),Object(p.jsx)("i",{className:"fas fa-home"})]})}),Object(p.jsx)("li",{className:"about"===e.page?"active":"",children:Object(p.jsxs)(l.b,{to:"/about",children:[Object(p.jsx)("span",{children:"About"}),Object(p.jsx)("i",{className:"fas fa-user"})]})}),Object(p.jsx)("li",{className:"projects"===e.page?"active":"",children:Object(p.jsxs)(l.b,{to:"/projects",children:[Object(p.jsx)("span",{children:"Projects"}),Object(p.jsx)("i",{className:"fas fa-tasks"})]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("a",{href:"https://github.com/SnowsFE",target:"_blank",children:[Object(p.jsx)("span",{children:"Github"}),Object(p.jsx)("i",{className:"fab fa-github"})]})})]})})};const w=r.c`
	from {
		transform: scaleY(0)
	}

	to {
		transform: scaleY(1)
	}
`,v=r.b.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #111;
  transform-origin: bottom;
  z-index: 111111;
  .black_wall {
    height: 100%;
    background-color: #222;
    transform-origin: top;
    animation: ${w} 0.5s ease-in-out 0s 1 normal both;
  }

  .loader {
    width: 100%;
    height: 3px;
    position: absolute;
    border-radius: 2px;
    top: 0;
    right: 0;
    left: 0;
    margin: auto;
    background-color: #16be78;
  }

  &.off {
    animation: ${w} 0.5s ease-in-out 0s 1 reverse both;
  }
`;var N=function(){const[e,t]=Object(o.useState)(!1);return Object(o.useEffect)((()=>(setTimeout((()=>{t(!0)}),300),()=>t(!1))),[]),Object(p.jsxs)(v,{className:"preloader"+(e?" off":""),children:[Object(p.jsx)("div",{className:"black_wall"}),Object(p.jsx)("div",{className:"loader"})]})};var y=function(e){const{children:t}=e;return Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{page:e.page}),Object(p.jsx)(p.Fragment,{children:t}),Object(p.jsx)(N,{})]})};class k extends o.Component{render(){return Object(p.jsx)(y,{page:"about",children:Object(p.jsxs)(C,{children:[Object(p.jsxs)(h,{titleBg:"Skills",children:["About ",Object(p.jsx)("span",{className:"point",children:"Me"})]}),Object(p.jsxs)("section",{children:[Object(p.jsx)(d,{level:"2",children:"MY SKILLS"}),Object(p.jsx)(f,{})]}),Object(p.jsxs)("section",{children:[Object(p.jsx)(d,{level:"2",children:"EXPERIENCE & EDUCATION"}),Object(p.jsx)(j,{})]})]})})}}const C=r.b.main`
	section {
		max-width: 1140px;
		margin: auto;
		padding-bottom: 80px;
		&:not(:last-child) {
			position: relative;
			margin-bottom: 60px;
			&::after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				width: 500px;
				height: 1px;
				background-color: #252525;
			}
		}
		> h2 {
			margin-bottom: 40px;
			font-size: 26px;
			font-weight: 600;
			text-align: center;
		}
	}
	@media ${e=>e.theme.mobile} {
		section {
			padding-bottom: 40px;
			&:not(:last-child) {
				&::after {
					width: 70%;
				}
			}
		}
	}
`;var z=k;const $=r.c`
	0% {
		top: 0;
		width: 0;
	}
	1% {
		width: 0;
	}
	11% {
		width: 100%;
	}
	22% {
		width: 100%;
	}
	32% {
		top: 0;
		width: 0;
	}
	33% {
		top: -4.5rem;
	}
	34% {
		width: 0;
	}
	44% {
		width: 100%;
	}
	55% {
		width: 100%;
	}
	65% {
		top: -4.5rem;
		width: 0;
	}
	66%{
		top: -9rem;
	}
	67% {
		width: 0;
	}
	77% {
		width: 100%;
	}
	89% {
		width: 100%;
	}
	99% {
		top: -9rem;
		width: 0;
	}
	100% {
		top: 0;
		width: 0;
	}
`,S=r.c`
	0% {
		top: 0;
		width: 0;
	}
	1% {
		width: 0;
	}
	11% {
		width: 100%;
	}
	22% {
		width: 100%;
	}
	32% {
		top: 0;
		width: 0;
	}
	33% {
		top: -3.5rem;
	}
	34% {
		width: 0;
	}
	44% {
		width: 100%;
	}
	55% {
		width: 100%;
	}
	65% {
		top: -3.5rem;
		width: 0;
	}
	66%{
		top: -7rem;
	}
	67% {
		width: 0;
	}
	77% {
		width: 100%;
	}
	89% {
		width: 100%;
	}
	99% {
		top: -7rem;
		width: 0;
	}
	100% {
		top: 0;
		width: 0;
	}
`,P=r.b.main`
  display: flex;
  height: 100vh;
  max-width: 1600px;
  margin: auto;
  .left {
    flex: 0 0 35%;
    position: relative;
    max-width: 600px;
    background-color: #111;
    &::after {
      content: "";
      display: inline-block;
      position: fixed;
      top: 0;
      left: calc(50% - 1440px);
      z-index: -1;
      width: 50%;
      max-width: 1000px;
      height: 100%;
      background-color: ${e=>e.theme.mainColor};
    }
    .color-block {
      position: absolute;
      top: -60%;
      left: -40vw;
      z-index: 0;
      width: 50vw;
      height: 200%;
      transform: rotate(-12deg);
      background-color: ${e=>e.theme.mainColor};
    }
    .img-box {
      height: 90vh;
      margin: 5vh 0 0 30px;
      background-image: url(${e=>e.theme.mainSrc});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;
      border-radius: 15px;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.9);
      position: relative;
      z-index: 1;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 10% 0 7%;
    .tit-wrap {
      margin-bottom: 60px;
      h2 {
        font-size: 22px;
      }
      h1 {
        margin-bottom: 20px;
        font-size: 45px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        .message {
          display: block;
          overflow: hidden;
          position: absolute;
          top: 0;
          left: 80px;
          animation: ${$} 8s ease-in-out infinite;
          strong {
            display: block;
            color: ${e=>e.theme.mainColor};
          }
        }
      }
      p {
        font-size: 16px;
        line-height: 1.6;
        padding: 0 15% 0 0;
        max-width: 670px;
        word-break: keep-all;
      }
    }
    section {
      margin-bottom: 40px;
      h2 {
        margin-bottom: 20px;
        font-size: 26px;
        font-weight: 600;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 50%;
          padding-bottom: 10px;
          font-size: 16px;
          font-weight: 500;
          color: ${e=>e.theme.mainColor};
          span {
            font-weight: 400;
            opacity: 0.8;
            color: #fff;
          }
        }
      }
    }
    .more-btn {
      padding: 0px 40px;
      border-radius: 26px;
      background-color: ${e=>e.theme.mainColor};
      font-size: 15px;
      font-weight: 500;
      color: #fff;
      line-height: 46px;
      letter-spacing: 0.5px;
    }
  }
  @media ${e=>e.theme.laptop} {
    .left {
      .color-block {
        top: -60%;
        left: -25vw;
        width: 40vw;
        height: 200%;
        transform: rotate(-9deg);
      }
    }
    .right {
      padding-right: 5%;
      .tit-wrap {
        margin-bottom: 40px;
        h1 {
          margin-bottom: 10px;
          letter-spacing: -0.5px;
        }
      }
      section {
        h2 {
          margin-bottom: 10px;
        }
        ul {
          li {
            width: 100%;
          }
        }
      }
    }
  }
  @media ${e=>e.theme.mobile} {
    flex-wrap: wrap;
    .left {
      flex: none;
      width: 100%;
      overflow: hidden;
      .color-block {
        left: -40vw;
        width: 80vw;
        min-width: 250px;
        transform: rotate(-12deg);
      }
      .img-box {
        width: 90vw;
        height: 55vh;
        margin: 3vh 5vw;
        background-position: center;
      }
    }
    .right {
      width: 100%;
      flex: none;
      margin: 5vh 0;
      padding-bottom: 5vh;
      .tit-wrap {
        h1 {
          font-size: 35px;
          .message {
            left: 60px;
            animation: ${S} 8s ease-in-out infinite;
          }
        }
        h2 {
          font-size: 20px;
        }
        p {
          padding-right: 5%;
        }
      }
    }
  }
`;var M=function(){return Object(p.jsxs)(P,{children:[Object(p.jsxs)("div",{className:"left",children:[Object(p.jsx)("div",{className:"color-block"}),Object(p.jsx)("div",{className:"img-box"})]}),Object(p.jsxs)("div",{className:"right",children:[Object(p.jsxs)("div",{className:"tit-wrap",children:[Object(p.jsx)(d,{level:"2",children:"HI! HOW ARE YOU?"}),Object(p.jsxs)(d,{children:["I'M"," ",Object(p.jsxs)("span",{className:"message",children:[Object(p.jsx)("strong",{children:"DOHYEON BAE"}),Object(p.jsx)("strong",{children:"FRONTEND DEVELOPER"}),Object(p.jsx)("strong",{children:"UX/UI PUBLISHER"})]})]}),Object(p.jsxs)("p",{children:["\uc548\ub155\ud558\uc138\uc694, \uc800\ub294 \ubc30\ub3c4\ud604\uc785\ub2c8\ub2e4. \ud83d\ude00",Object(p.jsx)("br",{}),"\uc0c8\ub85c\uc6b4 \uae30\uc220\uc5d0 \uad00\uc2ec\uc774 \ub9ce\uc73c\uba70 \ub3d9\ub8cc\ub4e4\uacfc\uc758 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\uacfc \uc0c1\ud638 \ud53c\ub4dc\ubc31 \ubc0f \ucf54\ub4dc \ub9ac\ubdf0\ub97c \uc88b\uc544\ud569\ub2c8\ub2e4. \ud604\uc7ac \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub85c \uad6c\uc9c1\uc911\uc785\ub2c8\ub2e4. \ub3d9\ub8cc\ub4e4\uacfc \ucf54\ub4dc \ub9ac\ubdf0\ub97c \ud1b5\ud574 \uc11c\ub85c\uc758 \uc758\uacac\uc744 \ub098\ub204\uace0, \ud568\uaed8 \ub354 \ub098\uc740 \ucf54\ub4dc\ub97c \ub9cc\ub4e4\uc5b4\uac00\ub294 \uacfc\uc815\uc5d0\uc11c \ubcf4\ub78c\uc744 \ub290\ub084 \uc218 \uc788\ub294 \ud68c\uc0ac\uc5d0\uc11c \uc77c\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4."]})]}),Object(p.jsxs)("section",{children:[Object(p.jsx)(d,{level:"2",children:"PERSONAL INFOS"}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"Name : "}),"\ubc30\ub3c4\ud604"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"Age : "}),"26, 1999.11"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"Phone : "}),"010.8331.1930"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"Address : "}),"\uc218\uc6d0\uc2dc \uc7a5\uc548\uad6c"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"Email : "}),"bdbottle@naver.com"]})]})]}),Object(p.jsx)(l.b,{to:"/about",className:"more-btn",children:"MORE ABOUT ME"})]})]})};class L extends o.Component{render(){return Object(p.jsxs)(B,{children:[Object(p.jsx)(O,{page:"home"}),Object(p.jsx)(M,{}),Object(p.jsx)(N,{})]})}}var E=L;const B=r.b.div`
	overflow: hidden;
	@media ${e=>e.theme.mobile} {
		overflow: auto;
	}
`;var I={portfolioList:[{name:"CodeRoom",period:"2024.04 - 2024.05",project:"Community",logo:"coderoom",percent:"100%",github:"https://github.com/SnowsFE/Portfolio-codeRoom?tab=readme-ov-file",description:"\ub9c8\uc74c\uc774 \ub9de\ub294 \uc0ac\ub78c\ub4e4\ub07c\ub9ac \ud568\uaed8 \ud65c\ub3d9\ud558\ub294 \uac83\uc5d0 \uc601\uac10\uc744 \ubc1b\uc544 \uc81c\uc791\ud55c \ud300\uc6d0 \ubaa8\uc9d1 \uc6f9\uc0ac\uc774\ud2b8 \uc785\ub2c8\ub2e4. \uad00\uc2ec\uc788\ub294 \uc8fc\uc81c\ub97c \ubcf4\uace0 \uc9c0\uc6d0 \uc2e0\uccad\uc744 \ud560 \uc218 \uc788\uc73c\uba70, \ub2e4\uc591\ud55c \uae30\uc220 \uc2a4\ud0dd\uc744 \uac00\uc9c4 \uc0ac\ub78c\ub4e4\uc774 \ud568\uaed8 \ud65c\ub3d9\ud560 \uc218 \uc788\ub3c4\ub85d \uc6f9\uc0ac\uc774\ud2b8\ub97c \uad6c\uc131\ud558\uc600\uc2b5\ub2c8\ub2e4.",tech:["Html & CSS","Javascript","React","Node.js","MySQL"],image:[{name:"coderoom/main.gif",tit:"\uba54\uc778\ud398\uc774\uc9c0",desc:"\uc0ac\uc6a9\uc790\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub2e4\ub978 \uc0ac\uc6a9\uc790\uc758 \uae00\uc744 \ubcfc \uc218 \uc788\ub294 \uba54\uc778 \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4. \uae00\uc740 \uce74\ud14c\uace0\ub9ac\ubcc4\ub85c \ubd84\ub958\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."},{name:"coderoom/write.gif",tit:"\uae00\uc4f0\uae30",desc:"\ub85c\uadf8\uc778\uc744 \ud574\uc57c \uae00\uc4f0\uae30\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uc758 \ubaa9\uc801\uc5d0 \ub9de\ub294 \uce74\ud14c\uace0\ub9ac \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."},{name:"coderoom/detail.gif",tit:"\uc0c1\uc138\ud398\uc774\uc9c0",desc:"\uc5c5\ub85c\ub4dc\uac00 \ub41c \uae00\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \uc0ac\uc6a9\uc790\ub294 \ub313\uae00\uc744 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{name:"coderoom/mypage.gif",tit:"\ub9c8\uc774\ud398\uc774\uc9c0",desc:"\uc0ac\uc6a9\uc790\uac00 \uc5c5\ub85c\ub4dc\ud55c \uae00\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc791\uc131\ud55c \uae00\uc758 \uc218\uc815 \ubc0f \uc0ad\uc81c\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."},{name:"coderoom/modify.gif",tit:"\uae00\uc218\uc815",desc:"\uc791\uc131\ud55c \uae00\uc744 \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc804\uc5d0 \uc785\ub825\ud55c \uc815\ubcf4\uac00 \uc720\uc9c0\ub429\ub2c8\ub2e4."}]},{name:"Muzinut",project:"Muzinut",logo:"MuziLogo",period:"2024.06 - 2024.08",percent:"100%",github:"https://github.com/youngho3358/Muzinut?tab=readme-ov-file",description:"\ubb34\uba85 \uac00\uc218\ub97c \uc704\ud55c \ubb34\ub8cc \uc2a4\ud2b8\ub9ac\ubc0d \uc6f9\uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \uc74c\uc6d0 \uc5c5\ub85c\ub4dc, \uc74c\uc6d0 \uc7ac\uc0dd, \ucee4\ubba4\ub2c8\ud2f0, \ub9c8\uc774\ud398\uc774\uc9c0, \ub313\uae00, \uc88b\uc544\uc694 \ub4f1\uc758 \uae30\ub2a5\uc744 \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4.",tech:["Html & CSS","JavaScript","TypeScript","Next.js","Node.js","Spring","Mysql","Redis","JWT"],image:[{name:"muzinut/join.gif",tit:"\ud68c\uc6d0\uac00\uc785",desc:"Redis\ub97c \uc774\uc6a9\ud55c \uc774\uba54\uc77c \uc778\uc99d\uc744 \ud1b5\ud574 \ud68c\uc6d0\uac00\uc785\uc774 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."},{name:"muzinut/login.gif",tit:"\ub85c\uadf8\uc778",desc:"\uc774\uba54\uc77c \uc778\uc99d \uc2dc \uc791\uc131\ud55c \uc544\uc774\ub514\uac00 \ubba4\uc9c0\ub11b \uc544\uc774\ub514\ub85c \uc124\uc815\ub418\uba70, \uc774\ud6c4 \ube44\ubc00\ubc88\ud638\ub97c \ucd94\uac00\ub85c \uc785\ub825\ud558\uc5ec \ub85c\uadf8\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{name:"muzinut/\uba54\uc778\ud654\uba74.png",tit:"\uba54\uc778\ud398\uc774\uc9c0 \uc0c1\ub2e8",desc:"\uc5c5\ub85c\ub4dc\ub41c \uc74c\uc545\uc744 \ucd5c\uc2e0\uc21c\uc73c\ub85c 5\uac1c\uc529 \uc2ac\ub77c\uc774\ub4dc \ud615\uc2dd\uc73c\ub85c \ubcf4\uc5ec\uc8fc\uba70, \ucd5c\uc2e0 \uc74c\uc545\ub4e4\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798\uc5d0\ub294 \uc88b\uc544\uc694 \uc218\ub97c \uae30\uc900\uc73c\ub85c \uc778\uae30 \ucc28\ud2b8\uc640 \uc778\uae30 \uc544\ud2f0\uc2a4\ud2b8\uac00 \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."},{name:"muzinut/addalbum.gif",tit:"\uc74c\uc545 \uc5c5\ub85c\ub4dc",desc:"\uc5c5\ub85c\ub4dc\ud560 \uace1\uc758 \ub2e4\uc591\ud55c \uc815\ubcf4\ub97c \uc785\ub825\ud558\uc5ec \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{name:"muzinut/addalbum2.gif",tit:"\uc74c\uc545 \uc5c5\ub85c\ub4dc2",desc:"\uc5c5\ub85c\ub4dc\ud55c \uace1\uc774 \ub4f1\ub85d\ub418\uba70, \uba54\uc778 \ud398\uc774\uc9c0\uc640 \uac80\uc0c9 \uae30\ub2a5\uc744 \ud1b5\ud574 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{name:"muzinut/musicplay.gif",tit:"\uc74c\uc545 \uc7ac\uc0dd",desc:"\uc5c5\ub85c\ub4dc\ub41c \uc74c\uc545\uc744 \uba54\uc778 \ud398\uc774\uc9c0\uc5d0\uc11c \ubc14\ub85c \uc7ac\uc0dd \uac00\ub2a5\ud558\uba70, \ud074\ub9ad \uc2dc \ud558\ub2e8\uc5d0 \uc7ac\uc0dd \ubc14\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4."},{name:"muzinut/\uba54\uc778\ud654\uba74 \ud558\ub2e8.png",tit:"\uba54\uc778\ud398\uc774\uc9c0 \ud558\ub2e8",desc:"\uc778\uae30, \uc790\uc720, \ubaa8\uc9d1 \uac8c\uc2dc\ud310\uc774 \uc788\uc73c\uba70, \uc778\uae30 \uac8c\uc2dc\ud310\uc740 \uc870\ud68c\uc218 \uc21c\uc73c\ub85c, \uc790\uc720 \ubc0f \ubaa8\uc9d1 \uac8c\uc2dc\ud310\uc740 \uae00 \ub4f1\ub85d \uc21c\uc73c\ub85c \uba54\uc778 \ud398\uc774\uc9c0\uc5d0 \ubcf4\uc774\uac8c \ub429\ub2c8\ub2e4."},{name:"muzinut/boardadd.gif",tit:"\uac8c\uc2dc\uae00 \ub4f1\ub85d",desc:"\ucee4\ubba4\ub2c8\ud2f0\ub85c \uc774\ub3d9\ud558\uba74 \uc791\uc131\ub41c \uac8c\uc2dc\uae00\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc73c\uba70, \uac8c\uc2dc\uae00\uc740 \uc778\uae30\uc21c, \ucd5c\uc2e0\uc21c, \uc88b\uc544\uc694 \uc21c\uc73c\ub85c \uc815\ub82c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucd94\uac00\ub85c, \ud1a0\ud070 \uc778\uc99d\ub41c \uc0ac\uc6a9\uc790\ub9cc \uae00\uc4f0\uae30 \ubc84\ud2bc\uc744 \uc774\uc6a9\ud558\uc5ec \uae00\uc744 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{name:"muzinut/boarddetailcomment.gif",tit:"\uac8c\uc2dc\uae00 \uc0c1\uc138\ud398\uc774\uc9c0",desc:"\uc791\uc131\ub41c \uac8c\uc2dc\uae00\uc744 \ud074\ub9ad\ud558\uba74 \ud574\ub2f9 \uac8c\uc2dc\uae00\uc758 \uc0c1\uc138 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ub418\uba70, \uc88b\uc544\uc694, \ub313\uae00 \uc791\uc131, \ub300\ub313\uae00 \uc791\uc131, \ubd81\ub9c8\ud06c, \uacf5\uc720\ud558\uae30 \ub4f1\uc758 \uae30\ub2a5\uc744 \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uae00 \uc791\uc131\uc790\uc778 \uacbd\uc6b0, \uc0bc\uac01\ubc14 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec \uc218\uc815 \ubc0f \uc0ad\uc81c \uae30\ub2a5\uc744 \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{name:"muzinut/myboard.gif",tit:"\ub9c8\uc774\ud398\uc774\uc9c0 - \uac8c\uc2dc\uae00",desc:"\uc791\uc131\ud55c \uae00\uc740 \ub9c8\uc774\ud398\uc774\uc9c0\uc758 \uac8c\uc2dc\uae00 \uc139\uc158\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc73c\uba70, \ud574\ub2f9 \uae00\uc740 \uae00 \uc791\uc131\uc790\uc758 \uac8c\uc2dc\ud310 DB\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."},{name:"muzinut/profilebannerchange.gif",tit:"\ubc30\ub108 \ubc0f \ud504\ub85c\ud544 \uc774\ubbf8\uc9c0 \uc218\uc815",desc:"\uae30\ubcf8\uc73c\ub85c \ubc30\ub108, \ud504\ub85c\ud544 \uc774\ubbf8\uc9c0\uac00 \uc124\uc815\ub429\ub2c8\ub2e4. \uc774\ud6c4 \uc0ac\uc6a9\uc790\uac00 \uc6d0\ud558\ub294 \ub300\ub85c \ubcc0\uacbd\ud560 \uc218 \uc788\uc73c\uba70, \ubcc0\uacbd\ub41c \uc774\ubbf8\uc9c0\ub294 DB\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."},{name:"muzinut/main.png",tit:"\ub9c8\uc774\ud398\uc774\uc9c0 - \uba54\uc778",desc:"\uc790\uc2e0\uc774 \uc5c5\ub85c\ub4dc\ud55c \uace1\uc758 \uc815\ubcf4\uac00 \ub9c8\uc774\ud398\uc774\uc9c0\uc758 \uba54\uc778 \uc139\uc158\uc5d0 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uac00\uc7a5 \ub9ce\uc740 \uc88b\uc544\uc694\ub97c \ubc1b\uc740 \uace1\uc774 \uba54\uc778 \uace1\uc73c\ub85c \uc124\uc815\ub418\uba70, \uadf8 \uc544\ub798\uc5d0\ub294 \uc5c5\ub85c\ub4dc\ud55c \uc568\ubc94\uc774 \ub098\uc5f4\ub429\ub2c8\ub2e4."},{name:"muzinut/lounge1.png",tit:"\ub9c8\uc774\ud398\uc774\uc9c0 - \ub77c\uc6b4\uc9c0",desc:"\ud32c\ub4e4\uacfc \uc18c\ud1b5\ud560 \uc218 \uc788\ub294 \ucc3d\uad6c\uc785\ub2c8\ub2e4."},{name:"muzinut/lounge2.png",tit:"\ub9c8\uc774\ud398\uc774\uc9c0 - \ub77c\uc6b4\uc9c0",desc:"\uae00 \uc791\uc131(TALK \ud074\ub9ad)\uc744 \ud1b5\ud574 \ud32c\ub4e4\uacfc \uc9c1\uc811 \uc18c\ud1b5\ud560 \uc218 \uc788\uc73c\uba70, \uc218\uc815, \uc0ad\uc81c, \uc88b\uc544\uc694, \ub313\uae00 \ub4f1\uc758 \uae30\ub2a5\uc774 \uc81c\uacf5\ub429\ub2c8\ub2e4."}]},{name:"Minecraft \ub7ad\ud0b9 \uc0ac\uc774\ud2b8",project:"CPVP.KR",logo:"CPVP",period:"2024.08 - 2024.11",percent:"100%",link:"https://www.cpvp.kr",description:"\ub9c8\uc778\ud06c\ub798\ud504\ud2b8 Crystal PVP \ub7ad\ud0b9 \uc0ac\uc774\ud2b8\ub97c \uae30\ud68d\ud558\uace0, \uc720\ud29c\ube0c\uc640 \ub514\uc2a4\ucf54\ub4dc\ub97c \ud65c\uc6a9\ud574 \ud64d\ubcf4\ub97c \uc9c4\ud589\ud588\uc73c\uba70, \ud37c\ube14\ub9ac\uc2f1\ubd80\ud130 \ud504\ub860\ud2b8\uc5d4\ub4dc, \ubc31\uc5d4\ub4dc \uac1c\ubc1c, \uadf8\ub9ac\uace0 \ubc30\ud3ec \uc791\uc5c5\uae4c\uc9c0 \ubaa8\ub450 \uc9c1\uc811 \uc218\ud589\ud558\uc600\uc2b5\ub2c8\ub2e4. \ub610\ud55c, \uc2e4\uc81c \uc720\uc800\ub4e4\uacfc\uc758 \uc18c\ud1b5\uc744 \ud1b5\ud574 CI/CD\ub97c \uc801\uc6a9\ud558\uace0 \uc6b4\uc601\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",tech:["Html & CSS","Javascript","React","Node.js","MongoDB","JWT","GCP","Ubuntu","Nginx"],image:[{name:"CPVP/main.png",tit:"\uba54\uc778\ud398\uc774\uc9c0",desc:"\uc720\uc800\ub4e4\uc740 \uc790\uc2e0\uc758 \ub7ad\ud0b9\uc744 \uc870\ud68c\ud560 \uc218 \uc788\uc73c\uba70 sort \uae30\ub2a5\uc744 \uc774\uc6a9\ud558\uc5ec \uc885\ud569, \ud3c9\uc5d4, \ub098\ub77d \uac01\uac01 \uac1c\ubcc4\ub85c \uc790\uc2e0\uc758 \ub7ad\ud0b9\uc744 \uc870\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uac80\uc0c9, \uc2e0\uccad, \ub2c9\ub124\uc784 \ub4f1\ub85d, \uc2ec\uc0ac\uc704\uc6d0(\ub7ad\ud06c\uc5c5 \ud14c\uc2a4\ud130), \ub514\uc2a4\ucf54\ub4dc\ub85c \uc774\ub3d9\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{name:"CPVP/search.png",tit:"\uc720\uc800 \uac80\uc0c9",desc:"\uac80\uc0c9\ucc3d\uc5d0 \uc790\uc2e0\uc758 \ub2c9\ub124\uc784 \ub610\ub294 \uac80\uc0c9\ud558\ub824\ub294 \uc720\uc800\uc758 \ub2c9\ub124\uc784\uc744 \uc785\ub825\ud558\uba74, \ud574\ub2f9 \uc720\uc800\uc758 \ub7ad\ud0b9 \uc704\uce58\ub85c \uc2a4\ud06c\ub864\uc774 \uc774\ub3d9\ud558\ub3c4\ub85d \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 keydown \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc640 scrollIntoView \uba54\uc11c\ub4dc\ub97c \ud65c\uc6a9\ud558\uc600\uc2b5\ub2c8\ub2e4."},{name:"CPVP/apply.png",tit:"\uc2e0\uccad",desc:"\uc720\uc800\ub4e4\uc740 \ub7ad\ud06c\uc5c5\uc744 \uc704\ud574\uc11c \uc2e0\uccad\uc11c\ub97c \uc81c\ucd9c\ud560 \uc218 \uc788\uc73c\uba70 \uc544\uc774\ud53c\ub2f9 \ud558\ub8e8(24\uc2dc\uac04)\uc5d0 \ud55c \ubc88\ub9cc \uc2e0\uccad\uc11c\ub97c \uc81c\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2e0\uccad\uc11c\ub294 \ub9ac\uc561\ud2b8 \ud03c\uc744 \uc774\uc6a9\ud574 \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4."},{name:"CPVP/nickname.png",tit:"\ub2c9\ub124\uc784 \ub4f1\ub85d",desc:"\uc720\uc800\ub4e4\uc740 \uc790\uc2e0\uc758 \ub9c8\uc778\ud06c\ub798\ud504\ud2b8 \ub2c9\ub124\uc784\uc744 \uc0ac\uc774\ud2b8\uc5d0 \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc815\uaddc\uc2dd\uc744 \uc774\uc6a9\ud558\uc5ec \uba85\ud655\ud55c \ub2c9\ub124\uc784 \uc791\uc131\uc744 \uc720\ub3c4\ud558\uc600\uace0, Mojang API\ub97c \ud65c\uc6a9\ud558\uc5ec \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ub2c9\ub124\uc784\uc774\uba74 \ub4f1\ub85d\ud560 \uc218 \uc5c6\ub3c4\ub85d \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4."},{name:"CPVP/judge.png",tit:"\uc2ec\uc0ac\uc704\uc6d0",desc:"\uc720\uc800\ub4e4\uc758 \ub7ad\ud0b9\uc744 \uc2ec\uc0ac\ud560 \ud14c\uc2a4\ud130\uc785\ub2c8\ub2e4. \uc720\ud29c\ube0c \ucee4\ubba4\ub2c8\ud2f0\uc5d0 \ubaa8\uc9d1 \uacf5\uace0\ub97c \uc62c\ub824 \ud14c\uc2a4\ud130\ub97c \uc9c1\uc811 \ubf51\uc558\uc2b5\ub2c8\ub2e4."},{name:"CPVP/discord.png",tit:"\ub514\uc2a4\ucf54\ub4dc",desc:"\uc67c\ucabd \ud558\ub2e8\uc5d0 \uc788\ub294 \ub514\uc2a4\ucf54\ub4dc \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uba74 \uc0c8 \ucc3d\uc774 \uc5f4\ub9ac\uba70 \uc774\uacf3\uc73c\ub85c \uc774\ub3d9\ub429\ub2c8\ub2e4."},{name:"CPVP/admin.png",tit:"\uc5b4\ub4dc\ubbfc \ud398\uc774\uc9c0",desc:"\uc720\uc800\uac00 \uc81c\ucd9c\ud55c \uc2e0\uccad\uc11c\ub97c \uc5b4\ub4dc\ubbfc \ud398\uc774\uc9c0\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc73c\uba70, \uc720\uc800 \uad00\ub9ac\ub97c \ud1b5\ud574 \uc720\uc800 \uc815\ubcf4 \uc5c5\ub370\uc774\ud2b8\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."},{name:"CPVP/userinfo.png",tit:"\uc720\uc800 \uc815\ubcf4",desc:"\uc720\uc800 \uad00\ub9ac\uc5d0\uc11c\ub294 \ubaa8\ub4e0 \uc720\uc800\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc73c\uba70 \uac80\uc0c9 \ud544\ud130\ub97c \ud1b5\ud574 \ud574\ub2f9\ud558\ub294 \uc720\uc800\uc758 \ub2c9\ub124\uc784\uc744 \uac80\uc0c9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc6f9\ud0b7\uc744 \ud1b5\ud574 \uc2a4\ud06c\ub864\uc744 \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4."},{name:"CPVP/userupdate.png",tit:"\uc720\uc800 \ub7ad\ud0b9 \uc5c5\ub370\uc774\ud2b8",desc:"PATCH \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 \uc720\uc800 \uc815\ubcf4\ub97c \uc218\uc815\ud558\uc5ec \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4."},{name:"CPVP/detailapply.png",tit:"\uc2e0\uccad\uc11c \uc0c1\uc138\ud398\uc774\uc9c0",desc:"\uc720\uc800 \uc2e0\uccad\uc11c \ub370\uc774\ud130\ub97c useLocation\uc744 \ud1b5\ud574 \uac00\uc838\uc624\uace0, useParams\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0c1\uc138\ud398\uc774\uc9c0\ub97c \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4."}]}]};class R extends o.Component{componentDidMount(){const e=[].slice.call(document.querySelectorAll(".port-list"),0),t={0:"top",1:"right",2:"bottom",3:"left"},i=["in","out"].map((e=>Object.values(t).map((t=>`${e}-${t}`)))).reduce(((e,t)=>e.concat(t)));class o{constructor(e){this.element=e,this.element.addEventListener("mouseover",(e=>this.update(e,"in"))),this.element.addEventListener("mouseout",(e=>this.update(e,"out")))}update(e,o){this.element.classList.remove(...i),this.element.classList.add(`${o}-${t[((e,t)=>{const{width:i,height:o,top:a,left:n}=t.getBoundingClientRect(),s=e.pageX-(n+window.pageXOffset)-i/2*(i>o?o/i:1),l=e.pageY-(a+window.pageYOffset)-o/2*(o>i?i/o:1);return Math.round(Math.atan2(l,s)/1.57079633+5)%4})(e,this.element)]}`)}}e.forEach((e=>new o(e)))}render(){const e=I.portfolioList.map(((e,t)=>Object(p.jsx)("li",{className:"port-list",children:Object(p.jsxs)(l.b,{to:`/projects/${e.name}`,children:[Object(p.jsxs)("div",{children:["Community"===e.project&&Object(p.jsx)("div",{className:"community",children:Object(p.jsx)("img",{src:"./images/community.svg",alt:""})}),"Muzinut"===e.project&&Object(p.jsx)("div",{className:"muzinut",children:Object(p.jsx)("img",{src:"./images/logo/Muzinut.png",alt:"Muzinut Icon"})}),"MineRanking"===e.project&&Object(p.jsx)("div",{className:"mineranking",children:Object(p.jsx)("img",{src:"./images/logo/Endcrystal.png",alt:"MineRanking Icon"})}),Object(p.jsxs)("div",{className:"info-wrap",children:[Object(p.jsxs)("div",{className:"txt-wrap",children:[Object(p.jsx)("div",{className:"name",children:e.name}),Object(p.jsx)("span",{className:"time",children:e.period}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"label",children:"Description"}),e.description]})]}),Object(p.jsxs)("div",{className:"tech",children:[Object(p.jsx)("span",{className:"label",children:"Tech Stack"}),Object(p.jsx)("ul",{children:e.tech.map(((e,t)=>Object(p.jsx)("li",{children:e},t)))})]})]})]}),Object(p.jsx)("div",{className:"logoWrap",children:Object(p.jsx)("div",{className:"logo",children:Object(p.jsx)("img",{src:`./images/logo/${e.logo}.png`,alt:""})})})]})},t)));return Object(p.jsx)(U,{className:"container",children:Object(p.jsx)("ul",{children:e})})}}const D=r.c`
	from {
		top:-100%;
		left:0;
	}
	to {
		top: 0;
		left:0;
	}
`,T=r.c`
	from {
		top: 0;
		left:0;
	}
	to {
		top: -100%;
		left:0;
	}
`,A=r.c`
	from {
		top:0;
		left:100%;
	}
	to {
		top:0;
		left:0;
	}
`,G=r.c`
	from {
		top:0;
		left:0;
	}
	to {
		top:0;
		left:100%;
	}
`,J=r.c`
	from {
		top: 100%;
		left:0;
	}
	to {
		top: 0;
		left:0;
	}
`,V=r.c`
	from {
		top:0;
		left:0;
	}
	to {
		top:100%;
		left:0;
	}
`,W=r.c`
	from {
		top: 0;
		left:-100%;
	}
	to {
		top: 0;
		left:0;
	}
`,H=r.c`
	from {
		top:0;
		left:0;
	}
	to {
		top:0;
		left:-100%;
	}
`,U=r.b.div`
  width: 85%;
  max-width: 1140px;
  margin: auto;
  padding-bottom: 80px;
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > li {
      width: 32%;
      min-height: 320px;
      margin-bottom: 2%;
      position: relative;
      background-color: #191919;
      border-radius: 2px;
      overflow: hidden;
      a {
        width: 100%;
        height: 100%;
        display: inline-block;
        > div {
          height: 100%;
          padding: 20px;
          pointer-events: none;
          .community,
          .muzinut,
          .mineranking {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 30px;
            color: ${e=>e.theme.mainColor};
            img {
              width: 45px;
            }
          }

          .info-wrap {
            position: relative;
            z-index: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .txt-wrap {
              .name {
                font-weight: 500;
                font-size: 22px;
                line-height: 1.3;
                color: ${e=>e.theme.mainColor};
              }
              .time {
                font-size: 14px;
              }
              p {
                padding: 10px 0;
                font-size: 14px;
              }
            }
            .tech {
              ul {
                display: flex;
                flex-wrap: wrap;
                margin-left: -2px;
                padding-top: 3px;
                li {
                  padding: 4px;
                  margin: 0 2px 5px;
                  border: 1px solid #fff;
                  border-radius: 2px;
                  font-size: 13px;
                  line-height: 1;
                }
              }
            }
            span.label {
              display: block;
              padding-bottom: 3px;
              font-size: 12px;
              font-weight: 500;
            }
          }
        }
        .logoWrap {
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
          background-color: #16be78;
          opacity: 0.95;
          .logo {
            img {
              border-radius: 1px;
              padding: 3px;
            }
          }
        }
      }
      &.in-top .logoWrap {
        animation: ${D} 300ms ease 0ms 1 forwards;
      }
      &.out-top .logoWrap {
        animation: ${T} 300ms ease 0ms 1 forwards;
      }

      &.in-right .logoWrap {
        animation: ${A} 300ms ease 0ms 1 forwards;
      }
      &.out-right .logoWrap {
        animation: ${G} 300ms ease 0ms 1 forwards;
      }

      &.in-bottom .logoWrap {
        animation: ${J} 300ms ease 0ms 1 forwards;
      }
      &.out-bottom .logoWrap {
        animation: ${V} 300ms ease 0ms 1 forwards;
      }

      &.in-left .logoWrap {
        animation: ${W} 300ms ease 0ms 1 forwards;
      }
      &.out-left .logoWrap {
        animation: ${H} 300ms ease 0ms 1 forwards;
      }
    }
  }
  @media ${e=>e.theme.laptop} {
    > ul {
      .port-list {
        width: 49%;
        min-height: 260px;
      }
    }
  }
  @media ${e=>e.theme.mobile} {
    width: 80%;
    padding-bottom: 60px;
    > ul {
      .port-list {
        width: 100%;
        min-height: 220px;
        margin-bottom: 20px;
        .tech {
          display: none;
        }
      }
    }
  }
`;var F=R;var K=function(){const e=[].slice.call(document.querySelectorAll("li"),0),t={0:"top",1:"right",2:"bottom",3:"left"},i=["in","out"].map((e=>Object.values(t).map((t=>`${e}-${t}`)))).reduce(((e,t)=>e.concat(t)));class o{constructor(e){this.element=e,this.element.addEventListener("mouseover",(e=>this.update(e,"in"))),this.element.addEventListener("mouseout",(e=>this.update(e,"out")))}update(e,o){this.element.classList.remove(...i),this.element.classList.add(`${o}-${t[((e,t)=>{const{width:i,height:o,top:a,left:n}=t.getBoundingClientRect(),s=e.pageX-(n+window.pageXOffset)-i/2*(i>o?o/i:1),l=e.pageY-(a+window.pageYOffset)-o/2*(o>i?i/o:1);return Math.round(Math.atan2(l,s)/1.57079633+5)%4})(e,this.element)]}`)}}return e.forEach((e=>new o(e))),Object(p.jsx)(Y,{})};const Y=r.b.div`
  max-width: 1140px;
  margin: auto;
  padding-bottom: 80px;
  h2 {
    padding-top: 20px;
    margin-bottom: 40px;
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      margin: auto;
      width: 500px;
      height: 1px;
      background-color: rgb(37, 37, 37);
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: 80%;
    margin: auto;
    li {
      width: 30%;
      margin-bottom: 4px;

      i {
        margin-right: 8px;
        vertical-align: top;
        line-height: 26px;
        color: ${e=>e.theme.mainColor};
      }
      p {
        display: inline-block;
      }
    }
  }
  @media ${e=>e.theme.laptop} {
    ul {
      li {
        width: 45%;
      }
    }
  }
  @media ${e=>e.theme.mobile} {
    h2 {
      &::after {
        width: 70%;
      }
    }
    ul {
      width: 75%;
      li {
        width: 100%;
      }
    }
  }
`;class X extends o.Component{render(){return Object(p.jsx)(y,{page:"projects",children:Object(p.jsxs)("main",{children:[Object(p.jsxs)(h,{titleBg:"Works",children:["My ",Object(p.jsx)("span",{className:"point",children:"Projects"})]}),Object(p.jsxs)("section",{children:[Object(p.jsx)(F,{}),Object(p.jsx)(K,{})]})]})})}}var q=X;i(21);o.Component;const Q=r.b.div`
  max-width: 800px;
  margin: 0 auto;
  .tit-wrap {
    .meta-data {
      display: flex;
      font-size: 13px;
      li {
        margin-right: 20px;
        line-height: 16px;
        i {
          margin-right: 8px;
          font-size: 16px;
          color: ${e=>e.theme.mainColor};
          vertical-align: top;
        }
      }
    }
    h2 {
      margin: 6px 0 0;
      font-weight: 600;
      font-size: 32px;
    }
    .tech {
      display: flex;
      flex-wrap: wrap;
      margin-left: -2px;
      margin-bottom: 10px;
      padding-top: 3px;
      li {
        padding: 4px;
        margin: 0 2px 5px;
        border: 1px solid #fff;
        border-radius: 2px;
        font-size: 13px;
        line-height: 1;
      }
    }
  }
  .body-wrap {
    p {
      white-space: pre-line;
    }
    .link {
      margin-top: 16px;
      a {
        margin-bottom: 2px;
        i {
          margin-right: 8px;
          min-width: 14px;
          text-align: center;
          color: ${e=>e.theme.mainColor};
          vertical-align: middle;
        }
        span {
          color: ${e=>e.theme.mainColor};
        }
      }
      a:nth-child(2) {
        margin-left: 20px;
      }
    }

    ul {
      li {
        margin: 20px 0 10px;
        padding-bottom: 20px;
        /* border-bottom: 1px solid #424242; */
        h3 {
          margin-bottom: 5px;
          font-size: 20px;
          font-weight: 600;
        }
        p {
          margin-bottom: 20px;
        }
        img {
          width: 100%;
        }
      }
    }
  }
`;var _=function(e){const t=e.project.image.map(((e,t)=>Object(p.jsxs)("li",{children:[Object(p.jsx)(d,{level:"3",children:""!==e.tit&&"\ud83d\udd37 "+e.tit+" \ud83d\udd37"}),Object(p.jsxs)("p",{children:[""!==e.desc&&"\u25b6 "+e.desc," "]}),Object(p.jsx)("img",{src:`../images/project/${e.name}`,alt:""})]},t)));return Object(p.jsx)(Q,{children:Object(p.jsxs)("article",{children:[Object(p.jsxs)("div",{className:"tit-wrap",children:[Object(p.jsxs)("ul",{className:"meta-data",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fas fa-user"}),e.project.percent]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"far fa-calendar-alt"}),e.project.period]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"far fa-building"}),e.project.project]})]}),Object(p.jsxs)(d,{level:"2",children:[e.project.name," PROJECT"]}),Object(p.jsx)("ul",{className:"tech",children:e.project.tech.map(((e,t)=>Object(p.jsx)("li",{children:e},t)))})]}),Object(p.jsxs)("div",{className:"body-wrap",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:e.project.description}),Object(p.jsxs)("div",{className:"link",children:[e.project.link&&Object(p.jsxs)("a",{href:e.project.link,target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)("i",{className:"far fa-file-alt"}),"Project : ",Object(p.jsx)("span",{children:"Link"})]}),e.project.github&&Object(p.jsxs)("a",{href:e.project.github,target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)("i",{className:"fab fa-github"}),"Github : ",Object(p.jsx)("span",{children:"Link"})]})]})]}),Object(p.jsx)("ul",{children:e.project.image&&t})]})]})})};var Z=function(e){let{match:t}=e;const i=I.portfolioList.filter(((e,i)=>{if(e.name===t.params.name)return e}));return Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{}),Object(p.jsxs)("main",{children:[Object(p.jsxs)(h,{titleBg:"Works",children:["It's ",Object(p.jsx)("span",{className:"point",children:t.params.name})]}),Object(p.jsx)("section",{children:Object(p.jsx)(_,{project:i[0]})})]})]})};var ee=function(){return Object(p.jsxs)(l.a,{basename:"/portfolio",children:[Object(p.jsx)(c.a,{exact:!0,path:"/",component:E}),Object(p.jsx)(c.a,{exact:!0,path:"/about",component:z}),Object(p.jsx)(c.a,{exact:!0,path:"/projects",component:q}),Object(p.jsx)(c.a,{exact:!0,path:"/projects/:name",component:Z})]})};var te=e=>{e&&e instanceof Function&&i.e(3).then(i.bind(null,39)).then((t=>{let{getCLS:i,getFID:o,getFCP:a,getLCP:n,getTTFB:s}=t;i(e),o(e),a(e),n(e),s(e)}))};var ie={mainColor:"#16be78",mobile:`(max-width: ${"720px"})`,tablet:`(max-width: ${"1024px"})`,laptop:`(max-width: ${"1280px"})`,mainSrc:i.p+"static/media/snoer.cf4ff3e2.jpg"};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(r.a,{theme:ie,children:Object(p.jsx)(ee,{})})}),document.getElementById("root")),te()}},[[38,1,2]]]);
//# sourceMappingURL=main.016fba77.chunk.js.map