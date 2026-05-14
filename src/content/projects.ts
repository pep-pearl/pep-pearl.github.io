import type { WorkCase } from './types'

export const workCases: WorkCase[] = [
  {
    caseNumber: 'Case 01',
    title: 'Design System & Frontend Architecture',
    memoryLine: '복잡한 업무 시스템의 화면, 데이터, 도메인 로직을 유지보수 가능한 프론트엔드 구조와 UI 기준으로 정리했습니다.',
    summary:
      '복잡한 재난관리 플랫폼에서 화면과 기능이 늘어날수록 UI 일관성과 코드 구조의 기준이 중요해졌습니다.',
    problem:
      '도메인 로직과 UI 구현이 섞이면 유지보수 비용이 커지고, 비슷한 화면 패턴이 반복될수록 컴포넌트 상태와 접근성 기준이 흔들릴 수 있었습니다.',
    role:
      'UI/UX 디자인과 프론트엔드 아키텍처 설계에 참여하며 화면 구조, 컴포넌트 기준, FSD 기반 폴더 구조, pnpm workspace 흐름을 함께 고려했습니다.',
    decisions: [
      'Feature-Sliced Design을 기준으로 기능, 엔티티, 공용 UI의 경계를 나눴습니다.',
      'Monorepo + FSD + Public API 패턴으로 참조 지점과 변경 범위를 명확히 했습니다.',
      'API 응답 변화가 UI 전체로 번지지 않도록 query/mapper 단계에서 데이터 형태를 정리했습니다.',
      'Headless UI와 TailwindCSS를 접근성과 일관성 기준을 세우는 기반으로 활용했습니다.',
    ],
    implementation: [
      '실제 경로명 대신 feature, entity, shared, public API로 일반화한 추상 구조를 보여줍니다.',
      'component state matrix와 data boundary diagram으로 업무 화면 캡처를 대체합니다.',
      '코드 전체나 내부 폴더명은 노출하지 않고 public-safe diagram만 사용합니다.',
    ],
    learned:
      '디자인 시스템은 컴포넌트 모음만으로 충분하지 않고, 화면, 상태, 도메인 로직, 접근성, 패키지 경계가 같은 기준으로 연결되어야 유지보수 가능한 시스템이 됩니다.',
    tags: ['FSD', 'Monorepo', 'Public API', 'Data Boundary', 'Component States'],
    visuals: [
      {
        type: 'relationship',
        title: 'Public-safe architecture map',
        description: '실제 경로/파일명 없이 경계와 참조 흐름만 추상화합니다.',
        groups: [
          { label: 'App', items: ['routing shell', 'page composition'] },
          { label: 'Feature', items: ['business actions', 'screen flow'] },
          { label: 'Entity', items: ['domain model', 'typed shape'] },
          { label: 'Shared', items: ['ui primitives', 'tokens'] },
          { label: 'Boundary', items: ['query mapper', 'public API'] },
        ],
      },
      {
        type: 'matrix',
        title: 'Component state matrix',
        description: '반복 UI를 상태와 접근성 기준으로 검토하는 방식입니다.',
        columns: ['Default', 'Hover', 'Focus', 'Disabled'],
        rows: [
          { label: 'Button', values: ['label', 'contrast', 'outline', 'reason'] },
          { label: 'Input', values: ['value', 'hint', 'ring', 'message'] },
          { label: 'Dialog', values: ['title', 'overlay', 'return focus', 'blocked'] },
        ],
      },
    ],
    relatedWriting: [
      {
        label: 'Blog에서 FE 아키텍처 관련 글 보기',
        href: 'https://jinjoo648.tistory.com/',
      },
    ],
  },
  {
    caseNumber: 'Case 02',
    title: 'GIS / Disaster Management Platform',
    memoryLine: 'GIS 기반 업무 시스템에서 지도, 팝업, 목록, 상세, 필터가 맞물리는 흐름을 예측 가능한 구조로 정리했습니다.',
    summary:
      '지도 기반 업무 시스템에서는 단순한 화면 구현보다 지도 상태, 팝업, 목록, 상세 패널, 필터가 맞물리는 흐름을 안정적으로 설계하는 일이 중요했습니다.',
    problem:
      'React 컴포넌트 트리와 지도 라이브러리 렌더링 흐름이 다르게 움직이고, 필터와 상세 패널이 서로 영향을 주어 상태 설계가 복잡해질 수 있었습니다.',
    role:
      '프론트엔드 개발 환경 고도화와 GIS 서비스 UI 개선에 참여하며 Vite migration, TypeScript 도입, API spec 정리, GIS popup 렌더링 흐름 개선을 다뤘습니다.',
    decisions: [
      'TypeScript와 API spec으로 데이터 형태와 화면 상태를 더 명확히 했습니다.',
      'GIS 팝업은 createPortal 관점으로 지도 렌더링 영역과 React 상태 사이의 경계를 정리했습니다.',
      '지도, 목록, 상세, 필터 상태가 맞물릴 때 zustand, useRef, useEffect를 Escape Hatch로 활용했습니다.',
      'token refresh 경합은 Case 02 내부의 짧은 pseudo flow로만 표현합니다.',
    ],
    implementation: [
      'map/list/detail/filter state flow와 GIS popup render boundary diagram으로 설명합니다.',
      'token refresh race condition은 endpoint, storage key, token 값을 노출하지 않는 single-flight pseudo flow로만 다룹니다.',
      '실제 지도 데이터, 업무 화면, API client 코드는 사용하지 않습니다.',
    ],
    learned:
      'GIS 기반 UI는 지도를 그리는 기술보다 사용자가 어떤 순서로 정보를 찾고 판단하는지가 더 중요하며, 지도 상태와 React 상태의 경계를 명확히 해야 예측 가능한 인터페이스가 됩니다.',
    tags: ['GIS UI', 'TypeScript', 'createPortal', 'State Flow', 'Single-flight Note'],
    visuals: [
      {
        type: 'flow',
        title: 'Map / list / detail flow',
        description: '지도 중심 업무 UI에서 상태가 연결되는 흐름입니다.',
        steps: ['Filter criteria', 'Map layer state', 'Popup boundary', 'List selection', 'Detail panel'],
      },
      {
        type: 'flow',
        title: 'Token refresh pseudo flow',
        description: '보안 구현 세부 없이 경합 처리의 판단 흐름만 요약합니다.',
        steps: [
          '401 또는 token 만료 감지',
          'refresh 진행 여부 확인',
          'leader tab이 refresh 수행',
          'token-updated 신호 전달',
          '대기 탭은 원래 요청 재시도',
        ],
      },
    ],
  },
  {
    caseNumber: 'Case 03',
    title: 'AI Agent Workflow for Frontend Development',
    memoryLine: 'AI Agent를 코드 생성기가 아니라 사람이 검토 가능한 기준과 산출물을 만드는 구조화된 작업 파트너로 사용합니다.',
    summary:
      'AI Agent를 활용해 기획, 디자인, 개발, 리뷰 단계를 나누고 각 단계마다 rule과 prompt를 정리하는 작업 방식을 실험했습니다.',
    problem:
      'AI 도구를 기준 없이 사용하면 결과물의 일관성과 검증 가능성이 떨어지고, 기획과 개발, 리뷰 단계가 섞이면 공개 경계가 흐려질 수 있었습니다.',
    role:
      'AGENTS.md, phase rules, prompt templates, review checklist를 통해 AI Agent가 참고할 기준과 사용자 승인 지점을 명확히 하는 흐름을 구성했습니다.',
    decisions: [
      'Interview -> Seed -> Execute -> Evaluate -> Evolve 흐름으로 프로젝트를 다룹니다.',
      '각 주요 단계는 Research -> Plan -> Hold -> Implement -> Review를 따릅니다.',
      '기획, 디자인, 개발, 리뷰 단계별 rule과 prompt를 분리합니다.',
      '단계 전환 전 Hold를 두어 사람이 최종 판단하도록 합니다.',
    ],
    implementation: [
      '이 저장소의 AGENTS.md, rules, prompts, docs 구조를 공개 가능한 근거로 사용합니다.',
      'workflow timeline과 phase gate diagram으로 AI가 사람 판단을 대체하지 않는다는 점을 보여줍니다.',
      '비공개 업무 프롬프트나 생산성 수치는 사용하지 않습니다.',
    ],
    learned:
      'AI Agent를 잘 쓰려면 더 많은 지시를 한 번에 주는 것보다, 단계별 기준과 검토 지점을 분리하고 사람이 판단해야 할 공개 범위를 문서로 남기는 편이 중요합니다.',
    tags: ['AGENTS.md', 'Rules', 'Prompts', 'Hold Gate', 'Human Review'],
    visuals: [
      {
        type: 'flow',
        title: 'Human-in-the-loop workflow',
        description: '구현보다 먼저 검토 가능한 기준을 세우는 단계 흐름입니다.',
        steps: ['Deep Research', 'Strategic Planning', 'Human Review', 'Implementation', 'Verification'],
      },
      {
        type: 'relationship',
        title: 'Rules / prompts / review map',
        description: 'AI Agent가 참고하는 문서 구조와 사람의 승인 지점을 분리합니다.',
        groups: [
          { label: 'AGENTS.md', items: ['purpose', 'privacy', 'phase rules'] },
          { label: 'rules', items: ['content', 'design', 'development', 'review'] },
          { label: 'prompts', items: ['planning', 'design', 'development'] },
          { label: 'review gate', items: ['human approval', 'open questions'] },
        ],
      },
    ],
  },
]
