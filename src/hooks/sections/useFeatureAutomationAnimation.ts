"use client";
import type { RefObject } from "react";
import { gsap } from "gsap";
import {
  useSectionAnimation,
  elements,
  bindReveal,
  type AnimationSetup,
} from "@/hooks/useSectionAnimation";
const setup: AnimationSetup = (section, reduced, cleanup) => {
  // Feature autonation bar animation
  for (const element of elements(
    section,
    '[data-motion="featureAutomation-automationV1ImageWrap"]',
  )) {
    const timeline = gsap.timeline({ paused: true, repeat: reduced ? 0 : -1 });
    gsap.set(elements(element, ".rt-automation-v1-dashboard-bar.rt-one"), {
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-automation-v1-dashboard-bar.rt-two"), {
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-automation-v1-dashboard-bar.rt-three"), {
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-automation-v1-dashboard-bar.rt-four"), {
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-automation-v1-dashboard-bar.rt-five"), {
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-automation-v1-dashboard-bar.rt-six"), {
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-automation-v1-dashboard-bar.rt-seven"), {
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-automation-v1-dashboard-bar.rt-eight"), {
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-automation-v1-dashboard-bar.rt-nine"), {
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-automation-v1-dashboard-bar.rt-ten"), {
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-automation-v1-dashboard-bar.rt-eleven"), {
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-automation-v1-dashboard-bar.rt-twelve"), {
      height: "0rem",
    });
    timeline.to(
      elements(element, ".rt-automation-v1-dashboard-bar.rt-one"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      0,
    );
    timeline.to(
      elements(element, ".rt-automation-v1-dashboard-bar.rt-two"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      0.2,
    );
    timeline.to(
      elements(element, ".rt-automation-v1-dashboard-bar.rt-three"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      0.4,
    );
    timeline.to(
      elements(element, ".rt-automation-v1-dashboard-bar.rt-four"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      0.6,
    );
    timeline.to(
      elements(element, ".rt-automation-v1-dashboard-bar.rt-five"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      0.8,
    );
    timeline.to(
      elements(element, ".rt-automation-v1-dashboard-bar.rt-six"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      1,
    );
    timeline.to(
      elements(element, ".rt-automation-v1-dashboard-bar.rt-seven"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      1.2,
    );
    timeline.to(
      elements(element, ".rt-automation-v1-dashboard-bar.rt-eight"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      1.4,
    );
    timeline.to(
      elements(element, ".rt-automation-v1-dashboard-bar.rt-nine"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      1.6,
    );
    timeline.to(
      elements(element, ".rt-automation-v1-dashboard-bar.rt-ten"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      1.8,
    );
    timeline.to(
      elements(element, ".rt-automation-v1-dashboard-bar.rt-eleven"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      2,
    );
    timeline.to(
      elements(element, ".rt-automation-v1-dashboard-bar.rt-twelve"),
      { ...{ height: "auto" }, duration: reduced ? 0 : 0.5, ease: "none" },
      2.2,
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

  // Counter
  for (const element of elements(
    section,
    '[data-motion="featureAutomation-counterBoxH2"], [data-motion="featureAutomation-counterBoxH2-3"], [data-motion="featureAutomation-counterBoxH2-2"], [data-motion="featureAutomation-counterBoxH2-4"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".rt-counter-train"), { yPercent: 0 });
    timeline.to(
      elements(element, ".rt-counter-train"),
      { ...{ yPercent: -100 }, duration: reduced ? 0 : 2, ease: "none" },
      1,
    );
    if (reduced) timeline.progress(1);
    else
      bindReveal(element, timeline, {
        offset: 10,
        unit: "%",
        delay: 0,
        loop: false,
      });
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="featureAutomation-gapOff"], [data-motion="featureAutomation-automationV1ImageBlock"]',
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
        delay: 0.1,
        loop: false,
      });
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="featureAutomation-gapOff-2"]',
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
    '[data-motion="featureAutomation-automationCounterWrap"]',
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
    '[data-motion="featureAutomation-automationCounterWrap-3"]',
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

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="featureAutomation-automationCounterWrap-2"]',
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
        delay: 0.5,
        loop: false,
      });
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="featureAutomation-automationCounterWrap-4"]',
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
        delay: 0.6,
        loop: false,
      });
  }

  // growIn
  for (const element of elements(
    section,
    '[data-motion="featureAutomation-automationV1ButtonWrap"]',
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
        delay: 0.2,
        loop: false,
      });
  }

  // slideInLeft
  for (const element of elements(
    section,
    '[data-motion="featureAutomation-automationAppWrap"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      { ...{ x: -100, y: 0 }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      [element],
      { ...{ opacity: 1 }, duration: reduced ? 0 : 1, ease: "power3.out" },
      0,
    );
    timeline.to(
      [element],
      { ...{ x: 0, y: 0 }, duration: reduced ? 0 : 1, ease: "power3.out" },
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

  // Blink star animation
  for (const element of elements(
    section,
    '[data-motion="featureAutomation-blinkStar"]',
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
};
export function useFeatureAutomationAnimation(
  ref: RefObject<HTMLElement | null>,
) {
  useSectionAnimation(ref, setup);
}
