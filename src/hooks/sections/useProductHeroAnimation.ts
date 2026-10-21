"use client";
import type { RefObject } from "react";
import { gsap } from "gsap";
import {
  useSectionAnimation,
  elements,
  bindReveal,
  bindHover,
  bindScrollTimeline,
  type AnimationSetup,
} from "@/hooks/useSectionAnimation";
const setup: AnimationSetup = (section, reduced, cleanup) => {
  // Button Hover In
  for (const element of elements(
    section,
    '[data-motion="productHero-button"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".rt-button-font.rt-one"), { yPercent: 0 });
    gsap.set(elements(element, ".rt-button-star-image"), {
      scaleX: 0.8,
      scaleY: 0.8,
    });
    gsap.set(elements(element, ".rt-button-font.rt-two"), { yPercent: 0 });
    timeline.to(
      elements(element, ".rt-button-font.rt-one"),
      {
        ...{ yPercent: -100 },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      0,
    );
    timeline.to(
      elements(element, ".rt-button-font.rt-two"),
      {
        ...{ yPercent: -100 },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      0,
    );
    timeline.to(
      elements(element, ".rt-button-star-image"),
      {
        ...{ scaleX: 1.2, scaleY: 1.2 },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      0,
    );
    cleanup.push(bindHover(element, timeline, true));
  }

  // Button Hover out
  for (const element of elements(
    section,
    '[data-motion="productHero-button"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      elements(element, ".rt-button-font.rt-one"),
      { ...{ yPercent: 0 }, duration: reduced ? 0 : 0.5, ease: "power1.inOut" },
      0,
    );
    timeline.to(
      elements(element, ".rt-button-star-image"),
      {
        ...{ scaleX: 0.8, scaleY: 0.8 },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      0,
    );
    timeline.to(
      elements(element, ".rt-button-font.rt-two"),
      { ...{ yPercent: 0 }, duration: reduced ? 0 : 0.5, ease: "power1.inOut" },
      0,
    );
    cleanup.push(bindHover(element, timeline, false));
  }

  // Sub text linear glow animation
  for (const element of elements(
    section,
    '[data-motion="productHero-subTextMain"]',
  )) {
    const timeline = gsap.timeline({ paused: true, repeat: reduced ? 0 : -1 });
    timeline.to(
      elements(element, ".rt-gradient-box"),
      { ...{ rotation: 0 }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".rt-gradient-box"),
      { ...{ rotation: 359 }, duration: reduced ? 0 : 4.5, ease: "none" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      bindReveal(element, timeline, {
        offset: 0,
        unit: "%",
        delay: 0,
        loop: true,
      });
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="productHero-subTextMain"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      { ...{ x: 0, y: 100 }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      [element],
      { ...{ x: 0, y: 0 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    timeline.to(
      [element],
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      bindReveal(element, timeline, {
        offset: 0,
        unit: "%",
        delay: 0.1,
        loop: false,
      });
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="productHero-gapOff"], [data-motion="productHero-gapOff-2"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      { ...{ x: 0, y: 100 }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      [element],
      { ...{ x: 0, y: 0 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    timeline.to(
      [element],
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      bindReveal(element, timeline, {
        offset: 20,
        unit: "%",
        delay: 0.2,
        loop: false,
      });
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="productHero-buttonWrap"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      { ...{ x: 0, y: 100 }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      [element],
      { ...{ x: 0, y: 0 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    timeline.to(
      [element],
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      bindReveal(element, timeline, {
        offset: 20,
        unit: "%",
        delay: 0.4,
        loop: false,
      });
  }

  // service hero dashboard rotate animation
  for (const element of [section]) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to({ clock: 0 }, { clock: 1, duration: 1, ease: "none" }, 0);
    gsap.set(
      elements(element, ".rt-service-hero-dashboard-wrap.rt-full-width"),
      { rotationX: 67 },
    );
    timeline.fromTo(
      elements(element, ".rt-service-hero-dashboard-wrap.rt-full-width"),
      { rotationX: 67 },
      { rotationX: 0, duration: 0.18, ease: "none", immediateRender: false },
      0.42,
    );
    gsap.set(
      elements(element, ".rt-service-hero-dashboard-wrap.rt-full-width"),
      {
        y: "-8.125rem",
      },
    );
    timeline.fromTo(
      elements(element, ".rt-service-hero-dashboard-wrap.rt-full-width"),
      { y: "-8.125rem" },
      { y: "0rem", duration: 0.18, ease: "none", immediateRender: false },
      0.42,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindScrollTimeline(element, timeline, {
          page: false,
          smoothing: 0.9,
          startsEntering: true,
          startsExiting: false,
          startOffset: 0,
          endOffset: 0,
        }),
      );
  }

  // Service hero dashboard graph animation
  for (const element of elements(
    section,
    '[data-motion="productHero-dashboardGraphImage"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(section, ".rt-service-dashboard-bar.rt-one"), {
      height: "0rem",
    });
    gsap.set(elements(section, ".rt-service-dashboard-bar.rt-two"), {
      height: "0rem",
    });
    gsap.set(elements(section, ".rt-service-dashboard-bar.rt-three"), {
      height: "0rem",
    });
    gsap.set(elements(section, ".rt-service-dashboard-bar.rt-four"), {
      height: "0rem",
    });
    gsap.set(elements(section, ".rt-service-dashboard-bar.rt-five"), {
      height: "0rem",
    });
    gsap.set(elements(section, ".rt-service-dashboard-bar.rt-six"), {
      height: "0rem",
    });
    gsap.set(
      elements(
        section,
        ".rt-service-dashboard-bar.rt-leanear-background.rt-seven",
      ),
      {
        height: "0rem",
      },
    );
    gsap.set(
      elements(
        section,
        ".rt-service-dashboard-bar.rt-leanear-background.rt-eight",
      ),
      {
        height: "0rem",
      },
    );
    gsap.set(
      elements(
        section,
        ".rt-service-dashboard-bar.rt-leanear-background.rt-nine",
      ),
      {
        height: "0rem",
      },
    );
    gsap.set(elements(section, ".rt-service-dashboard-bar.rt-ten"), {
      height: "0rem",
    });
    gsap.set(elements(section, ".rt-service-dashboard-bar.rt-eleven"), {
      height: "0rem",
    });
    gsap.set(elements(section, ".rt-service-dashboard-bar.rt-twelve"), {
      height: "0rem",
    });
    gsap.set(elements(section, ".rt-service-dashboard-bar.rt-thirteen"), {
      height: "0rem",
    });
    gsap.set(elements(section, ".rt-service-dashboard-bar.rt-fourteen"), {
      height: "0rem",
    });
    gsap.set(elements(section, ".rt-service-dashboard-bar.rt-fifteen"), {
      height: "0rem",
    });
    timeline.to(
      elements(section, ".rt-service-dashboard-bar.rt-one"),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      0,
    );
    timeline.to(
      elements(section, ".rt-service-dashboard-bar.rt-two"),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      0.2,
    );
    timeline.to(
      elements(section, ".rt-service-dashboard-bar.rt-three"),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      0.4,
    );
    timeline.to(
      elements(section, ".rt-service-dashboard-bar.rt-four"),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      0.6,
    );
    timeline.to(
      elements(section, ".rt-service-dashboard-bar.rt-five"),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      0.8,
    );
    timeline.to(
      elements(section, ".rt-service-dashboard-bar.rt-six"),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      1,
    );
    timeline.to(
      elements(
        section,
        ".rt-service-dashboard-bar.rt-leanear-background.rt-seven",
      ),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      1.2,
    );
    timeline.to(
      elements(
        section,
        ".rt-service-dashboard-bar.rt-leanear-background.rt-eight",
      ),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      1.4,
    );
    timeline.to(
      elements(
        section,
        ".rt-service-dashboard-bar.rt-leanear-background.rt-nine",
      ),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      1.6,
    );
    timeline.to(
      elements(section, ".rt-service-dashboard-bar.rt-ten"),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      1.8,
    );
    timeline.to(
      elements(section, ".rt-service-dashboard-bar.rt-eleven"),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      2,
    );
    timeline.to(
      elements(section, ".rt-service-dashboard-bar.rt-twelve"),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      2.2,
    );
    timeline.to(
      elements(section, ".rt-service-dashboard-bar.rt-thirteen"),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      2.4,
    );
    timeline.to(
      elements(section, ".rt-service-dashboard-bar.rt-fourteen"),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      2.6,
    );
    timeline.to(
      elements(section, ".rt-service-dashboard-bar.rt-fifteen"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      2.8,
    );
    if (reduced) timeline.progress(1);
    else
      bindReveal(element, timeline, {
        offset: 40,
        unit: "%",
        delay: 0,
        loop: false,
      });
  }

  // Counter top bottom move
  for (const element of elements(
    section,
    '[data-motion="productHero-counterBoxH2"], [data-motion="productHero-counterBoxH2-2"], [data-motion="productHero-counterBoxH2-4"], [data-motion="productHero-counterBoxH2-3"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".rt-counter-train.rt-bottom-move"), {
      yPercent: 0,
    });
    gsap.set(elements(element, ".rt-counter-train.rt-top-move"), {
      yPercent: -100,
    });
    timeline.to(
      elements(element, ".rt-counter-train.rt-bottom-move"),
      {
        ...{ yPercent: -100 },
        duration: reduced ? 0 : 3,
        ease: "power1.inOut",
      },
      0.5,
    );
    timeline.to(
      elements(element, ".rt-counter-train.rt-top-move"),
      { ...{ yPercent: 0 }, duration: reduced ? 0 : 3, ease: "power1.inOut" },
      0.5,
    );
    if (reduced) timeline.progress(1);
    else
      bindReveal(element, timeline, {
        offset: 30,
        unit: "%",
        delay: 0,
        loop: false,
      });
  }

  // Service hero counter line animation
  for (const element of elements(
    section,
    '[data-motion="productHero-herviceHeroNumberUnderlineV2"], [data-motion="productHero-herviceHeroNumberUnderlineV2-3"], [data-motion="productHero-herviceHeroNumberUnderlineV2-2"], [data-motion="productHero-herviceHeroNumberUnderlineV2-4"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { width: "0rem" });
    timeline.to(
      [element],
      { ...{ width: "auto" }, duration: reduced ? 0 : 0.8, ease: "none" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      bindReveal(element, timeline, {
        offset: 35,
        unit: "%",
        delay: 0,
        loop: false,
      });
  }

  // Blink star animation
  for (const element of elements(
    section,
    '[data-motion="productHero-blinkStar"], [data-motion="productHero-blinkStar"]',
  )) {
    const timeline = gsap.timeline({ paused: true, repeat: reduced ? 0 : -1 });
    gsap.set(elements(element, ".rt-blink-star"), { scaleX: 0, scaleY: 0 });
    timeline.to(
      elements(element, ".rt-blink-star"),
      { ...{ scaleX: 1, scaleY: 1 }, duration: reduced ? 0 : 1, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".rt-blink-star"),
      {
        ...{ scaleX: 0.2, scaleY: 0.2 },
        duration: reduced ? 0 : 1,
        ease: "none",
      },
      1,
    );
    if (reduced) timeline.progress(1);
    else
      bindReveal(element, timeline, {
        offset: 0,
        unit: "%",
        delay: 0,
        loop: true,
      });
  }

  // Blink star animation v2
  for (const element of elements(
    section,
    '[data-motion="productHero-blinkStar-2"], [data-motion="productHero-blinkStar-2"]',
  )) {
    const timeline = gsap.timeline({ paused: true, repeat: reduced ? 0 : -1 });
    gsap.set(elements(element, ".rt-blink-star"), { scaleX: 1, scaleY: 1 });
    timeline.to(
      elements(element, ".rt-blink-star"),
      { ...{ scaleX: 0, scaleY: 0 }, duration: reduced ? 0 : 1, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".rt-blink-star"),
      { ...{ scaleX: 1, scaleY: 1 }, duration: reduced ? 0 : 1, ease: "none" },
      1,
    );
    if (reduced) timeline.progress(1);
    else
      bindReveal(element, timeline, {
        offset: 0,
        unit: "%",
        delay: 0,
        loop: true,
      });
  }
};
export function useProductHeroAnimation(ref: RefObject<HTMLElement | null>) {
  useSectionAnimation(ref, setup);
}
