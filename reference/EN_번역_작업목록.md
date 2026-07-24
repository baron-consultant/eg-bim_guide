# EG-BIM 이용가이드 영문화 작업 목록

작업 대상은 `src/content/sub/en/**/*.astro` 31개 파일입니다 (block, command, customize,
feature, floorplan, interface, layer, multi, print, style). `docs/en/commands/*.mdx` 문서는
`.tit-box`/`.tip-box`/`.bg-img` 구조를 쓰지 않으므로 이번 작업 범위에 포함되지 않습니다.

용어 통일이 필요하면 `reference/EG-BIM(이지빔)_영문_UI_용어집.md`(실제 프로그램 en-US 리소스에서
추출한 한글-영문 용어집)를 참고하세요.

---

## 1. nav-wrap 영문 입력

- **경로**: [`src/lib/sidebarLabels.en.ts`](../src/lib/sidebarLabels.en.ts)
- **방법**: 파일을 열어 `label:` / `title:` 값(한글 텍스트)만 영문으로 교체합니다.
  - 상단의 `headerTitle`, `commandsTabLabel`, `commandsGroupTitle`, `commandsTabLabelFallback` 상수 4개도 포함.
    - `headerTitle`은 nav-wrap 맨 위 `<header class="header"><h1>` 제목("이용가이드")입니다.
      `src/pages/help/_HelpLayout.astro`가 URL(`/help/en/...`)로 로케일을 판별해 이 값을 자동으로 가져다 씁니다 — `_HelpLayout.astro`는 직접 수정할 필요 없습니다.
  - `id:`, `href:`, `icon:` 값은 라우팅에 쓰이므로 절대 수정하지 않습니다.
- 참고로 `commands` 탭 하위 명령어 이름은 각 mdx 파일 title에서 자동으로 가져오므로 이 파일과 무관합니다.

- [ ] `src/lib/sidebarLabels.en.ts` - `headerTitle` 영문 교체
- [ ] `src/lib/sidebarLabels.en.ts` - 나머지 라벨(그리미 탭 트리) 전체 영문 교체

---

## 2. 페이지별 `.tit-box h3` 타이틀 번역

**방법**: 아래 표의 파일을 열어 `<h3>...</h3>` 안의 텍스트만 영문으로 교체합니다. 내부의
`<span>` 태그 개수/위치, `&nbsp;` 개수는 스타일(강조/줄바꿈)에 쓰이므로 구조는 유지하고
텍스트만 바꾸는 것을 권장합니다.

