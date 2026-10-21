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
    '[data-motion="automationBenefits-button"]',
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
    '[data-motion="automationBenefits-button"]',
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
    '[data-motion="automationBenefits-subTextMain"]',
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
    '[data-motion="automationBenefits-subTextMain"]',
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

  // Benefits V4 Shape Move
  for (const element of [section]) {
    if (!matchesAny(["(min-width: 992px)"])) continue;
    const timeline = gsap.timeline({ paused: true });
    timeline.to({ clock: 0 }, { clock: 1, duration: 1, ease: "none" }, 0);
    gsap.set(elements(element, ".rt-benefits-v4-shape.rt-one"), {
      yPercent: -200,
    });
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-one"),
      { yPercent: -200 },
      { yPercent: -200, duration: 0.35, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-one"),
      { yPercent: -200 },
      {
        yPercent: -200,
        duration: 0.10000000000000003,
        ease: "none",
        immediateRender: false,
      },
      0.35,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-one"),
      { yPercent: -200 },
      {
        yPercent: -200,
        duration: 0.04999999999999999,
        ease: "none",
        immediateRender: false,
      },
      0.45,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-one"),
      { yPercent: -200 },
      {
        yPercent: -200,
        duration: 0.050000000000000044,
        ease: "none",
        immediateRender: false,
      },
      0.5,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-one"),
      { yPercent: -200 },
      {
        yPercent: 0,
        duration: 0.04999999999999993,
        ease: "none",
        immediateRender: false,
      },
      0.55,
    );
    gsap.set(elements(element, ".rt-benefits-v4-shape.rt-two"), {
      yPercent: -200,
    });
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-two"),
      { yPercent: -200 },
      { yPercent: -200, duration: 0.35, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-two"),
      { yPercent: -200 },
      {
        yPercent: -200,
        duration: 0.10000000000000003,
        ease: "none",
        immediateRender: false,
      },
      0.35,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-two"),
      { yPercent: -200 },
      {
        yPercent: -200,
        duration: 0.04999999999999999,
        ease: "none",
        immediateRender: false,
      },
      0.45,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-two"),
      { yPercent: -200 },
      {
        yPercent: 0,
        duration: 0.050000000000000044,
        ease: "none",
        immediateRender: false,
      },
      0.5,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-two"),
      { yPercent: 0 },
      {
        yPercent: 0,
        duration: 0.04999999999999993,
        ease: "none",
        immediateRender: false,
      },
      0.55,
    );
    gsap.set([], { yPercent: -200 });
    timeline.fromTo(
      [],
      { yPercent: -200 },
      { yPercent: -200, duration: 0.35, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      [],
      { yPercent: -200 },
      {
        yPercent: -200,
        duration: 0.10000000000000003,
        ease: "none",
        immediateRender: false,
      },
      0.35,
    );
    timeline.fromTo(
      [],
      { yPercent: -200 },
      {
        yPercent: 0,
        duration: 0.04999999999999999,
        ease: "none",
        immediateRender: false,
      },
      0.45,
    );
    timeline.fromTo(
      [],
      { yPercent: 0 },
      {
        yPercent: 0,
        duration: 0.050000000000000044,
        ease: "none",
        immediateRender: false,
      },
      0.5,
    );
    timeline.fromTo(
      [],
      { yPercent: 0 },
      {
        yPercent: 0,
        duration: 0.04999999999999993,
        ease: "none",
        immediateRender: false,
      },
      0.55,
    );
    gsap.set(elements(element, ".rt-benefits-v4-shape.rt-four"), {
      yPercent: -250,
    });
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-four"),
      { yPercent: -250 },
      { yPercent: -250, duration: 0.35, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-four"),
      { yPercent: -250 },
      {
        yPercent: 0,
        duration: 0.10000000000000003,
        ease: "none",
        immediateRender: false,
      },
      0.35,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-four"),
      { yPercent: 0 },
      {
        yPercent: 0,
        duration: 0.04999999999999999,
        ease: "none",
        immediateRender: false,
      },
      0.45,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-four"),
      { yPercent: 0 },
      {
        yPercent: 0,
        duration: 0.050000000000000044,
        ease: "none",
        immediateRender: false,
      },
      0.5,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-four"),
      { yPercent: 0 },
      {
        yPercent: 0,
        duration: 0.04999999999999993,
        ease: "none",
        immediateRender: false,
      },
      0.55,
    );
    gsap.set(elements(element, ".rt-benefits-v4-shape.rt-five"), {
      yPercent: -250,
    });
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-five"),
      { yPercent: -250 },
      { yPercent: 0, duration: 0.35, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-five"),
      { yPercent: 0 },
      {
        yPercent: 0,
        duration: 0.10000000000000003,
        ease: "none",
        immediateRender: false,
      },
      0.35,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-five"),
      { yPercent: 0 },
      {
        yPercent: 0,
        duration: 0.04999999999999999,
        ease: "none",
        immediateRender: false,
      },
      0.45,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-five"),
      { yPercent: 0 },
      {
        yPercent: 0,
        duration: 0.050000000000000044,
        ease: "none",
        immediateRender: false,
      },
      0.5,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v4-shape.rt-five"),
      { yPercent: 0 },
      {
        yPercent: 0,
        duration: 0.04999999999999993,
        ease: "none",
        immediateRender: false,
      },
      0.55,
    );
    gsap.set(elements(element, ".rt-benefits-v2-line.rt-one"), {
      width: "0rem",
    });
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-one"),
      { width: "0rem" },
      {
        width: "7.625rem",
        duration: 0.35,
        ease: "none",
        immediateRender: false,
      },
      0,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-one"),
      { width: "7.625rem" },
      {
        width: "7.625rem",
        duration: 0.10000000000000003,
        ease: "none",
        immediateRender: false,
      },
      0.35,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-one"),
      { width: "7.625rem" },
      {
        width: "7.625rem",
        duration: 0.04999999999999999,
        ease: "none",
        immediateRender: false,
      },
      0.45,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-one"),
      { width: "7.625rem" },
      {
        width: "7.625rem",
        duration: 0.050000000000000044,
        ease: "none",
        immediateRender: false,
      },
      0.5,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-one"),
      { width: "7.625rem" },
      {
        width: "7.625rem",
        duration: 0.04999999999999993,
        ease: "none",
        immediateRender: false,
      },
      0.55,
    );
    gsap.set(elements(element, ".rt-benefits-v2-line.rt-two"), {
      width: "0rem",
    });
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-two"),
      { width: "0rem" },
      { width: "0rem", duration: 0.35, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-two"),
      { width: "0rem" },
      {
        width: "7.625rem",
        duration: 0.10000000000000003,
        ease: "none",
        immediateRender: false,
      },
      0.35,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-two"),
      { width: "7.625rem" },
      {
        width: "7.625rem",
        duration: 0.04999999999999999,
        ease: "none",
        immediateRender: false,
      },
      0.45,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-two"),
      { width: "7.625rem" },
      {
        width: "7.625rem",
        duration: 0.050000000000000044,
        ease: "none",
        immediateRender: false,
      },
      0.5,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-two"),
      { width: "7.625rem" },
      {
        width: "7.625rem",
        duration: 0.04999999999999993,
        ease: "none",
        immediateRender: false,
      },
      0.55,
    );
    gsap.set(elements(element, ".rt-benefits-v2-line.rt-three"), {
      width: "0rem",
    });
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-three"),
      { width: "0rem" },
      { width: "0rem", duration: 0.35, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-three"),
      { width: "0rem" },
      {
        width: "0rem",
        duration: 0.10000000000000003,
        ease: "none",
        immediateRender: false,
      },
      0.35,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-three"),
      { width: "0rem" },
      {
        width: "7.625rem",
        duration: 0.04999999999999999,
        ease: "none",
        immediateRender: false,
      },
      0.45,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-three"),
      { width: "7.625rem" },
      {
        width: "7.625rem",
        duration: 0.050000000000000044,
        ease: "none",
        immediateRender: false,
      },
      0.5,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-three"),
      { width: "7.625rem" },
      {
        width: "7.625rem",
        duration: 0.04999999999999993,
        ease: "none",
        immediateRender: false,
      },
      0.55,
    );
    gsap.set(elements(element, ".rt-benefits-v2-line.rt-four"), {
      width: "0rem",
    });
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-four"),
      { width: "0rem" },
      { width: "0rem", duration: 0.35, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-four"),
      { width: "0rem" },
      {
        width: "0rem",
        duration: 0.10000000000000003,
        ease: "none",
        immediateRender: false,
      },
      0.35,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-four"),
      { width: "0rem" },
      {
        width: "0rem",
        duration: 0.04999999999999999,
        ease: "none",
        immediateRender: false,
      },
      0.45,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-four"),
      { width: "0rem" },
      {
        width: "7.625rem",
        duration: 0.050000000000000044,
        ease: "none",
        immediateRender: false,
      },
      0.5,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-four"),
      { width: "7.625rem" },
      {
        width: "7.625rem",
        duration: 0.04999999999999993,
        ease: "none",
        immediateRender: false,
      },
      0.55,
    );
    gsap.set(elements(element, ".rt-benefits-v2-line.rt-five"), {
      width: "0rem",
    });
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-five"),
      { width: "0rem" },
      { width: "0rem", duration: 0.35, ease: "none", immediateRender: false },
      0,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-five"),
      { width: "0rem" },
      {
        width: "0rem",
        duration: 0.10000000000000003,
        ease: "none",
        immediateRender: false,
      },
      0.35,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-five"),
      { width: "0rem" },
      {
        width: "0rem",
        duration: 0.04999999999999999,
        ease: "none",
        immediateRender: false,
      },
      0.45,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-five"),
      { width: "0rem" },
      {
        width: "0rem",
        duration: 0.050000000000000044,
        ease: "none",
        immediateRender: false,
      },
      0.5,
    );
    timeline.fromTo(
      elements(element, ".rt-benefits-v2-line.rt-five"),
      { width: "0rem" },
      {
        width: "7.625rem",
        duration: 0.04999999999999993,
        ease: "none",
        immediateRender: false,
      },
      0.55,
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
    '[data-motion="automationBenefits-gapOff"], [data-motion="automationBenefits-benefitV2ButtonWrap"]',
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
    '[data-motion="automationBenefits-benefitsV4Main"]',
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
export function useAutomationBenefitsAnimation(
  ref: RefObject<HTMLElement | null>,
) {
  useSectionAnimation(ref, setup);
}
