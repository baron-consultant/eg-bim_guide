import type { SidebarTab } from "./sidebarConfig";

// ✅ nav-wrap 라벨(영문) - 아래 한글 텍스트를 영문으로 직접 교체하세요
export const headerTitle = "User Guide";
export const commandsTabLabel = "Command";
export const commandsGroupTitle = "Command";
export const commandsTabLabelFallback = "Command Documentation";
export const searchPlaceholder = "Search";
export const videoHint = "▲ Hover your mouse over the video to see the playback control bar.";

// ✅ 검색결과(search-results-container) 라벨(영문)
export const searchClearTitle = "Clear search";
export const searchGuideLabel = "Guide";
export const searchCommandLabel = "Command";
export const searchCountUnit = "";
export const searchNoResultsTemplate = 'No search results for "{query}".';
export const searchDeleteLabel = "Delete";

// ✅ 진입 리다이렉트 페이지(RedirectLayout) 라벨(영문)
export const redirectFallbackPrefix = "If you are not redirected automatically, click ";
export const redirectFallbackLinkText = "this link";
export const redirectFallbackSuffix = ".";

// 그리미 탭 설정 (영문)
export function getGrimmiTabEn(base: string): SidebarTab {
  return {
    id: "grimmi",
    label: "Guide",
    icon: "ico-grimmy",
    groups: [
      // 20260725 로그인/로그아웃 메뉴 추후 오픈 예정으로 숨김 처리
      // {
      //   title: "Common",
      //   icon: "ico-ggurumi",
      //   items: [
      //     {
      //       id: "common",
      //       label: "",
      //       children: [
      //         {
      //           id: "information",
      //           label: "Login/Logout",
      //           href: `${base}/information`,
      //         },
      //       ],
      //     },
      //   ]
      // },
      {
        title: "GURIMI",
        icon: "ico-grimmy",
        items: [
          {
            id: "main",
            label: "",
            children: [
              {
                id: "interface01",
                label: "Main Screen Layout",
                href: `${base}/interface01`,
              },
            ],
          },
          {
            id: "interface",
            label: "Home Menu",
            children: [
              {
                id: "interface02",
                label: "Basic Functions",
                href: `${base}/interface02`,
              },
              {
                id: "interface03",
                label: "User Settings\nBackup & Restore",
                href: `${base}/interface03`,
              },
            ],
          },
          {
            id: "customize",
            label: "Customization",
            children: [
              {
                id: "customize01",
                label: "Command Icon Bar",
                href: `${base}/customize01`,
              },
              {
                id: "customize02",
                label: "System Settings",
                href: `${base}/customize02`,
              },
              {
                id: "customize03",
                label: "Work Environment Settings",
                href: `${base}/customize03`,
              },
              {
                id: "customize04",
                label: "Shortcut(Alias, Shortcut)\nSettings",
                href: `${base}/customize04`,
              },
            ],
          },
          {
            id: "command",
            label: "Command View All",
            children: [
              {
                id: "command01",
                label: "Layout of View All Command",
                href: `${base}/command01`,
              },
              {
                id: "command02",
                label: "Civil/Road\nSpecialized Commands",
                href: `${base}/command02`,
              },
              {
                id: "command03",
                label: "Structure\nSpecialized Commands",
                href: `${base}/command03`,
              }, {
                id: "multi03",
                label: "View > Dedicated to 3D Work",
                href: `${base}/multi03`,
              },
            ],
          },
          {
            id: "style",
            label: "Style Management",
            children: [
              {
                id: "style01",
                label: "Line Style Details",
                href: `${base}/style01`,
              },
              {
                id: "style02",
                label: "Text Style Details",
                href: `${base}/style02`,
              },
              {
                id: "style03",
                label: "Dimension Style Details",
                href: `${base}/style03`,
              },
            ],
          },
          {
            id: "feature",
            label: "Object Property Management",
            children: [
              {
                id: "feature01",
                label: "Bar, Popup(Properties)",
                href: `${base}/feature01`,
              },
              {
                id: "feature02",
                label: "Color Edit",
                href: `${base}/feature02`,
              },
            ],
          },
          {
            id: "layer",
            label: "Layer Management",
            children: [
              {
                id: "layer01",
                label: "Layer Details",
                href: `${base}/layer01`,
              },
            ],
          },
          {
            id: "block",
            label: "Integrated Block Management",
            children: [
              {
                id: "block01",
                label: "Types of Blocks",
                href: `${base}/block01`,
                children: [
                  {
                    id: "block02",
                    label: "Block",
                    href: `${base}/block02`,
                  },
                  {
                    id: "block03",
                    label: "Attribute Block",
                    href: `${base}/block03`,
                  },
                  {
                    id: "block04",
                    label: "External Reference",
                    href: `${base}/block04`,
                  },
                ],
              },
              {
                id: "block05",
                label: "Block Library",
                href: `${base}/block05`,
              },
            ],
          },
          {
            id: "print",
            label: "Print",
            children: [
              {
                id: "print01",
                label: "Plot Window Layout",
                href: `${base}/print01`,
              },
            ],
          },
        ],
      },
      {
        title: "KKUREOMI",
        icon: "ico-ggurumi",
        items: [
          {
            id: "floorplan",
            label: "",
            children: [
              {
                id: "floorplan01",
                label: "Explore Drawings and\nView Information",
                href: `${base}/floorplan01`,
              },
            ],
          },
          {
            id: "floorplan-edit",
            label: "Edit Title Block",
            children: [
              {
                id: "floorplan02",
                label: "Edit Title Block",
                href: `${base}/floorplan02`,
              },
              {
                id: "floorplan03",
                label: "Select Drawing Info Items",
                href: `${base}/floorplan03`,
              },
            ],
          },
          {
            id: "multiprint",
            label: "Multi Plot",
            children: [
              {
                id: "multiprint01",
                label: "Set Drawing Print Options",
                href: `${base}/multiprint01`,
              },
              {
                id: "multiprint02",
                label: "Batch Print Window Layout",
                href: `${base}/multiprint02`,
              },
            ],
          },
        ],
      },
    ],
  };
}
