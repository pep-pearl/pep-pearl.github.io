export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; code: string }
  | { type: "note"; text: string };

export interface DetailSection {
  title: string;
  blocks: ContentBlock[];
}

export interface WorkItem {
  id: string;
  number: string;
  title: string;
  tags: string[];
  intro: string[];
  responsibilities: string[];
  details: DetailSection[];
}

export interface ArchiveItem {
  id: string;
  title: string;
  tags?: string[];
  intro: string[];
  details?: DetailSection[];
  githubUrl?: string;
  demoUrl?: string;
}

export const links = {
  resume: "/resume.html",
  github: "https://github.com/pep-pearl",
  blog: "https://jinjoo648.tistory.com/",
  linkedin: "https://www.linkedin.com/in/nojam2ya",
  email: "mailto:jinjoo648@naver.com",
};

export const workItems: WorkItem[] = [
  {
    id: "gis-rendering",
    number: "01",
    title:
      "주기적으로 갱신되는 GIS 데이터의 처리 범위와 지도 feature 갱신 구조 개선",
    tags: ["React", "TypeScript", "OpenLayers"],
    intro: [
      "GIS 관제 화면에서 TanStack Query로 수신한 서버 응답 전체를 기준으로 지도 feature와 관련 UI가 함께 재처리되던 구조를, 객체 ID 기준 registry와 변경 비교를 이용해 추가·삭제·변경된 항목만 갱신하는 방식으로 조정했습니다.",
      "새로운 응답과 이전 값을 비교하고, 값이 달라진 객체를 사용하는 상태만 갱신하도록 구성했습니다. 이를 통해 주기적인 데이터 수신 시 발생하던 화면 정지 현상을 완화했고, 사용자 피드백과 React DevTools 렌더링 하이라이트로 불필요한 갱신 감소를 확인했습니다.",
      "지도·목록·상세 패널·필터가 같은 데이터를 사용하더라도 각 화면이 필요한 범위만 갱신하도록 상태 흐름을 나눴습니다.",
    ],
    responsibilities: [
      "상태 갱신 구조 설계",
      "객체 단위 비교 로직 구현",
      "OpenLayers 객체와 React 상태 연결",
      "지도·목록·상세·필터 상태 정리",
      "GIS 팝업과 오버레이 처리 기준",
      "문제 재현과 수정",
    ],
    details: [
      {
        title: "배경",
        blocks: [
          {
            type: "paragraph",
            text: "GIS 화면에서는 데이터의 성격에 따라 30초, 1분, 5분 간격으로 API를 호출했습니다.",
          },
          {
            type: "paragraph",
            text: "해당 기능은 1분 간격으로 새로운 데이터를 받아 지도 객체와 목록, 상세 정보, 범례 등 여러 UI에 반영하는 구조였습니다.",
          },
          {
            type: "paragraph",
            text: "지도에서 객체를 선택하면 목록과 상세 패널이 함께 변경되고, 필터 조건이 달라지면 지도 레이어와 각 UI가 다시 갱신됐습니다.",
          },
        ],
      },
      {
        title: "문제",
        blocks: [
          {
            type: "paragraph",
            text: "응답에 포함된 일부 객체의 값만 달라져도 전체 데이터를 사용하는 상태가 함께 갱신됐습니다.",
          },
          {
            type: "paragraph",
            text: "실제로 변경되지 않은 지도 객체와 UI까지 다시 처리됐고, 데이터가 갱신되는 시점에 화면이 일시적으로 멈추는 문제가 발생했습니다.",
          },
          {
            type: "paragraph",
            text: "React 상태와 OpenLayers 객체에서 같은 데이터를 각각 관리하면서 중복으로 처리되는 부분도 있었습니다.",
          },
          {
            type: "paragraph",
            text: "지도에서 선택한 객체, 목록에서 선택한 항목, 상세 패널에 표시되는 값이 서로 다른 상태로 관리돼 동기화가 어긋나는 경우도 있었습니다.",
          },
        ],
      },
      {
        title: "데이터 갱신 구조",
        blocks: [
          {
            type: "paragraph",
            text: "이전 데이터를 객체 ID 기준으로 저장하는 레지스트리를 구성했습니다.",
          },
          {
            type: "paragraph",
            text: "새로운 응답이 들어오면 레지스트리의 이전 값과 비교하고, 값이 변경된 객체만 관련 상태를 갱신했습니다. 변경되지 않은 객체에는 상태 갱신을 요청하지 않았습니다.",
          },
          {
            type: "paragraph",
            text: "데이터를 저장하는 범위와 화면이 구독하는 범위도 분리했습니다. 화면 전체가 하나의 응답을 구독하지 않고, 각 UI가 실제로 사용하는 데이터만 갱신하도록 변경했습니다.",
          },
          {
            type: "paragraph",
            text: "OpenLayers 객체에서 직접 관리하는 편이 적합한 값은 React 상태에 다시 복제하지 않고 ref를 통해 처리했습니다.",
          },
          {
            type: "note",
            text: "아래 코드는 실제 구현 방식을 설명하기 위해 단순화한 예시입니다.",
          },
          {
            type: "code",
            code: `const registry = useRef(new Map<string, GISData>());

function applyData(nextList: GISData[]) {
  nextList.forEach((next) => {
    const previous = registry.current.get(next.id);

    if (!isSameData(previous, next)) {
      registry.current.set(next.id, next);
      updateConsumer(next.id, next);
    }
  });
}`,
          },
        ],
      },
      {
        title: "지도와 화면 상태 연결",
        blocks: [
          {
            type: "paragraph",
            text: "지도, 목록, 상세 패널, 필터가 각각 별도의 원본 상태를 갖지 않도록 선택 상태의 기준을 정리했습니다.",
          },
          {
            type: "code",
            code: `Filter
  ↓
Map layer
  ↓
Selected object
  ├─ List
  ├─ Popup
  └─ Detail panel`,
          },
          {
            type: "paragraph",
            text: "지도에서 객체를 선택하거나 목록에서 항목을 선택해도 같은 식별자를 기준으로 화면이 변경되도록 구성했습니다.",
          },
          {
            type: "paragraph",
            text: "서버에서 받은 원본 데이터, 현재 선택된 객체, UI가 열려 있는지와 같은 표시 상태도 서로 다른 역할로 나눴습니다.",
          },
        ],
      },
      {
        title: "GIS 팝업과 오버레이 처리 기준",
        blocks: [
          {
            type: "paragraph",
            text: "OpenLayers와 React가 각각 잘 관리할 수 있는 영역을 기준으로 팝업과 오버레이 처리 방식을 나눴습니다.",
          },
          {
            type: "paragraph",
            text: "지도 좌표에 종속되고 pan, zoom, move에 따라 위치가 함께 변경되어야 하는 UI는 OpenLayers Overlay를 사용했습니다. 이 경우 위치 계산과 지도 위 배치는 OpenLayers에 맡기고, 필요한 경우 내부 UI만 React 컴포넌트로 렌더링했습니다.",
          },
          {
            type: "paragraph",
            text: "반면 외부 패널의 열림 상태, 레이아웃 변화, React 컴포넌트 상태와 더 강하게 연결되는 소수의 UI는 지도 컨테이너 위에 React 컴포넌트 레이어로 구성했습니다. 이 경우 OpenLayers에서는 선택 객체나 좌표 정보만 받아오고, 표시 여부와 형태 변경은 React 상태로 관리했습니다.",
          },
          {
            type: "paragraph",
            text: "이를 통해 지도 좌표와 직접 연결되는 요소는 OpenLayers의 생명주기를 따르게 하고, 앱 상태와 상호작용이 중요한 UI는 React 안에서 관리할 수 있도록 분리했습니다.",
          },
        ],
      },
      {
        title: "변경 후",
        blocks: [
          {
            type: "paragraph",
            text: "주기적인 데이터 갱신 시 사용자에게 보고되던 화면 정지 현상을 완화했습니다. 변경 후 React DevTools의 렌더링 하이라이트를 통해 외부 상태를 사용하는 UI 중심으로 갱신 범위가 줄어든 것을 확인했습니다.",
          },
          {
            type: "paragraph",
            text: "응답을 받을 때마다 전체 상태를 교체하지 않고, 변경된 객체를 사용하는 UI만 갱신하도록 렌더링 범위를 줄였습니다.",
          },
          {
            type: "paragraph",
            text: "지도 객체와 React 상태의 역할도 나눠 같은 데이터를 양쪽에서 불필요하게 관리하는 경우를 줄였습니다.",
          },
          {
            type: "paragraph",
            text: "지도, 목록, 팝업, 상세 패널이 같은 선택 기준을 사용하도록 정리해 화면 사이의 상태 불일치도 줄였습니다.",
          },
        ],
      },
      {
        title: "판단",
        blocks: [
          {
            type: "paragraph",
            text: "모든 컴포넌트에 메모이제이션을 추가하기보다 어떤 데이터가 어떤 화면을 갱신하는지부터 다시 나눴습니다.",
          },
          {
            type: "paragraph",
            text: "API 응답을 받는 단위와 화면을 다시 그리는 단위가 같을 필요는 없다고 판단했습니다.",
          },
          {
            type: "paragraph",
            text: "지도 라이브러리의 상태를 모두 React로 옮기기보다 각 도구가 관리하기 적합한 범위를 나누는 쪽을 선택했습니다.",
          },
        ],
      },
    ],
  },
  {
    id: "shared-architecture",
    number: "02",
    title: "공통 코드를 관리하기 위한 구조 적용과 조정",
    tags: ["React", "TypeScript", "pnpm Workspace", "FSD", "GitLab"],
    intro: [
      "유사한 프로젝트에서 반복되는 UI와 비즈니스 로직을 관리하기 위해 모노레포를 적용했습니다.",
      "이후 프로젝트 규모가 커지며 의존성과 디버깅 범위가 함께 증가하는 문제를 확인했습니다. 팀 피드백을 반영해 프로젝트 저장소와 공통 패키지를 분리하는 방식으로 다시 조정했습니다.",
    ],
    responsibilities: [
      "구조 제안과 초기 구성",
      "공통 패키지 설계 및 구현",
      "폴더와 import 규칙 정의",
      "팀 피드백 반영",
      "폴리레포 전환",
    ],
    details: [
      {
        title: "배경",
        blocks: [
          {
            type: "paragraph",
            text: "유사한 서비스가 추가될 때 기존 프로젝트를 복사한 뒤 일부 UI와 로직을 수정하는 방식으로 작업했습니다.",
          },
          {
            type: "paragraph",
            text: "같은 기능이 여러 저장소에 나뉘어 있어 오류를 수정하거나 공통 UI를 변경할 때 각 프로젝트를 모두 찾아 수정해야 했습니다.",
          },
          {
            type: "paragraph",
            text: "프로젝트마다 구현 방식도 조금씩 달라 공통으로 관리할 범위와 서비스 안에 남겨야 할 범위가 명확하지 않았습니다.",
          },
        ],
      },
      {
        title: "1단계 — 모노레포 적용",
        blocks: [
          {
            type: "paragraph",
            text: "pnpm workspace를 이용해 여러 웹 서비스와 공통 기능을 하나의 저장소에서 관리했습니다.",
          },
          {
            type: "paragraph",
            text: "웹 서비스는 apps, 공통 기능은 packages로 나눴습니다. 외부 라이브러리 버전은 workspace catalog로 관리하고, 프로젝트별 실행과 빌드 명령도 루트에서 사용할 수 있도록 구성했습니다.",
          },
          {
            type: "code",
            code: `repository/
├─ apps/
│  ├─ admin/
│  ├─ dashboard/
│  └─ mobile/
└─ packages/
   ├─ ui-kit/
   ├─ api-kits/
   ├─ config/
   └─ domains/`,
          },
          {
            type: "paragraph",
            text: "공통 기능을 한 번 수정해 여러 서비스에서 사용할 수 있게 됐고, 같은 로직을 프로젝트마다 복사해서 수정하는 작업을 줄였습니다.",
          },
        ],
      },
      {
        title: "2단계 — 기능 단위 구조 적용",
        blocks: [
          {
            type: "paragraph",
            text: "프로젝트마다 파일을 나누는 기준이 달라 필요한 코드를 찾기 어렵다는 피드백이 있었습니다.",
          },
          {
            type: "paragraph",
            text: "이를 정리하기 위해 FSD를 참고해 pages, widgets, features, entities, shared 단위로 역할을 나눴습니다.",
          },
          {
            type: "paragraph",
            text: "각 기능 내부는 필요에 따라 api, model, ui, lib 등으로 구분했습니다. 외부에서는 각 기능의 공개 경로를 통해 접근하도록 Public API도 구성했습니다.",
          },
          {
            type: "code",
            code: `src/
├─ app/
├─ pages/
├─ widgets/
├─ features/
├─ entities/
└─ shared/`,
          },
          {
            type: "paragraph",
            text: "파일의 역할과 위치는 이전보다 명확해졌지만, 모노레포의 패키지 경계와 FSD의 계층이 함께 적용되면서 구조가 빠르게 복잡해졌습니다.",
          },
        ],
      },
      {
        title: "확인한 문제",
        blocks: [
          {
            type: "paragraph",
            text: "패키지 수가 늘어나면서 공통 패키지 사이의 참조 관계도 함께 증가했습니다.",
          },
          {
            type: "paragraph",
            text: "오류가 발생하면 웹 서비스에서 여러 공통 패키지까지 따라가야 했고, 일부 기능에서는 순환 참조가 발생했습니다.",
          },
          {
            type: "paragraph",
            text: "공통 기능 하나의 변경이 여러 서비스에 영향을 줄 수 있어 확인해야 하는 범위도 넓어졌습니다.",
          },
          {
            type: "paragraph",
            text: "팀원마다 기능을 나누고 추상화하는 기준도 달랐습니다. 기능을 구현하는 것보다 정해진 구조에 맞춰 파일을 분리하는 데 시간이 더 드는 경우가 생겼습니다.",
          },
          {
            type: "paragraph",
            text: "재사용성은 높아졌지만, 모든 프로젝트를 하나의 저장소와 같은 계층으로 관리하는 방식이 현재 팀과 프로젝트 규모에 항상 맞는 것은 아니라고 판단했습니다.",
          },
        ],
      },
      {
        title: "3단계 — 프로젝트와 공통 기능 분리",
        blocks: [
          {
            type: "paragraph",
            text: "동료 개발자들의 피드백을 반영해 프로젝트 내부에는 필요한 계층만 남겼습니다.",
          },
          {
            type: "paragraph",
            text: "pages, widgets, features, shared 정도를 기준으로 사용하되 기능 규모가 작을 때는 불필요한 계층을 만들지 않았습니다.",
          },
          {
            type: "paragraph",
            text: "여러 프로젝트에서 실제로 사용하는 기능은 GitLab의 별도 저장소로 분리했습니다.",
          },
          {
            type: "code",
            code: `application/
└─ src/
   ├─ pages/
   ├─ widgets/
   ├─ features/
   ├─ shared/
   ├─ config/
   ├─ infra/
   ├─ providers/
   └─ router/

shared-packages/
├─ ui-kit/
├─ api-client-kit/
└─ domain-kit/`,
          },
          {
            type: "paragraph",
            text: "회사 전체에서 사용하는 기능, 특정 서비스 묶음에서 사용하는 기능, 하나의 프로젝트에서만 사용하는 기능을 구분했습니다.",
          },
        ],
      },
      {
        title: "구조 변경 흐름",
        blocks: [
          {
            type: "code",
            code: `프로젝트별 복사 구현
        ↓
pnpm 모노레포
        ↓
모노레포 + FSD
        ↓
프로젝트별 저장소 + 공통 패키지`,
          },
          {
            type: "list",
            items: [
              "모노레포로 중복 코드 관리",
              "FSD로 파일 역할과 접근 경로 정리",
              "계층과 패키지가 겹치며 복잡도 증가",
              "실제 공유 범위만 별도 패키지로 분리",
            ],
          },
        ],
      },
      {
        title: "변경 후",
        blocks: [
          {
            type: "paragraph",
            text: "프로젝트는 독립적으로 실행하고 수정할 수 있게 됐고, 실제로 공유해야 하는 기능만 별도 패키지로 관리했습니다.",
          },
          {
            type: "paragraph",
            text: "모노레포에서 발생하던 순환 참조와 넓은 디버깅 범위를 줄이면서 공통 코드의 재사용은 유지했습니다.",
          },
          {
            type: "paragraph",
            text: "새 프로젝트에 참여하는 개발자는 해당 프로젝트와 필요한 공통 패키지만 확인하면 되도록 범위를 줄였습니다.",
          },
        ],
      },
      {
        title: "판단",
        blocks: [
          {
            type: "paragraph",
            text: "처음부터 폴리레포가 정답이었던 것은 아닙니다.",
          },
          {
            type: "paragraph",
            text: "복사와 중복 수정 문제를 해결하기 위해 모노레포를 적용했고, 실제로 사용하며 발생한 문제를 확인한 뒤 현재 팀에 맞는 형태로 다시 조정했습니다.",
          },
          {
            type: "paragraph",
            text: "아키텍처의 변경마다 다양한 피드백을 받으면서 모든 중복을 제거하는 것보다, 팀이 추적할 수 있는 의존성 범위 안에서 공통화할 대상을 정하는 쪽이 더 중요하다고 판단했습니다.",
          },
          {
            type: "paragraph",
            text: "구조의 이름보다 변경 범위와 팀에서 추적할 수 있는 수준을 기준으로 판단했습니다.",
          },
        ],
      },
    ],
  },
  {
    id: "design-system",
    number: "03",
    title: "디자인 가이드 기반 토큰 및 사내 UI 컴포넌트 체계 구축",
    tags: [
      "Figma",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Headless UI",
      "Storybook",
    ],
    intro: [
      "디자이너로 일했던 경험을 바탕으로 프로젝트마다 달라지던 UI 기준을 먼저 디자인 가이드로 정리했습니다.",
      "색상, 간격, 크기, 타이포그래피, radius, 상태 표현 기준을 원시 팔레트와 의미 기반 토큰으로 나누고, Figma Styles·Variables와 CSS Custom Properties 기반 토큰으로 연결했습니다.",
      "이후 토큰을 기반으로 React 공통 UI 컴포넌트를 구현하고, Storybook에서 default, hover, focus, disabled, error, empty 등 실제 화면에서 필요한 상태를 확인할 수 있도록 구성했습니다. Storybook은 컴포넌트 문서뿐 아니라 회의 중 UI 공유, 기획 문서용 화면 캡처, 신규 프로젝트 UI 기준 확인에도 사용했습니다.",
    ],
    responsibilities: [
      "Figma Styles와 Variables 구성",
      "디자인 토큰과 테마 설계",
      "공통 UI 컴포넌트 구현",
      "컴포넌트 상태 기준 정리",
      "Storybook 문서화",
      "신규 프로젝트 적용",
    ],
    details: [
      {
        title: "배경",
        blocks: [
          {
            type: "paragraph",
            text: "프로젝트별 디자인 기준이 정리돼 있지 않아 같은 역할의 UI도 화면마다 색상, 간격, 크기가 달랐습니다.",
          },
          {
            type: "paragraph",
            text: "새 프로젝트를 시작할 때마다 기본 컴포넌트를 다시 만들었고, 비개발자가 AI 코드 도구를 이용해 프로토타입을 만드는 과정에서도 화면마다 결과의 차이가 컸습니다.",
          },
          {
            type: "paragraph",
            text: "디자인 파일과 코드가 서로 다른 값을 사용해 수정 사항을 맞추는 과정도 반복됐습니다.",
          },
        ],
      },
      {
        title: "디자인 토큰",
        blocks: [
          {
            type: "paragraph",
            text: "Figma의 Styles와 Variables를 이용해 색상, 간격, 크기, 모서리, 글자 크기를 정리했습니다.",
          },
          {
            type: "paragraph",
            text: "코드에서는 같은 기준을 CSS 변수로 구성했습니다.",
          },
          {
            type: "code",
            code: `Figma Variables
       ↓
Design Tokens
       ↓
CSS Variables
       ↓
React Components
       ↓
Storybook`,
          },
          {
            type: "paragraph",
            text: "기본 색상을 각 컴포넌트에 직접 입력하지 않고 의미 단위의 변수로 연결했습니다.",
          },
          {
            type: "paragraph",
            text: "라이트 모드와 다크 모드도 컴포넌트 코드를 변경하지 않고 의미 변수의 값만 교체하도록 구성했습니다.",
          },
        ],
      },
      {
        title: "UI 컴포넌트",
        blocks: [
          {
            type: "paragraph",
            text: "Headless UI를 기반으로 기본 동작과 접근성 처리를 사용하고, Tailwind CSS와 CVA를 이용해 컴포넌트의 형태를 관리했습니다.",
          },
          {
            type: "paragraph",
            text: "intent, variant, size, radius 등 반복되는 설정은 공통 prop으로 제공했습니다. 프로젝트에서 추가 설정이 필요한 경우 className, style, CSS 변수로 확장할 수 있게 했습니다.",
          },
          {
            type: "code",
            code: `<Button
  intent="primary"
  variant="solid"
  size="md"
  radius="md"
>
  저장
</Button>`,
          },
          {
            type: "paragraph",
            text: "프리셋을 제공하되 프로젝트별 요구 사항을 막지 않는 것을 기준으로 구현했습니다.",
          },
        ],
      },
      {
        title: "컴포넌트 상태 기준",
        blocks: [
          {
            type: "paragraph",
            text: "컴포넌트를 기본 화면만 보고 완료하지 않고, 실제 사용 중 발생하는 상태를 함께 확인했습니다.",
          },
          {
            type: "code",
            code: `Component   Default   Hover   Focus   Disabled   Error
Button      label     contrast outline reason     -
Input       value     border   ring    hint       message
Panel       title     -        order   -          empty`,
          },
          {
            type: "paragraph",
            text: "버튼은 hover와 focus 상태의 대비, 키보드 포커스 표시, 비활성화 시 시각적 구분을 확인했습니다.",
          },
          {
            type: "paragraph",
            text: "입력 요소는 기본값, 안내 문구, 오류 메시지와 포커스 표시가 서로 겹치지 않도록 정리했습니다.",
          },
          {
            type: "paragraph",
            text: "패널과 데이터 영역은 값이 없을 때 빈 화면으로 남기지 않고 empty 상태를 별도로 구성했습니다.",
          },
        ],
      },
      {
        title: "레이아웃 컴포넌트",
        blocks: [
          {
            type: "paragraph",
            text: "반복되는 대시보드 배치를 구성할 수 있도록 Grid 레이아웃 컴포넌트도 만들었습니다.",
          },
          {
            type: "paragraph",
            text: "HTML 테이블의 rowSpan, colSpan과 비슷한 방식으로 각 항목이 차지할 영역을 지정할 수 있게 했습니다.",
          },
          {
            type: "paragraph",
            text: "필요한 경우 시작 열과 시작 행을 직접 지정할 수 있고, 렌더링할 HTML 태그도 변경할 수 있도록 구성했습니다.",
          },
        ],
      },
      {
        title: "Storybook",
        blocks: [
          {
            type: "paragraph",
            text: "컴포넌트의 옵션과 상태를 Storybook에서 확인할 수 있도록 구성했습니다.",
          },
          {
            type: "paragraph",
            text: "버튼의 형태, 크기, 상태 등을 Controls에서 직접 바꿀 수 있고, 여러 옵션의 조합을 한 화면에서 비교할 수 있는 스토리도 추가했습니다.",
          },
          {
            type: "paragraph",
            text: "Storybook은 컴포넌트 문서 외에도 다음 용도로 사용했습니다.",
          },
          {
            type: "list",
            items: [
              "기획 및 UI 검토 회의",
              "기획 문서용 UI 캡처",
              "신규 개발자의 컴포넌트 확인",
              "별도 라우터를 만들지 않는 UI 확인",
              "프로젝트 인수인계",
              "키보드 포커스와 상태별 표시 확인",
            ],
          },
        ],
      },
      {
        title: "적용 결과",
        blocks: [
          {
            type: "paragraph",
            text: "확인 가능한 범위에서 개발자 3명 이상과 비개발자 3명 이상이 내부 프로젝트와 프로토타입 작업에 사용했습니다.",
          },
          {
            type: "paragraph",
            text: "도입 이후 진행한 신규 프로젝트에는 같은 토큰과 컴포넌트 구성을 적용했습니다.",
          },
          {
            type: "paragraph",
            text: "디자인 없이 추가된 화면이나 AI 코드 도구로 만든 프로토타입에서도 기존 화면과 크게 다른 UI가 만들어지는 경우를 줄였습니다.",
          },
        ],
      },
      {
        title: "판단",
        blocks: [
          {
            type: "paragraph",
            text: "디자인 가이드 기반 토큰 및 사내 UI 컴포넌트 체계 초기 구축하여 프로젝트에서 계속 사용할 수 있는 기준을 만드는 데 초점을 맞췄습니다.",
          },
          {
            type: "paragraph",
            text: "Figma, CSS 변수, React 컴포넌트, Storybook이 서로 다른 값을 관리하지 않도록 같은 구조로 연결했습니다.",
          },
          {
            type: "paragraph",
            text: "컴포넌트의 종류를 많이 만드는 것보다 상태가 달라져도 같은 판단 기준을 유지하는 쪽을 우선했습니다.",
          },
        ],
      },
    ],
  },
  {
    id: "legacy-modernization",
    number: "04",
    title: "레거시 React 프로젝트의 개발 환경 정비",
    tags: ["React", "JavaScript", "TypeScript", "Vite", "Vitest", "Storybook"],
    intro: [
      "CRA와 JavaScript를 사용하던 기존 프로젝트에 Vite와 TypeScript를 적용했습니다.",
      "테스트와 UI 확인 환경이 없던 프로젝트에는 Vitest와 Storybook을 추가하고, 지도·목록·상세 화면 사이의 상태 흐름도 함께 정리했습니다.",
    ],
    responsibilities: [
      "Vite 마이그레이션",
      "TypeScript 도입",
      "API 타입 정리",
      "Vitest 테스트 작성",
      "Storybook 구성",
      "화면 상태 흐름 개선",
    ],
    details: [
      {
        title: "배경",
        blocks: [
          {
            type: "paragraph",
            text: "기존 프로젝트는 CRA와 JavaScript를 사용하고 있었고, API 응답이나 컴포넌트 prop의 형태가 문서와 개발자의 기억에 의존했습니다.",
          },
          {
            type: "paragraph",
            text: "복잡한 기능을 확인할 자동화된 테스트가 없었으며, 공통 UI를 확인하기 위해 별도의 임시 페이지나 라우터를 만들어야 했습니다.",
          },
          {
            type: "paragraph",
            text: "GIS 화면에서는 지도, 목록, 팝업, 상세 패널이 같은 데이터를 서로 다른 형태로 관리해 상태를 추적하기 어려운 경우도 있었습니다.",
          },
        ],
      },
      {
        title: "작업",
        blocks: [
          {
            type: "paragraph",
            text: "CRA 기반 실행 환경을 Vite로 이전했습니다.",
          },
          {
            type: "paragraph",
            text: "TypeScript로 기반을 변경하는 동시에 백엔드 역시 Swagger를 도입하기로 결정되어, Swagger를 참고하여 API 요청과 응답 타입을 정리하고 서버 응답과 화면에서 사용하는 형태가 다른 경우 변환 단계를 분리했습니다.",
          },
          {
            type: "paragraph",
            text: "복잡도가 높은 기능에는 Vitest 테스트를 추가했습니다. 입력값에 따라 여러 상태로 나뉘거나 GIS 데이터 변환이 필요한 로직을 우선 대상으로 잡았습니다.",
          },
          {
            type: "paragraph",
            text: "Storybook을 추가해 컴포넌트를 실제 서비스 라우터와 분리해 확인할 수 있도록 했습니다.",
          },
          {
            type: "paragraph",
            text: "지도, 목록, 상세 화면이 함께 동작하는 기능에서는 선택된 객체와 서버 데이터, UI 표시 상태를 구분했습니다.",
          },
        ],
      },
      {
        title: "변경 후",
        blocks: [
          {
            type: "paragraph",
            text: "API 응답과 컴포넌트 prop의 불일치를 개발 단계에서 확인할 수 있게 됐습니다.",
          },
          {
            type: "paragraph",
            text: "복잡한 로직을 수정할 때 기존 동작이 깨지는 경우를 테스트에서 먼저 확인할 수 있게 됐습니다.",
          },
          {
            type: "paragraph",
            text: "UI 검토를 위해 임시 페이지를 추가하지 않고 Storybook에서 상태별 화면을 확인할 수 있게 됐습니다.",
          },
          {
            type: "paragraph",
            text: "지도, 목록, 상세 화면이 같은 객체를 선택하거나 해제할 때 발생하던 상태 불일치도 줄였습니다.",
          },
        ],
      },
      {
        title: "판단",
        blocks: [
          {
            type: "paragraph",
            text: "신규 프로젝트 부터 Vite, TypeScript를 적용하여 점진적으로 개발 환경을 개선해 나갔습니다.",
          },
        ],
      },
    ],
  },
];

