"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useAutomationBenefitsAnimation } from "@/hooks/sections/useAutomationBenefitsAnimation";
export default function AutomationBenefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useAutomationBenefitsAnimation(sectionRef);
  const content = siteConfig.sections.automationBenefits;
  return (
    <section
      className="rt-benefit-v2"
      data-motion="automationBenefits-benefitV2"
      ref={sectionRef}
    >
      <div className="rt-benefit-v2-sticky">
        <div className="w-layout-blockcontainer rt-container w-container">
          <div className="w-layout-vflex rt-benefit-v2-main">
            <div className="w-layout-hflex rt-benefit-v2-heading-wrap rt-full-width">
              <div className="w-layout-vflex rt-benefit-v2-heading-block">
                <div
                  className="w-layout-hflex rt-sub-text-main"
                  data-motion="automationBenefits-subTextMain"
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
                <div className="rt-benefit-v2-heading rt-overflow-hidden">
                  <h2
                    className="rt-gap-off rt-landscape-text-center"
                    data-motion="automationBenefits-gapOff"
                  >
                    {content.heading}
                    <span className="rt-heading-special-font">
                      {content.highlight}
                    </span>
                  </h2>
                </div>
              </div>
              <div
                className="rt-benefit-v2-button-wrap"
                data-motion="automationBenefits-benefitV2ButtonWrap"
              >
                <Link
                  href={content.seeAiInActionseeAiInActionHref}
                  className="rt-button w-inline-block"
                  data-motion="automationBenefits-button"
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
            </div>
            <div
              className="w-layout-hflex rt-benefits-v4-main rt-overflow-hidden rt-full-width"
              data-motion="automationBenefits-benefitsV4Main"
            >
              <div className="w-layout-vflex rt-benefits-v4-left-part">
                <div className="rt-tab-display-none">
                  <div className="rt-benefits-v4-shape rt-one">
                    <Image
                      alt={content.aveletyServiceBenefitsShapeAlt}
                      src={content.aveletyServiceBenefitsShapeImage}
                      className="rt-auto-fit rt-desktop-image-full-width"
                      width={506}
                      height={280}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div className="rt-benefits-v4-shape rt-two">
                    <Image
                      alt={content.aveletyServiceBenefitsShapeAlt}
                      src={content.aveletyServiceBenefitsShapeImage}
                      className="rt-auto-fit rt-desktop-image-full-width"
                      width={506}
                      height={280}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div className="rt-benefits-v4-shape rt-one">
                    <Image
                      alt={content.aveletyServiceBenefitsShapeAlt}
                      src={content.aveletyServiceBenefitsShapeImage}
                      className="rt-auto-fit rt-desktop-image-full-width"
                      width={506}
                      height={280}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div className="rt-benefits-v4-shape rt-four">
                    <Image
                      alt={content.aveletyServiceBenefitsShapeAlt}
                      src={content.aveletyServiceBenefitsShapeImage2}
                      className="rt-auto-fit rt-desktop-image-full-width"
                      width={506}
                      height={280}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div className="rt-benefits-v4-shape rt-five">
                    <Image
                      alt={content.aveletyAboutBenefitsShapeAlt}
                      src={content.aveletyAboutBenefitsShapeImage}
                      className="rt-auto-fit rt-desktop-image-full-width"
                      width={646}
                      height={358}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                </div>
                <div className="rt-benefits-v4-image-wrap">
                  <Image
                    alt={content.aveletyServiceBenefitsShapeAlt}
                    src={content.aveletyServiceBenefitsShapeImage3}
                    className="rt-auto-fit rt-tab-image-full-width"
                    width={602}
                    height={575}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
              </div>
              <div className="w-layout-vflex rt-benefits-v4-right-part">
                <div className="w-layout-vflex rt-benefits-v4-content-wrap">
                  <div className="w-layout-hflex rt-benefits-v4-content-box rt-one">
                    <div className="w-layout-hflex rt-benefits-v3-line-wrap">
                      <div className="rt-benefits-v2-line rt-one"></div>
                      <div className="rt-benefits-v2-dot"></div>
                    </div>
                    <div className="rt-text-style-h5">
                      {content.saveTimeAndReduceManualEffort}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-benefits-v4-content-box rt-two">
                    <div className="w-layout-hflex rt-benefits-v3-line-wrap">
                      <div className="rt-benefits-v2-line rt-two"></div>
                      <div className="rt-benefits-v2-dot"></div>
                    </div>
                    <div className="rt-text-style-h5">
                      {content.minimizeHumanErrorsAndDelays}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-benefits-v4-content-box rt-three">
                    <div className="w-layout-hflex rt-benefits-v3-line-wrap">
                      <div className="rt-benefits-v2-line rt-three"></div>
                      <div className="rt-benefits-v2-dot"></div>
                    </div>
                    <div className="rt-text-style-h5">
                      {content.scaleOperationsEfficiently}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-benefits-v4-content-box rt-four">
                    <div className="w-layout-hflex rt-benefits-v3-line-wrap">
                      <div className="rt-benefits-v2-line rt-four"></div>
                      <div className="rt-benefits-v2-dot"></div>
                    </div>
                    <div className="rt-text-style-h5">
                      {content.improveDecisionMakingWithRealTimeInsights}
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-benefits-v4-content-box rt-five">
                    <div className="w-layout-hflex rt-benefits-v3-line-wrap">
                      <div className="rt-benefits-v2-line rt-five"></div>
                      <div className="rt-benefits-v2-dot"></div>
                    </div>
                    <div className="rt-text-style-h5">
                      {content.improveSatisfactionWithQuickReplies}
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
