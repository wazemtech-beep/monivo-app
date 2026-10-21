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
  // Sub text linear glow animation
  for (const element of elements(
    section,
    '[data-motion="solutions-subTextMain"]',
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
    '[data-motion="solutions-subTextMain"]',
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

  // About unique solution card appearence
  for (const element of elements(
    section,
    '[data-motion="solutions-uniqueSolutionV1CardWrap"]',
  )) {
    const timeline = gsap.timeline({ paused: true, repeat: reduced ? 0 : -1 });
    gsap.set(elements(element, ".rt-unique-solution-v1-card-icon-popup"), {
      scaleX: 0.8,
      scaleY: 0.8,
    });
    timeline.to(
      elements(element, ".rt-unique-solution-v1-card-icon-popup"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.8,
        ease: "none",
      },
      0,
    );
    timeline.to(
      elements(element, ".rt-unique-solution-v1-card-icon-popup"),
      {
        ...{ scaleX: 0.7, scaleY: 0.7 },
        duration: reduced ? 0 : 0.8,
        ease: "none",
      },
      0.8,
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

  // Unique solution card hover in
  for (const element of elements(
    section,
    '[data-motion="solutions-uniqueSolutionV1Card"], [data-motion="solutions-uniqueSolutionV1Card-3"], [data-motion="solutions-uniqueSolutionV1Card-2"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".rt-unique-solution-v1-card-plus-icon"), {
      rotation: 0,
    });
    timeline.to(
      elements(element, ".rt-unique-solution-v1-card-plus-icon"),
      {
        ...{ rotation: 180 },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      0,
    );
    cleanup.push(bindHover(element, timeline, true));
  }

  // Unique solution card hover out
  for (const element of elements(
    section,
    '[data-motion="solutions-uniqueSolutionV1Card"], [data-motion="solutions-uniqueSolutionV1Card-3"], [data-motion="solutions-uniqueSolutionV1Card-2"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      elements(element, ".rt-unique-solution-v1-card-plus-icon"),
      { ...{ rotation: 0 }, duration: reduced ? 0 : 0.5, ease: "none" },
      0,
    );
    cleanup.push(bindHover(element, timeline, false));
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="solutions-gapOff"], [data-motion="solutions-uniqueSolutionV1CardBlock"], [data-motion="solutions-uniqueSolutionV1CardBlock-3"]',
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

  // slideInTop
  for (const element of elements(
    section,
    '[data-motion="solutions-uniqueSolutionV1CardBlock-2"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      { ...{ x: 0, y: -100 }, duration: reduced ? 0 : 0, ease: "none" },
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
};
export function useSolutionsAnimation(ref: RefObject<HTMLElement | null>) {
  useSectionAnimation(ref, setup);
}
