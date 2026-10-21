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
  // slideInBottom
  for (const element of elements(section, '[data-motion="article-gapOff"]')) {
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
    '[data-motion="article-blogDetailsDateBlock"]',
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
    '[data-motion="article-blogDetailsImageWrap"]',
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
    '[data-motion="article-blogDetailsContentMain"]',
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

  // Common border line animation
  for (const element of elements(
    section,
    '[data-motion="article-borderLine"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { width: "0%" });
    timeline.to(
      [element],
      { ...{ width: "100%" }, duration: reduced ? 0 : 1.5, ease: "none" },
      0.3,
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

  // Blog post social icon hover in
  for (const element of elements(
    section,
    '[data-motion="article-blogDetailsSocialIconWrap"], [data-motion="article-blogDetailsSocialIconWrap-2"], [data-motion="article-blogDetailsSocialIconWrap-3"], [data-motion="article-blogDetailsSocialIconWrap-4"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".rt-blog-details-social-icon"), {
      filter: "brightness(1000%)",
    });
    timeline.to(
      elements(element, ".rt-blog-details-social-icon"),
      {
        ...{ filter: "brightness(100%)" },
        duration: reduced ? 0 : 0.2,
        ease: "none",
      },
      0,
    );
    cleanup.push(bindHover(element, timeline, true));
  }

  // Blog post social icon hover out
  for (const element of elements(
    section,
    '[data-motion="article-blogDetailsSocialIconWrap"], [data-motion="article-blogDetailsSocialIconWrap-2"], [data-motion="article-blogDetailsSocialIconWrap-3"], [data-motion="article-blogDetailsSocialIconWrap-4"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(
      elements(element, ".rt-blog-details-social-icon"),
      {
        ...{ filter: "brightness(1000%)" },
        duration: reduced ? 0 : 0.2,
        ease: "none",
      },
      0,
    );
    cleanup.push(bindHover(element, timeline, false));
  }

  // Blink star animation
  for (const element of elements(
    section,
    '[data-motion="article-blinkStar"]',
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
    '[data-motion="article-blinkStar-2"]',
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
export function useArticleAnimation(ref: RefObject<HTMLElement | null>) {
  useSectionAnimation(ref, setup);
}