export const archiveItems: ArchiveItem[] = [
  //   {
  //     id: "single-flight",
  //     title: "API 클라이언트와 토큰 갱신 싱글 플라이트",
  //     tags: ["TypeScript", "Fetch API", "Authentication"],
  //     intro: [
  //       "여러 API 요청이 동시에 인증 만료 응답을 받았을 때 토큰 갱신 요청이 중복 실행되지 않도록 싱글 플라이트를 적용했습니다.",
  //       "먼저 시작된 토큰 갱신 작업의 Promise를 저장하고, 같은 인증 설정을 사용하는 이후 요청은 새로운 갱신 요청을 보내지 않고 기존 Promise를 기다리도록 구성했습니다.",
  //     ],
  //     githubUrl:
  //       "https://github.com/pep-pearl/joo-code/blob/main/src/api-client/README.md",
  //     details: [
  //       {
  //         title: "동작 흐름",
  //         blocks: [
  //           {
  //             type: "code",
  //             code: `여러 API 요청
  //       ↓
  // 동시에 인증 만료 확인
  //       ↓
  // 최초 요청만 토큰 갱신 시작
  //       ↓
  // 나머지 요청은 같은 Promise 대기
  //       ↓
  // 갱신 완료 후 각 요청 재실행`,
  //           },
  //         ],
  //       },
  //       {
  //         title: "배경",
  //         blocks: [
  //           {
  //             type: "paragraph",
  //             text: "한 화면에서 여러 API를 동시에 호출하는 경우 access token이 만료되면 각 요청이 거의 같은 시점에 인증 오류를 받을 수 있습니다.",
  //           },
  //           {
  //             type: "paragraph",
  //             text: "각 요청이 독립적으로 refresh API를 실행하면 토큰 갱신 요청이 중복됩니다. refresh token을 회전하는 서버에서는 먼저 실행된 요청 이후 나머지 갱신 요청이 실패할 수도 있습니다.",
  //           },
  //         ],
  //       },
  //       {
  //         title: "구현",
  //         blocks: [
  //           {
  //             type: "paragraph",
  //             text: "진행 중인 토큰 갱신 작업을 Map에 저장했습니다.",
  //           },
  //           {
  //             type: "paragraph",
  //             text: "단순히 하나의 전역 Promise만 공유하지 않고 다음 설정을 조합해 갱신 작업의 키를 만들었습니다.",
  //           },
  //           {
  //             type: "list",
  //             items: [
  //               "API 기본 주소",
  //               "refresh API 경로",
  //               "인증 방식",
  //               "access token 저장 키",
  //               "refresh token 저장 키",
  //               "refresh token 전달 방식",
  //             ],
  //           },
  //           {
  //             type: "paragraph",
  //             text: "같은 키를 사용하는 갱신 작업이 이미 존재하면 해당 Promise를 반환합니다.",
  //           },
  //           {
  //             type: "paragraph",
  //             text: "작업이 없을 때만 refresh API를 호출하고, 완료되거나 실패하면 저장된 Promise를 제거했습니다.",
  //           },
  //           {
  //             type: "paragraph",
  //             text: "이전 작업이 뒤늦게 종료되면서 새 작업을 삭제하지 않도록 현재 Map에 저장된 Promise와 동일한지도 확인했습니다.",
  //           },
  //           {
  //             type: "paragraph",
  //             text: "토큰 갱신이 끝나면 인증 오류가 발생했던 기존 요청을 한 번 다시 실행합니다.",
  //           },
  //         ],
  //       },
  //       {
  //         title: "인증 환경 분리",
  //         blocks: [
  //           {
  //             type: "paragraph",
  //             text: "운영 환경에서는 Secure HttpOnly Cookie를 사용할 수 있고, 개발 환경에서는 localStorage의 Bearer token을 사용할 수 있도록 설정을 분리했습니다.",
  //           },
  //           {
  //             type: "paragraph",
  //             text: "refresh token을 cookie로 전달할지 request body에 포함할지, 응답에서 토큰을 읽는 경로가 무엇인지도 클라이언트 설정으로 변경할 수 있게 했습니다.",
  //           },
  //           {
  //             type: "paragraph",
  //             text: "인증 세션 만료와 사용자 비활성화는 별도 오류로 구분하고, 저장된 토큰 제거와 후속 처리를 외부 콜백으로 연결했습니다.",
  //           },
  //         ],
  //       },
  //       {
  //         title: "함께 구성한 기능",
  //         blocks: [
  //           {
  //             type: "list",
  //             items: [
  //               "GET, POST, PUT, PATCH, DELETE 메서드",
  //               "요청 및 응답 제네릭 타입",
  //               "query parameter 직렬화",
  //               "JSON, FormData 요청 처리",
  //               "요청 timeout과 AbortSignal 연결",
  //               "공통 API 오류",
  //               "인증 만료 후 요청 재실행",
  //               "cookie와 localStorage 인증 설정",
  //               "외부 fetch 구현 주입",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         title: "판단",
  //         blocks: [
  //           {
  //             type: "paragraph",
  //             text: "싱글 플라이트를 단순한 전역 boolean으로 처리하면 대기 중인 요청이 갱신 완료 시점을 알기 어렵습니다.",
  //           },
  //           {
  //             type: "paragraph",
  //             text: "여러 API 클라이언트를 사용할 때 서로 관련 없는 인증 요청까지 하나로 묶일 수도 있습니다.",
  //           },
  //           {
  //             type: "paragraph",
  //             text: "진행 중인 Promise 자체를 공유하고 인증 설정별로 키를 분리하는 방식으로 구성했습니다.",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  {
    id: "openlayers-jsx",
    title: "OpenLayers JSX 인터페이스",
    tags: ["React", "TypeScript", "OpenLayers"],
    intro: [
      "사내 프로젝트에서 React와 OpenLayers를 함께 사용할 때 반복되는 초기화와 동기화 작업을 줄이기 위해 JSX 형태의 인터페이스를 만들고 있습니다.",
      "React에 익숙한 개발자는 지도 객체를 JSX와 prop으로 구성할 수 있고, OpenLayers에 익숙한 개발자는 ref를 통해 원본 객체에 접근할 수 있도록 했습니다.",
      "외부 API는 React 컴포넌트와 비슷하게 제공하지만, 내부에서는 모든 OpenLayers 상태를 React 상태로 복제하지 않습니다.",
      "기본 동작만 제공하는 Headless 구성과 프로젝트에서 바로 사용할 수 있는 Preset 구성을 함께 제공합니다.",
    ],
    githubUrl: "https://github.com/pep-pearl/olsx",
  },
  {
    id: "code-index",
    title: "코드 탐색을 위한 인덱스 구성",
    intro: [
      "비개발자가 AI 코드 도구를 이용해 프로토타입을 수정할 때 관련 파일을 찾는 과정에서 불필요한 탐색이 반복됐습니다.",
      "초기에는 각 파일에 긴 설명을 추가했지만, 파일 수가 늘면서 문서와 실제 코드가 달라질 가능성도 커졌습니다.",
      "현재는 프로젝트의 주요 경로와 역할을 목차 형태로 정리하고, 검색에 사용할 수 있는 JSON 매핑을 함께 구성했습니다.",
      "인덱스는 코드의 정답이 아니라 탐색 범위를 줄이는 힌트로만 사용하도록 했습니다. 파일이 이동하거나 삭제되면 실제 구조와의 불일치를 확인하는 과정도 추가했습니다.",
    ],
    githubUrl: "https://github.com/pep-pearl/joo-skills",
  },
  {
    id: "eslint-boundaries",
    title: "ESLint 경계 규칙",
    tags: ["ESLint", "TypeScript", "FSD"],
    intro: [
      "프로젝트 구조를 문서로만 안내하면 시간이 지나면서 import 규칙이 달라지는 문제가 있었습니다.",
      "ESLint의 boundaries, import, import-x 플러그인을 이용해 계층 간 import 방향과 패키지 경계를 검사하도록 구성했습니다.",
    ],
    details: [
      {
        title: "검사 규칙",
        blocks: [
          {
            type: "list",
            items: [
              "하위 계층에서 상위 계층을 참조하지 않기",
              "다른 기능의 내부 파일을 직접 참조하지 않기",
              "앱은 패키지를 사용할 수 있지만 패키지는 앱을 참조하지 않기",
              "깊은 상대 경로 대신 공개 경로나 alias 사용하기",
              "디버깅 코드와 허용되지 않은 console 사용 확인",
            ],
          },
          {
            type: "paragraph",
            text: "Storybook, 설정 파일, 자동 생성 파일에는 일반 구현 코드와 다른 기준을 적용했습니다.",
          },
          {
            type: "paragraph",
            text: "규칙을 모든 파일에 동일하게 강제해 작업을 방해하지 않도록 예외 범위를 나눴습니다.",
          },
        ],
      },
    ],
  },
];

