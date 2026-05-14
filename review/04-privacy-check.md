# Privacy Check

## Summary

Critical privacy issue는 발견되지 않았다.

현재 사이트 구현은 Peppearl 중심 public identity를 유지하고 있으며, 전화번호, 얼굴 사진, 업무 화면 이미지, Figma 캡처, 구체적 성과 수치, 내부 서버/API endpoint, 계정/토큰 정보, `lh_dmp` 실제 경로/파일명을 사이트 본문에 노출하지 않는다.

## Checked Items

| Item | Result | Notes |
| --- | --- | --- |
| 전화번호 | Pass | `src`, `public`, `index.html`에서 전화번호 패턴이나 `tel:` 링크 없음 |
| 얼굴 사진 | Pass | 얼굴 사진 없음 |
| 업무 화면 이미지 | Pass | 실제 업무 화면 이미지 없음. diagram/text로 대체 |
| Figma 캡처 | Pass | Figma 캡처 없음. 문구상 "사용하지 않는다"는 설명만 있음 |
| 구체적인 성과 수치 | Pass | 성과 %, 감소/증가 수치 없음. `3년` 경력 표현만 사용 |
| 내부 경로/파일명 | Pass for site | `src`/public site implementation에는 `lh_dmp` 실제 경로 없음 |
| 내부 서버/API/토큰 정보 | Pass | 실제 endpoint, token value, server URL 없음 |
| 과장 표현 | Pass | "최고", "압도적", "완벽" 등 과장된 자기 PR 없음 |
| dog photo | Pass | About의 작은 profile visual로 1회 사용 |
| PDF | Pass | `public/이혜주_FrontendEngineer.pdf`로 배치, 사용자 공개 승인 전제 |

## Site Implementation Findings

- `src/content/projects.ts`의 token refresh 설명은 "endpoint, storage key, token 값을 노출하지 않는다"는 안전 경계 문구와 pseudo flow 수준이다.
- `401`, `token-updated` 같은 개념어는 보안 구현 세부가 아니라 흐름 설명으로 사용된다.
- `lh_dmp`는 구현 코드에 직접 노출되지 않는다.
- Blog, LinkedIn, GitHub는 모두 secondary link 또는 Related Writing 수준으로만 사용된다.

## Repository Hygiene Note

`scratch/replace.mjs`는 사이트 구현에는 포함되지 않지만, untracked 임시 스크립트로 남아 있으며 로컬 절대 경로를 포함한다. 공개 저장소에 커밋하지 않는 것이 좋다.

## External Link Spot Check

- Blog root는 접근 가능했고 `FE 아키텍처를 고민하며` 글도 목록에서 확인됐다.
- GitHub repository URL은 접근 가능했다.
- LinkedIn은 비로그인/크롤러 환경에서 완전 확인이 어려웠으므로 사용자 브라우저에서 수동 확인이 필요하다.
