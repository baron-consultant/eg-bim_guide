import { getCollection } from "astro:content";
import {
  getGrimmiTabKo,
  commandsTabLabel as commandsTabLabelKo,
  commandsGroupTitle as commandsGroupTitleKo,
  commandsTabLabelFallback as commandsTabLabelFallbackKo,
} from "./sidebarLabels.ko";
import {
  getGrimmiTabEn,
  commandsTabLabel as commandsTabLabelEn,
  commandsGroupTitle as commandsGroupTitleEn,
  commandsTabLabelFallback as commandsTabLabelFallbackEn,
} from "./sidebarLabels.en";

const BASE_PATH = "/eg-bim_guide/help";

export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  children?: MenuItem[];
  order?: number;
}

export interface MenuGroup {
  title: string;
  icon: string;
  items: MenuItem[];
}

export interface SidebarTab {
  id: string;
  label: string;
  icon?: string;
  groups: MenuGroup[];
}

// 그리미 탭 설정 (locale별 라벨 파일: sidebarLabels.ko.ts / sidebarLabels.en.ts)
export function getGrimmiTab(locale: string = "ko"): SidebarTab {
  const base = locale === "en" ? `${BASE_PATH}/en` : BASE_PATH;
  return locale === "en" ? getGrimmiTabEn(base) : getGrimmiTabKo(base);
}

// 🔹 좌측 nav(그리미 탭)의 slug → label 맵. 검색 결과 타이틀이 nav 라벨과
// 항상 일치하도록, 이 트리를 유일한 출처로 사용한다 (navigation.ts와 중복 유지하지 않음).
export function flattenGrimmiLabels(locale: string = "ko"): Record<string, string> {
  const tab = getGrimmiTab(locale);
  const map: Record<string, string> = {};
  const walk = (items: MenuItem[]) => {
    for (const item of items) {
      if (item.href) {
        const slug = item.href.replace(`${BASE_PATH}/`, "");
        map[slug] = item.label;
      }
      if (item.children) walk(item.children);
    }
  };
  for (const group of tab.groups) walk(group.items);
  return map;
}

// 🔹 폴더명을 표시용 라벨로 변환하는 함수
function formatFolderLabel(folderName: string): string {
  // 하이픈(-)으로 시작하면 ".etc"로 표시
  if (folderName.startsWith('_')) {
    return 'etc.';
  }
  return folderName;
}

// docs 명령어 문서 생성
export async function generateDocsTab(locale: string = "ko"): Promise<SidebarTab> {
  const commandsTabLabel = locale === "en" ? commandsTabLabelEn : commandsTabLabelKo;
  const commandsGroupTitle = locale === "en" ? commandsGroupTitleEn : commandsGroupTitleKo;
  const commandsTabLabelFallback = locale === "en" ? commandsTabLabelFallbackEn : commandsTabLabelFallbackKo;

  try {
    const docsEntries = await getCollection("docs");

    // {locale}/commands 폴더의 문서들 필터링 및 정렬
    const commandDocs = docsEntries
      .filter((entry) => entry.id.startsWith(`${locale}/commands/`))
      .sort((a, b) => {
        const pathA = a.id.toLowerCase();
        const pathB = b.id.toLowerCase();
        return pathA.localeCompare(pathB, "en", {
          numeric: true,
          sensitivity: "base",
        });
      });

    if (commandDocs.length === 0) {
      console.warn(`No command docs found in ${locale}/commands/!`);
    }

    // 하위 폴더별로 그룹화
    const grouped = commandDocs.reduce((acc, entry) => {
      const parts = entry.id.split("/");
      // ko/commands/drawing/line.md -> parts[2] = 'drawing'
      const subFolder = parts[2] || "general";

      if (!acc[subFolder]) {
        acc[subFolder] = [];
      }

      acc[subFolder].push({
        id: entry.id,
        label: entry.data.title,
        href: `${BASE_PATH}/${entry.id.replace(/\.mdx?$/, "")}`,
        order: entry.data.sidebar?.order || 999,
      });

      return acc;
    }, {} as Record<string, MenuItem[]>);

    // 🔹 폴더명을 알파벳 순으로 정렬한 후 메뉴 그룹 생성
    const sortedFolders = Object.keys(grouped).sort((a, b) =>
      a
        .toLowerCase()
        .localeCompare(b.toLowerCase(), "en", {
          numeric: true,
          sensitivity: "base",
        })
    );

    const items: MenuItem[] = sortedFolders.map((folder) => ({
      id: `commands-${folder}`,
      label: formatFolderLabel(folder), // 🔹 폴더명 변환 적용
      children: grouped[folder].sort((a, b) => (a.order || 0) - (b.order || 0)),
    }));

    return {
      id: "commands",
      label: commandsTabLabel,
      icon: "ico-docs",
      groups: [
        {
          title: commandsGroupTitle,
          icon: "ico-docs",
          items: items,
        },
      ],
    };
  } catch (error) {
    console.error("Failed to load docs:", error);
    return {
      id: "commands",
      label: commandsTabLabelFallback,
      icon: "ico-docs",
      groups: [],
    };
  }
}

// 전체 탭 설정
export async function getSidebarTabs(locale: string = "ko"): Promise<SidebarTab[]> {
  const docsTab = await generateDocsTab(locale);
  return [getGrimmiTab(locale), docsTab];
}