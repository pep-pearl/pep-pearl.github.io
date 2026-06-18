import { useMemo, useRef, useState } from "react";
import initialResumeData from "./content/resume.json";

type Contact = {
  label: string;
  value: string;
  href?: string;
  hidden?: boolean;
};

type BulletItem = {
  title: string;
  text: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  overview: string[];
  highlights: BulletItem[];
};

type ProjectEntry = {
  title: string;
  period: string;
  role: string;
  problem: string;
  impacts: string[];
};

type EducationEntry = {
  organization: string;
  program: string;
  period: string;
  score?: string;
};

type CertificationEntry = {
  name: string;
  issuer: string;
  date: string;
  credential?: string;
};

type ResumeSection = {
  id: string;
  title: string;
  visible: boolean;
  layout:
    | "bullets"
    | "skills"
    | "experience"
    | "projects"
    | "education"
    | "certifications"
    | "paragraphs";
  items?: BulletItem[];
  groups?: SkillGroup[];
  entries?:
    | ExperienceEntry[]
    | ProjectEntry[]
    | EducationEntry[]
    | CertificationEntry[];
  lead?: string;
  paragraphs?: string[];
};

type ResumeData = {
  meta: {
    name: string;
    englishName: string;
    title: string;
    handle: string;
    headline: string;
    fileName: string;
    updated: string;
  };
  contacts: Contact[];
  sections: ResumeSection[];
};

const STORAGE_KEY = "peppearl.resume.draft.v1";
const defaultData = initialResumeData as ResumeData;

function MaterialIcon({ name }: { name: string }) {
  return (
    <span
      className="material-symbols-outlined material-icon"
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

function isResumeData(value: unknown): value is ResumeData {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<ResumeData>;
  return Boolean(
    candidate.meta &&
    Array.isArray(candidate.contacts) &&
    Array.isArray(candidate.sections),
  );
}

function loadDraft(): ResumeData {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultData;
    const parsed = JSON.parse(saved) as unknown;
    return isResumeData(parsed) ? parsed : defaultData;
  } catch {
    return defaultData;
  }
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="resume-section-title">
      <h2>{title}</h2>
      <span aria-hidden="true" />
    </div>
  );
}

