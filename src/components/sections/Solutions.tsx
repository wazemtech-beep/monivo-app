"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useSolutionsAnimation } from "@/hooks/sections/useSolutionsAnimation";
export default function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useSolutionsAnimation(sectionRef);
  const content = siteConfig.sections.solutions;
  return (
    <section className="rt-unique-solution-v1" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-unique-solution-v1-main">
          <div className="w-layout-vflex rt-unique-solution-v1-heading-wrap">
            <div
              className="w-layout-hflex rt-sub-text-main"
              data-motion="solutions-subTextMain"
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
            <div className="rt-unique-solution-v1-heading rt-overflow-hidden">
              <h2
                className="rt-gap-off rt-text-center"
                data-motion="solutions-gapOff"
              >
                {content.heading}
                <span className="rt-heading-special-font">
                  {content.highlight}
                </span>
              </h2>
            </div>
          </div>
          <div
            className="w-layout-grid rt-unique-solution-v1-card-wrap rt-full-width"
            data-motion="solutions-uniqueSolutionV1CardWrap"
          >
            <div
              className="w-layout-vflex rt-unique-solution-v1-card-block"
              data-motion="solutions-uniqueSolutionV1CardBlock"
            >
              <div
                className="w-layout-vflex rt-unique-solution-v1-card rt-border-radius-small-20"
                data-motion="solutions-uniqueSolutionV1Card"
              >
                <div className="w-layout-vflex rt-unique-solution-v1-card-icon-wrap rt-overflow-hidden rt-position-relative">
                  <div className="w-layout-vflex rt-unique-solution-v1-card-icon-block">
                    <div className="w-layout-hflex rt-unique-solution-v1-card-icon">
                      <Image
                        src={
                          content.aveletyAboutUniqueSolutionCardWorkflowAutomationIconImage
                        }
                        alt={
                          content.aveletyAboutUniqueSolutionCardWorkflowAutomationIconAlt
                        }
                        width={46}
                        height={46}
                        sizes="46px"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      transform:
                        "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="rt-unique-solution-v1-card-icon-popup"
                  ></div>
                </div>
                <div className="w-layout-vflex rt-unique-solution-v1-card-text">
                  <div className="rt-text-style-h4 rt-landscape-text-center">
                    {content.workflowAutomation}
                  </div>
                  <div className="rt-landscape-text-center">
                    {
                      content.workflowAutomationSimplifiesOperationsAndHelpsTeamsFocusOnHighVal
                    }
                  </div>
                </div>
                <div className="w-layout-hflex rt-unique-solution-v1-card-plus-icon-wrap">
                  <div
                    style={{
                      transform:
                        "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                    }}
                    className="w-layout-hflex rt-unique-solution-v1-card-plus-icon"
                  >
                    <Image
                      src={content.aveletyWhitePlusIconImage}
                      alt={content.aveletyWhitePlusIconAlt}
                      width={18}
                      height={18}
                      sizes="18px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-layout-vflex rt-unique-solution-v1-card-block"
              data-motion="solutions-uniqueSolutionV1CardBlock-2"
            >
              <div
                className="w-layout-vflex rt-unique-solution-v1-card rt-border-radius-small-20 rt-margin-bottom"
                data-motion="solutions-uniqueSolutionV1Card-2"
              >
                <div className="w-layout-vflex rt-unique-solution-v1-card-icon-wrap rt-overflow-hidden rt-position-relative">
                  <div className="w-layout-vflex rt-unique-solution-v1-card-icon-block">
                    <div className="w-layout-hflex rt-unique-solution-v1-card-icon">
                      <Image
                        src={
                          content.aveletyAboutUniqueSolutionCardFasterDecisionIconImage
                        }
                        alt={
                          content.aveletyAboutUniqueSolutionCardFasterDecisionIconAlt
                        }
                        width={46}
                        height={46}
                        sizes="46px"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      transform:
                        "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="rt-unique-solution-v1-card-icon-popup"
                  ></div>
                </div>
                <div className="w-layout-vflex rt-unique-solution-v1-card-text">
                  <div className="rt-text-style-h4 rt-landscape-text-center">
                    {content.fasterDecisionMaking}
                  </div>
                  <div className="rt-landscape-text-center">
                    {
                      content.makeFasterMoreInformedDecisionsUsingIntelligentDataAndRealTimeRep
                    }
                  </div>
                </div>
                <div className="w-layout-hflex rt-unique-solution-v1-card-plus-icon-wrap">
                  <div
                    style={{
                      transform:
                        "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                    }}
                    className="w-layout-hflex rt-unique-solution-v1-card-plus-icon"
                  >
                    <Image
                      src={content.aveletyWhitePlusIconImage}
                      alt={content.aveletyWhitePlusIconAlt}
                      width={18}
                      height={18}
                      sizes="18px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-layout-vflex rt-unique-solution-v1-card-block"
              data-motion="solutions-uniqueSolutionV1CardBlock-3"
            >
              <div
                className="w-layout-vflex rt-unique-solution-v1-card rt-border-radius-small-20"
                data-motion="solutions-uniqueSolutionV1Card-3"
              >
                <div className="w-layout-vflex rt-unique-solution-v1-card-icon-wrap rt-overflow-hidden rt-position-relative">
                  <div className="w-layout-vflex rt-unique-solution-v1-card-icon-block">
                    <div className="w-layout-hflex rt-unique-solution-v1-card-icon">
                      <Image
                        src={content.aveletyServiceAutomationOptionIconOneImage}
                        alt={content.aveletyServiceAutomationOptionIconOneAlt}
                        width={46}
                        height={46}
                        sizes="46px"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      transform:
                        "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="rt-unique-solution-v1-card-icon-popup"
                  ></div>
                </div>
                <div className="w-layout-vflex rt-unique-solution-v1-card-text">
                  <div className="rt-text-style-h4 rt-landscape-text-center">
                    {content.improvedEfficiency}
                  </div>
                  <div className="rt-landscape-text-center">
                    {
                      content.intelligentSystemsRemoveBottlenecksSavingTimeAndIncreasingProduct
                    }
                  </div>
                </div>
                <div className="w-layout-hflex rt-unique-solution-v1-card-plus-icon-wrap">
                  <div
                    style={{
                      transform:
                        "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                    }}
                    className="w-layout-hflex rt-unique-solution-v1-card-plus-icon"
                  >
                    <Image
                      src={content.aveletyWhitePlusIconImage}
                      alt={content.aveletyWhitePlusIconAlt}
                      width={18}
                      height={18}
                      sizes="18px"
                    />
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
