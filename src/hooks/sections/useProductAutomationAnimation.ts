"use client";
import type { RefObject } from "react";
import { gsap } from "gsap";
import {
  useSectionAnimation,
  elements,
  matchesAny,
  bindReveal,
  bindHover,
  bindScrollTimeline,
  type AnimationSetup,
} from "@/hooks/useSectionAnimation";
const setup: AnimationSetup = (section, reduced, cleanup) => {
  // Button Hover In
  for (const element of elements(
    section,
    '[data-motion="productAutomation-button"]',
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
    '[data-motion="productAutomation-button"]',
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

  // Service automation popup animation
  for (const element of elements(
    section,
    '[data-motion="productAutomation-automationV2OptionBlock"]',
  )) {
    const timeline = gsap.timeline({ paused: true, repeat: reduced ? 0 : -1 });
    gsap.set(elements(element, ".rt-automation-v2-icon-popup-one"), {
      scaleX: 0,
      scaleY: 0,
    });
    gsap.set(elements(element, ".rt-automation-v2-icon-popup-two"), {
      scaleX: 0,
      scaleY: 0,
    });
    timeline.to(
      elements(element, ".rt-automation-v2-icon-popup-one"),
      {
        ...{ scaleX: 0.8, scaleY: 0.8 },
        duration: reduced ? 0 : 1,
        ease: "power1.inOut",
      },
      0,
    );
    timeline.to(
      elements(element, ".rt-automation-v2-icon-popup-two"),
      {
        ...{ scaleX: 0.7, scaleY: 0.7 },
        duration: reduced ? 0 : 1,
        ease: "power1.inOut",
      },
      0.1,
    );
    timeline.to(
      elements(element, ".rt-automation-v2-icon-popup-two"),
      {
        ...{ scaleX: 0, scaleY: 0 },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      1.1,
    );
    timeline.to(
      elements(element, ".rt-automation-v2-icon-popup-one"),
      {
        ...{ scaleX: 0, scaleY: 0 },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      1.2000000000000002,
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

  // Service automation line animation
  for (const element of [section]) {
    if (
      !matchesAny([
        "(min-width: 992px)",
        "(min-width: 768px) and (max-width: 991px)",
        "(min-width: 480px) and (max-width: 767px)",
      ])
    )
      continue;
    const timeline = gsap.timeline({ paused: true });
    timeline.to({ clock: 0 }, { clock: 1, duration: 1, ease: "none" }, 0);
    gsap.set(elements(element, ".rt-automation-v2-icon-wrap.rt-one"), {
      opacity: 0.6,
    });
    timeline.fromTo(
      elements(element, ".rt-automation-v2-icon-wrap.rt-one"),
      { opacity: 0.6 },
      { opacity: 1, duration: 0.01, ease: "none", immediateRender: false },
      0,
    );
    gsap.set(elements(element, ".rt-automation-v2-optionl-ine"), {
      width: "0%",
    });
    timeline.fromTo(
      elements(element, ".rt-automation-v2-optionl-ine"),
      { width: "0%" },
      { width: "23%", duration: 0.36, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(element, ".rt-automation-v2-optionl-ine"),
      { width: "23%" },
      {
        width: "69%",
        duration: 0.09000000000000002,
        ease: "none",
        immediateRender: false,
      },
      0.36,
    );
    timeline.fromTo(
      elements(element, ".rt-automation-v2-optionl-ine"),
      { width: "69%" },
      {
        width: "100%",
        duration: 0.24999999999999994,
        ease: "none",
        immediateRender: false,
      },
      0.45,
    );
    gsap.set(elements(element, ".rt-automation-v2-icon-wrap.rt-two"), {
      opacity: 0.6,
    });
    timeline.fromTo(
      elements(element, ".rt-automation-v2-icon-wrap.rt-two"),
      { opacity: 0.6 },
      {
        opacity: 1,
        duration: 0.010000000000000009,
        ease: "none",
        immediateRender: false,
      },
      0.35,
    );
    gsap.set(elements(element, ".rt-automation-v2-icon-wrap.rt-four"), {
      opacity: 0.6,
    });
    timeline.fromTo(
      elements(element, ".rt-automation-v2-icon-wrap.rt-four"),
      { opacity: 0.6 },
      {
        opacity: 1,
        duration: 0.010000000000000009,
        ease: "none",
        immediateRender: false,
      },
      0.44,
    );
    gsap.set(elements(element, ".rt-automation-v2-icon-wrap.rt-five"), {
      opacity: 0.6,
    });
    timeline.fromTo(
      elements(element, ".rt-automation-v2-icon-wrap.rt-five"),
      { opacity: 0.6 },
      {
        opacity: 1,
        duration: 0.010000000000000009,
        ease: "none",
        immediateRender: false,
      },
      0.62,
    );
    if (reduced) timeline.progress(1);
    else
      cleanup.push(
        bindScrollTimeline(element, timeline, {
          page: false,
          smoothing: 0.5,
          startsEntering: true,
          startsExiting: false,
          startOffset: 0,
          endOffset: 0,
        }),
      );
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="productAutomation-gapOff"]',
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
    '[data-motion="productAutomation-gapOff-2"]',
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
};
export function useProductAutomationAnimation(
  ref: RefObject<HTMLElement | null>,
) {
  useSectionAnimation(ref, setup);
}
