import { useEffect, useMemo, useState } from "react";
import type {
  ArchiveItem,
  ContentBlock,
  DetailSection,
  ShowcaseItem,
  WorkItem,
} from "./content/portfolio";
import {
  aboutParagraphs,
  archiveItems,
  experienceTasks,
  links,
  skillGroups,
  workItems,
} from "./content/portfolio";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

const externalLinks = [
  { label: "GitHub", href: links.github },
  { label: "Blog", href: links.blog },
  { label: "LinkedIn", href: links.linkedin },
];

function MaterialIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={`material-symbols-outlined material-icon ${className}`.trim()}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

function DotMark() {
  return (
    <span className="dot-mark" aria-hidden="true">
      <span />
    </span>
  );
}

function Header({ activeSection }: { activeSection: string }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand-lockup">
          <a className="wordmark" href="#top" aria-label="페이지 상단으로 이동">
            <span>HYEJOO</span>
            <DotMark />
            <span>LEE</span>
          </a>
          <a
            className="brand-handle"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            @peppearl
          </a>
        </div>

        <nav className="primary-nav" aria-label="주요 메뉴">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            return (
              <a
                className={activeSection === id ? "active" : ""}
                href={item.href}
                key={item.href}
              >
                <span className="nav-dot" aria-hidden="true" />
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="header-actions">
          <a className="header-resume" href={links.resume}>
            이력서 <MaterialIcon name="download" />
          </a>
          <a
            className="header-email"
            href={links.email}
            aria-label="이메일 보내기"
          >
            Email
            <MaterialIcon name="north_east" />
          </a>
        </div>
      </div>
    </header>
  );
}

function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-index" aria-hidden="true">
        <span>{index}</span>
        <span className="section-index-line" />
      </div>
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="tag-list" aria-label="사용 기술">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