| # | 파일 경로 | 현재 한글 타이틀(h3) | 완료 |
|---|---|---|---|
| 1 | `src/content/sub/en/block/block01.astro` | 블록/속성블록/외부참조(이미지)를 도면에 생성하고 통합 관리 | [ ] |
| 2 | `src/content/sub/en/block/block02.astro` | 작업화면에서 객체를 선택하여 블록을 생성하고 관리 | [ ] |
| 3 | `src/content/sub/en/block/block03.astro` | 블록의 문자내용를 변경해가며 사용 할 수 있는 속성블록을 생성하고 관리 | [ ] |
| 4 | `src/content/sub/en/block/block04.astro` | 현재 작업파일에 다른 파일을 연결하여 외부참조를 생성하고 관리 | [ ] |
| 5 | `src/content/sub/en/block/block05.astro` | 건설분야에서 공통적으로 사용되는 다양한 블록을 분야별로 구분하여 제공 | [ ] |
| 6 | `src/content/sub/en/command/command01.astro` | EG-BIM에서 사용할 수 있는 모든 명령어를 12개 그룹 및 실행·설정 명령어로 분류 | [ ] |
| 7 | `src/content/sub/en/command/command02.astro` | 토목/도로분야의 도면 작업시 자주 사용되는 특화 명령어 | [ ] |
| 8 | `src/content/sub/en/command/command03.astro` | 작업량이 많고 작업 시간이 긴 구조/배근도, 특화명령어로 초보자도 쉽게 | [ ] |
| 9 | `src/content/sub/en/customize/customize01.astro` | 사용자가 원하는대로 작업환경 및 명령어 아이콘바를 구성 | [ ] |
| 10 | `src/content/sub/en/customize/customize02.astro` | 사용자 작업 스타일에 맞게 기본적인 프로그램 환경을 설정 | [ ] |
| 11 | `src/content/sub/en/customize/customize03.astro` | 작업상황에 따라 원하는 기능을 켜고 끄며 작업환경을 설정 | [ ] |
| 12 | `src/content/sub/en/customize/customize04.astro` | 명령어별 별칭 또는 단축키 설정해 명령어를 간단히 실행 | [ ] |
| 13 | `src/content/sub/en/feature/feature01.astro` | 선택된 객체의 모든 속성 정보를 확인하고 수정 | [ ] |
| 14 | `src/content/sub/en/feature/feature02.astro` | 적용할 색상을 선택하고 선택 색상에 대한 속성 값 확인 | [ ] |
| 15 | `src/content/sub/en/floorplan/floorplan01.astro` | 선택된 폴더 내의 도면 파일을 한 눈에 보면서 탐색하고 정보 열람이 가능 | [ ] |
| 16 | `src/content/sub/en/floorplan/floorplan02.astro` | 도면정보를 선택해 수정하며, 수정된 항목은 도면에 자동 적용 | [ ] |
| 17 | `src/content/sub/en/floorplan/floorplan03.astro` | 도곽의 여러 정보들 중에서 원하는 정보를 선택하여 표시 가능 | [ ] |
| 18 | `src/content/sub/en/interface/information.astro` | 이지빔 소프트웨어 로그인 및 로그아웃 | [ ] |
| 19 | `src/content/sub/en/interface/interface01.astro` | 필수요소들의 효율적인 화면구성 & 넓은 작업공간 | [ ] |
| 20 | `src/content/sub/en/interface/interface02.astro` | 파일 관련 기본 기능 및 사용자 설정에 관한 기능 | [ ] |
| 21 | `src/content/sub/en/interface/interface03.astro` | 사용자가 설정한 환경값 백업 및 복원 | [ ] |
| 22 | `src/content/sub/en/layer/layer01.astro` | 각각의 레이어를 생성하여 색상, 선 종류, 선 가중치, 투명도, 출력 등을 레이어별로 관리 | [ ] |
| 23 | `src/content/sub/en/multi/multi01.astro` | 작업 도면과 참고 도면을 함께 보면서 동시 작업 | [ ] |
| 24 | `src/content/sub/en/multi/multi02.astro` | Layout(도면공간) 탭 화면분리로 Model공간과 Layout공간 동시 작업 | [ ] |
| 25 | `src/content/sub/en/multi/multi03.astro` | 넓은 화면의 3D 뷰포트 지원으로 2D와 3D 동시 작업 | [ ] |
| 26 | `src/content/sub/en/print/multiprint01.astro` | 도면파일을 폴더 단위 및 개별선택하여 옵션 설정 및 다중출력 가능 | [ ] |
| 27 | `src/content/sub/en/print/multiprint02.astro` | 다중 출력을 위한 인쇄 옵션을 설정하고 미리보기 또는 종이 및 파일로 출력 | [ ] |
| 28 | `src/content/sub/en/print/print01.astro` | 출력을 위한 인쇄 옵션을 설정하고 미리보기 또는 종이 및 파일로 출력 | [ ] |
| 29 | `src/content/sub/en/style/style01.astro` | 사용자 스타일로 선 스타일 생성 및 수정, 관리 | [ ] |
| 30 | `src/content/sub/en/style/style02.astro` | 원하는 스타일로 문자스타일 생성 및 상세 설정 | [ ] |
| 31 | `src/content/sub/en/style/style03.astro` | 원하는 스타일로 치수스타일 생성 및 수정 | [ ] |

