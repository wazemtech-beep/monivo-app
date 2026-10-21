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
    '[data-motion="featureDetails-button"]',
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
    '[data-motion="featureDetails-button"]',
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
    '[data-motion="featureDetails-subTextMain"]',
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
    '[data-motion="featureDetails-subTextMain"]',
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

  // Feature card marquee animation
  for (const element of elements(
    section,
    '[data-motion="featureDetails-featureV1Card"]',
  )) {
    const timeline = gsap.timeline({ paused: true, repeat: reduced ? 0 : -1 });
    gsap.set(elements(section, ".rt-feature-card-marquee-train"), {
      yPercent: 0,
    });
    timeline.to(
      elements(section, ".rt-feature-card-marquee-train"),
      { ...{ yPercent: -100 }, duration: reduced ? 0 : 5, ease: "none" },
      0,
    );
    timeline.to(
      elements(section, ".rt-feature-card-marquee-train"),
      { ...{ yPercent: 0 }, duration: reduced ? 0 : 0, ease: "none" },
      5,
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
    '[data-motion="featureDetails-gapOff"], [data-motion="featureDetails-gapOff-2"]',
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
    '[data-motion="featureDetails-buttonWrap"]',
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

  // growIn
  for (const element of elements(
    section,
    '[data-motion="featureDetails-featureCardWrap"], [data-motion="featureDetails-featureCardWrap-2"]',
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
        offset: 20,
        unit: "%",
        delay: 0.4,
        loop: false,
      });
  }

  // growIn
  for (const element of elements(
    section,
    '[data-motion="featureDetails-featureCardWrap-3"]',
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
        offset: 20,
        unit: "%",
        delay: 0.6,
        loop: false,
      });
  }

  // growIn
  for (const element of elements(
    section,
    '[data-motion="featureDetails-featureCardWrap-4"]',
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
        offset: 20,
        unit: "%",
        delay: 0.7,
        loop: false,
      });
  }

  // Feature card client popup
  for (const element of elements(
    section,
    '[data-motion="featureDetails-featureCardClientPopup"]',
  )) {
    const timeline = gsap.timeline({ paused: true, repeat: reduced ? 0 : -1 });
    gsap.set(elements(section, ".rt-feature-card-client-popup.rt-one"), {
      x: "0.625rem",
      y: "0.625rem",
    });
    timeline.to(
      elements(section, ".rt-feature-card-client-popup.rt-one"),
      {
        ...{ x: "0.625rem", y: "0.625rem" },
        duration: reduced ? 0 : 0.7,
        ease: "none",
      },
      0,
    );
    timeline.to(
      elements(section, ".rt-feature-card-client-popup.rt-one"),
      {
        ...{ x: "0rem", y: "0rem" },
        duration: reduced ? 0 : 0.7,
        ease: "none",
      },
      0.7,
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

  // Feature card client popup v2
  for (const element of elements(
    section,
    '[data-motion="featureDetails-featureCardClientPopup-2"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(section, ".rt-feature-card-client-popup.rt-two"), {
      x: "0.625rem",
      y: "0.625rem",
    });
    timeline.to(
      elements(section, ".rt-feature-card-client-popup.rt-two"),
      {
        ...{ x: "0.625rem", y: "0.625rem" },
        duration: reduced ? 0 : 0.7,
        ease: "none",
      },
      0,
    );
    timeline.to(
      elements(section, ".rt-feature-card-client-popup.rt-two"),
      {
        ...{ x: "0rem", y: "0rem" },
        duration: reduced ? 0 : 0.7,
        ease: "none",
      },
      0.7,
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
    '[data-motion="featureDetails-div"]',
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
        offset: 12,
        unit: "%",
        delay: 0.2,
        loop: false,
      });
  }
};
export function useFeatureDetailsAnimation(ref: RefObject<HTMLElement | null>) {
  useSectionAnimation(ref, setup);
}
