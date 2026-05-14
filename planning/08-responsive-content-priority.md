# Responsive Content Priority

반응형 설계의 핵심은 같은 정보를 억지로 모두 보여주는 것이 아니라, 각 화면 폭에서 읽기 우선순위를 유지하는 것이다.

## Mobile

### 먼저 보여야 하는 정보

1. Public identity: Peppearl
2. Role: Frontend Engineer
3. Headline: 제품의 완성도를 높이는 프론트엔드 개발자
4. 짧은 hero description
5. PDF 이력서 다운로드
6. 이메일로 연락하기
7. Core Strengths 3개

### 접거나 축약해도 되는 정보

- 긴 About 두 번째 문단
- Experience의 세부 설명
- Selected Work의 긴 implementation 설명
- Tech Stack의 전체 목록
- secondary links 일부
- Related Writing 목록

### CTA 위치

- Hero 안에 PDF와 Email CTA를 둔다.
- Selected Work 보기 CTA는 hero 보조 CTA로 둔다.
- Contact section에서 Email CTA를 반복한다.

### Selected Work 카드

- 1열로 쌓는다.
- 각 카드는 title, one-line memory, key decisions 2-3개만 먼저 보여준다.
- 자세한 내용은 펼침 또는 상세 블록으로 처리할 수 있다.
- Related Writing은 모바일에서 접거나 카드 하단의 작은 텍스트 링크로 축약한다.

### 긴 설명 압축 방식

- 문단 대신 짧은 bullets를 사용한다.
- `Context`, `Problem`, `Decision` 중 핵심 2-3개만 노출한다.
- `What I Learned`는 한 문장으로 줄인다.

## Tablet

### 먼저 보여야 하는 정보

1. Hero와 CTA
2. About summary
3. Core Strengths
4. Selected Work cards
5. Experience timeline

### 접거나 축약해도 되는 정보

- Tech Stack 전체 목록은 그룹별 accordion 또는 compact grid 가능
- 케이스별 implementation detail은 1-2문장으로 축약 가능

### CTA 위치

- Hero CTA는 가로 배치 가능
- Resume CTA를 중간 이후에 반복
- Contact section에서 full CTA 제공

### Selected Work 카드

- 2열 배치 가능
- 가장 중요한 Case 01은 더 넓게 배치할 수 있다.
- Case 03은 workflow diagram preview와 함께 보여줄 수 있다.

## Desktop

### 먼저 보여야 하는 정보

1. Hero headline, description, CTA
2. About와 profile visual
3. Core Strengths 3개
4. Selected Work 3개
5. Experience와 Tech Stack

### 더 자세히 보여줄 수 있는 정보

- 각 case의 Context, Problem, Decisions, Implementation
- architecture diagram
- component state matrix
- workflow timeline
- technology group detail

### CTA 위치

- Hero primary CTA group
- Selected Work 이후 resume/contact bridge
- Resume section
- Contact section

### Selected Work 카드

- 3열 grid 또는 Case 01 강조 + Case 02/03 보조 배치 가능
- 각 카드에는 one-line memory와 key decisions를 넣는다.
- 상세 설명은 카드 아래 확장 영역 또는 section 내부 detail block으로 둔다.

## 공통 반응형 원칙

- 전화번호는 어떤 화면에도 노출하지 않는다.
- `dog_photo.png`는 작은 보조 이미지로만 사용한다.
- GitHub는 secondary link로만 유지한다.
- Blog는 secondary link 또는 Related Writing으로만 유지한다.
- 업무 화면 이미지와 Figma 캡처는 사용하지 않는다.
- 텍스트가 버튼이나 카드 밖으로 넘치지 않게 문장 길이를 관리한다.
- 정보 순서는 모바일에서도 Hero -> Strengths -> Experience/Work -> Resume/Contact 흐름을 유지한다.
