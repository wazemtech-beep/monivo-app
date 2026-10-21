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
  // Sub text linear glow animation
  for (const element of elements(
    section,
    '[data-motion="benefits-subTextMain"]',
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
    '[data-motion="benefits-subTextMain"]',
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

  // Common border line animation
  for (const element of elements(
    section,
    '[data-motion="benefits-borderLine"]',
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

  // Common rotate animation v2
  for (const element of elements(
    section,
    '[data-motion="benefits-benefitDashboardV1MainIcon"], [data-motion="benefits-benefitV1AmplitudeIcon"]',
  )) {
    const timeline = gsap.timeline({ paused: true, repeat: reduced ? 0 : -1 });
    gsap.set([element], { rotation: 0 });
    timeline.to(
      [element],
      { ...{ rotation: 360 }, duration: reduced ? 0 : 2, ease: "none" },
      0,
    );
    timeline.to(
      [element],
      { ...{ rotation: 0 }, duration: reduced ? 0 : 0, ease: "none" },
      2,
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

  // Benefit v1 line grow
  for (const element of elements(
    section,
    '[data-motion="benefits-benefitV1CardV2ClientWrap"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(
      elements(element, ".rt-benefit-v1-card-v2-client-card-grow-line.rt-one"),
      {
        width: "0%",
      },
    );
    gsap.set(
      elements(element, ".rt-benefit-v1-card-v2-client-card-grow-line.rt-two"),
      {
        width: "0%",
      },
    );
    timeline.to(
      elements(element, ".rt-benefit-v1-card-v2-client-card-grow-line.rt-one"),
      { ...{ width: "40%" }, duration: reduced ? 0 : 0.8, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".rt-benefit-v1-card-v2-client-card-grow-line.rt-two"),
      { ...{ width: "60%" }, duration: reduced ? 0 : 0.8, ease: "none" },
      0,
    );
    if (reduced) timeline.progress(1);
    else
      bindReveal(element, timeline, {
        offset: 20,
        unit: "%",
        delay: 0,
        loop: false,
      });
  }

  // Home one benefit card bar grow animation
  for (const element of elements(
    section,
    '[data-motion="benefits-benefitV1CardV2BarWrap"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".rt-benefit-v1-card-v2-bar.rt-one"), {
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-benefit-v1-card-v2-bar.rt-two"), {
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-benefit-v1-card-v2-bar.rt-three"), {
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-benefit-v1-card-v2-bar.rt-four"), {
      height: "0rem",
    });
    gsap.set(elements(element, ".rt-benefit-v1-card-v2-bar.rt-five"), {
      height: "0rem",
    });
    timeline.to(
      elements(element, ".rt-benefit-v1-card-v2-bar.rt-one"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.7,
        ease: "power1.inOut",
      },
      0.2,
    );
    timeline.to(
      elements(element, ".rt-benefit-v1-card-v2-bar.rt-two"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.7,
        ease: "power1.inOut",
      },
      0.4,
    );
    timeline.to(
      elements(element, ".rt-benefit-v1-card-v2-bar.rt-three"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.7,
        ease: "power1.inOut",
      },
      0.6,
    );
    timeline.to(
      elements(element, ".rt-benefit-v1-card-v2-bar.rt-four"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.7,
        ease: "power1.inOut",
      },
      0.8,
    );
    timeline.to(
      elements(element, ".rt-benefit-v1-card-v2-bar.rt-five"),
      {
        ...{ height: "auto" },
        duration: reduced ? 0 : 0.7,
        ease: "power1.inOut",
      },
      1,
    );
    if (reduced) timeline.progress(1);
    else
      bindReveal(element, timeline, {
        offset: 20,
        unit: "%",
        delay: 0,
        loop: false,
      });
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="benefits-gapOff"], [data-motion="benefits-textStyleH4"], [data-motion="benefits-textStyleH4-2"], [data-motion="benefits-textStyleH4-3"], [data-motion="benefits-textStyleH4-4"], [data-motion="benefits-textStyleH4-5"]',
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

  // growIn
  for (const element of elements(
    section,
    '[data-motion="benefits-benefitV1TopCard"], [data-motion="benefits-benefitV1TopCard-2"]',
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
        delay: 0.1,
        loop: false,
      });
  }

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="benefits-gapOff-2"], [data-motion="benefits-gapOff-3"], [data-motion="benefits-textCenter"], [data-motion="benefits-textCenter-2"], [data-motion="benefits-textCenter-3"]',
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

  // Benefit v1 card line animation
  for (const element of elements(
    section,
    '[data-motion="benefits-benefitV1DashboardWrap"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".rt-benefit-dashboard-v1-main-icon-wrap"), {
      scaleX: 0,
      scaleY: 0,
    });
    gsap.set(elements(element, ".rt-benefit-v1-dashboard-line.rt-two"), {
      width: "0%",
    });
    gsap.set(elements(element, ".rt-benefit-v1-dashboard-line.rt-one"), {
      width: "0%",
    });
    gsap.set(elements(element, ".rt-benefit-v1-dashboard-icon-wrap"), {
      scaleX: 0,
      scaleY: 0,
    });
    timeline.to(
      elements(element, ".rt-benefit-dashboard-v1-main-icon-wrap"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.8,
        ease: "none",
      },
      0,
    );
    timeline.to(
      elements(element, ".rt-benefit-v1-dashboard-line.rt-two"),
      { ...{ width: "100%" }, duration: reduced ? 0 : 0.7, ease: "none" },
      0.5,
    );
    timeline.to(
      elements(element, ".rt-benefit-v1-dashboard-line.rt-one"),
      { ...{ width: "100%" }, duration: reduced ? 0 : 0.7, ease: "none" },
      0.5,
    );
    timeline.to(
      elements(element, ".rt-benefit-v1-dashboard-icon-wrap"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "none",
      },
      1.2,
    );
    if (reduced) timeline.progress(1);
    else
      bindReveal(element, timeline, {
        offset: 20,
        unit: "%",
        delay: 0,
        loop: false,
      });
  }

  // slideInLeft
  for (const element of elements(
    section,
    '[data-motion="benefits-benefitV1CardV2"]',
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

  // slideInRight
  for (const element of elements(
    section,
    '[data-motion="benefits-benefitV1CardV2-3"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set([element], { opacity: 0 });
    timeline.to(
      [element],
      { ...{ x: 100, y: 0 }, duration: reduced ? 0 : 0, ease: "none" },
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

  // slideInBottom
  for (const element of elements(
    section,
    '[data-motion="benefits-benefitV1CardV2-2"]',
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

  // growIn
  for (const element of elements(
    section,
    '[data-motion="benefits-benefitV1AmplitudeIconBlock"]',
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
        offset: 0,
        unit: "%",
        delay: 1,
        loop: false,
      });
  }

  // Home one benefit marque
  for (const element of elements(
    section,
    '[data-motion="benefits-benefitV1AmplitudeMarqueWrap"]',
  )) {
    const timeline = gsap.timeline({ paused: true, repeat: reduced ? 0 : -1 });
    timeline.to(
      elements(element, ".rt-benefit-v1-amplitude-marque-train"),
      { ...{ xPercent: 0 }, duration: reduced ? 0 : 0, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".rt-benefit-v1-amplitude-marque-train"),
      { ...{ xPercent: -100 }, duration: reduced ? 0 : 20, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".rt-benefit-v1-amplitude-marque-train"),
      { ...{ xPercent: 0 }, duration: reduced ? 0 : 0, ease: "none" },
      20,
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
export function useBenefitsAnimation(ref: RefObject<HTMLElement | null>) {
  useSectionAnimation(ref, setup);
}