export const skillGroups = [
  {
    label: "Main",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Vite",
      "OpenLayers",
    ],
  },
  {
    label: "UI",
    items: [
      "Tailwind CSS",
      "styled-components",
      "Headless UI",
      "CVA",
      "Storybook",
      "Figma",
    ],
  },
  {
    label: "State & Data",
    items: ["TanStack Query", "Jotai", "Zustand", "Fetch API"],
  },
  {
    label: "Test & Tooling",
    items: ["Vitest", "pnpm", "ESLint", "Git", "GitLab", "Electron"],
  },
  {
    label: "Working Knowledge",
    items: ["Java", "Spring Boot", "PostgreSQL", "MyBatis", "Linux"],
  },
];

export const experienceTasks = [
  "React 기반 데이터 중심 UI 대시보드 개발",
  "OpenLayers 지도 기능 구현",
  "지도·목록·상세·필터 상태 연결",
  "실시간·주기 갱신 데이터 처리",
  "공통 UI 컴포넌트와 디자인 토큰 구축",
  "프론트엔드 아키텍처 구성과 조정",
  "기존 프로젝트의 Vite·TypeScript 전환",
  "Vitest·Storybook 도입",
  "API 클라이언트와 인증 흐름 구현",
  "사내 프로토타입 개발 환경 지원",
];

