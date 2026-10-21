"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useAboutHeroAnimation } from "@/hooks/sections/useAboutHeroAnimation";
export default function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useAboutHeroAnimation(sectionRef);
  const content = siteConfig.sections.aboutHero;
  return (
    <section className="rt-about-hero rt-position-relative" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-about-hero-main">
          <div className="w-layout-vflex rt-about-hero-text-wrap">
            <div className="w-layout-vflex rt-about-hero-heading-wrap rt-position-relative">
              <div
                className="w-layout-hflex rt-sub-text-main"
                data-motion="aboutHero-subTextMain"
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
              <div className="rt-about-hero-heading rt-overflow-hidden">
                <h1 className="rt-gap-off" data-motion="aboutHero-gapOff">
                  {content.title}
                </h1>
              </div>
              <div className="rt-about-hero-paragraph rt-overflow-hidden">
                <p
                  className="rt-gap-off rt-text-color-white"
                  data-motion="aboutHero-gapOff-2"
                >
                  {content.description}
                </p>
              </div>
              <div
                className="rt-button-wrap"
                data-motion="aboutHero-buttonWrap"
              >
                <Link
                  href={content.seeAiInActionseeAiInActionHref}
                  className="rt-button w-inline-block"
                  data-motion="aboutHero-button"
                >
                  <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden">
                    <div className="rt-button-font rt-one">
                      {content.buttonLabel}
                    </div>
                    <div className="rt-button-font rt-two">
                      {content.buttonLabel}
                    </div>
                  </div>
                  <div className="rt-button-icon-wrap">
                    <Image
                      alt={content.aveletyButtonIconAlt}
                      src={content.aveletyButtonIconImage}
                      className="rt-button-star-image"
                      width={22}
                      height={23}
                      sizes="22px"
                    />
                  </div>
                </Link>
              </div>
              <div
                className="rt-about-hero-icon-wrap"
                data-motion="aboutHero-aboutHeroIconWrap"
              >
                <div className="w-layout-hflex rt-common-icon-v1-wrap">
                  <div className="w-layout-hflex rt-common-icon-v1">
                    <Image
                      alt={content.aveletyHomeOneDashboardIconOneAlt}
                      src={content.aveletyHomeOneDashboardIconOneImage}
                      width={20}
                      height={20}
                      sizes="20px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-hflex rt-about-hero-small-card-wrap">
              <div
                className="rt-about-hero-small-card rt-tab-display-none"
                data-motion="aboutHero-aboutHeroSmallCard"
              >
                <Image
                  src={content.aveletyAboutHeroStaticCardImageImage}
                  alt={content.aveletyAboutHeroStaticCardImageAlt}
                  width={354}
                  height={350}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
            </div>
          </div>
          <div className="rt-about-hero-card-wrap">
            <div className="rt-overflow-hidden">
              <div
                className="w-layout-vflex rt-about-hero-card rt-border-radius-small-20"
                data-motion="aboutHero-aboutHeroCard"
              >
                <div className="rt-about-hero-card-top-image">
                  <Image
                    src={content.aveletyAboutHeroCardDownloadImageImage}
                    alt={content.aveletyAboutHeroCardDownloadImageAlt}
                    width={1704}
                    height={213}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div
                  className="w-layout-vflex rt-about-hero-marquee-wrap rt-full-width rt-overflow-hidden"
                  data-motion="aboutHero-aboutHeroMarqueeWrap"
                >
                  <div
                    style={{
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="rt-about-hero-marquee-train"
                  >
                    <Image
                      src={content.aveletyAboutHeroChatImageImage}
                      alt={content.aveletyAboutHeroChatImageAlt}
                      width={493}
                      height={411}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div
                    style={{
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="rt-about-hero-marquee-train"
                  >
                    <Image
                      src={content.aveletyAboutHeroChatImageImage}
                      alt={content.aveletyAboutHeroChatImageAlt}
                      width={493}
                      height={411}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div
                    style={{
                      transform:
                        "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="rt-about-hero-marquee-train"
                  >
                    <Image
                      src={content.aveletyAboutHeroChatImageImage}
                      alt={content.aveletyAboutHeroChatImageAlt}
                      width={493}
                      height={411}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rt-about-hero-bottom-wave rt-overflow-hidden rt-landskape-display-off"
        data-motion="aboutHero-aboutHeroBottomWave"
      >
        <Image
          src={content.aveletyAboutHeroBottomWaveImageImage}
          alt={content.aveletyAboutHeroBottomWaveImageAlt}
          className="rt-about-hero-wave-image"
          width={5760}
          height={1094}
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
        />
      </div>
      <div
        className="rt-about-hero-common-icon-wrap"
        data-motion="aboutHero-aboutHeroCommonIconWrap"
      >
        <div className="w-layout-hflex rt-common-icon-v1-wrap">
          <div className="w-layout-hflex rt-common-icon-v1">
            <Image
              alt={content.aveletyHomeOneDashboardIconFiveAlt}
              src={content.aveletyHomeOneDashboardIconFiveImage}
              width={20}
              height={20}
              sizes="20px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