function Block({ block }: { block: ContentBlock }) {
  if (block.type === "paragraph") return <p>{block.text}</p>;
  if (block.type === "list") {
    return (
      <ul className="detail-list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "note") return <p className="detail-note">{block.text}</p>;
  return (
    <pre className="code-block">
      <code>{block.code}</code>
    </pre>
  );
}

function DetailContent({ sections }: { sections: DetailSection[] }) {
  return (
    <div className="detail-content">
      {sections.map((section) => (
        <section className="detail-section" key={section.title}>
          <h4>{section.title}</h4>
          <div className="detail-copy">
            {section.blocks.map((block, index) => (
              <Block block={block} key={`${section.title}-${index}`} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function WorkShowcase({ items }: { items: ShowcaseItem[] }) {
  return (
    <section className="work-showcase" aria-labelledby="design-guide-heading">
      <div className="showcase-heading">
        <p className="eyebrow">PUBLIC EXCERPT / REDACTED</p>
        <h4 id="design-guide-heading">디자인 가이드에서 코드 컴포넌트까지</h4>
        <p>
          공개 가능한 항목만 선별했습니다. 원본의 색상값과 프로젝트 식별 정보는
          제거했습니다.
        </p>
      </div>

      <div className="showcase-list">
        {items.map((item) => (
          <figure className="showcase-item" key={item.label}>
            <figcaption>
              <span>{item.label}</span>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </figcaption>
            <div
              className={`showcase-images ${item.images.length > 1 ? "multiple" : ""}`}
            >
              {item.images.map((image) => (
                <a
                  href={image.src}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${image.alt} 크게 보기`}
                  key={image.src}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              ))}
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <details className="work-card" id={item.id}>
      <summary>
        <div className="work-summary-grid">
          <div className="work-number">
            <span>PROJECT</span>
            <strong>{item.number}</strong>
          </div>

          <div className="work-main">
            <TagList tags={item.tags} />
            <h3>{item.title}</h3>
            <div className="work-intro">
              {item.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="work-side">
            <p className="micro-label">ROLE / FRONTEND</p>
            <ul>
              {item.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="detail-toggle">
          <span className="detail-toggle-label">
            <span className="when-closed">상세 보기</span>
            <span className="when-open">상세 닫기</span>
          </span>
          <span className="toggle-icon" aria-hidden="true">
            <MaterialIcon name="add" className="when-closed-icon" />
            <MaterialIcon name="remove" className="when-open-icon" />
          </span>
        </div>
      </summary>
      <DetailContent sections={item.details} />
      {item.showcase && <WorkShowcase items={item.showcase} />}
    </details>
  );
}

function ArchiveCard({ item, index }: { item: ArchiveItem; index: number }) {
  const hasDetails = Boolean(item.details?.length);
  const summary = (
    <div className="archive-summary">
      <span className="archive-index">
        LAYER_{String(index + 1).padStart(2, "0")}
      </span>
      <div className="archive-main">
        {item.tags && <TagList tags={item.tags} />}
        <h3>{item.title}</h3>
        <div className="archive-intro">
          {item.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="archive-action" aria-hidden="true">
        {hasDetails ? (
          <span className="toggle-icon small">
            <MaterialIcon name="add" className="when-closed-icon" />
            <MaterialIcon name="remove" className="when-open-icon" />
          </span>
        ) : (
          <span className="archive-static-dot" />
        )}
      </div>
    </div>
  );

  if (!hasDetails) {
    return (
      <article className="archive-card static">
        {summary}
        {item.githubUrl && (
          <a
            className="inline-link archive-github"
            href={item.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub에서 코드 보기 <MaterialIcon name="north_east" />
          </a>
        )}
        {item.demoUrl && (
          <a
            className="inline-link"
            href={item.demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            데모 보기 <MaterialIcon name="north_east" />
          </a>
        )}
      </article>
    );
  }

  return (
    <details className="archive-card">
      <summary>{summary}</summary>
      <div className="archive-detail">
        <DetailContent sections={item.details ?? []} />
        {item.githubUrl && (
          <a
            className="inline-link"
            href={item.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub에서 코드 보기 <MaterialIcon name="north_east" />
          </a>
        )}
        {item.demoUrl && (
          <a
            className="inline-link"
            href={item.demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            데모 보기 <MaterialIcon name="north_east" />
          </a>
        )}
      </div>
    </details>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("");
  const sectionIds = useMemo(
    () => ["work", "experience", "skills", "about"],
    [],
  );

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    let frameId = 0;

    const updateActiveSection = () => {
      frameId = 0;

      // 섹션 상단이 화면 상단의 기준선(약 20%)을 통과한 뒤에만 활성화한다.
      // 따라서 Hero가 대부분 보이는 최상단에서는 어떤 메뉴도 활성화하지 않는다.
      const headerHeight =
        document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
      const activationLine =
        headerHeight + Math.min(window.innerHeight * 0.18, 120);
      let nextSection = "";

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= activationLine) {
          nextSection = section.id;
        }
      });

      setActiveSection((current) =>
        current === nextSection ? current : nextSection,
      );
    };

    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);
    };
  }, [sectionIds]);

  return (
    <>
      <Header activeSection={activeSection} />

      <main>
        <section className="hero" id="top">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-kicker">
                <span /> FRONTEND DEVELOPER · 3년차
              </p>
              <h1>이혜주</h1>
              <p className="hero-lead">
                대시보드, 모니터링, 통계, 데이터 중심 UI 화면처럼 정보량과 상태
                변화가 많은 제품 UI를 개발하고 있습니다.
              </p>
              <p className="hero-description">
                주기적으로 갱신되는 데이터의 처리 범위를 조정하고,
                지도·목록·상세·필터가 연결되는 상태 흐름을 정리해왔습니다. 여러
                프로젝트에서 반복되는 기능과 UI를 관리하기 위한 구조, 디자인
                시스템, API 클라이언트와 테스트·문서화 환경도 함께 개발했습니다.
              </p>
              <p className="hero-stack">
                React · TypeScript · OpenLayers · Frontend Architecture
              </p>

              <div className="hero-actions">
                <a className="button primary" href={links.resume}>
                  이력서 다운로드 <MaterialIcon name="download" />
                </a>
                <a className="button secondary" href="#work">
                  주요 작업 보기 <MaterialIcon name="arrow_forward" />
                </a>
              </div>

              <div className="hero-socials" aria-label="외부 링크">
                {externalLinks.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} <MaterialIcon name="north_east" />
                  </a>
                ))}
                <a href={links.email}>
                  Email <MaterialIcon name="north_east" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section work-section" id="work">
          <div className="container">
            <SectionHeading
              index="01"
              label="WORK"
              title="주요 작업"
              description="프로젝트의 프론트엔드 구조와 핵심 기능을 설계하고 구현했습니다. 혼자 담당한 작업도 있고 2~3명의 개발자가 함께한 프로젝트도 있습니다. 함께 진행한 경우에도 아래에 정리한 기능은 직접 구현했으며, 구조 변경은 팀 회의와 피드백을 거쳐 적용했습니다."
            />

            <div className="work-list">
              {workItems.map((item) => (
                <WorkCard item={item} key={item.id} />
              ))}
            </div>

            <div className="archive-block" id="archive">
              <div className="archive-heading">
                <p className="eyebrow">ADDITIONAL WORK / ARCHIVE</p>
                <h3>추가 작업</h3>
                <p></p>
              </div>
              <div className="archive-list">
                {archiveItems.map((item, index) => (
                  <ArchiveCard item={item} index={index} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="page-section experience-section" id="experience">
          <div className="container">
            <SectionHeading index="02" label="EXPERIENCE" title="경력" />
            <div className="experience-grid">
              <div className="experience-meta">
                <p className="micro-label">CURRENT COMPANY</p>
                <h3>(주)무한정보기술</h3>
                <p>2023.05 — 현재</p>
              </div>
              <div className="experience-body">
                <p className="experience-role">주임 · Frontend Developer</p>
                <div className="experience-intro">
                  <p>
                    데이터 중심 UI, 대시보드, 사내 운영 솔루션, 데스크톱
                    애플리케이션, 랜딩 페이지 등의 프론트엔드 개발을 담당하고
                    있습니다.
                  </p>
                  <p>
                    대시보드, 모니터링, 통계, 지도 기반 화면처럼 정보량과 상태가
                    많은 업무 UI를 주로 개발했습니다.
                  </p>
                  <p>
                    화면 구현 외에도 프론트엔드 구조, 공통 컴포넌트, API
                    클라이언트, 테스트 환경과 상태 흐름을 정리했습니다.
                  </p>
                </div>
                <div className="experience-columns">
                  <div>
                    <h4>주요 업무</h4>
                    <ul className="numbered-list">
                      {experienceTasks.map((task, index) => (
                        <li key={task}>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="collaboration">
                    <h4>협업 방식</h4>
                    <p>
                      프로젝트에 따라 프론트엔드를 혼자 담당하거나 2~3명의
                      개발자와 함께 진행했습니다.
                    </p>
                    <p>
                      주요 기능의 구조와 구현을 맡았으며, 구조 변경이나 공통
                      규칙은 팀 회의를 거쳐 적용했습니다.
                    </p>
                    <p>
                      모노레포와 FSD 적용 과정에서 동료 개발자들이 실제로 겪는
                      불편을 확인했고, 해당 피드백을 기준으로 구조를 다시
                      단순화했습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section skills-section" id="skills">
          <div className="container">
            <SectionHeading index="03" label="SKILLS" title="기술" />
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article
                  className={`skill-group skill-group-${index + 1}`}
                  key={group.label}
                >
                  <div className="skill-label">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{group.label}</h3>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="certifications">
              <div>
                <p className="eyebrow">CERTIFICATIONS</p>
                <h3>자격</h3>
              </div>
              <div className="certification-list">
                <span>정보처리기사</span>
                <span>SQL개발자(SQLD)</span>
                <p>그 외 자격과 학력 정보는 이력서에서 확인할 수 있습니다.</p>
              </div>
              <a className="inline-link" href={links.resume}>
                이력서 보기 <MaterialIcon name="download" />
              </a>
            </div>
          </div>
        </section>

        <section className="page-section about-section" id="about">
          <div className="container">
            <SectionHeading index="04" label="ABOUT" title="소개" />
            <div className="about-grid">
              <div className="about-lead">
                <p>
                  대시보드, 모니터링, 통계, 지도 기반 화면처럼 정보량이 많고
                  여러 상태가 연결되는 업무 UI를 주로 다뤘습니다.
                </p>
              </div>
              <div className="about-copy">
                {aboutParagraphs.map((paragraph, index) => (
                  <p
                    className={index === 0 ? "about-first" : ""}
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">CONTACT / OPEN CHANNEL</p>
              <h2>이혜주</h2>
              <p>Frontend Developer</p>
            </div>
            <div className="contact-links">
              <a className="contact-primary" href={links.email}>
                <span>Email</span>
                <strong>jinjoo648@naver.com</strong>
                <MaterialIcon name="north_east" />
              </a>
              <div className="contact-secondary">
                <a href={links.resume}>
                  이력서 다운로드 <MaterialIcon name="download" />
                </a>
                {externalLinks.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} <MaterialIcon name="north_east" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© Hyejoo Lee</p>
          <div className="footer-mark">
            <DotMark />
          </div>
          <p>React · TypeScript · OpenLayers</p>
        </div>
      </footer>
    </>
  );
}

export default App;