export const aboutParagraphs = [
  "3년차 프론트엔드 개발자입니다.",
  "이전에는 약 2년간 웹 에이전시에서 웹 디자인 업무를 했습니다. 해당 기간의 경험을 살려, 디자인 시스템과 UI 컴포넌트를 만들거나 기획·디자인 내용을 코드로 옮길 때 활용하고 있습니다.",
  "현재 회사에서는 데이터 중심 UI, 대시보드, 솔루션, 데스크톱 애플리케이션, 랜딩 페이지 등의 프론트엔드 작업을 담당했습니다.",
  "대시보드, 모니터링, 통계, 지도 기반 화면처럼 정보량이 많고 여러 상태가 연결되는 데이터 중심 UI를 주로 다뤘습니다.",
  "프로젝트에서는 프론트엔드 개발을 주도하고 주요 기능의 구조와 구현을 맡았습니다. 혼자 진행하거나 소규모 팀 위주로 프로젝트를 진행하였으며, 이 페이지에 정리한 기능은 직접 설계하고 구현했습니다.",
  "공통 코드를 관리하기 위해 모노레포와 기능 단위 구조를 적용했고, 실제 운영 과정에서 복잡도가 증가하는 문제도 겪었습니다.",
  "처음 선택한 구조를 유지하기보다 팀이 사용하는 과정에서 발생한 문제를 확인하고 구조를 다시 단순화했습니다. 현재는 모든 프로젝트를 하나의 형태로 맞추기보다 공통으로 관리할 코드와 프로젝트 안에 남겨야 할 코드를 구분하고 유연하게 작업하고 있습니다.",
  "GIS 화면에서는 OpenLayers와 React의 상태가 중복되지 않도록 역할을 나누고, 데이터가 갱신되는 범위와 UI가 다시 그려지는 범위를 분리하는 방식으로 작업하고 있습니다.",
  "지도, 목록, 팝업, 상세 패널과 필터가 연결되는 경우에는 각 화면이 별도의 원본 상태를 갖지 않도록 기준이 되는 상태를 정리합니다.",
  "API 요청에서는 인증, 오류, timeout과 같은 반복 처리를 공통 클라이언트로 분리하고, 여러 요청이 동시에 인증 만료를 확인해도 토큰 갱신이 중복되지 않도록 구성했습니다.",
];
