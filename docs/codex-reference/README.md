# Codex Reference

이 폴더는 이후 Codex 작업자가 가장 먼저 참고해야 하는 요약 진입점이다. 이 프로젝트는 바로 개발하는 저장소가 아니라, 기획과 검토를 거쳐 커리어 랜딩페이지를 만드는 spec-first 프로젝트다.

## 먼저 읽을 파일

작업을 시작하기 전 아래 순서로 읽는다.

1. `../../AGENTS.md`
2. `../../README.md`
3. `../00-project-purpose.md`
4. `../01-codex-context-map.md`
5. `../02-source-of-truth.md`
6. `../03-privacy-and-publication-boundaries.md`
7. `../04-content-strategy.md`
8. `../../content/resume/resume.codex.md`
9. `../../content/work/selected-work-source.md`

공개 사이트 문구를 작성할 때는 `../../content/resume/resume.site.md`를 우선한다.

## 진행 순서

기본 순서는 아래와 같다.

```txt
기획 -> 디자인 -> 개발 -> 리뷰
```

각 단계에서는 다음 흐름을 지킨다.

```txt
Research -> Plan -> Hold -> Implement -> Review
```

`Hold`는 단계 전환 전 짧은 검토 요약을 만들고 사용자 승인 또는 명시적 계속 지시를 기다리는 것을 뜻한다.

## 하지 말아야 할 것

- 사용자가 요청하지 않았는데 바로 React UI를 구현하지 않는다.
- 실명, 전화번호, 얼굴 사진을 공개하지 않는다.
- 업무 화면 이미지나 Figma 캡처를 임의로 사용하지 않는다.
- 검증되지 않은 성과 수치를 만들지 않는다.
- 회사명, 프로젝트 세부 정보, 코드 스니펫의 공개 가능 여부를 추정하지 않는다.
- GitHub를 사이트의 주인공으로 만들지 않는다.
- 포트폴리오 학원 느낌이나 공공/SI 프로젝트 목록처럼 보이게 만들지 않는다.
- v1을 무리하게 다중 페이지로 확장하지 않는다.

## 사용자 확인이 필요한 지점

- 기획에서 디자인으로 넘어가기 전
- 디자인에서 개발로 넘어가기 전
- 개발에서 배포로 넘어가기 전
- 공개 범위가 애매한 개인정보를 사용하기 전
- 업무 이미지, Figma 이미지, 성과 수치, 실명, PDF 이력서를 공개하기 전
- GitHub Pages가 user site인지 project site인지 설정하기 전

## 불확실할 때

불확실한 사실은 임의로 채우지 말고 `../06-open-questions.md`에 추가한다. 작은 안전한 다음 단계가 가능하면 그 단계만 진행하고, 공개 위험이 있는 판단은 사용자에게 확인한다.