---

## 3. 페이지별 `tip-box` (How to use) 번역

**방법**: `<div class="tip-box">` 안의 `<h4 class="tip-tit">How to use</h4>` 아래 `<dl><dt>...</dt><dd>...</dd></dl>`
텍스트를 영문으로 교체합니다. `<dd>` 안에 섞여 있는 `<img src={...ico...} />` 아이콘 태그는
그대로 두고 텍스트만 바꿉니다. `Command : BLOCK` 처럼 실제 프로그램 명령어명은 번역하지 않고 그대로 둡니다.

> ⚠️ 아래 3개 파일은 tip-box 자체가 없거나(주석 처리됨) 존재하지 않아 이 작업에서 **제외**됩니다:
> `customize01.astro`, `interface01.astro`, `information.astro`(주석 처리된 tip-box만 있음)

| # | 파일 경로 | 현재 한글 내용(dt: dd) | 완료 |
|---|---|---|---|
| 1 | `src/content/sub/en/block/block01.astro` | 방식 1: 명령어 입력창 > Command : BLOCK / 방식 2: 명령어 전체보기 > 블록 > 블록 만들기 > 블록 통합 관리창 | [ ] |
| 2 | `src/content/sub/en/block/block02.astro` | 방식 1: 명령어 입력창 > Command : BLOCK / 방식 2: 명령어 전체보기 > 블록 > 블록 만들기 > 블록 통합 관리창 | [ ] |
| 3 | `src/content/sub/en/block/block03.astro` | 방식 1: 명령어 입력창 > Command : BLOCK / 방식 2: 명령어 전체보기 > 블록 > 블록 만들기 > 블록 통합 관리창 | [ ] |
| 4 | `src/content/sub/en/block/block04.astro` | 방식 1: 명령어 입력창 > Command : BLOCK / 방식 2: 명령어 전체보기 > 블록 > 블록 만들기 > 블록 통합 관리창 | [ ] |
| 5 | `src/content/sub/en/block/block05.astro` | 방식 1: 명령어 입력창 > Command : BLIBRARY / 방식 2: 명령어 전체보기 > 블록 > 여러가지 방법으로 블록 불러오기 > 블록 라이브러리 | [ ] |
| 6 | `src/content/sub/en/command/command01.astro` | 방식 1: 명령어 아이콘바 > 명령어 전체보기 / 방식 2: 명령어 아이콘바 > + 아이콘 추가 | [ ] |
| 7 | `src/content/sub/en/command/command02.astro` | 방식 1: 명령어 아이콘바 > 명령어 전체보기 > 선형/횡단 | [ ] |
| 8 | `src/content/sub/en/command/command03.astro` | 방식 1: 명령어 아이콘바 > 명령어 전체보기 > 구조/배근 | [ ] |
| 9 | `src/content/sub/en/customize/customize01.astro` | *(tip-box 없음 — 제외)* | — |
| 10 | `src/content/sub/en/customize/customize02.astro` | 방식 1: 명령어 입력창 > Command : OPTIONS / 방식 2: 홈메뉴 > 사용자 설정 > Display&Mouse | [ ] |
| 11 | `src/content/sub/en/customize/customize03.astro` | 방식 1: 보조기능 아이콘바 > 보조기능 전체보기 / 방식 2: 명령어 아이콘바 > 명령어 전체보기 > 보조기능 | [ ] |
| 12 | `src/content/sub/en/customize/customize04.astro` | 방식 1: 명령어 아이콘바 > 명령어 전체보기 > 단축키 | [ ] |
| 13 | `src/content/sub/en/feature/feature01.astro` | 방식 1: Command : PROPERTIES / 방식 2: 명령어 전체보기 > 선택/조회 > 객체 특성조회 > Properties / 방식 3: 상단 우측 상세보기의 속성창 클릭 | [ ] |
| 14 | `src/content/sub/en/feature/feature02.astro` | 방식 1: Command : COLOR / 방식 2: 상단 바 > 색상 > 색상 상세보기 | [ ] |
| 15 | `src/content/sub/en/floorplan/floorplan01.astro` | 방식 1: 상단 바 우측 > 꾸러미 | [ ] |
| 16 | `src/content/sub/en/floorplan/floorplan02.astro` | 방식 1: 꾸러미 > 상단 좌측 > 도면정보수정 | [ ] |
| 17 | `src/content/sub/en/floorplan/floorplan03.astro` | 방식 1: 꾸러미 > 상단 좌측 > 도면정보수정 | [ ] |
| 18 | `src/content/sub/en/interface/information.astro` | *(tip-box 주석 처리됨 — 제외)* | — |
| 19 | `src/content/sub/en/interface/interface01.astro` | *(tip-box 없음 — 제외)* | — |
| 20 | `src/content/sub/en/interface/interface02.astro` | 방식 1: 상단 바 좌측 > EG-BIM 로고 > 홈메뉴 | [ ] |
| 21 | `src/content/sub/en/interface/interface03.astro` | 방식 1: 상단 바 좌측 > EG-BIM 로고 > 홈메뉴 > 사용자 설정 | [ ] |
| 22 | `src/content/sub/en/layer/layer01.astro` | 방식 1: Command : LAYER / 방식 2: 명령어 전체보기 > 레이어 > 레이어 관리 > layer / 방식 3: 상단 바 > 선 스타일 > 선스타일 상세 | [ ] |
| 23 | `src/content/sub/en/multi/multi01.astro` | 방식 1: 파일 탭 > 파일 드래그 & 드롭 > 단축키 | [ ] |
| 24 | `src/content/sub/en/multi/multi02.astro` | 방식 1: 작업공간 탭 > Layout 드래그 & 드롭 | [ ] |
| 25 | `src/content/sub/en/multi/multi03.astro` | 방식 1: Command : VPS3D / 방식 2: 명령어 전체보기 > 뷰 > 3D뷰어 및 3D 작업공간 열기 > VPS3D | [ ] |
| 26 | `src/content/sub/en/print/multiprint01.astro` | 방식 1: 꾸러미 > 상단 좌측 > 다중 출력 | [ ] |
| 27 | `src/content/sub/en/print/multiprint02.astro` | 방식 1: 꾸러미 > 상단 좌측 > 다중 출력 | [ ] |
| 28 | `src/content/sub/en/print/print01.astro` | 방식 1: Command : PLOT / 방식 2: 상단 바 우측 > 인쇄 버튼 | [ ] |
| 29 | `src/content/sub/en/style/style01.astro` | 방식 1: Command : LINETYPE / 방식 2: 명령어 전체보기 > 도형 > 선 스타일 생성 및 수정하기 > 선 스타일 작성 / 방식 3: 상단바 > 선 스타일 > 선 스타일 상세 | [ ] |
| 30 | `src/content/sub/en/style/style02.astro` | 방식 1: Command : STYLE / 방식 2: 명령어 전체보기 > 문자 > 문자 스타일 작성/번경 > 문자 스타일 작성 / 방식 3: 상단바 > 문자 스타일 > 문자 스타일 상세 | [ ] |
| 31 | `src/content/sub/en/style/style03.astro` | 방법 1: Command : DIMSTYLE / 방법 2: 명령어 전체보기 > 치수/연산 > 치수 스타일 작성/번경 > 치수 스타일 작성/편집 / 방법 3: 상단바 > 치수 스타일 > 치수 스타일 상세 | [ ] |

