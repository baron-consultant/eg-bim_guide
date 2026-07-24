import type { SidebarTab } from "./sidebarConfig";

// ✅ nav-wrap 라벨(한국어)
export const headerTitle = "이용가이드";
export const commandsTabLabel = "명령어";
export const commandsGroupTitle = "명령어";
export const commandsTabLabelFallback = "명령어 문서";
export const searchPlaceholder = "검색";
export const videoHint = "▲ 영상 위에 마우스 커서를 올리면 재생 컨트롤바가 보입니다.";

// ✅ 검색결과(search-results-container) 라벨(한국어)
export const searchClearTitle = "검색어 지우기";
export const searchGuideLabel = "가이드";
export const searchCommandLabel = "명령어";
export const searchCountUnit = " 건";
export const searchNoResultsTemplate = "{query}에 대한 검색 결과가 없습니다.";
export const searchDeleteLabel = "삭제";

// 그리미 탭 설정 (한국어)
export function getGrimmiTabKo(base: string): SidebarTab {
  return {
    id: "grimmi",
    label: "가이드",
    icon: "ico-grimmy",
    groups: [
      // 20260725 로그인/로그아웃 메뉴 추후 오픈 예정으로 숨김 처리
      // {
      //   title: "공통",
      //   icon: "ico-ggurumi",
      //   items: [
      //     {
      //       id: "common",
      //       label: "",
      //       children: [
      //         {
      //           id: "information",
      //           label: "로그인/로그아웃",
      //           href: `${base}/information`,
      //         },
      //       ],
      //     },
      //   ]
      // },
      {
        title: "그리미",
        icon: "ico-grimmy",
        items: [
          {
            id: "main",
            label: "",
            children: [
              {
                id: "interface01",
                label: "메인화면구성",
                href: `${base}/interface01`,
              },
            ],
          },
          {
            id: "interface",
            label: "홈메뉴",
            children: [
              {
                id: "interface02",
                label: "기본기능",
                href: `${base}/interface02`,
              },
              {
                id: "interface03",
                label: "사용자 설정 백업 & 복원",
                href: `${base}/interface03`,
              },
            ],
          },
          {
            id: "customize",
            label: "사용자화",
            children: [
              {
                id: "customize01",
                label: "명령어아이콘바",
                href: `${base}/customize01`,
              },
              {
                id: "customize02",
                label: "시스템설정",
                href: `${base}/customize02`,
              },
              {
                id: "customize03",
                label: "작업환경설정",
                href: `${base}/customize03`,
              },
              {
                id: "customize04",
                label: "단축키(별칭,단축키) 설정",
                href: `${base}/customize04`,
              },
            ],
          },
          // 20260722 메뉴변경으로인한 삭제
          //{
          //   id: "multi",
          //   label: "멀티작업공간",
          //   children: [
          //     {
          //       id: "multi01",
          //       label: "파일탭 분리(Read Only)",
          //       href: `${base}/multi01`,
          //     },
          //     {
          //       id: "multi02",
          //       label: "Layout(도면공간) 탭 분리",
          //       href: `${base}/multi02`,
          //     },
          //   ],
          // },
          {
            id: "command",
            label: "명령어 전체보기",
            children: [
              {
                id: "command01",
                label: "명령어 전체보기 구성",
                href: `${base}/command01`,
              },
              {
                id: "command02",
                label: "선형/횡단 특화명령어",
                href: `${base}/command02`,
              },
              {
                id: "command03",
                label: "구조/배근 특화명령어",
                href: `${base}/command03`,
              }, {
                id: "multi03",
                label: "뷰 > 3D 작업 전용",
                href: `${base}/multi03`,
              },
            ],
          },
          {
            id: "style",
            label: "스타일 관리",
            children: [
              {
                id: "style01",
                label: "선 스타일 상세보기",
                href: `${base}/style01`,
              },
              {
                id: "style02",
                label: "문자 스타일 상세보기",
                href: `${base}/style02`,
              },
              {
                id: "style03",
                label: "치수 스타일 상세보기",
                href: `${base}/style03`,
              },
            ],
          },
          {
            id: "feature",
            label: "객체특성관리",
            children: [
              {
                id: "feature01",
                label: "속성Bar, 속성창(Properties)",
                href: `${base}/feature01`,
              },
              {
                id: "feature02",
                label: "색상 상세보기",
                href: `${base}/feature02`,
              },
            ],
          },
          {
            id: "layer",
            label: "레이어관리",
            children: [
              {
                id: "layer01",
                label: "레이어 상세보기",
                href: `${base}/layer01`,
              },
            ],
          },
          {
            id: "block",
            label: "블록 통합 관리창",
            children: [
              {
                id: "block01",
                label: "블록의 종류",
                href: `${base}/block01`,
                children: [
                  {
                    id: "block02",
                    label: "블록",
                    href: `${base}/block02`,
                  },
                  {
                    id: "block03",
                    label: "속성블록",
                    href: `${base}/block03`,
                  },
                  {
                    id: "block04",
                    label: "외부참조",
                    href: `${base}/block04`,
                  },
                ],
              },
              {
                id: "block05",
                label: "블록 라이브러리",
                href: `${base}/block05`,
              },
            ],
          },
          {
            id: "print",
            label: "인쇄",
            children: [
              {
                id: "print01",
                label: "인쇄창 화면 구성",
                href: `${base}/print01`,
              },
            ],
          },
        ],
      },
      {
        title: "꾸러미",
        icon: "ico-ggurumi",
        items: [
          {
            id: "floorplan",
            label: "",
            children: [
              {
                id: "floorplan01",
                label: "도면탐색 및 정보열람",
                href: `${base}/floorplan01`,
              },
            ],
          },
          {
            id: "floorplan-edit",
            label: "도면정보수정",
            children: [
              {
                id: "floorplan02",
                label: "도면정보수정",
                href: `${base}/floorplan02`,
              },
              {
                id: "floorplan03",
                label: "도면정보 항목 선택",
                href: `${base}/floorplan03`,
              },
            ],
          },
          {
            id: "multiprint",
            label: "다중 출력",
            children: [
              {
                id: "multiprint01",
                label: "도면 출력 옵션 설정",
                href: `${base}/multiprint01`,
              },
              {
                id: "multiprint02",
                label: "다중 인쇄창 화면 구성",
                href: `${base}/multiprint02`,
              },
            ],
          },
        ],
      },
    ],
  };
}
