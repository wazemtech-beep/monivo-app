"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useHeroAnimation } from "@/hooks/sections/useHeroAnimation";
export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(sectionRef);
  const content = siteConfig.sections.hero;
  return (
    <section
      className="rt-hero-v1 rt-overflow-hidden rt-position-relative"
      data-motion="hero-heroV1"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container-medium rt-change-position w-container">
        <div className="w-layout-vflex rt-hero-v1-main rt-position-relative">
          <div className="w-layout-vflex rt-hero-v1-heading-wrap">
            <div
              className="w-layout-hflex rt-sub-text-main"
              data-motion="hero-subTextMain"
            >
              <div className="w-layout-hflex rt-sub-text-wrapper">
                <div className="rt-sub-text-dot"></div>
                <div className="rt-sub-text">{content.eyebrow}</div>
              </div>
              <div className="w-layout-vflex rt-gradient-box">
                <div className="rt-button-linear rt-color-change"></div>
                <div className="rt-button-linear rt-color-change rt-2"></div>
              </div>
            </div>
            <div className="rt-hero-v1-heading rt-overflow-hidden">
              <h1
                className="rt-gap-off rt-text-center"
                data-motion="hero-gapOff"
              >
                {content.title}
                <span className="rt-heading-special-font">
                  {content.highlight}
                </span>
              </h1>
            </div>
            <div className="rt-hero-v1-paragraph rt-overflow-hidden">
              <p
                className="rt-gap-off rt-text-center rt-text-color-white"
                data-motion="hero-gapOff-2"
              >
                {content.description}
              </p>
            </div>
            <div className="rt-button-wrap" data-motion="hero-buttonWrap">
              <Link
                href={content.buttonHref}
                className="rt-button w-variant-6c98e724-ac21-c23f-63a1-3ed9529410a0 w-inline-block"
                data-motion="hero-button"
              >
                <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden">
                  <div className="rt-button-font w-variant-6c98e724-ac21-c23f-63a1-3ed9529410a0 rt-one">
                    {content.buttonLabel}
                  </div>
                  <div className="rt-button-font w-variant-6c98e724-ac21-c23f-63a1-3ed9529410a0 rt-two">
                    {content.buttonLabel}
                  </div>
                </div>
                <div className="rt-button-icon-wrap">
                  <Image
                    alt={content.buttonIconAlt}
                    src={content.buttonIcon}
                    className="rt-button-star-image w-variant-6c98e724-ac21-c23f-63a1-3ed9529410a0"
                    width={22}
                    height={23}
                    sizes="22px"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-layout-vflex rt-hero-v1-dashboard-prespective">
            <div className="rt-hero-v1-dashboard-wrap rt-position-relative">
              <div className="rt-hero-v1-dashboard-block rt-border-radius-small-20 rt-overflow-hidden">
                <Image
                  src={content.dashboardImage}
                  alt={content.dashboardAlt}
                  width={1440}
                  height={827}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  preload
                />
                <div className="rt-hero-v1-dashboard-border rt-border-radius-small-20">
                  <Image
                    src={content.dashboardBorderImage}
                    alt={content.dashboardBorderAlt}
                    className="rt-border-radius-small-20"
                    width={4320}
                    height={2481}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
              </div>
              <div className="rt-hero-v1-dashboard-large-border rt-border-radius-small-20">
                <Image
                  src={content.dashboardFrameImage}
                  alt={content.dashboardFrameAlt}
                  width={1502}
                  height={887}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
            </div>
          </div>
          <div className="rt-hero-v1-glow-star">
            <div className="rt-glow-star">
              <Image
                alt={content.starAlt}
                src={content.starImage}
                className="rt-blink-star"
                data-motion="hero-blinkStar"
                width={284}
                height={284}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
          </div>
          <div className="rt-hero-v1-glow-star rt-two rt-landscape-display-none">
            <div className="rt-glow-star">
              <Image
                alt={content.starAlt}
                src={content.starImage}
                className="rt-blink-star"
                data-motion="hero-blinkStar"
                width={284}
                height={284}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
          </div>
          <div className="rt-hero-v1-glow-star rt-three">
            <div className="rt-glow-star">
              <Image
                alt={content.starAlt}
                src={content.starImage}
                className="rt-blink-star"
                data-motion="hero-blinkStar-3"
                width={284}
                height={284}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
          </div>
          <div className="rt-hero-v1-glow-star rt-four rt-landscape-display-none">
            <div className="rt-glow-star">
              <Image
                alt={content.starAlt}
                src={content.starImage}
                className="rt-blink-star"
                data-motion="hero-blinkStar-3"
                width={284}
                height={284}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rt-hero-v1-gredient"></div>
      <div className="rt-hero-v1-mouse-wrap">
        <div className="w-layout-hflex rt-hero-v1-mouse-border-wrap">
          <div className="w-layout-hflex rt-hero-v1-mouse-inner-border">
            <div className="w-layout-hflex rt-hero-v1-mouse-icon-wrap">
              <div className="w-layout-hflex rt-hero-v1-mouse-icon">
                <Image
                  src={content.mouseIcon}
                  alt={content.mouseAlt}
                  width={18}
                  height={18}
                  sizes="18px"
                />
              </div>
            </div>
          </div>
          <div className="w-layout-hflex rt-ripple-box">
            <div data-ripple="one" className="rt-ripple-line"></div>
            <div data-ripple="two" className="rt-ripple-line"></div>
            <div data-ripple="three" className="rt-ripple-line"></div>
          </div>
        </div>
      </div>
      <div className="rt-section-background-overlay"></div>
    </section>
  );
}
