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
    '[data-motion="productProcess-button"]',
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
    '[data-motion="productProcess-button"]',
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

  // Service process line animation
  for (const element of elements(
    section,
    '[data-motion="productProcess-processV2LeftWrap"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to({ clock: 0 }, { clock: 1, duration: 1, ease: "none" }, 0);
    gsap.set(elements(section, ".rt-process-v2-scroll-line"), { height: "0%" });
    timeline.fromTo(
      elements(section, ".rt-process-v2-scroll-line"),
      { height: "0%" },
      { height: "0%", duration: 0.2, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(section, ".rt-process-v2-scroll-line"),
      { height: "0%" },
      { height: "40%", duration: 0.2, ease: "none", immediateRender: false },
      0.2,
    );
    timeline.fromTo(
      elements(section, ".rt-process-v2-scroll-line"),
      { height: "40%" },
      {
        height: "82%",
        duration: 0.29999999999999993,
        ease: "none",
        immediateRender: false,
      },
      0.4,
    );
    gsap.set(elements(section, ".rt-process-v2-option.rt-one"), {
      opacity: 0.5,
    });
    timeline.fromTo(
      elements(section, ".rt-process-v2-option.rt-one"),
      { opacity: 0.5 },
      { opacity: 0.5, duration: 0.19, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(section, ".rt-process-v2-option.rt-one"),
      { opacity: 0.5 },
      {
        opacity: 1,
        duration: 0.010000000000000009,
        ease: "none",
        immediateRender: false,
      },
      0.19,
    );
    gsap.set(elements(section, ".rt-process-v2-option-dot.rt-one"), {
      borderColor: "rgba(0,0,0,0.26)",
    });
    timeline.fromTo(
      elements(section, ".rt-process-v2-option-dot.rt-one"),
      { borderColor: "rgba(0,0,0,0.26)" },
      {
        borderColor: "rgba(241,185,159,0)",
        duration: 0.19,
        ease: "none",
        immediateRender: false,
      },
      0,
    );
    timeline.fromTo(
      elements(section, ".rt-process-v2-option-dot.rt-one"),
      { borderColor: "rgba(241,185,159,0)" },
      {
        borderColor: "rgba(241,185,159,1)",
        duration: 0.010000000000000009,
        ease: "none",
        immediateRender: false,
      },
      0.19,
    );
    gsap.set(elements(section, ".rt-process-v2-option-dot.rt-two"), {
      borderColor: "rgba(0,0,0,0)",
    });
    timeline.fromTo(
      elements(section, ".rt-process-v2-option-dot.rt-two"),
      { borderColor: "rgba(0,0,0,0)" },
      {
        borderColor: "rgba(241,185,159,0)",
        duration: 0.19,
        ease: "none",
        immediateRender: false,
      },
      0.2,
    );
    timeline.fromTo(
      elements(section, ".rt-process-v2-option-dot.rt-two"),
      { borderColor: "rgba(241,185,159,0)" },
      {
        borderColor: "rgba(241,185,159,1)",
        duration: 0.010000000000000009,
        ease: "none",
        immediateRender: false,
      },
      0.39,
    );
    gsap.set(elements(section, ".rt-process-v2-option.rt-two"), {
      opacity: 0.5,
    });
    timeline.fromTo(
      elements(section, ".rt-process-v2-option.rt-two"),
      { opacity: 0.5 },
      { opacity: 0.5, duration: 0.19, ease: "none", immediateRender: false },
      0.2,
    );
    timeline.fromTo(
      elements(section, ".rt-process-v2-option.rt-two"),
      { opacity: 0.5 },
      {
        opacity: 1,
        duration: 0.010000000000000009,
        ease: "none",
        immediateRender: false,
      },
      0.39,
    );
    gsap.set(elements(section, ".rt-process-v2-option-dot.rt-three"), {
      borderColor: "rgba(0,0,0,0)",
    });
    timeline.fromTo(
      elements(section, ".rt-process-v2-option-dot.rt-three"),
      { borderColor: "rgba(0,0,0,0)" },
      {
        borderColor: "rgba(241,185,159,0)",
        duration: 0.2899999999999999,
        ease: "none",
        immediateRender: false,
      },
      0.4,
    );
    timeline.fromTo(
      elements(section, ".rt-process-v2-option-dot.rt-three"),
      { borderColor: "rgba(241,185,159,0)" },
      {
        borderColor: "rgba(241,185,159,1)",
        duration: 0.010000000000000009,
        ease: "none",
        immediateRender: false,
      },
      0.69,
    );
    gsap.set(elements(section, ".rt-process-v2-option.rt-three"), {
      opacity: 0.5,
    });
    timeline.fromTo(
      elements(section, ".rt-process-v2-option.rt-three"),
      { opacity: 0.5 },
      {
        opacity: 0.5,
        duration: 0.2899999999999999,
        ease: "none",
        immediateRender: false,
      },
      0.4,
    );
    timeline.fromTo(
      elements(section, ".rt-process-v2-option.rt-three"),
      { opacity: 0.5 },
      {
        opacity: 1,
        duration: 0.010000000000000009,
        ease: "none",
        immediateRender: false,
      },
      0.69,
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

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="productProcess-gapOff"], [data-motion="productProcess-processV2ClientTextBlock"]',
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
    '[data-motion="productProcess-gapOff-2"]',
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
    '[data-motion="productProcess-buttonWrap"]',
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

  // flipInLeft
  for (const element of elements(
    section,
    '[data-motion="productProcess-processV2MobileWrap"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      {
        ...{ rotationX: 0, rotationY: -90, rotation: 0 },
        duration: reduced ? 0 : 0,
        ease: "none",
      },
      0,
    );
    timeline.to(
      [element],
      {
        ...{ rotationX: 0, rotationY: 0, rotation: 0 },
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

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="productProcess-processV2OptionBlock"]',
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

  // slideInLeft
  for (const element of elements(
    section,
    '[data-motion="productProcess-processV2ClientImage-3"]',
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
        delay: 0.1,
        loop: false,
      });
  }

  // slideInLeft
  for (const element of elements(
    section,
    '[data-motion="productProcess-processV2ClientImage-2"]',
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
        delay: 0.2,
        loop: false,
      });
  }

  // slideInLeft
  for (const element of elements(
    section,
    '[data-motion="productProcess-processV2ClientImage"]',
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
};
export function useProductProcessAnimation(ref: RefObject<HTMLElement | null>) {
  useSectionAnimation(ref, setup);
}
