# Comment Resolution Log

이 문서는 `[comment]`로 추가된 사용자 확인 사항을 정리한 로그다. 이후 작업자는 같은 질문을 반복하지 말고 이 파일과 `content/work/approved-case-evidence.md`를 우선 참고한다.

## Resolved Decisions

| Topic | Resolution | Use In |
| --- | --- | --- |
| FSD / monorepo 경험 | 실제 적용 프로젝트 경험 기반. 사용 가능. | Case 01 |
| FSD 코드 제공 | 코드는 제공 어려움. `lh_dmp` 폴더 구조는 공개 가능. | Case 01 diagram |
| 데이터 변경 방어 계층 | 실제 적용 프로젝트 경험 기반. Monorepo + FSD + Public API 목적에 포함. | Case 01 |
| MFE | 실제 도입 경험 아님. 구조 검토 및 학습 회고로만 사용. | Case 01 보조 |
| FE 아키텍처 블로그 | 개별 접근 가능. Related Writing으로 사용 가능. | Case 01 |
| About 문장 | 구조와 기준부터 정리하는 방식 추가 승인. | About |
| GIS 상태 변경 범위 | 실제 적용. `zustand`, `useRef`, `useEffect`를 Escape Hatch로 활용한 관점 포함. | Case 02 |
| createPortal / GIS popup 코드 | 현재 제공 불가. diagram 중심 표현. | Case 02 |
| token race condition | 실제 업무 경험. 공개 가능한 수준에서 사용 가능. | Case 02 |
| token race code | 전체 공개하지 않음. 흐름과 pseudo code 중심. | Case 02 |
| token race 배치 | 별도 대표 케이스나 독립 페이지로 분리하지 않음. Case 02 내부의 implementation evidence로 사용하고, 필요 시 접을 수 있는 technical note 카드로 표현. | Case 02 |
| AI workflow | 자사 R&D 공개 예시는 없음. 현재 포트폴리오 제작 과정 자체를 근거로 사용. | Case 03 |
| AI 관련 블로그 | 없음. 블로그 대신 AGENTS/rules/prompts/planning 문서를 근거로 사용. | Case 03 |
| Human review | 매우 중요. AI가 대신한다는 인상을 피하고 인간 검수/검토/승인을 강조. | Case 03 |
| interview file | `interview-practice.md`로 정리됨. | Mining source |

## Remaining Decisions

- Case 01 Related Writing의 정확한 permalink는 구현 전 최종 확인한다.

## Applied Documents

- `planning/03-section-outline.md`
- `planning/05-selected-work-plan.md`
- `planning/06-page-flow.md`
- `planning/07-cta-strategy.md`
- `planning/08-responsive-content-priority.md`
- `content/resume/resume.site.md`
- `content/work/selected-work-source.md`
- `content/mining/content-mining-summary.md`
- `content/mining/planning-update-suggestions.md`
- `content/mining/portfolio-usage-plan.md`

## Privacy Notes

- 구체적인 성과 수치는 계속 공개하지 않는다.
- 업무 화면과 Figma 캡처는 사용하지 않는다.
- token refresh 코드는 보안/인증 구조를 지나치게 노출하지 않도록 diagram과 pseudo code 중심으로 사용한다.
- `lh_dmp` 폴더 구조 자체는 공개 가능하다. 다만 특정 경로, 파일명, 구조를 실제 사이트에 인용할 때는 민감한 회사 정보가 드러나지 않도록 사용자에게 한 번 확인받는다.
