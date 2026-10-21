"use client";
import type { RefObject } from "react";
import { gsap } from "gsap";
import {
  useSectionAnimation,
  elements,
  bindReveal,
  bindHover,
  type AnimationSetup,
} from "@/hooks/useSectionAnimation";
const setup: AnimationSetup = (section, reduced, cleanup) => {
  // Button Hover In
  for (const element of elements(
    section,
    '[data-motion="featuresHero-button"]',
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
    '[data-motion="featuresHero-button"]',
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
    '[data-motion="featuresHero-subTextMain"]',
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
    '[data-motion="featuresHero-subTextMain"]',
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

  // Feature hero graph bar animation
  for (const element of elements(
    section,
    '[data-motion="featuresHero-featureHeroDashboardImage"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".rt-feature-dashboard-bar-image.rt-one"), {
      width: "100%",
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-feature-dashboard-bar-image.rt-two"), {
      width: "100%",
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-feature-dashboard-bar-image.rt-three"), {
      width: "100%",
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-feature-dashboard-bar-image.rt-four"), {
      width: "100%",
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-feature-dashboard-bar-image.rt-five"), {
      width: "100%",
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-feature-dashboard-bar-image.rt-six"), {
      width: "100%",
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-feature-dashboard-bar-image.rt-seven"), {
      width: "100%",
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-feature-dashboard-bar-image.rt-eight"), {
      width: "100%",
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-feature-dashboard-bar-image.rt-nine"), {
      width: "100%",
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-feature-dashboard-bar-image.rt-ten"), {
      width: "100%",
      height: "0rem",
    });
    timeline.to(
      elements(element, ".rt-feature-dashboard-bar-image.rt-one"),
      {
        ...{ width: "100%", height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      1,
    );
    timeline.to(
      elements(element, ".rt-feature-dashboard-bar-image.rt-two"),
      {
        ...{ width: "100%", height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      1.2,
    );
    timeline.to(
      elements(element, ".rt-feature-dashboard-bar-image.rt-three"),
      {
        ...{ width: "100%", height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      1.4,
    );
    timeline.to(
      elements(element, ".rt-feature-dashboard-bar-image.rt-four"),
      {
        ...{ width: "100%", height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      1.6,
    );
    timeline.to(
      elements(element, ".rt-feature-dashboard-bar-image.rt-five"),
      {
        ...{ width: "100%", height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      1.8,
    );
    timeline.to(
      elements(element, ".rt-feature-dashboard-bar-image.rt-six"),
      {
        ...{ width: "100%", height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      2,
    );
    timeline.to(
      elements(element, ".rt-feature-dashboard-bar-image.rt-seven"),
      {
        ...{ width: "100%", height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      2.2,
    );
    timeline.to(
      elements(element, ".rt-feature-dashboard-bar-image.rt-eight"),
      {
        ...{ width: "100%", height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      2.4,
    );
    timeline.to(
      elements(element, ".rt-feature-dashboard-bar-image.rt-nine"),
      {
        ...{ width: "100%", height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      2.6,
    );
    timeline.to(
      elements(element, ".rt-feature-dashboard-bar-image.rt-ten"),
      {
        ...{ width: "100%", height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      2.8,
    );
    if (reduced) timeline.progress(1);
    else
      bindReveal(element, timeline, {
        offset: 12,
        unit: "%",
        delay: 0,
        loop: false,
      });
  }

  // Feature hero animation
  for (const element of elements(
    section,
    '[data-motion="featuresHero-featureHeroMain"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(section, ".rt-feature-hero-icon-wrap.rt-one"), {
      x: "45vw",
      y: "22vh",
    });
    gsap.set(elements(section, ".rt-feature-hero-icon-wrap.rt-two"), {
      x: "-48vw",
      y: "22vh",
    });
    gsap.set(elements(section, ".rt-feature-hero-icon-wrap.rt-two"), {
      opacity: 0,
    });
    gsap.set(elements(section, ".rt-feature-hero-icon-wrap.rt-three"), {
      x: "38vw",
      y: "5vh",
    });
    gsap.set(elements(section, ".rt-feature-hero-icon-wrap.rt-three"), {
      opacity: 0,
    });
    gsap.set(elements(section, ".rt-feature-hero-icon-wrap.rt-four"), {
      x: "-41vw",
      y: "5vh",
    });
    gsap.set(elements(section, ".rt-feature-hero-icon-wrap.rt-four"), {
      opacity: 0,
    });
    gsap.set(elements(section, ".rt-feature-hero-icon-wrap.rt-five"), {
      x: "24vw",
      y: "-14vh",
    });
    gsap.set(elements(section, ".rt-feature-hero-icon-wrap.rt-five"), {
      opacity: 0,
    });
    gsap.set(elements(section, ".rt-feature-hero-icon-wrap.rt-six"), {
      x: "-26vw",
      y: "-14vh",
    });
    gsap.set(elements(section, ".rt-feature-hero-icon-wrap.rt-six"), {
      opacity: 0,
    });
    gsap.set(elements(section, ".rt-feature-hero-icon-wrap.rt-one"), {
      opacity: 0,
    });
    timeline.to(
      elements(section, ".rt-feature-hero-icon-wrap.rt-one"),
      {
        ...{ x: "0vw", y: "0vh" },
        duration: reduced ? 0 : 1.2,
        ease: "power1.inOut",
      },
      0,
    );
    timeline.to(
      elements(section, ".rt-feature-hero-icon-wrap.rt-six"),
      {
        ...{ x: "0vw", y: "0vh" },
        duration: reduced ? 0 : 1.2,
        ease: "power1.inOut",
      },
      0,
    );
    timeline.to(
      elements(section, ".rt-feature-hero-icon-wrap.rt-five"),
      {
        ...{ x: "0vw", y: "0vh" },
        duration: reduced ? 0 : 1.2,
        ease: "power1.inOut",
      },
      0,
    );
    timeline.to(
      elements(section, ".rt-feature-hero-icon-wrap.rt-four"),
      {
        ...{ x: "0vw", y: "0vh" },
        duration: reduced ? 0 : 1.2,
        ease: "power1.inOut",
      },
      0,
    );
    timeline.to(
      elements(section, ".rt-feature-hero-icon-wrap.rt-three"),
      {
        ...{ x: "0vw", y: "0vh" },
        duration: reduced ? 0 : 1.2,
        ease: "power1.inOut",
      },
      0,
    );
    timeline.to(
      elements(section, ".rt-feature-hero-icon-wrap.rt-two"),
      {
        ...{ x: "0vw", y: "0vh" },
        duration: reduced ? 0 : 1.2,
        ease: "power1.inOut",
      },
      0,
    );
    timeline.to(
      elements(section, ".rt-feature-hero-icon-wrap.rt-one"),
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1.5, ease: "power1.inOut" },
      0.2,
    );
    timeline.to(
      elements(section, ".rt-feature-hero-icon-wrap.rt-six"),
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1.5, ease: "power1.inOut" },
      0.2,
    );
    timeline.to(
      elements(section, ".rt-feature-hero-icon-wrap.rt-five"),
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1.5, ease: "power1.inOut" },
      0.2,
    );
    timeline.to(
      elements(section, ".rt-feature-hero-icon-wrap.rt-four"),
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1.5, ease: "power1.inOut" },
      0.2,
    );
    timeline.to(
      elements(section, ".rt-feature-hero-icon-wrap.rt-three"),
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1.5, ease: "power1.inOut" },
      0.2,
    );
    timeline.to(
      elements(section, ".rt-feature-hero-icon-wrap.rt-two"),
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1.5, ease: "power1.inOut" },
      0.2,
    );
    if (reduced) timeline.progress(1);
    else
      bindReveal(element, timeline, {
        offset: 0,
        unit: "%",
        delay: 0,
        loop: false,
      });
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="featuresHero-gapOff"]',
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
    '[data-motion="featuresHero-gapOff-2"]',
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
        delay: 0.3,
        loop: false,
      });
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="featuresHero-buttonWrap"]',
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

  // growIn
  for (const element of elements(
    section,
    '[data-motion="featuresHero-featureHeroDashboardLeftPart-3"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      {
        ...{ scaleX: 0.7500000000000001, scaleY: 0.7500000000000001 },
        duration: reduced ? 0 : 0,
        ease: "none",
      },
      0,
    );
    timeline.to(
      [element],
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 1,
        ease: "power3.out",
      },
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
        offset: 12,
        unit: "%",
        delay: 0.3,
        loop: false,
      });
  }

  // growIn
  for (const element of elements(
    section,
    '[data-motion="featuresHero-featureHeroDashboardLeftPart-4"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      {
        ...{ scaleX: 0.7500000000000001, scaleY: 0.7500000000000001 },
        duration: reduced ? 0 : 0,
        ease: "none",
      },
      0,
    );
    timeline.to(
      [element],
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 1,
        ease: "power3.out",
      },
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
        offset: 12,
        unit: "%",
        delay: 0.4,
        loop: false,
      });
  }

  // growIn
  for (const element of elements(
    section,
    '[data-motion="featuresHero-leanearBorderLandscape"], [data-motion="featuresHero-featureHeroDashboardLeftPart"], [data-motion="featuresHero-featureHeroDashboardLeftPart-2"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      {
        ...{ scaleX: 0.7500000000000001, scaleY: 0.7500000000000001 },
        duration: reduced ? 0 : 0,
        ease: "none",
      },
      0,
    );
    timeline.to(
      [element],
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 1,
        ease: "power3.out",
      },
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
        offset: 12,
        unit: "%",
        delay: 0.2,
        loop: false,
      });
  }
};
export function useFeaturesHeroAnimation(ref: RefObject<HTMLElement | null>) {
  useSectionAnimation(ref, setup);
}
