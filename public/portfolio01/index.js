(() => {
  const SELECTOR = {
    root: "[data-fullpage]",
    track: "[data-fullpage-track]",
    section: "[data-fullpage-section]",
    body: ".fullpage__body",
    backgroundImage: ".fullpage-bg__image",
    indicatorButton: "[data-scroll-index]",
    scrollTarget: "[data-scroll-target]",
    prevButton: "[data-scroll-prev]",
    nextButton: "[data-scroll-next]",
    divider: ".js-feature-divider",
    scrambleText: ".js-scramble",
    featureSection: "[data-feature-section]",
    featureMetaOverlay: "[data-feature-meta-overlay]",
    featureMetaTitle: "[data-feature-meta-title]",
    featureMetaDescription: "[data-feature-meta-description]",
  };

  const SETTINGS = {
    sectionDuration: 900,
    swipeThreshold: 48,
    heroIntroDuration: 4300,
    scrambleDuration: 1200,
    featureMetaScrambleDuration: 560,
    featureMetaCopyDelay: 120,
    reducedScrimHold: 110,
    scrambleChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
  };

  const NAV_ITEMS = [
    {
      desktopLabel: "HOME",
      mobileLabel: "HOME",
      ariaLabel: "Hero 섹션으로 이동",
      icon: {
        inactive:
          "M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z",
        active:
          "M160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H600q-17 0-28.5-11.5T560-160v-200q0-17-11.5-28.5T520-400h-80q-17 0-28.5 11.5T400-360v200q0 17-11.5 28.5T360-120H240q-33 0-56.5-23.5T160-200Z",
      },
    },
    {
      desktopLabel: "CORE",
      mobileLabel: "CORE",
      ariaLabel: "Core Technology 섹션으로 이동",
      icon: {
        inactive:
          "M155-75q-35-35-35-85t35-85q35-35 85-35 14 0 26 3t23 8l57-71q-28-31-39-70t-5-78l-81-27q-17 25-43 40t-58 15q-50 0-85-35T0-580q0-50 35-85t85-35q50 0 85 35t35 85v8l81 28q20-36 53.5-61t75.5-32v-87q-39-11-64.5-42.5T360-840q0-50 35-85t85-35q50 0 85 35t35 85q0 42-26 73.5T510-724v87q42 7 75.5 32t53.5 61l81-28v-8q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-32 0-58.5-15T739-515l-81 27q6 39-5 77.5T614-340l57 70q11-5 23-7.5t26-2.5q50 0 85 35t35 85q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-20 6.5-38.5T624-232l-57-71q-41 23-87.5 23T392-303l-56 71q11 15 17.5 33.5T360-160q0 50-35 85t-85 35q-50 0-85-35Zm-35-465q17 0 28.5-11.5T160-580q0-17-11.5-28.5T120-620q-17 0-28.5 11.5T80-580q0 17 11.5 28.5T120-540Zm148.5 408.5Q280-143 280-160t-11.5-28.5Q257-200 240-200t-28.5 11.5Q200-177 200-160t11.5 28.5Q223-120 240-120t28.5-11.5Zm240-680Q520-823 520-840t-11.5-28.5Q497-880 480-880t-28.5 11.5Q440-857 440-840t11.5 28.5Q463-800 480-800t28.5-11.5ZM480-360q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm268.5 228.5Q760-143 760-160t-11.5-28.5Q737-200 720-200t-28.5 11.5Q680-177 680-160t11.5 28.5Q703-120 720-120t28.5-11.5Zm120-420Q880-563 880-580t-11.5-28.5Q857-620 840-620t-28.5 11.5Q800-597 800-580t11.5 28.5Q823-540 840-540t28.5-11.5ZM480-840ZM120-580Zm360 120Zm360-120ZM240-160Zm480 0Z",
        active:
          "M155-75q-35-35-35-85t35-85q35-35 85-35 14 0 26 3t23 8l57-71q-28-31-39-70t-5-78l-81-27q-17 25-43 40t-58 15q-50 0-85-35T0-580q0-50 35-85t85-35q50 0 85 35t35 85v8l81 28q20-36 53.5-61t75.5-32v-87q-39-11-64.5-42.5T360-840q0-50 35-85t85-35q50 0 85 35t35 85q0 42-26 73.5T510-724v87q42 7 75.5 32t53.5 61l81-28v-8q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-32 0-58.5-15T739-515l-81 27q6 39-5 77.5T614-340l57 70q11-5 23-7.5t26-2.5q50 0 85 35t35 85q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-20 6.5-38.5T624-232l-57-71q-41 23-87.5 23T392-303l-56 71q11 15 17.5 33.5T360-160q0 50-35 85t-85 35q-50 0-85-35Z",
      },
    },
    {
      desktopLabel: "BENEFIT",
      mobileLabel: "BENEFIT",
      ariaLabel: "Business Benefit 섹션으로 이동",
      icon: {
        inactive:
          "M284-506q14-28 29-54t33-52l-56-11-84 84 78 33Zm482-275q-70 2-149.5 41T472-636q-42 42-75 90t-49 90l114 113q42-16 90-49t90-75q65-65 104-144t41-149q0-4-1.5-8t-4.5-7q-3-3-7-4.5t-8-1.5ZM523-597.5q0-33.5 23-56.5t57-23q34 0 57 23t23 56.5q0 33.5-23 56.5t-57 23q-34 0-57-23t-23-56.5ZM512-279l33 79 84-84-11-56q-26 18-52 32.5T512-279Zm351-534q8 110-36 214.5T688-399l20 99q4 20-2 39t-20 33L560-102q-15 15-36 11.5T495-114l-61-143-171-171-143-61q-20-8-24-29t11-36l126-126q14-14 33.5-20t39.5-2l99 20q95-95 199.5-139T819-857q8 1 16 4.5t14 9.5q6 6 9.5 14t4.5 16ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-48 48-113.5 57T82-76q9-66 18-131.5T157-321Zm57 56q-17 17-23.5 41T180-175q25-4 49-10t41-23q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z",
        active:
          "M245-474q26-66 62.5-127T390-716l-52-11q-20-4-39 2t-33 20L140-579q-15 15-11.5 36t23.5 29l93 40Zm588-390q-106-5-201.5 41T461-702q-48 48-84.5 104T313-480q-5 13-5 26.5t10 23.5l125 125q10 10 23.5 10t26.5-5q62-27 118-63.5T715-448q75-75 121-170.5T877-820q0-8-4-16t-10-14q-6-6-14-10t-16-4ZM556-622.5q0-33.5 23-56.5t56.5-23q33.5 0 56.5 23t23 56.5q0 33.5-23 56.5t-56.5 23q-33.5 0-56.5-23t-23-56.5ZM487-232l40 93q8 20 29 24t36-11l126-126q14-14 20-33.5t2-39.5l-10-52q-55 46-115.5 82.5T487-232Zm-325-86q35-35 85-35.5t85 34.5q35 35 35 85t-35 85q-48 48-113.5 57T87-74q9-66 18.5-131.5T162-318Z",
      },
    },
    {
      desktopLabel: "CONTACT",
      mobileLabel: "CONTACT",
      ariaLabel: "Form 섹션으로 이동",
      icon: {
        inactive:
          "M560-120v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L695-92q-6 6-13.5 9T666-80h-66q-17 0-28.5-11.5T560-120Zm300-223-37-37 37 37ZM620-140h38l121-122-37-37-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v57q0 17-11.5 28.5T760-510q-17 0-28.5-11.5T720-550v-50H560q-17 0-28.5-11.5T520-640v-160H240v640h200q17 0 28.5 11.5T480-120q0 17-11.5 28.5T440-80H240Zm0-80v-640 640Zm521-121-19-18 37 37-18-19Z",
        active:
          "M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v63q0 11-6.5 19T777-513q-16 6-30.5 15.5T720-476L504-260q-11 11-17.5 25.5T480-204v84q0 17-11.5 28.5T440-80H240Zm320-40v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L695-92q-6 6-13.5 9T666-80h-66q-17 0-28.5-11.5T560-120Zm263-184 37-39-37-37-38 38 38 38ZM560-600h160L520-800l200 200-200-200v160q0 17 11.5 28.5T560-600Z",
      },
    },
  ];

  const root = document.querySelector(SELECTOR.root);
  const track = document.querySelector(SELECTOR.track);
  const sections = Array.from(document.querySelectorAll(SELECTOR.section));
  const bgImages = Array.from(
    document.querySelectorAll(SELECTOR.backgroundImage),
  );
  const indicatorButtons = Array.from(
    document.querySelectorAll(SELECTOR.indicatorButton),
  );
  const targetButtons = Array.from(
    document.querySelectorAll(SELECTOR.scrollTarget),
  );
  const prevButton = document.querySelector(SELECTOR.prevButton);
  const nextButton = document.querySelector(SELECTOR.nextButton);
  const featureMetaOverlay = document.querySelector(
    SELECTOR.featureMetaOverlay,
  );
  const featureMetaTitle = document.querySelector(SELECTOR.featureMetaTitle);
  const featureMetaDescription = document.querySelector(
    SELECTOR.featureMetaDescription,
  );
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );
  const prefersLowCostMotion = window.matchMedia(
    "(max-width: 48rem), (prefers-reduced-motion: reduce)",
  );

  if (!root || !track || sections.length === 0) return;

  const state = {
    currentIndex: 0,
    activeIndex: 0,
    isAnimating: false,
    touchStartY: 0,
    touchEndY: 0,
    resizeFrame: 0,
    featureMetaTimer: 0,
    featureMetaScrambleToken: 0,
  };

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const getViewportHeight = () => window.innerHeight;

  const getActiveBody = () =>
    sections[state.currentIndex]?.querySelector(SELECTOR.body);

  const isEditableTarget = (target) => {
    if (!(target instanceof HTMLElement)) return false;

    return Boolean(
      target.closest(
        'input, textarea, select, button, a, [contenteditable="true"]',
      ),
    );
  };

  const canScrollActiveBody = (deltaY) => {
    const body = getActiveBody();

    if (!body) return false;

    const maxScrollTop = body.scrollHeight - body.clientHeight;

    if (maxScrollTop <= 1) return false;
    if (deltaY > 0) return body.scrollTop < maxScrollTop - 1;
    if (deltaY < 0) return body.scrollTop > 1;

    return false;
  };

  const setTrackPosition = (index = state.currentIndex) => {
    track.style.transform =
      index === 0 ? "none" : `translate3d(0, -${index * 100}dvh, 0)`;
  };

  const showTransitionScrim = () => {
    document.body.classList.add("is-section-transitioning");
  };

  const hideTransitionScrim = (delay = 0) => {
    window.setTimeout(() => {
      document.body.classList.remove("is-section-transitioning");
    }, delay);
  };

  /*
  const hydrateBackgroundLayer = (image) => {
    const bgSrc = image?.dataset.bgSrc;

    if (!image || !bgSrc || image.style.getPropertyValue("--bg-image")) return;

    image.style.setProperty("--bg-image", `url("${bgSrc}")`);
  };
  */
  const desktopMedia = window.matchMedia("(min-width: 48.001rem)");

  const supportsImageSet = Boolean(
    window.CSS &&
    CSS.supports &&
    CSS.supports(
      "background-image",
      'image-set(url("x.avif") type("image/avif"))',
    ),
  );

  const getBestBackgroundSource = (image) => {
    if (!image) return null;

    const isDesktop = desktopMedia.matches;

    const avif = isDesktop
      ? image.dataset.bgDesktopAvif
      : image.dataset.bgMobileAvif;

    const webp = isDesktop
      ? image.dataset.bgDesktopWebp
      : image.dataset.bgMobileWebp;

    const fallback = image.dataset.bgSrc;

    return {
      avif,
      webp,
      fallback,
      key: [isDesktop ? "desktop" : "mobile", avif, webp, fallback].join("|"),
    };
  };

  const buildBackgroundImageValue = ({ avif, webp, fallback }) => {
    if (supportsImageSet && (avif || webp)) {
      const candidates = [];

      if (avif) candidates.push(`url("${avif}") type("image/avif")`);
      if (webp) candidates.push(`url("${webp}") type("image/webp")`);
      if (fallback) candidates.push(`url("${fallback}") type("image/png")`);

      return `image-set(${candidates.join(", ")})`;
    }

    return `url("${webp || fallback}")`;
  };

  const hydrateBackgroundLayer = (image) => {
    const source = getBestBackgroundSource(image);

    if (
      !image ||
      !source ||
      (!source.avif && !source.webp && !source.fallback)
    ) {
      return;
    }

    if (image.dataset.bgHydratedKey === source.key) return;

    image.style.setProperty("--bg-image", buildBackgroundImageValue(source));
    image.dataset.bgHydratedKey = source.key;
  };

  const isFeatureIndex = (index) => {
    const section = sections[index];

    return Boolean(section?.matches(SELECTOR.featureSection));
  };

  const isFeaturePair = (fromIndex, toIndex) =>
    isFeatureIndex(fromIndex) && isFeatureIndex(toIndex);

  const getFeatureMeta = (index) => {
    const section = sections[index];
    if (!section) return null;

    const title = section.querySelector(".landing-section__title");
    const description = section.querySelector(".landing-section__description");

    if (!title || !description) return null;

    return {
      title: (title.dataset.text || title.textContent).trim(),
      description: description.innerHTML.trim(),
    };
  };

  const scrambleToText = (
    element,
    nextText,
    duration = SETTINGS.featureMetaScrambleDuration,
  ) => {
    if (!element) return;

    if (prefersReducedMotion.matches) {
      element.textContent = nextText;
      return;
    }

    const token = state.featureMetaScrambleToken + 1;
    const length = nextText.length;
    const startTime = performance.now();

    state.featureMetaScrambleToken = token;

    const update = (currentTime) => {
      if (state.featureMetaScrambleToken !== token) return;

      const progress = clamp((currentTime - startTime) / duration, 0, 1);
      let result = "";

      for (let i = 0; i < length; i += 1) {
        const character = nextText[i];
        const isRevealed = progress > i / length;

        result +=
          isRevealed || character === " "
            ? character
            : SETTINGS.scrambleChars[
                Math.floor(Math.random() * SETTINGS.scrambleChars.length)
              ];
      }

      element.textContent = result;

      if (progress < 1) {
        requestAnimationFrame(update);
        return;
      }

      element.textContent = nextText;
    };

    requestAnimationFrame(update);
  };

  const setFeatureMetaDescription = (description, immediate = false) => {
    if (!featureMetaOverlay || !featureMetaDescription) return;
    if (featureMetaDescription.innerHTML.trim() === description) return;

    window.clearTimeout(state.featureMetaTimer);

    if (
      immediate ||
      prefersReducedMotion.matches ||
      featureMetaDescription.innerHTML.trim().length === 0
    ) {
      featureMetaDescription.innerHTML = description;
      featureMetaOverlay.classList.remove("is-copy-switching");
      return;
    }

    featureMetaOverlay.classList.add("is-copy-switching");

    state.featureMetaTimer = window.setTimeout(() => {
      featureMetaDescription.innerHTML = description;
      featureMetaOverlay.classList.remove("is-copy-switching");
    }, SETTINGS.featureMetaCopyDelay);
  };

  const setFeatureMetaTravelOffset = (offsetVh = 0) => {
    if (!featureMetaOverlay) return;

    featureMetaOverlay.style.setProperty(
      "--feature-meta-offset-y",
      `${offsetVh}dvh`,
    );
  };

  const getFeatureMetaTravelMode = (fromIndex, toIndex) => {
    const fromFeature = isFeatureIndex(fromIndex);
    const toFeature = isFeatureIndex(toIndex);

    if (fromFeature && !toFeature) return "leaving";
    if (!fromFeature && toFeature) return "entering";

    return null;
  };

  const getFeatureMetaTravelOffset = (fromIndex, toIndex, progress, mode) => {
    if (mode === "leaving") {
      return (fromIndex - toIndex) * 100 * progress;
    }

    if (mode === "entering") {
      return (toIndex - fromIndex) * 100 * (1 - progress);
    }

    return 0;
  };

  const setFeatureMetaCopyImmediate = (index) => {
    if (!featureMetaTitle || !featureMetaDescription) return false;

    const meta = getFeatureMeta(index);
    if (!meta) return false;

    state.featureMetaScrambleToken += 1;
    featureMetaTitle.textContent = meta.title;
    setFeatureMetaDescription(meta.description, true);

    return true;
  };

  const prepareFeatureMetaTravel = (fromIndex, toIndex) => {
    const mode = getFeatureMetaTravelMode(fromIndex, toIndex);

    if (!mode || prefersReducedMotion.matches || !featureMetaOverlay) {
      return null;
    }

    if (mode === "entering" && !setFeatureMetaCopyImmediate(toIndex)) {
      return null;
    }

    root.classList.add("is-feature-meta-overlay-traveling");
    setFeatureMetaTravelOffset(
      getFeatureMetaTravelOffset(fromIndex, toIndex, 0, mode),
    );

    return mode;
  };

  const clearFeatureMetaTravel = () => {
    root.classList.remove("is-feature-meta-overlay-traveling");

    if (isFeatureIndex(state.activeIndex)) {
      setFeatureMetaTravelOffset(0);
    }
  };

  const syncFeatureMeta = (index, options = {}) => {
    const { scramble = false, immediate = false } = options;
    const isVisible =
      isFeatureIndex(index) &&
      featureMetaOverlay &&
      featureMetaTitle &&
      featureMetaDescription;

    root.classList.toggle(
      "is-feature-meta-overlay-visible",
      Boolean(isVisible),
    );

    if (!featureMetaOverlay || !featureMetaTitle || !featureMetaDescription) {
      return;
    }

    featureMetaOverlay.classList.toggle("is-visible", Boolean(isVisible));

    if (!isVisible) {
      window.clearTimeout(state.featureMetaTimer);
      state.featureMetaScrambleToken += 1;
      featureMetaOverlay.classList.remove("is-copy-switching");
      return;
    }

    const meta = getFeatureMeta(index);
    if (!meta) return;

    const shouldScramble =
      scramble &&
      !immediate &&
      featureMetaTitle.textContent.trim().length > 0 &&
      featureMetaTitle.textContent.trim() !== meta.title;

    if (shouldScramble) {
      scrambleToText(featureMetaTitle, meta.title);
    } else {
      state.featureMetaScrambleToken += 1;
      featureMetaTitle.textContent = meta.title;
    }

    setFeatureMetaDescription(meta.description, immediate);
  };

  const syncSectionState = (activeIndex = state.activeIndex) => {
    root.classList.toggle("is-hero-section-active", activeIndex === 0);

    sections.forEach((section, index) => {
      section.classList.toggle("is-active", index === activeIndex);
    });

    indicatorButtons.forEach((button) => {
      const buttonIndex = Number(button.dataset.scrollIndex);

      if (buttonIndex === activeIndex) {
        button.setAttribute("aria-current", "page");
      } else {
        button.removeAttribute("aria-current");
      }
    });

    if (prevButton) {
      const isFirst = activeIndex === 0;

      prevButton.disabled = isFirst;
      prevButton.setAttribute("aria-disabled", String(isFirst));
    }

    if (nextButton) {
      const isLast = activeIndex === sections.length - 1;

      nextButton.disabled = isLast;
      nextButton.setAttribute("aria-disabled", String(isLast));
    }
  };

  const setVisualActiveIndex = (index, options = {}) => {
    state.activeIndex = clamp(index, 0, sections.length - 1);
    syncSectionState(state.activeIndex);
    syncFeatureMeta(state.activeIndex, options);
  };

  const createLabel = (className, text) => {
    const label = document.createElement("span");

    label.className = className;
    label.textContent = text;

    return label;
  };

  const createNavigatorIcon = ({ inactive, active }) => {
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const inactivePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    const activePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );

    icon.classList.add("section-navigator__icon");
    icon.setAttribute("viewBox", "0 -960 960 960");
    icon.setAttribute("aria-hidden", "true");
    icon.setAttribute("focusable", "false");

    inactivePath.classList.add("section-navigator__icon-path");
    inactivePath.classList.add("section-navigator__icon-path--inactive");
    inactivePath.setAttribute("d", inactive);
    inactivePath.setAttribute("fill", "currentColor");

    activePath.classList.add("section-navigator__icon-path");
    activePath.classList.add("section-navigator__icon-path--active");
    activePath.setAttribute("d", active);
    activePath.setAttribute("fill", "currentColor");

    icon.append(inactivePath, activePath);

    return icon;
  };

  const initSectionNavigator = () => {
    const navigator = document.querySelector(".page-indicator");

    if (!navigator) return;

    navigator.classList.add("section-navigator");
    navigator.setAttribute("aria-label", "섹션 이동");

    let panel = navigator.querySelector(".section-navigator__panel");

    if (!panel) {
      panel = document.createElement("div");
      panel.className = "section-navigator__panel";
      panel.setAttribute("role", "group");
      panel.setAttribute("aria-label", "섹션 바로가기");

      if (nextButton) {
        navigator.insertBefore(panel, nextButton);
      } else {
        navigator.append(panel);
      }
    }

    indicatorButtons.forEach((button) => {
      const index = Number(button.dataset.scrollIndex);
      const navItem = NAV_ITEMS[index];

      if (!navItem) return;

      button.className = "section-navigator__item";
      button.type = "button";
      button.setAttribute("aria-label", navItem.ariaLabel);
      button.textContent = "";

      const iconSlot = document.createElement("span");
      iconSlot.className = "section-navigator__icon-wrap";
      iconSlot.setAttribute("aria-hidden", "true");
      iconSlot.append(createNavigatorIcon(navItem.icon));

      button.append(
        iconSlot,
        createLabel(
          "section-navigator__label section-navigator__label--desktop",
          navItem.desktopLabel,
        ),
        createLabel(
          "section-navigator__label section-navigator__label--mobile",
          navItem.mobileLabel,
        ),
      );

      panel.append(button);
    });

    [prevButton, nextButton].forEach((button) => {
      if (!button) return;

      button.hidden = false;
      button.className = button.hasAttribute("data-scroll-prev")
        ? "section-navigator__arrow section-navigator__arrow--prev"
        : "section-navigator__arrow section-navigator__arrow--next";
      button.type = "button";
      button.textContent = "";

      const arrowMark = document.createElement("span");
      arrowMark.className = "section-navigator__arrow-mark";
      arrowMark.setAttribute("aria-hidden", "true");
      button.append(arrowMark);
    });
  };

  const resetBackgroundLayers = () => {
    bgImages.forEach((image, index) => {
      if (index === state.currentIndex) hydrateBackgroundLayer(image);

      image.classList.toggle("is-active", index === state.currentIndex);
      image.classList.remove("is-next");
      image.style.clipPath = "inset(0 0 0 0)";
    });
  };

  const finishTransition = (toIndex, options = {}) => {
    const { hideScrim = true } = options;

    state.currentIndex = toIndex;
    setVisualActiveIndex(toIndex, { immediate: true });
    resetBackgroundLayers();
    setTrackPosition();
    clearFeatureMetaTravel();

    revealActiveSectionContent();

    state.isAnimating = false;
    if (hideScrim) hideTransitionScrim();
  };

  /*
  const animateReducedToSection = (toIndex, fromIndex) => {
    state.isAnimating = true;
    showTransitionScrim();

    window.setTimeout(() => {
      setVisualActiveIndex(toIndex, {
        scramble: isFeaturePair(fromIndex, toIndex),
      });
      revealSectionContent(sections[toIndex]);
    }, SETTINGS.reducedScrimHold / 2);

    window.setTimeout(() => {
      finishTransition(toIndex, { hideScrim: false });
      hideTransitionScrim(SETTINGS.reducedScrimHold);
    }, SETTINGS.reducedScrimHold);
  };
*/

  const animateReducedToSection = (toIndex, fromIndex) => {
    state.isAnimating = true;

    const nextBg = bgImages[toIndex];
    if (nextBg) hydrateBackgroundLayer(nextBg);

    showTransitionScrim();

    window.setTimeout(() => {
      finishTransition(toIndex, { hideScrim: false });
      hideTransitionScrim();
    }, SETTINGS.reducedScrimHold);
  };

  const animateToSection = (targetIndex) => {
    const toIndex = clamp(targetIndex, 0, sections.length - 1);
    const fromIndex = state.currentIndex;

    if (toIndex === fromIndex || state.isAnimating) return;

    if (prefersReducedMotion.matches) {
      animateReducedToSection(toIndex, fromIndex);
      return;
    }

    const direction = toIndex > fromIndex ? "down" : "up";
    const currentBg = bgImages[fromIndex];
    const nextBg = bgImages[toIndex];
    const startTime = performance.now();
    const fromTranslate = -fromIndex * getViewportHeight();
    const toTranslate = -toIndex * getViewportHeight();
    const shouldScrambleFeatureMeta = isFeaturePair(fromIndex, toIndex);
    const featureMetaTravelMode = prepareFeatureMetaTravel(fromIndex, toIndex);
    let isTargetVisuallyActive = false;

    state.isAnimating = true;

    const activateTargetVisualState = () => {
      if (isTargetVisuallyActive) return;

      isTargetVisuallyActive = true;
      setVisualActiveIndex(toIndex, {
        scramble: shouldScrambleFeatureMeta,
      });
      revealSectionContent(sections[toIndex]);
    };

    bgImages.forEach((image) => {
      image.classList.remove("is-next");
      image.style.clipPath = "inset(0 0 0 0)";
    });

    if (currentBg && nextBg) {
      hydrateBackgroundLayer(currentBg);
      hydrateBackgroundLayer(nextBg);

      currentBg.classList.add("is-active");
      nextBg.classList.add("is-next");
      nextBg.style.clipPath =
        direction === "down" ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)";
    }

    const tick = (now) => {
      const rawProgress = clamp(
        (now - startTime) / SETTINGS.sectionDuration,
        0,
        1,
      );
      const progress = easeOutCubic(rawProgress);
      const translateY =
        fromTranslate + (toTranslate - fromTranslate) * progress;

      track.style.transform = `translate3d(0, ${translateY}px, 0)`;

      if (featureMetaTravelMode) {
        setFeatureMetaTravelOffset(
          getFeatureMetaTravelOffset(
            fromIndex,
            toIndex,
            progress,
            featureMetaTravelMode,
          ),
        );
      }

      if (nextBg) {
        const clipValue = (1 - progress) * 100;

        nextBg.style.clipPath =
          direction === "down"
            ? `inset(${clipValue}% 0 0 0)`
            : `inset(0 0 ${clipValue}% 0)`;
      }

      if (rawProgress >= 0.42) {
        activateTargetVisualState();
      }

      if (rawProgress < 1) {
        requestAnimationFrame(tick);
        return;
      }

      activateTargetVisualState();
      finishTransition(toIndex);
    };

    requestAnimationFrame(tick);
  };

  const handleWheel = (event) => {
    const isVerticalWheel = Math.abs(event.deltaY) > Math.abs(event.deltaX);

    if (!isVerticalWheel || canScrollActiveBody(event.deltaY)) return;

    event.preventDefault();

    animateToSection(
      event.deltaY > 0 ? state.currentIndex + 1 : state.currentIndex - 1,
    );
  };

  const handleKeydown = (event) => {
    if (isEditableTarget(event.target)) return;

    const keyActions = {
      ArrowDown: 1,
      PageDown: 1,
      Space: 1,
      ArrowUp: -1,
      PageUp: -1,
    };

    if (event.code in keyActions) {
      event.preventDefault();
      animateToSection(state.currentIndex + keyActions[event.code]);
      return;
    }

    if (event.code === "Home") {
      event.preventDefault();
      animateToSection(0);
      return;
    }

    if (event.code === "End") {
      event.preventDefault();
      animateToSection(sections.length - 1);
    }
  };

  const handleTouchStart = (event) => {
    state.touchStartY = event.touches[0].clientY;
    state.touchEndY = state.touchStartY;
  };

  const handleTouchMove = (event) => {
    state.touchEndY = event.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const deltaY = state.touchStartY - state.touchEndY;

    if (
      Math.abs(deltaY) < SETTINGS.swipeThreshold ||
      canScrollActiveBody(deltaY)
    ) {
      return;
    }

    animateToSection(
      deltaY > 0 ? state.currentIndex + 1 : state.currentIndex - 1,
    );
  };

  const handleResize = () => {
    if (state.resizeFrame) return;

    state.resizeFrame = window.requestAnimationFrame(() => {
      state.resizeFrame = 0;
      setTrackPosition();
    });
  };

  const observeOnce = ({ selector, threshold, onEnter }) => {
    const targets = Array.from(document.querySelectorAll(selector));

    if (targets.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach(onEnter);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          onEnter(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold },
    );

    targets.forEach((target) => observer.observe(target));
  };

  const scrambleText = (element, duration = SETTINGS.scrambleDuration) => {
    if (prefersReducedMotion.matches) return;

    const originalText = element.dataset.text || element.textContent;
    const length = originalText.length;
    const startTime = performance.now();

    element.dataset.text = originalText;

    const update = (currentTime) => {
      const progress = clamp((currentTime - startTime) / duration, 0, 1);
      let result = "";

      for (let i = 0; i < length; i += 1) {
        const character = originalText[i];
        const isRevealed = progress > i / length;

        result +=
          isRevealed || character === " "
            ? character
            : SETTINGS.scrambleChars[
                Math.floor(Math.random() * SETTINGS.scrambleChars.length)
              ];
      }

      element.textContent = result;

      if (progress < 1) {
        requestAnimationFrame(update);
        return;
      }

      element.textContent = originalText;
    };

    requestAnimationFrame(update);
  };

  const revealSectionContent = (section) => {
    if (!section || section.classList.contains("is-content-revealed")) return;

    section.classList.add("is-content-revealed");

    const scrambleTargets = Array.from(
      section.querySelectorAll(SELECTOR.scrambleText),
    );

    scrambleTargets.forEach((element) => {
      if (element.dataset.scrambled === "true") return;

      element.dataset.scrambled = "true";
      scrambleText(element);
    });
  };

  const revealAfterDivider = (divider) => {
    const section = divider.closest(SELECTOR.section);
    if (!section) return;

    const dividerDelay = 500;
    const dividerDuration = 3000;
    const revealTiming = dividerDelay + dividerDuration * 0.5 - 1500;
    const delay = divider.classList.contains("feature-divider--animated")
      ? revealTiming
      : 0;

    window.setTimeout(
      () => revealSectionContent(section),
      prefersReducedMotion.matches ? 0 : delay,
    );
  };

  const revealActiveSectionContent = () => {
    const section = sections[state.currentIndex];
    if (!section) return;

    const hasScrambleText = section.querySelector(SELECTOR.scrambleText);
    if (!hasScrambleText) return;

    const divider = section.querySelector(SELECTOR.divider);
    const isDividerHidden =
      divider && window.getComputedStyle(divider).display === "none";

    if (!divider || isDividerHidden) {
      revealSectionContent(section);
    }
  };

  const initClearableInputs = () => {
    const clearableTypes = [
      "text",
      "email",
      "tel",
      "search",
      "url",
      "password",
    ];

    const inputs = Array.from(
      document.querySelectorAll("input.form-control"),
    ).filter((input) => {
      const type = input.getAttribute("type") || "text";

      return clearableTypes.includes(type);
    });

    inputs.forEach((input) => {
      if (input.dataset.clearableReady === "true") return;

      const wrapper = document.createElement("span");
      const clearButton = document.createElement("button");

      wrapper.className = "clearable-control";

      clearButton.className = "clearable-control__button";
      clearButton.type = "button";
      clearButton.hidden = true;
      clearButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg>`;
      clearButton.setAttribute("aria-label", "입력값 지우기");

      input.parentNode.insertBefore(wrapper, input);
      wrapper.appendChild(input);
      wrapper.appendChild(clearButton);

      input.dataset.clearableReady = "true";

      const syncClearButton = () => {
        clearButton.hidden = input.disabled || input.value.length === 0;
      };

      input.addEventListener("input", syncClearButton);

      clearButton.addEventListener("click", () => {
        input.value = "";
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.focus();
      });

      input.form?.addEventListener("reset", () => {
        window.requestAnimationFrame(syncClearButton);
      });

      syncClearButton();
    });
  };

  const initPurposeControls = () => {
    const controls = Array.from(
      document.querySelectorAll("[data-purpose-control]"),
    );

    controls.forEach((control) => {
      const selectWrap = control.querySelector("[data-purpose-select-wrap]");
      const select = selectWrap?.querySelector("[data-purpose-select]");
      const input = control.querySelector("[data-purpose-input]");
      const resetButton = control.querySelector("[data-purpose-reset]");
      const form = control.closest("form");

      if (!select || !input || !resetButton) return;

      const showCustomInput = () => {
        const inputWrapper = input.closest(".clearable-control");

        selectWrap.hidden = true;
        select.hidden = true;
        select.disabled = true;
        select.required = false;

        if (inputWrapper) inputWrapper.hidden = false;
        input.hidden = false;
        input.disabled = false;
        input.required = true;
        input.value = "";

        resetButton.hidden = false;
        input.focus();
      };

      const showSelect = () => {
        const clearButton = control.querySelector(".clearable-control__button");
        const inputWrapper = input.closest(".clearable-control");

        input.hidden = true;
        input.disabled = true;
        input.required = false;
        input.value = "";
        if (inputWrapper) inputWrapper.hidden = true;

        selectWrap.hidden = false;
        selectWrap.disabled = false;
        select.hidden = false;
        select.disabled = false;
        select.required = true;
        select.value = "";

        resetButton.hidden = true;
        if (clearButton) clearButton.hidden = true;
        select.focus();
      };

      select.addEventListener("change", () => {
        if (select.value === "other") {
          showCustomInput();
        }
      });

      resetButton.addEventListener("click", showSelect);

      form?.addEventListener("reset", () => {
        window.requestAnimationFrame(showSelect);
      });

      const initialInputWrapper = input.closest(".clearable-control");
      if (input.hidden && initialInputWrapper)
        initialInputWrapper.hidden = true;
    });
  };

  const initTrialFormState = () => {
    const forms = Array.from(document.querySelectorAll(".trial-form"));

    forms.forEach((form) => {
      const submitButton = form.querySelector('button[type="submit"]');

      if (!submitButton) return;

      const syncSubmitState = () => {
        submitButton.disabled = !form.checkValidity();
      };

      form.addEventListener("input", syncSubmitState);
      form.addEventListener("change", syncSubmitState);
      form.addEventListener("reset", () => {
        window.requestAnimationFrame(syncSubmitState);
      });

      syncSubmitState();
    });
  };
  root.addEventListener("wheel", handleWheel, { passive: false });
  root.addEventListener("touchstart", handleTouchStart, {
    passive: true,
  });
  root.addEventListener("touchmove", handleTouchMove, { passive: true });
  root.addEventListener("touchend", handleTouchEnd, { passive: true });

  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("resize", handleResize, { passive: true });

  indicatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      animateToSection(Number(button.dataset.scrollIndex));
    });
  });

  targetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      animateToSection(Number(button.dataset.scrollTarget));
    });
  });

  prevButton?.addEventListener("click", () => {
    animateToSection(state.currentIndex - 1);
  });

  nextButton?.addEventListener("click", () => {
    animateToSection(state.currentIndex + 1);
  });

  setTrackPosition();
  resetBackgroundLayers();

  const warmNextBackground = () => {
    hydrateBackgroundLayer(bgImages[state.currentIndex + 1]);
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(warmNextBackground, { timeout: 2000 });
  } else {
    window.setTimeout(warmNextBackground, 1500);
  }

  initSectionNavigator();
  setVisualActiveIndex(state.currentIndex, { immediate: true });
  initClearableInputs();
  initPurposeControls();
  initTrialFormState();

  window.setTimeout(
    () => {
      root.classList.remove("is-hero-intro");
    },
    prefersReducedMotion.matches ? 0 : SETTINGS.heroIntroDuration,
  );

  observeOnce({
    selector: SELECTOR.divider,
    threshold: 0.3,
    onEnter: (target) => {
      target.classList.add("is-active");
      revealAfterDivider(target);
    },
  });

  revealActiveSectionContent();
})();
