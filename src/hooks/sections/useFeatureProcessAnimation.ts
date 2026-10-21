"use client";
import type { RefObject } from "react";
import { gsap } from "gsap";
import {
  useSectionAnimation,
  elements,
  matchesAny,
  bindReveal,
  type AnimationSetup,
} from "@/hooks/useSectionAnimation";
const setup: AnimationSetup = (section, reduced, cleanup) => {
  // Feature process card appearence
  for (const element of elements(
    section,
    '[data-motion="featureProcess-processV1ContentWrap"]',
  )) {
    if (!matchesAny(["(min-width: 992px)"])) continue;
    const timeline = gsap.timeline({ paused: true });
    gsap.set(
      elements(element, ".rt-process-v1-icon-wrap.rt-border-radius-tiny-15"),
      {
        scaleX: 0,
        scaleY: 0,
      },
    );
    gsap.set(
      elements(element, ".rt-leanear-border-vartical.rt-border-radius-20"),
      {
        scaleX: 0,
        scaleY: 0,
      },
    );
    gsap.set(elements(element, ".rt-process-line-image-block"), {
      height: "0%",
    });
    timeline.to(
      elements(element, ".rt-process-v1-icon-wrap.rt-border-radius-tiny-15"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      0,
    );
    timeline.to(
      elements(element, ".rt-process-line-image-block"),
      { ...{ height: "100%" }, duration: reduced ? 0 : 1, ease: "none" },
      0.7,
    );
    timeline.to(
      elements(element, ".rt-leanear-border-vartical.rt-border-radius-20"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      1.5,
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
    '[data-motion="featureProcess-gapOff"]',
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

  // Blink star animation v2
  for (const element of elements(
    section,
    '[data-motion="featureProcess-blinkStar"]',
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

  // growIn
  for (const element of elements(
    section,
    '[data-motion="featureProcess-processV1IconWrap"]',
  )) {
    if (
      !matchesAny([
        "(min-width: 768px) and (max-width: 991px)",
        "(min-width: 480px) and (max-width: 767px)",
        "(max-width: 479px)",
      ])
    )
      continue;
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

  // growIn
  for (const element of elements(
    section,
    '[data-motion="featureProcess-leanearBorderVartical"], [data-motion="featureProcess-leanearBorderVartical-2"], [data-motion="featureProcess-leanearBorderVartical-3"]',
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
export function useFeatureProcessAnimation(ref: RefObject<HTMLElement | null>) {
  useSectionAnimation(ref, setup);
}
