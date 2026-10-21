"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useFeatureDetailsAnimation } from "@/hooks/sections/useFeatureDetailsAnimation";
export default function FeatureDetails() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useFeatureDetailsAnimation(sectionRef);
  const content = siteConfig.sections.featureDetails;
  return (
    <section id="rt-feature-section" className="rt-feature-v1" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-feature-v1-main">
          <div className="w-layout-hflex rt-feature-v1-heading-wrap rt-full-width">
            <div className="w-layout-vflex rt-feature-v1-heading rt-overflow-hidden">
              <div data-motion="featureDetails-div">
                <div
                  className="w-layout-hflex rt-sub-text-main"
                  data-motion="featureDetails-subTextMain"
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
              </div>
              <h2 className="rt-gap-off" data-motion="featureDetails-gapOff">
                {content.heading}
                <span className="rt-heading-special-font">
                  {content.highlight}
                </span>
              </h2>
            </div>
            <div className="w-layout-vflex rt-feature-v1-paragraph-wrap rt-overflow-hidden">
              <p className="rt-gap-off" data-motion="featureDetails-gapOff-2">
                {content.description}
              </p>
              <div
                className="rt-button-wrap"
                data-motion="featureDetails-buttonWrap"
              >
                <a
                  href={content.startFreeTrialstartFreeTrialHref}
                  className="rt-button w-inline-block"
                  data-motion="featureDetails-button"
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
                </a>
              </div>
            </div>
          </div>
          <div className="w-layout-vflex rt-feature-v1-card-block rt-full-width">
            <div className="w-layout-hflex rt-feature-v1-card-main rt-full-width">
              <div
                className="rt-feature-card-wrap"
                data-motion="featureDetails-featureCardWrap"
              >
                <div className="rt-leanear-border-vartical rt-border-radius-20 rt-tab-full-height">
                  <div className="w-layout-vflex rt-feature-v1-card rt-border-radius-small-20">
                    <div className="rt-feature-card-marquee rt-height-change rt-position-relative">
                      <Image
                        src={content.aveletyFeatureCardOneDashboardImageImage}
                        alt={content.aveletyFeatureCardOneDashboardImageAlt}
                        className="rt-feature-marquee-image"
                        width={580}
                        height={367}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                      {content.featureCards.map((item, index) => (
                        <div
                          style={{
                            transform:
                              "translate3d(0.625rem, 0.625rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className={item.className}
                          data-motion={item.animationKey}
                          key={index}
                        >
                          <Image
                            src={item.image}
                            alt={item.alt}
                            width={149}
                            height={56}
                            sizes="149px"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="w-layout-vflex rt-feature-card-text-wrap">
                      <div className="rt-text-style-h4 rt-landscape-text-center">
                        {content.smartOnboarding}
                      </div>
                      <div className="rt-feature-card-paragraph-wrap">
                        <p className="rt-gap-off rt-text-center">
                          {content.description2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rt-feature-card-wrap"
                data-motion="featureDetails-featureCardWrap-2"
              >
                <div className="rt-leanear-border-vartical rt-border-radius-20 rt-full-height">
                  <div className="w-layout-vflex rt-feature-v1-card rt-border-radius-small-20 rt-full-height">
                    <div className="w-layout-hflex rt-feature-card-marquee rt-height-change">
                      <Image
                        src={content.aveletyFeatureCardDashboardImageImage}
                        alt={content.aveletyFeatureCardDashboardImageAlt}
                        className="rt-feature-marquee-image"
                        width={580}
                        height={367}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                    <div className="w-layout-vflex rt-feature-card-text-wrap">
                      <div className="rt-text-style-h4 rt-landscape-text-center">
                        {content.timeAttendanceTracking}
                      </div>
                      <div className="rt-feature-card-paragraph-wrap">
                        <p className="rt-gap-off rt-text-center">
                          {content.description3}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-hflex rt-feature-v1-card-main rt-full-width">
              <div
                className="rt-feature-card-wrap rt-max-width-change-v1"
                data-motion="featureDetails-featureCardWrap-3"
              >
                <div className="rt-leanear-border-vartical rt-border-radius-20">
                  <div
                    className="w-layout-vflex rt-feature-v1-card rt-border-radius-small-20"
                    data-motion="featureDetails-featureV1Card"
                  >
                    <div className="rt-feature-card-marquee rt-overflow-hidden rt-position-relative rt-marquee-height">
                      {content.featureCards2.map((item, index) => (
                        <div
                          style={{
                            transform:
                              "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className="rt-feature-card-marquee-train"
                          key={index}
                        >
                          <Image
                            src={content.aveletyFeatureCardMarqueeImageOneImage}
                            alt={content.aveletyFeatureCardMarqueeImageOneAlt}
                            className="rt-feature-marquee-image"
                            width={680}
                            height={356}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                        </div>
                      ))}
                      <div className="rt-feature-card-marquee-overlay"></div>
                    </div>
                    <div className="w-layout-vflex rt-feature-card-text-wrap">
                      <div className="rt-text-style-h4 rt-landscape-text-center">
                        {content.smartAndIntuitiveTaskHandling}
                      </div>
                      <div className="rt-feature-card-paragraph-wrap rt-max-width-change">
                        <p className="rt-gap-off rt-text-center">
                          {content.description4}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rt-feature-card-wrap rt-max-width-change-v2"
                data-motion="featureDetails-featureCardWrap-4"
              >
                <div className="rt-leanear-border-vartical rt-border-radius-20 rt-tab-full-height rt-change">
                  <div className="w-layout-vflex rt-feature-v1-card rt-border-radius-small-20">
                    <div className="w-layout-vflex rt-feature-card-marquee rt-overflow-hidden rt-position-relative rt-marquee-height">
                      {content.featureCards3.map((item, index) => (
                        <div
                          style={{
                            transform:
                              "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className="rt-feature-card-marquee-train"
                          key={index}
                        >
                          <Image
                            src={content.aveletyFeatureTimeMarqueeImageImage}
                            alt={content.aveletyFeatureTimeMarqueeImageAlt}
                            className="rt-feature-marquee-image"
                            width={437}
                            height={400}
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                          />
                        </div>
                      ))}
                      <div className="rt-feature-card-marquee-overlay"></div>
                    </div>
                    <div className="w-layout-vflex rt-feature-card-text-wrap">
                      <div className="rt-text-style-h4 rt-landscape-text-center">
                        {content.customizableWorkflows}
                      </div>
                      <div className="rt-feature-card-paragraph-wrap">
                        <p className="rt-gap-off rt-text-center">
                          {content.description5}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