---

## 4. 페이지별 `bg-img` 이미지 교체

**방법**: 코드(`.astro`)의 이미지 경로는 이미 `en` 폴더를 가리키도록 수정이 끝난 상태입니다.
아래 표의 **저장 위치**에 동일한 파일명으로 영문 스크린샷을 덮어쓰기만 하면 됩니다
(파일명을 바꾸면 코드도 함께 수정해야 하므로 파일명은 유지 권장).

| # | .astro 파일 | 저장 위치 (파일명 동일 유지) | 완료 |
|---|---|---|---|
| 1 | `block/block01.astro` | `public/help/images/en/block/3x_block_01.png` | [ ] |
| 2 | `block/block02.astro` | `public/help/images/en/block/3x_block_02.png` | [ ] |
| 3 | `block/block03.astro` | `public/help/images/en/block/3x_block_03.png` | [ ] |
| 4 | `block/block04.astro` | `public/help/images/en/block/3x_block_04.png` | [ ] |
| 5 | `block/block05.astro` | `public/help/images/en/block/3x_block_05.png` | [ ] |
| 6 | `command/command01.astro` | `public/help/images/en/command/3x_command_01.png` | [ ] |
| 7 | `command/command02.astro` | `public/help/images/en/command/3x_command_02.png` | [ ] |
| 8 | `command/command03.astro` | `public/help/images/en/command/3x_command_03.png` | [ ] |
| 9 | `customize/customize01.astro` | `public/help/images/en/customize/3x_customize_01.png` | [ ] |
| 10 | `customize/customize02.astro` | `public/help/images/en/customize/3x_customize_02.png` | [ ] |
| 11 | `customize/customize03.astro` | `public/help/images/en/customize/3x_customize_03.png` | [ ] |
| 12 | `customize/customize04.astro` | `public/help/images/en/customize/3x_customize_04.png` | [ ] |
| 13 | `feature/feature01.astro` | `public/help/images/en/feature/3x_feature_01.png` | [ ] |
| 14 | `feature/feature02.astro` | `public/help/images/en/feature/3x_feature_02.png` | [ ] |
| 15 | `floorplan/floorplan01.astro` | `public/help/images/en/floorplan/3x_floorplan_01.png` | [ ] |
| 16 | `floorplan/floorplan02.astro` | `public/help/images/en/floorplan/3x_floorplan_02.png` | [ ] |
| 17 | `floorplan/floorplan03.astro` | `public/help/images/en/floorplan/3x_floorplan_03.png` | [ ] |
| 18 | `interface/information.astro` | `public/help/images/en/interface/3x_information.png` | [ ] |
| 19 | `interface/interface01.astro` | `public/help/images/en/interface/3x_interface_01.png` | [ ] |
| 20 | `interface/interface02.astro` | `public/help/images/en/interface/3x_interface_02.png` | [ ] |
| 21 | `interface/interface03.astro` | `public/help/images/en/interface/3x_interface_03.png` | [ ] |
| 22 | `layer/layer01.astro` | `public/help/images/en/layer/3x_layer_01.png` | [ ] |
| 23 | `multi/multi01.astro` | `public/help/images/en/multi/3x_multi_01.png` | [ ] |
| 24 | `multi/multi02.astro` | `public/help/images/en/multi/3x_multi_02.png` | [ ] |
| 25 | `multi/multi03.astro` | `public/help/images/en/multi/3x_multi_03.png` | [ ] |
| 26 | `print/multiprint01.astro` | `public/help/images/en/multiprint/3x_multiprint_01.png` | [ ] |
| 27 | `print/multiprint02.astro` | `public/help/images/en/multiprint/3x_multiprint_02.png` | [ ] |
| 28 | `print/print01.astro` | `public/help/images/en/print/3x_print_01.png` | [ ] |
| 29 | `style/style01.astro` | `public/help/images/en/style/3x_style_01.png` | [ ] |
| 30 | `style/style02.astro` | `public/help/images/en/style/3x_style_02.png` | [ ] |
| 31 | `style/style03.astro` | `public/help/images/en/style/3x_style_03.png` | [ ] |

이미 `public/help/images/en/{카테고리}/` 폴더에 위 파일명과 동일한 이미지가 준비되어 있는지
먼저 확인하고, 아직 영문 스크린샷으로 교체되지 않은 것만 새로 작업하면 됩니다.
