document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const githubBadges = document.querySelectorAll(".github-badge");
  const langSelector = document.getElementById("language");
  const icon = document.getElementById('themeToggleIcon');

  setTimeout(() => {
    document.querySelectorAll("section, h2, ul, table, img, .nav-links, #langSelector")
    .forEach(el => el.classList.add("animate-in"));
  }, 100);  

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.remove('light');
    icon.src = 'images/moon.png';
  } else {
    body.classList.add('light');
    icon.src = 'images/sun.png';
  }
  
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    githubBadges.forEach(b => {
      b.classList.add("inverted");
      b.src = "https://img.shields.io/badge/github-ffffff?style=for-the-badge&logo=github&logoColor=black";
    });
  }

  window.turnOn = function () {
    body.classList.add("light");
    document.getElementById("themeToggleIcon").src = 'images/sun.png';
    githubBadges.forEach(b => {
      b.src = "https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white";
    });
    console.log("💡 Light mode activated.");
  };
  
  window.turnOff = function () {
    body.classList.remove("light");
    document.getElementById("themeToggleIcon").src = 'images/moon.png';
    githubBadges.forEach(b => {
      b.src = "https://img.shields.io/badge/github-ffffff?style=for-the-badge&logo=github&logoColor=black";
    });
    console.log("🌙 Dark mode activated.");
  };
  
  window.toggleTheme = function () {
    if (document.body.classList.contains('light')) {
      turnOff();
    } else {
      turnOn();
    }
  };

  const elements = {
    nav: document.querySelectorAll(".nav-links a"),
    skillTitle: document.getElementById("section-skills"),
    projectTitle: document.getElementById("section-projects"),
    experienceTitle: document.getElementById("section-experience"),
    awardsTitle: document.getElementById("section-awards"),
    researchTitle: document.getElementById("section-research"),
    projectsList: document.querySelector("#projects ul"),
    experienceList: document.querySelector("#experience ul"),
    awardsList: document.getElementById("awards-list"),
    researchList: document.getElementById("research-list"),
    labelStudentID: document.getElementById("label-student-id"),
    labelName: document.getElementById("label-name"),
    contentName: document.getElementById("content-name"),
    labelGoal: document.getElementById("label-goal"),
    contentGoal: document.getElementById("content-goal"),
    labelPeriod: document.getElementById("label-period"),
    labelDept: document.getElementById("label-dept"),
    majorlist: document.getElementById("major-list"),
    selfIntro: document.getElementById("self-intro"),
  };

  const i18n = {
    ko: {
      selfIntro: "이걸 발견하시다니 허거덩거덩스;",
      nav: ["프로필", "기술 스택", "프로젝트", "활동 경험", "수상 경력", "논문 / 연구 실적"],
      skillTitle: "📚 기술 스택",
      projectTitle: "💻 프로젝트",
      experienceTitle: "📌 활동 경험",
      awardsTitle: "🏆 수상 경력",
      researchTitle: "📄 논문 / 연구 실적",
      projects: [
        `<a href="https://github.com/woshipubao/Sharing-Project" target="_blank"><strong>스마트 노이즈 캔슬링</strong> - TensorFlow 기반 적응형 AI 기술 (2024-2)</a>`,
        `<a href="https://github.com/HnueeJimin/Project-Napoly" target="_blank"><strong>Napoly</strong> - C++ 멀티스레딩 기반 CLI 마피아 게임 (2024-2)</a>`,
        `<strong>야구 유니폼 웹사이트 만들기</strong> - AWS 기반 웹 서비스 (2025-1)(비공개)`,
        `<strong>기사의 여행 알고리즘 개발 - 넷플릭스 시리즈 데블스 플랜2 (개인 프로젝트)(예정)</strong>`,
        `<strong>Pay's Maker: 지문 인식 기술 기반 결제 시스템</strong> - 캡스톤디자인 프로젝트 (2025-2)(예정)`,
      ],

      experience: [
        `<strong>2024 정보보호학회 하계학술대회 발표</strong> - CycloneDX 1.6 업데이트 내용 소개 (2024.06)`,
        `<strong>고려대학교 IoTcube Conference 2024 이수</strong> - SBOM 실습 트레이닝: 안전한 SW를 위한 필수 도구 (2024.08)`,
        `<strong>2024 정보보호학회 충청지부학술대회 발표</strong> - CycloneDX 1.6 및 SPDX 3.0 비교 분석 (2024.09)`,
        `<strong>2024 정보보호학회 동계학술대회 발표</strong> - CycloneDX HBOM을 통한 하드웨어 취약점 관리 방안 (2024.11)`,
        `<strong>2024 정보보호학회 동계학술대회 발표</strong> - 리눅스 기반 런타임 타입 SBOM 생성 방법과 구현 (2024.11)`,
        `<strong>2025 윤리적해커양성과정 6기 이수</strong> - 국가보안기술연구소 사이버안보훈련센터 (2025.02 ~ )`,
        `<strong>2025 정보보호학회 영남지부학술대회 발표</strong> - CDXA 프레임워크를 이용한 SDLC 추적 및 관리 방안 (2025.06)`,
        `<strong>2025 정보보호학회 하계학술대회 발표</strong> - 앙상블 모델을 고려한 ML-BOM 기술 방법론 제안 (2025.06)`,
      ],
      awards: [
        `<strong>정보보호학회 충청지부학술대회 우수논문상</strong> - 한국과학기술정보연구원장상 (2024.09)`,
        `<strong>정보보호학회 동계학술대회 우수논문상</strong> - 학회우수논문상 (2024.11)`,
        `<strong>한남대학교 임베디드 경진대회 우수상</strong> - 팀 전전긍긍 (2024.12)`,
        `<strong>Hannam University GCDP Best Innovation Award</strong> - Team AquaTerra (2025.01)`
      ],
      research: [
        `<a href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12088072" target="_blank"><strong>NIS SBOM 속성의 CycloneDX 및 SPDX 구현</strong> - 한국정보보호학회 학회지 (2025.02)</a>`,
        `<a href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12148100" target="_blank"><strong>취약점 메타데이터 관점에서 CycloneDX와 SPDX 비교 분석 및 상호운용성 고려사항</strong> - 한국정보보호학회 논문지 (2025.04)</a>`,
        `<a href="" target="_blank"><strong>런타임 타입 SBOM을 이용한 리눅스 시스템 동적 구성요소 명세 방안 연구</strong> - 한국정보보호학회 논문지 (2025.06)</a>`
      ],
      labelStudentId: "학번",
      labelName: "이름",
      contentName: "김지민",
      labelGoal: "희망 진로",
      goalContent: "보안 엔지니어 및 연구원, 정보보안 컨설턴트",
      labelPeriod: "입학 / 졸업 연도",
      labelDept: "학교 및 학과",
      majorlist: [
        ["2020 ~ 현재", "한남대학교 전기전자공학과"],
        ["2020 ~ 현재", "한남대학교 컴퓨터공학과"]
    ]
    },
    en: {
      selfIntro: "Holly moly, you found this page!",
      nav: ["Profile", "Skills", "Projects", "Experience", "Awards", "Publications"],
      skillTitle: "📚 Skills",
      projectTitle: "💻 Projects",
      experienceTitle: "📌 Experience",
      awardsTitle: "🏆 Awards",
      researchTitle: "📄 Publications",
      projects: [
        `<a href="https://github.com/woshipubao/Sharing-Project" target="_blank"><strong>Smart Noise Cancelling</strong> - AI tech using TensorFlow (2024-2)</a>`,
        `<a href="https://github.com/HnueeJimin/Project-Napoly" target="_blank"><strong>Napoly</strong> - CLI Mafia Game using C++ multithreading (2024-2)</a>`,
        `<strong>Baseball Uniform Website</strong> - Web service using AWS (2025-1)(private)`,
        `<strong>Article Journey Algorithm Development - Netflix Series Devil's Plan 2 (personal project)(expected)</strong>`,
        `<strong>Pay's Maker: Fingerprint-based Payment System</strong> - Capstone Design Project (2025-2)(expected)`,
      ],
      experience: [
        `<strong>KIISC CISC-S'24 presentation</strong> - Introduction to CycloneDX 1.6 update (2024.06)`,
        `<strong>Completed Korea Univ. IoTcube Conference 2024</strong> - SBOM Training: Essential Tools for Secure Software (2024.08)`,
        `<strong>KIISC Chungcheong 2024 presentation</strong> - Comparison of CycloneDX 1.6 and SPDX 3.0 (2024.09)`,
        `<strong>KIISC CISC-W'24 presentation</strong> - Hardware Vulnerability Management Method Using CycloneDX HBOM (2024.11)`,
        `<strong>KIISC CISC-W'24 presentation</strong> - Runtime SBOM Implementation on Linux (2024.11)`,
        `<strong>Completed Ethical Hacker Training 6th</strong> - NSR Cyber Security Center (2025.02 ~ )`,
        `<strong>KIISC Yeongnam 2025 presentation</strong> - SDLC Behavior Tracking and Management Method with CDXA Framework (2025.06)`,
        `<strong>KIISC CISC-W'25 presentation</strong> - An Extended ML-BOM Approach for Describing Ensemble Models (2025.06)`,
      ],
      awards: [
        `<strong>Excellent Paper Award at KIISC Chungcheong Branch Conference</strong> - KISTI President Award (2024.09)`,
        `<strong>Excellent Paper Award at KIISC Winter Conference</strong> - Best Paper Award (2024.11)`,
        `<strong>Excellence Award at HNU Embedded Contest</strong> - Team JeonJeonGeungGeung (2024.12)`,
        `<strong>Hannam University GCDP Best Innovation Award</strong> - Team AquaTerra (2025.01)`
      ],
      research: [
        `<a href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12088072" target="_blank"><strong>Implementation of CycloneDX and SPDX for NIS SBOM Attributes</strong> - Review of KIISC (2025.02)</a>`,
        `<a href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12148100" target="_blank"><strong>Comparison and Interoperability of CycloneDX and SPDX in Vulnerability Metadata</strong> - Journal of KIISC (2025.04)</a>`,
        `<a href="" target="_blank"><strong>Dynamic Specification of Linux System Components Using Runtime SBOM</strong> - Journal of KIISC (2025.06)</a>`
      ],
      labelStudentId: "Student ID",
      labelName: "Name",
      contentName: "Ji-min Kim",
      labelGoal: "Career Goal",
      goalContent: "Security engineer & researcher, cybersecurity consultant",
      labelPeriod: "Admission / Graduation",
      labelDept: "Univ / Department",
      majorlist: [
        ["2020 ~ Present", "Hannam Univ. Dept. of Electrical & Electronic Eng."],
        ["2020 ~ Present", "Hannam Univ. Dept. of Computer Science"]
      ]
    }
  };

  function updateLanguage(lang) {
    const dict = i18n[lang];

    elements.nav.forEach((el, i) => el.textContent = dict.nav[i]);
    elements.skillTitle.textContent = dict.skillTitle;
    elements.projectTitle.textContent = dict.projectTitle;
    elements.experienceTitle.textContent = dict.experienceTitle;
    elements.awardsTitle.textContent = dict.awardsTitle;
    elements.researchTitle.textContent = dict.researchTitle;
    elements.selfIntro.textContent = dict.selfIntro;

    // 학력 텍스트 업데이트
    elements.labelStudentID.textContent = dict.labelStudentId;
    elements.labelName.textContent = dict.labelName;
    elements.contentName.textContent = dict.contentName;
    elements.labelGoal.textContent = dict.labelGoal;
    elements.contentGoal.textContent = dict.goalContent;
    elements.labelPeriod.textContent = dict.labelPeriod;
    elements.labelDept.textContent = dict.labelDept;

    // 학력 테이블 내용도 갱신
    elements.majorlist.innerHTML = "";
    dict.majorlist.forEach(([period, dept]) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td style="padding: 4px; text-align: center;">${period}</td>
                      <td style="padding: 4px; text-align: center;">${dept}</td>`;
      elements.majorlist.appendChild(tr);
    });

    elements.projectsList.innerHTML = "";
    dict.projects.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = item;
      elements.projectsList.appendChild(li);
    });

    elements.awardsList.innerHTML = "";
    dict.awards.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = item;
      elements.awardsList.appendChild(li);
    });

    elements.researchList.innerHTML = "";
  dict.research.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = item;
    elements.researchList.appendChild(li);
  });

    elements.experienceList.innerHTML = "";
    dict.experience.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = item;
      elements.experienceList.appendChild(li);
    });
  }

  langSelector.addEventListener("change", (e) => {
    updateLanguage(e.target.value);
  });

  updateLanguage(langSelector.value);
});