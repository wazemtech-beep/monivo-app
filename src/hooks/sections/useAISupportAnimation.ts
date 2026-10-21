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
  for (const element of elements(section, '[data-motion="aISupport-button"]')) {
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
  for (const element of elements(section, '[data-motion="aISupport-button"]')) {
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
    '[data-motion="aISupport-subTextMain"]',
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
    '[data-motion="aISupport-subTextMain"]',
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
    '[data-motion="aISupport-borderLine"]',
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

  // Feature Two Chattion Animation
  for (const element of elements(
    section,
    '[data-motion="aISupport-featureHeroMainChat"]',
  )) {
    const timeline = gsap.timeline({ paused: true });
    gsap.set(elements(element, ".ai-one"), { scaleX: 0, scaleY: 0 });
    gsap.set(
      elements(element, ".rt-message-chat.massage-border-radius.massage-one"),
      {
        xPercent: -100,
      },
    );
    gsap.set(elements(element, ".customer-one"), { scaleX: 0, scaleY: 0 });
    gsap.set(
      elements(
        element,
        ".rt-message-chat.massage-border-radius.change-radius.customer-massage-two",
      ),
      { xPercent: 100 },
    );
    gsap.set(elements(element, ".ai-two"), { scaleX: 0, scaleY: 0 });
    gsap.set(
      elements(element, ".rt-message-chat.massage-border-radius.massage-two"),
      {
        xPercent: -100,
      },
    );
    gsap.set(elements(element, ".ai-three"), { scaleX: 0, scaleY: 0 });
    gsap.set(
      elements(element, ".rt-message-chat.massage-border-radius.massage-three"),
      {
        xPercent: -100,
      },
    );
    gsap.set(elements(element, ".customer-two"), { scaleX: 0, scaleY: 0 });
    gsap.set(
      elements(
        element,
        ".rt-message-chat.massage-border-radius.change-radius.customet-massage-two",
      ),
      { xPercent: 100 },
    );
    gsap.set(elements(element, ".ai-four"), { scaleX: 0, scaleY: 0 });
    gsap.set(
      elements(element, ".rt-feature-chat-single-message.rt-change-display"),
      {
        xPercent: -100,
      },
    );
    timeline.to(
      elements(element, ".ai-one"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      0.5,
    );
    timeline.to(
      elements(element, ".rt-message-chat.massage-border-radius.massage-one"),
      { ...{ xPercent: 0 }, duration: reduced ? 0 : 0.8, ease: "power1.inOut" },
      0.5,
    );
    timeline.to(
      elements(element, ".customer-one"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      1.3,
    );
    timeline.to(
      elements(
        element,
        ".rt-message-chat.massage-border-radius.change-radius.customer-massage-two",
      ),
      { ...{ xPercent: 0 }, duration: reduced ? 0 : 0.8, ease: "power1.inOut" },
      1.8,
    );
    timeline.to(
      elements(element, ".ai-two"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      2.6,
    );
    timeline.to(
      elements(element, ".rt-message-chat.massage-border-radius.massage-two"),
      { ...{ xPercent: 0 }, duration: reduced ? 0 : 0.8, ease: "power1.inOut" },
      3.1,
    );
    timeline.to(
      elements(element, ".ai-three"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      3.9000000000000004,
    );
    timeline.to(
      elements(element, ".rt-message-chat.massage-border-radius.massage-three"),
      { ...{ xPercent: 0 }, duration: reduced ? 0 : 1, ease: "power1.inOut" },
      4.4,
    );
    timeline.to(
      elements(element, ".customer-two"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      5.4,
    );
    timeline.to(
      elements(
        element,
        ".rt-message-chat.massage-border-radius.change-radius.customet-massage-two",
      ),
      { ...{ xPercent: 0 }, duration: reduced ? 0 : 0.8, ease: "power1.inOut" },
      6,
    );
    timeline.to(
      elements(element, ".ai-four"),
      {
        ...{ scaleX: 1, scaleY: 1 },
        duration: reduced ? 0 : 0.5,
        ease: "power1.inOut",
      },
      6.800000000000001,
    );
    timeline.to(
      elements(element, ".rt-feature-chat-single-message.rt-change-display"),
      { ...{ xPercent: 0 }, duration: reduced ? 0 : 0.8, ease: "power1.inOut" },
      7.300000000000001,
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

  // Typing Animation
  for (const element of elements(
    section,
    '[data-motion="aISupport-featureChatWrap"]',
  )) {
    const timeline = gsap.timeline({ paused: true, repeat: reduced ? 0 : -1 });
    gsap.set(elements(element, ".feature-two-massage-dot.one"), { opacity: 0 });
    gsap.set(elements(element, ".feature-two-massage-dot.two"), { opacity: 0 });
    gsap.set(elements(element, ".feature-two-massage-dot.three"), {
      opacity: 0,
    });
    gsap.set(elements(element, ".feature-two-massage-dot.four"), {
      opacity: 0,
    });
    gsap.set(elements(element, ".feature-two-massage-dot.five"), {
      opacity: 0,
    });
    gsap.set(elements(element, ".feature-two-massage-dot.six"), { opacity: 0 });
    timeline.to(
      elements(element, ".feature-two-massage-dot.one"),
      { ...{ opacity: 1 }, duration: reduced ? 0 : 0.1, ease: "none" },
      0,
    );
    timeline.to(
      elements(element, ".feature-two-massage-dot.two"),
      { ...{ opacity: 1 }, duration: reduced ? 0 : 0.1, ease: "none" },
      0.1,
    );
    timeline.to(
      elements(element, ".feature-two-massage-dot.three"),
      { ...{ opacity: 1 }, duration: reduced ? 0 : 0.1, ease: "none" },
      0.2,
    );
    timeline.to(
      elements(element, ".feature-two-massage-dot.four"),
      { ...{ opacity: 1 }, duration: reduced ? 0 : 0.1, ease: "none" },
      0.30000000000000004,
    );
    timeline.to(
      elements(element, ".feature-two-massage-dot.five"),
      { ...{ opacity: 1 }, duration: reduced ? 0 : 0.1, ease: "none" },
      0.4,
    );
    timeline.to(
      elements(element, ".feature-two-massage-dot.six"),
      { ...{ opacity: 1 }, duration: reduced ? 0 : 0.1, ease: "none" },
      0.5,
    );
    timeline.to(
      elements(element, ".feature-two-massage-dot.one"),
      { ...{ opacity: 0 }, duration: reduced ? 0 : 0.1, ease: "none" },
      0.6,
    );
    timeline.to(
      elements(element, ".feature-two-massage-dot.two"),
      { ...{ opacity: 0 }, duration: reduced ? 0 : 0.1, ease: "none" },
      0.7,
    );
    timeline.to(
      elements(element, ".feature-two-massage-dot.three"),
      { ...{ opacity: 0 }, duration: reduced ? 0 : 0.1, ease: "none" },
      0.7999999999999999,
    );
    timeline.to(
      elements(element, ".feature-two-massage-dot.four"),
      { ...{ opacity: 0 }, duration: reduced ? 0 : 0.1, ease: "none" },
      0.8999999999999999,
    );
    timeline.to(
      elements(element, ".feature-two-massage-dot.five"),
      { ...{ opacity: 0 }, duration: reduced ? 0 : 0.1, ease: "none" },
      0.9999999999999999,
    );
    timeline.to(
      elements(element, ".feature-two-massage-dot.six"),
      { ...{ opacity: 0 }, duration: reduced ? 0 : 0.1, ease: "none" },
      1.0999999999999999,
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

  // slideInLeft
  for (const element of elements(
    section,
    '[data-motion="aISupport-aiSupportClientImage-3"]',
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
        delay: 0.5,
        loop: false,
      });
  }

  // slideInLeft
  for (const element of elements(
    section,
    '[data-motion="aISupport-aiSupportClientImage-2"]',
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
        delay: 0.6,
        loop: false,
      });
  }

  // slideInLeft
  for (const element of elements(
    section,
    '[data-motion="aISupport-aiSupportClientImage"]',
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
        delay: 0.7,
        loop: false,
      });
  }

  // growIn
  for (const element of elements(
    section,
    '[data-motion="aISupport-aiSupportIconWrap"]',
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
        delay: 0.8,
        loop: false,
      });
  }

  // slideInLeft
  for (const element of elements(
    section,
    '[data-motion="aISupport-textColorWhite"]',
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
        delay: 0.9,
        loop: false,
      });
  }

  // slideInBottom
  for (const element of elements(section, '[data-motion="aISupport-gapOff"]')) {
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
    '[data-motion="aISupport-gapOff-2"]',
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
    '[data-motion="aISupport-buttonWrap"]',
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
};
export function useAISupportAnimation(ref: RefObject<HTMLElement | null>) {
  useSectionAnimation(ref, setup);
}
