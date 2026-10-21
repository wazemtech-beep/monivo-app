"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useBenefitsAnimation } from "@/hooks/sections/useBenefitsAnimation";
export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useBenefitsAnimation(sectionRef);
  const content = siteConfig.sections.benefits;
  return (
    <section className="rt-benefits-v1" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-benefit-v1-heading-block">
          <div
            className="w-layout-hflex rt-sub-text-main"
            data-motion="benefits-subTextMain"
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
          <div className="rt-benefit-v1-heading-v2 rt-overflow-hidden">
            <h2
              className="rt-gap-off rt-mobile-text-center"
              data-motion="benefits-gapOff"
            >
              {content.heading}
              <span className="rt-heading-special-font">
                {content.highlight}
              </span>
            </h2>
          </div>
        </div>
        <div className="w-layout-vflex rt-benefits-v1-main">
          <div className="w-layout-vflex rt-benefits-v1-card-block rt-full-width">
            <div className="w-layout-grid rt-benefits-v1-top-card-wr-ap">
              <div
                className="w-layout-vflex rt-benefit-v1-top-card rt-border-radius-tiny-15 rt-overflow-hidden"
                data-motion="benefits-benefitV1TopCard"
              >
                <div className="w-layout-vflex rt-benefit-v1-top-card-text-wrap">
                  <div
                    className="rt-text-style-h4 rt-mobile-text-center"
                    data-motion="benefits-textStyleH4"
                  >
                    {content.intelligentTaskAutomation}
                  </div>
                  <div className="rt-benefit-v1-top-card-paragraph rt-overflow-hidden">
                    <p
                      className="rt-gap-off rt-landscape-text-center"
                      data-motion="benefits-gapOff-2"
                    >
                      {content.description}
                    </p>
                  </div>
                </div>
                <div className="rt-benefit-v1-amplitude-image-block rt-position-relative">
                  <div
                    className="w-layout-hflex rt-benefit-v1-amplitude-marque-wrap rt-overflow-hidden"
                    data-motion="benefits-benefitV1AmplitudeMarqueWrap"
                  >
                    <div className="rt-benefit-v1-amplitude-marque-train">
                      <Image
                        src={
                          content.aveletyHomeOnebenefitCardAmplitudeImageImage
                        }
                        alt={content.aveletyHomeOnebenefitCardAmplitudeImageAlt}
                        className="rt-benefit-v1-amplitude-image"
                        width={630}
                        height={71}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                    <div className="rt-benefit-v1-amplitude-marque-train">
                      <Image
                        src={
                          content.aveletyHomeOnebenefitCardAmplitudeImageImage
                        }
                        alt={content.aveletyHomeOnebenefitCardAmplitudeImageAlt}
                        className="rt-benefit-v1-amplitude-image"
                        width={630}
                        height={71}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                    <div className="rt-benefit-v1-amplitude-marque-train">
                      <Image
                        src={
                          content.aveletyHomeOnebenefitCardAmplitudeImageImage
                        }
                        alt={content.aveletyHomeOnebenefitCardAmplitudeImageAlt}
                        className="rt-benefit-v1-amplitude-image"
                        width={630}
                        height={71}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                  </div>
                  <div className="w-layout-hflex div-block">
                    <div
                      className="w-layout-hflex rt-benefit-v1-amplitude-icon-block"
                      data-motion="benefits-benefitV1AmplitudeIconBlock"
                    >
                      <div className="w-layout-hflex rt-benefit-v1-amplitude-icon-block-v2">
                        <div className="w-layout-hflex rt-benefit-v1-amplitude-icon-wrap">
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                            }}
                            className="w-layout-hflex rt-benefit-v1-amplitude-icon"
                            data-motion="benefits-benefitV1AmplitudeIcon"
                          >
                            <Image
                              src={content.aveletyFeatureProcessIconImage}
                              alt={content.aveletyFeatureProcessIconAlt}
                              width={34}
                              height={34}
                              sizes="34px"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-layout-vflex rt-benefit-v1-top-card rt-border-radius-tiny-15 rt-background-gredient"
                data-motion="benefits-benefitV1TopCard-2"
              >
                <div className="w-layout-vflex rt-benefit-v1-top-card-text-wrap">
                  <div
                    className="rt-text-style-h4 rt-mobile-text-center"
                    data-motion="benefits-textStyleH4-2"
                  >
                    {content.fasterWorkflowExecution}
                  </div>
                  <div className="rt-benefit-v1-top-card-paragraph rt-overflow-hidden">
                    <p
                      className="rt-gap-off rt-landscape-text-center"
                      data-motion="benefits-gapOff-3"
                    >
                      {content.description2}
                    </p>
                  </div>
                </div>
                <div
                  className="w-layout-hflex rt-benefit-v1-dashboard-wrap"
                  data-motion="benefits-benefitV1DashboardWrap"
                >
                  <div className="w-layout-hflex rt-benefit-v1-dashboard-line-wrap">
                    <div
                      style={{ width: "0%" }}
                      className="w-layout-hflex rt-benefit-v1-dashboard-line rt-one"
                    >
                      <Image
                        src={content.aveletyHomeOneBenefitLineImageTwoImage}
                        alt={content.aveletyHomeOneBenefitLineImageTwoAlt}
                        className="rt-benefit-v1-dashboard-line-image"
                        width={177}
                        height={180}
                        sizes="177px"
                      />
                    </div>
                    <div className="rt-benefit-v1-dashboard-icon-wrap rt-one">
                      <div className="w-layout-hflex rt-benefit-v1-dashboard-icon">
                        <Image
                          src={content.aveletyHomeOneDashboardIconOneImage}
                          alt={content.aveletyHomeOneDashboardIconOneAlt}
                          width={18}
                          height={18}
                          sizes="18px"
                        />
                      </div>
                    </div>
                    <div className="rt-benefit-v1-dashboard-icon-wrap rt-three">
                      <div className="w-layout-hflex rt-benefit-v1-dashboard-icon">
                        <Image
                          src={content.aveletyHomeOneDashboardIconTwoImage}
                          alt={content.aveletyHomeOneDashboardIconTwoAlt}
                          width={18}
                          height={18}
                          sizes="18px"
                        />
                      </div>
                    </div>
                    <div className="rt-benefit-v1-dashboard-icon-wrap rt-two">
                      <div className="w-layout-hflex rt-benefit-v1-dashboard-icon">
                        <Image
                          src={content.aveletyHomeOneDashboardIconThreeImage}
                          alt={content.aveletyHomeOneDashboardIconThreeAlt}
                          width={18}
                          height={18}
                          sizes="18px"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      transform:
                        "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    className="w-layout-hflex rt-benefit-dashboard-v1-main-icon-wrap"
                  >
                    <div
                      style={{
                        transform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                      }}
                      className="w-layout-hflex rt-benefit-dashboard-v1-main-icon"
                      data-motion="benefits-benefitDashboardV1MainIcon"
                    >
                      <Image
                        src={content.aveletyHomeOneDashboardMainIconImage}
                        alt={content.aveletyHomeOneDashboardMainIconAlt}
                        width={18}
                        height={18}
                        sizes="18px"
                      />
                    </div>
                  </div>
                  <div className="rt-benefit-v1-dashboard-line-wrap">
                    <div
                      style={{ width: "0%" }}
                      className="rt-benefit-v1-dashboard-line rt-two"
                    >
                      <Image
                        src={content.aveletyHomeOneBenefitLineImageOneImage}
                        alt={content.aveletyHomeOneBenefitLineImageOneAlt}
                        className="rt-benefit-v1-dashboard-line-image"
                        width={177}
                        height={180}
                        sizes="177px"
                      />
                    </div>
                    <div className="rt-benefit-v1-dashboard-icon-wrap rt-five">
                      <div className="w-layout-hflex rt-benefit-v1-dashboard-icon">
                        <Image
                          src={content.aveletyHomeOneDashboardIconSixImage}
                          alt={content.aveletyHomeOneDashboardIconSixAlt}
                          width={18}
                          height={18}
                          sizes="18px"
                        />
                      </div>
                    </div>
                    <div className="rt-benefit-v1-dashboard-icon-wrap rt-four">
                      <div className="w-layout-hflex rt-benefit-v1-dashboard-icon">
                        <Image
                          src={content.aveletyHomeOneDashboardIconFourImage}
                          alt={content.aveletyHomeOneDashboardIconFourAlt}
                          width={18}
                          height={18}
                          sizes="18px"
                        />
                      </div>
                    </div>
                    <div className="rt-benefit-v1-dashboard-icon-wrap rt-six">
                      <div className="w-layout-hflex rt-benefit-v1-dashboard-icon">
                        <Image
                          src={content.aveletyHomeOneDashboardIconFiveImage}
                          alt={content.aveletyHomeOneDashboardIconFiveAlt}
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
            <div className="w-layout-grid rt-benefit-v1-card-wrap-v2 rt-overflow-hidden">
              <div
                className="w-layout-vflex rt-benefit-v1-card-v2 rt-border-radius-tiny-15 rt-overflow-hidden"
                data-motion="benefits-benefitV1CardV2"
              >
                <div className="w-layout-vflex rt-benefit-v1-card-v2-text-wrap">
                  <div
                    className="rt-text-style-h4 rt-text-center"
                    data-motion="benefits-textStyleH4-3"
                  >
                    {content.scalableAutomation}
                  </div>
                  <div
                    className="rt-text-center"
                    data-motion="benefits-textCenter"
                  >
                    {
                      content.automationThatGrowsWithYourBusinessAndAdaptsToChangingNeeds
                    }
                  </div>
                </div>
                <div
                  className="w-layout-vflex rt-benefit-v1-card-v2-client-wrap rt-full-width"
                  data-motion="benefits-benefitV1CardV2ClientWrap"
                >
                  <div className="rt-benefit-v1-card-v2-client-card-border">
                    <div className="w-layout-vflex rt-benefit-v1-card-v2-client-card">
                      <div className="w-layout-hflex rt-benefit-v1-card-v2-client-card-top">
                        <div className="rt-benefit-v1-card-v2-client-card-line rt-position-relative">
                          <div
                            style={{ width: "0%" }}
                            className="rt-benefit-v1-card-v2-client-card-grow-line rt-one"
                          ></div>
                        </div>
                        <div className="w-layout-hflex rt-benefit-v1-card-v2-client-card-menu">
                          <Image
                            src={content.aveletyMenuIconImage}
                            alt={content.aveletyMenuIconAlt}
                            width={2}
                            height={10}
                            sizes="2px"
                          />
                        </div>
                      </div>
                      <div className="w-layout-hflex rt-benefit-v1-card-v2-client-card-bottom">
                        <div className="w-layout-hflex rt-benefit-v1-card-client-wrap">
                          <div className="rt-benefit-v1-card-client-image">
                            <Image
                              src={
                                content.aveletyHomeOneBenefitClientImageOneImage
                              }
                              alt={
                                content.aveletyHomeOneBenefitClientImageOneAlt
                              }
                              width={30}
                              height={30}
                              sizes="30px"
                            />
                          </div>
                          <div className="rt-benefit-v1-card-client-image rt-minus-mergin">
                            <Image
                              src={
                                content.aveletyHomeOneBenefitClientImageTwoImage
                              }
                              alt={
                                content.aveletyHomeOneBenefitClientImageTwoAlt
                              }
                              width={30}
                              height={30}
                              sizes="30px"
                            />
                          </div>
                          <div className="rt-benefit-v1-card-client-image rt-minus-mergin">
                            <Image
                              src={
                                content.aveletyHomeOneBenefitClientImageThreeImage
                              }
                              alt={
                                content.aveletyHomeOneBenefitClientImageThreeAlt
                              }
                              width={30}
                              height={30}
                              sizes="30px"
                            />
                          </div>
                        </div>
                        <div className="rt-benefit-v1-start-tag rt-border-radius-medium-30">
                          <div className="rt-text-color-white">
                            {content.started}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rt-benefit-v1-card-v2-client-card-border rt-change">
                    <div className="w-layout-vflex rt-benefit-v1-card-v2-client-card">
                      <div className="w-layout-hflex rt-benefit-v1-card-v2-client-card-top">
                        <div className="rt-benefit-v1-card-v2-client-card-line rt-position-relative">
                          <div
                            style={{ width: "0%" }}
                            className="rt-benefit-v1-card-v2-client-card-grow-line rt-two"
                          ></div>
                        </div>
                        <div className="w-layout-hflex rt-benefit-v1-card-v2-client-card-menu">
                          <Image
                            src={content.aveletyMenuIconImage}
                            alt={content.aveletyMenuIconAlt}
                            width={2}
                            height={10}
                            sizes="2px"
                          />
                        </div>
                      </div>
                      <div className="w-layout-hflex rt-benefit-v1-card-v2-client-card-bottom">
                        <div className="w-layout-hflex rt-benefit-v1-card-client-wrap">
                          <div className="rt-benefit-v1-card-client-image">
                            <Image
                              src={
                                content.aveletyHomeOneBenefitClientImageOneImage
                              }
                              alt={
                                content.aveletyHomeOneBenefitClientImageOneAlt
                              }
                              width={30}
                              height={30}
                              sizes="30px"
                            />
                          </div>
                          <div className="rt-benefit-v1-card-client-image rt-minus-mergin">
                            <Image
                              src={
                                content.aveletyHomeOneBenefitClientImageTwoImage
                              }
                              alt={
                                content.aveletyHomeOneBenefitClientImageTwoAlt
                              }
                              width={30}
                              height={30}
                              sizes="30px"
                            />
                          </div>
                          <div className="rt-benefit-v1-card-client-image rt-minus-mergin">
                            <Image
                              src={
                                content.aveletyHomeOneBenefitClientImageThreeImage
                              }
                              alt={
                                content.aveletyHomeOneBenefitClientImageThreeAlt
                              }
                              width={30}
                              height={30}
                              sizes="30px"
                            />
                          </div>
                        </div>
                        <div className="rt-benefit-v1-start-tag rt-border-radius-medium-30 rt-change">
                          <div className="rt-text-color-white">
                            {content.started}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-layout-vflex rt-benefit-v1-card-v2 rt-border-radius-tiny-15 rt-overflow-hidden"
                data-motion="benefits-benefitV1CardV2-2"
              >
                <div className="w-layout-vflex rt-benefit-v1-card-v2-text-wrap">
                  <div
                    className="rt-text-style-h4 rt-text-center"
                    data-motion="benefits-textStyleH4-4"
                  >
                    {content.costOptimization}
                  </div>
                  <div
                    className="rt-text-center"
                    data-motion="benefits-textCenter-2"
                  >
                    {
                      content.cutsCostsWithoutCompromisingPerformanceOrOperationalStandards
                    }
                  </div>
                </div>
                <div
                  className="w-layout-hflex rt-benefit-v1-card-v2-bar-wrap rt-full-width rt-position-relative"
                  data-motion="benefits-benefitV1CardV2BarWrap"
                >
                  <div
                    style={{ height: "0rem" }}
                    className="w-layout-vflex rt-benefit-v1-card-v2-bar rt-one"
                  >
                    <div className="w-layout-hflex rt-benefit-v1-card-v2-bar-number">
                      <div className="rt-benefit-v1-card-v2-bar-number-text rt-text-color-white">
                        {content.value12}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ height: "0rem" }}
                    className="rt-benefit-v1-card-v2-bar rt-two"
                  ></div>
                  <div
                    style={{ height: "0rem" }}
                    className="w-layout-vflex rt-benefit-v1-card-v2-bar rt-three"
                  >
                    <div className="w-layout-hflex rt-benefit-v1-card-v2-bar-number">
                      <div className="rt-benefit-v1-card-v2-bar-number-text rt-text-color-white">
                        {content.value122}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ height: "0rem" }}
                    className="rt-benefit-v1-card-v2-bar rt-four"
                  ></div>
                  <div
                    style={{ height: "0rem" }}
                    className="rt-benefit-v1-card-v2-bar rt-five"
                  ></div>
                  <div
                    className="rt-border-line"
                    data-motion="benefits-borderLine"
                  ></div>
                  <div className="w-layout-vflex rt-benefit-v1-card-v2-text-tag">
                    <div className="rt-benefit-v1-card-v2-bar-number-text rt-change">
                      {content.value809}
                    </div>
                    <div className="rt-benefit-v1-card-v2-bar-number-text">
                      {content.betterThanLastMonth}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-layout-vflex rt-benefit-v1-card-v2 rt-border-radius-tiny-15 rt-overflow-hidden"
                data-motion="benefits-benefitV1CardV2-3"
              >
                <div className="w-layout-vflex rt-benefit-v1-card-v2-text-wrap">
                  <div
                    className="rt-text-style-h4 rt-text-center"
                    data-motion="benefits-textStyleH4-5"
                  >
                    {content.userFriendlyControlPanel}
                  </div>
                  <div
                    className="rt-text-center"
                    data-motion="benefits-textCenter-3"
                  >
                    {
                      content.controlAutomationEasilyWithASimpleNoCodeInterfaceBuiltForEveryone
                    }
                  </div>
                </div>
                <div className="rt-benefit-v1-card-v2-client-image">
                  <Image
                    src={content.aveletyHomeOneBenefitCardClientLineImageImage}
                    alt={content.aveletyHomeOneBenefitCardClientLineImageAlt}
                    width={1335}
                    height={705}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