function BulletSection({ section }: { section: ResumeSection }) {
  return (
    <div className="resume-bullet-list">
      {(section.items ?? []).map((item) => (
        <div className="resume-bullet" key={`${section.id}-${item.title}`}>
          <strong>{item.title}</strong>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

function SkillsSection({ section }: { section: ResumeSection }) {
  return (
    <div className="resume-skills-grid">
      {(section.groups ?? []).map((group) => (
        <div className="resume-skill-group" key={group.title}>
          <h3>{group.title}</h3>
          <p>{group.items.join(" · ")}</p>
        </div>
      ))}
    </div>
  );
}

function ExperienceSection({ section }: { section: ResumeSection }) {
  const entries = (section.entries ?? []) as ExperienceEntry[];
  return (
    <div className="resume-entry-list">
      {entries.map((entry) => (
        <article
          className="resume-entry"
          key={`${entry.company}-${entry.period}`}
        >
          <header className="resume-entry-header">
            <div>
              <h3>{entry.company}</h3>
              <p>{entry.role}</p>
            </div>
            <time>{entry.period}</time>
          </header>
          <div className="resume-overview">
            {entry.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="resume-highlight-list">
            {entry.highlights.map((highlight) => (
              <div className="resume-highlight" key={highlight.title}>
                <strong>{highlight.title}</strong>
                <p>{highlight.text}</p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function ProjectsSection({ section }: { section: ResumeSection }) {
  const entries = (section.entries ?? []) as ProjectEntry[];
  return (
    <div className="resume-project-list">
      {entries.map((entry, index) => (
        <article
          className="resume-project resume-entry"
          key={`${entry.title}-${entry.period}`}
        >
          <div className="resume-project-index">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div>
            <header className="resume-entry-header compact">
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.role}</p>
              </div>
              <time>{entry.period}</time>
            </header>
            <div className="resume-project-problem">
              <strong>문제</strong>
              <p>{entry.problem}</p>
            </div>
            <ul>
              {entry.impacts.map((impact) => (
                <li key={impact}>{impact}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

function EducationSection({ section }: { section: ResumeSection }) {
  const entries = (section.entries ?? []) as EducationEntry[];
  return (
    <div className="resume-table" role="table" aria-label={section.title}>
      {entries.map((entry) => (
        <div
          className="resume-table-row education-row"
          role="row"
          key={`${entry.organization}-${entry.period}`}
        >
          <strong role="cell">{entry.organization}</strong>
          <span role="cell">{entry.program}</span>
          <span role="cell">{entry.score ?? ""}</span>
          <time role="cell">{entry.period}</time>
        </div>
      ))}
    </div>
  );
}

function CertificationsSection({ section }: { section: ResumeSection }) {
  const entries = (section.entries ?? []) as CertificationEntry[];
  return (
    <div className="resume-table" role="table" aria-label={section.title}>
      {entries.map((entry) => (
        <div
          className="resume-table-row certification-row"
          role="row"
          key={`${entry.name}-${entry.date}`}
        >
          <strong role="cell">{entry.name}</strong>
          <span role="cell">{entry.issuer}</span>
          <time role="cell">{entry.date}</time>
          <span role="cell">{entry.credential ?? ""}</span>
        </div>
      ))}
    </div>
  );
}

function ParagraphSection({ section }: { section: ResumeSection }) {
  return (
    <div className="resume-paragraphs">
      {section.lead && (
        <strong className="resume-paragraph-lead">{section.lead}</strong>
      )}
      {(section.paragraphs ?? []).map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function ResumeSectionView({ section }: { section: ResumeSection }) {
  let body = null;

  if (section.layout === "bullets") body = <BulletSection section={section} />;
  if (section.layout === "skills") body = <SkillsSection section={section} />;
  if (section.layout === "experience")
    body = <ExperienceSection section={section} />;
  if (section.layout === "projects")
    body = <ProjectsSection section={section} />;
  if (section.layout === "education")
    body = <EducationSection section={section} />;
  if (section.layout === "certifications")
    body = <CertificationsSection section={section} />;
  if (section.layout === "paragraphs")
    body = <ParagraphSection section={section} />;

  if (!body) return null;

  return (
    <section
      className={`resume-section resume-section-${section.layout}`}
      data-section-id={section.id}
    >
      <SectionTitle title={section.title} />
      {body}
    </section>
  );
}

function ResumeDocument({
  data,
  paperRef,
}: {
  data: ResumeData;
  paperRef: React.RefObject<HTMLDivElement>;
}) {
  const visibleSections = data.sections.filter(
    (section) => section.visible !== false,
  );

  return (
    <div className="resume-paper" ref={paperRef}>
      <header className="resume-document-header">
        <div className="resume-identity">
          <p className="resume-english-name">{data.meta.englishName}</p>
          <h1>{data.meta.name}</h1>
          <p className="resume-title">{data.meta.title}</p>
          <p className="resume-headline">{data.meta.headline}</p>
        </div>
        <div className="resume-contact-list">
          {data.contacts.map((contact, index) =>
            contact.hidden ? null : (
              <div
                className="resume-contact"
                key={`${contact.label}-${contact.value}-${index}`}
              >
                <span>{contact.label}</span>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noreferrer"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <strong>{contact.value}</strong>
                )}
              </div>
            ),
          )}
        </div>
      </header>

      <div className="resume-document-meta">
        <span>{data.meta.handle}</span>
        <span>Updated {data.meta.updated}</span>
      </div>

      {visibleSections.map((section) => (
        <ResumeSectionView section={section} key={section.id} />
      ))}
    </div>
  );
}

function ResumeApp() {
  const paperRef = useRef<HTMLDivElement>(null);
  const importRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<ResumeData>(() => loadDraft());
  const [editorValue, setEditorValue] = useState(() =>
    JSON.stringify(loadDraft(), null, 2),
  );
  const [editorOpen, setEditorOpen] = useState(false);
  const [message, setMessage] = useState(
    "JSON 데이터와 PDF가 같은 내용을 사용합니다.",
  );
  const [downloading, setDownloading] = useState(false);

  const visibleSectionCount = useMemo(
    () => data.sections.filter((section) => section.visible !== false).length,
    [data.sections],
  );

  const applyEditor = () => {
    try {
      const parsed = JSON.parse(editorValue) as unknown;
      if (!isResumeData(parsed))
        throw new Error("meta, contacts, sections 구조를 확인해 주세요.");
      setData(parsed);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      setMessage("JSON 변경 내용을 미리보기에 적용했습니다.");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? `JSON 오류: ${error.message}`
          : "JSON 형식을 확인해 주세요.",
      );
    }
  };

  const resetEditor = () => {
    const next = defaultData;
    setData(next);
    setEditorValue(JSON.stringify(next, null, 2));
    window.localStorage.removeItem(STORAGE_KEY);
    setMessage("기본 이력서 데이터로 되돌렸습니다.");
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "resume.json";
    anchor.click();
    URL.revokeObjectURL(url);
    setMessage("현재 이력서 JSON을 저장했습니다.");
  };

  const importJson = async (file: File) => {
    try {
      const parsed = JSON.parse(await file.text()) as unknown;
      if (!isResumeData(parsed))
        throw new Error("meta, contacts, sections 구조를 확인해 주세요.");
      setData(parsed);
      setEditorValue(JSON.stringify(parsed, null, 2));
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      setMessage("불러온 JSON을 미리보기에 적용했습니다.");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? `JSON 오류: ${error.message}`
          : "JSON 파일을 확인해 주세요.",
      );
    } finally {
      if (importRef.current) importRef.current.value = "";
    }
  };

  const downloadPdf = async () => {
    if (!paperRef.current || downloading) return;
    setDownloading(true);
    setMessage("PDF를 생성하고 있습니다.");

    try {
      await document.fonts.ready;
      const { default: html2pdf } = await import("html2pdf.js");
      await html2pdf()
        .set({
          margin: 0,
          filename: data.meta.fileName,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: {
            scale: 2.2,
            useCORS: true,
            backgroundColor: "#ffffff",
            logging: false,
          },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          pagebreak: {
            mode: ["css", "legacy"],
            avoid: [
              ".resume-entry",
              ".resume-bullet",
              ".resume-skill-group",
              ".resume-table-row",
            ],
          },
        } as never)
        .from(paperRef.current)
        .save();
      setMessage("PDF 다운로드를 시작했습니다.");
    } catch (error) {
      console.error(error);
      setMessage(
        "PDF 생성에 실패했습니다. 브라우저를 새로고침한 뒤 다시 시도해 주세요.",
      );
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className={`resume-app ${editorOpen ? "editor-open" : ""}`}>
      <header className="resume-toolbar">
        <div className="resume-toolbar-inner">
          <a className="resume-back" href="/">
            <MaterialIcon name="arrow_back" />
            포트폴리오
          </a>
          <div className="resume-toolbar-meta">
            <strong>이력서 미리보기</strong>
            <span>
              {visibleSectionCount}개 섹션 · {message}
            </span>
          </div>
          <div className="resume-toolbar-actions">
            {/* TODO: 이력서 수정할 때 하기 */}
            {/* <button type="button" className="resume-toolbar-button secondary" onClick={() => setEditorOpen((open) => !open)}>
              <MaterialIcon name="data_object" />
              JSON 편집
            </button> */}
            <button
              type="button"
              className="resume-toolbar-button primary"
              onClick={downloadPdf}
              disabled={downloading}
            >
              <MaterialIcon name="download" />
              {downloading ? "PDF 생성 중" : "PDF 다운로드"}
            </button>
          </div>
        </div>
      </header>

      <main className="resume-workspace">
        <div className="resume-preview-shell">
          <ResumeDocument data={data} paperRef={paperRef} />
        </div>

        <aside className="resume-editor" aria-hidden={!editorOpen}>
          <div className="resume-editor-header">
            <div>
              <p>RESUME DATA</p>
              <h2>JSON 편집</h2>
            </div>
            <button
              type="button"
              className="icon-button"
              onClick={() => setEditorOpen(false)}
              aria-label="편집기 닫기"
            >
              <MaterialIcon name="close" />
            </button>
          </div>
          <p className="resume-editor-help">
            <code>sections</code> 배열의 순서를 바꾸거나 <code>visible</code>{" "}
            값을 조정해 단락을 넣고 뺄 수 있습니다. 기본 데이터는
            src/content/resume.json에 있으며, 브라우저에서 적용한 변경은 이
            기기에만 저장됩니다.
          </p>
          <textarea
            aria-label="이력서 JSON 편집기"
            spellCheck={false}
            value={editorValue}
            onChange={(event) => setEditorValue(event.target.value)}
          />
          <div className="resume-editor-actions">
            <button
              type="button"
              className="resume-editor-apply"
              onClick={applyEditor}
            >
              <MaterialIcon name="play_arrow" />
              미리보기에 적용
            </button>
            <button type="button" onClick={resetEditor}>
              <MaterialIcon name="restart_alt" />
              초기화
            </button>
          </div>
          <div className="resume-editor-file-actions">
            <button type="button" onClick={exportJson}>
              <MaterialIcon name="file_save" />
              JSON 저장
            </button>
            <button type="button" onClick={() => importRef.current?.click()}>
              <MaterialIcon name="upload_file" />
              JSON 불러오기
            </button>
            <input
              ref={importRef}
              type="file"
              accept="application/json,.json"
              hidden
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) void importJson(file);
              }}
            />
          </div>
        </aside>
      </main>
    </div>
  );
}

export default ResumeApp;
