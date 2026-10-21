"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useWorkflowAnimation } from "@/hooks/sections/useWorkflowAnimation";
export default function Workflow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useWorkflowAnimation(sectionRef);
  const content = siteConfig.sections.workflow;
  return (
    <section className="rt-productivity-v2" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-productivity-v2-main">
          <div className="rt-productivity-v2-heading rt-overflow-hidden">
            <h2
              className="rt-gap-off rt-mobile-text-center"
              data-motion="workflow-gapOff"
            >
              {content.heading}
              <span className="rt-heading-special-font">
                {content.highlight}
              </span>
            </h2>
          </div>
          <div className="w-layout-vflex rt-productivity-v2-card-block rt-full-width">
            <div className="w-layout-hflex rt-feature-v1-card-main rt-full-width">
              <div
                className="rt-feature-card-wrap rt-max-width-change-v3 rt-landscape-display-none"
                data-motion="workflow-featureCardWrap"
              >
                <div className="rt-leanear-border-landscape rt-border-radius-15">
                  <div className="w-layout-vflex rt-productivity-v2-card-one rt-border-radius-tiny-15">
                    <div className="w-layout-vflex rt-productivity-v2-card-one-content">
                      <div className="rt-productivity-v2-card-one-image-wrap rt-full-width rt-overflow-hidden">
                        <div className="w-layout-hflex rt-productivity-v2-card-one-image-two">
                          <div
                            className="rt-productivity-v2-card-image-wrap"
                            data-motion="workflow-productivityV2CardImageWrap"
                          >
                            <Image
                              src={
                                content.aveletyAboutProductivityCardImageOneImage
                              }
                              alt={
                                content.aveletyAboutProductivityCardImageOneAlt
                              }
                              className="rt-productivity-v2-card-image"
                              width={288}
                              height={151}
                              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                            />
                          </div>
                        </div>
                        <div className="rt-productivity-v2-card-one-image-one">
                          <div
                            className="rt-productivity-v2-card-image-wrap"
                            data-motion="workflow-productivityV2CardImageWrap-2"
                          >
                            <Image
                              src={
                                content.aveletyAboutProductivityCardImageTwoImage
                              }
                              alt={
                                content.aveletyAboutProductivityCardImageTwoAlt
                              }
                              className="rt-productivity-v2-card-image"
                              width={286}
                              height={180}
                              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-layout-vflex rt-productivity-v2-card-one-text">
                        <div className="rt-text-style-h4">
                          {content.aiPoweredInsights}
                        </div>
                        <div className="rt-text-center">
                          {
                            content.transformComplexDataIntoMeaningfulInsightsThatDriveConfidentDataD
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rt-feature-card-wrap rt-max-width-change-v4"
                data-motion="workflow-featureCardWrap-2"
              >
                <div className="rt-leanear-border-landscape rt-border-radius-15">
                  <div className="w-layout-vflex rt-productivity-v2-card-one rt-border-radius-tiny-15">
                    <div className="w-layout-vflex rt-productivity-v2-card-one-content rt-max-width-change rt-full-width">
                      <div className="rt-productivity-v2-card-one-image-wrap rt-full-width rt-change">
                        <Image
                          src={
                            content.aveletyAboutProductivityCardTwoBarBackgroundImageImage
                          }
                          alt={
                            content.aveletyAboutProductivityCardTwoBarBackgroundImageAlt
                          }
                          className="rt-productivity-v2-card-image-v2"
                          width={680}
                          height={315}
                          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                        />
                        <div className="w-layout-hflex rt-productivity-card-bar-wrap">
                          <div className="rt-productivity-v2-card-bar rt-one"></div>
                          <div className="rt-productivity-v2-card-bar rt-two"></div>
                          <div className="w-layout-vflex rt-productivity-v2-card-bar rt-three">
                            <div className="rt-text-center rt-text-color-white">
                              {content.value80}
                              <br />
                            </div>
                          </div>
                          <div className="rt-productivity-v2-card-bar rt-four"></div>
                          <div className="rt-productivity-v2-card-bar rt-five"></div>
                          <div className="rt-productivity-v2-card-bar rt-six"></div>
                          <div className="rt-productivity-v2-card-bar rt-seven"></div>
                        </div>
                      </div>
                      <div className="w-layout-vflex rt-productivity-v2-card-one-text">
                        <div className="rt-text-style-h4 rt-text-center">
                          {content.inDepthReportingAndInsights}
                        </div>
                        <div className="rt-text-center">
                          {
                            content.advancedReportingAndAnalyticsProvideVisibilityIntoPerformanceTren
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-hflex rt-feature-v1-card-main rt-full-width">
              <div
                className="rt-feature-card-wrap rt-max-width-change-v1"
                data-motion="workflow-featureCardWrap-3"
              >
                <div className="rt-leanear-border-vartical rt-border-radius-20">
                  <div
                    className="w-layout-vflex rt-feature-v1-card rt-border-radius-small-20"
                    data-motion="workflow-featureV1Card"
                  >
                    <div className="rt-feature-card-marquee rt-overflow-hidden rt-position-relative rt-marquee-height">
                      {content.featureCards.map((item, index) => (
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
                      <div className="rt-text-style-h4 rt-text-center">
                        {content.smartAndIntuitiveTaskHandling}
                      </div>
                      <div className="rt-feature-card-paragraph-wrap rt-max-width-change">
                        <p className="rt-gap-off rt-text-center">
                          {content.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rt-feature-card-wrap rt-max-width-change-v2"
                data-motion="workflow-featureCardWrap-4"
              >
                <div className="rt-leanear-border-vartical rt-border-radius-20">
                  <div className="w-layout-vflex rt-feature-v1-card rt-border-radius-small-20">
                    <div className="w-layout-vflex rt-feature-card-marquee rt-overflow-hidden rt-position-relative rt-marquee-height">
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
                      <div className="rt-text-style-h4 rt-text-center">
                        {content.customizableWorkflows}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
