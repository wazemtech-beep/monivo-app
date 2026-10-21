"use client";
import { useRef } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useCompanyOverviewAnimation } from "@/hooks/sections/useCompanyOverviewAnimation";
export default function CompanyOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useCompanyOverviewAnimation(sectionRef);
  const content = siteConfig.sections.companyOverview;
  return (
    <section className="rt-about-v1 rt-overflow-hidden" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-about-v1-main">
          <div className="w-layout-vflex rt-about-v1-heading-wrap">
            <div
              className="w-layout-hflex rt-sub-text-main"
              data-motion="companyOverview-subTextMain"
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
            <div top-box="" className="rt-about-v1-heading rt-overflow-hidden">
              <h2
                fade-heading=""
                className="rt-gap-off rt-text-center"
                data-motion="companyOverview-gapOff"
              >
                {content.heading}
                <span className="rt-heading-special-font">
                  {content.highlight}
                </span>
              </h2>
            </div>
          </div>
          <div className="w-layout-grid rt-productivity-v1-card-wrap rt-full-width rt-change">
            <div className="w-layout-hflex rt-productivity-v1-card-wrap rt-position-relative">
              <div
                className="w-layout-vflex rt-productivity-v1-card rt-max-width"
                data-motion="companyOverview-productivityV1Card"
              >
                <div
                  className="w-layout-hflex rt-big-text-v1-counter-box"
                  data-motion="companyOverview-bigTextV1CounterBox"
                >
                  <div className="w-layout-vflex rt-counter-train-wrap">
                    <div
                      style={{
                        transform:
                          "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="w-layout-vflex rt-counter-train rt-bottom-move"
                    >
                      <div className="rt-big-text-v1">{content.value0}</div>
                      <div className="rt-big-text-v1">{content.value1}</div>
                      <div className="rt-big-text-v1">{content.value2}</div>
                      <div className="rt-big-text-v1">{content.value3}</div>
                      <div className="rt-big-text-v1">{content.value4}</div>
                      <div className="rt-big-text-v1">{content.value5}</div>
                      <div className="rt-big-text-v1">{content.value6}</div>
                    </div>
                    <div
                      style={{
                        transform:
                          "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="w-layout-vflex rt-counter-train rt-bottom-move"
                    >
                      <div className="rt-big-text-v1">{content.value7}</div>
                      <div className="rt-big-text-v1">{content.value1}</div>
                      <div className="rt-big-text-v1">{content.value2}</div>
                      <div className="rt-big-text-v1">{content.value3}</div>
                      <div className="rt-big-text-v1">{content.value4}</div>
                      <div className="rt-big-text-v1">{content.value5}</div>
                      <div className="rt-big-text-v1">{content.value6}</div>
                    </div>
                  </div>
                  <div className="w-layout-vflex rt-counter-train-wrap">
                    <div
                      style={{
                        transform:
                          "translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="w-layout-vflex rt-counter-train rt-top-move"
                    >
                      <div className="rt-big-text-v1">{content.value0}</div>
                      <div className="rt-big-text-v1">{content.value1}</div>
                      <div className="rt-big-text-v1">{content.value2}</div>
                      <div className="rt-big-text-v1">{content.value3}</div>
                      <div className="rt-big-text-v1">{content.value4}</div>
                      <div className="rt-big-text-v1">{content.value5}</div>
                      <div className="rt-big-text-v1">{content.value6}</div>
                    </div>
                    <div
                      style={{
                        transform:
                          "translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="w-layout-vflex rt-counter-train rt-top-move"
                    >
                      <div className="rt-big-text-v1">{content.value0}</div>
                      <div className="rt-big-text-v1">{content.value1}</div>
                      <div className="rt-big-text-v1">{content.value2}</div>
                      <div className="rt-big-text-v1">{content.value3}</div>
                      <div className="rt-big-text-v1">{content.value4}</div>
                      <div className="rt-big-text-v1">{content.value5}</div>
                      <div className="rt-big-text-v1">{content.value6}</div>
                    </div>
                  </div>
                  <div className="rt-big-text-v1">{content.text}</div>
                </div>
                <div className="w-layout-vflex rt-productivity-v1-card-text-wrap">
                  <div className="rt-text-style-h5 rt-text-center">
                    {content.fasterProcesses}
                  </div>
                  <div className="rt-text-center">
                    {
                      content.makeOperationsFasterAndSmootherWithEfficiencyFocusedSystems
                    }
                  </div>
                </div>
              </div>
              <div
                style={{ height: "0%" }}
                className="rt-productivity-v1-card-border rt-landscape-display-none"
                data-motion="companyOverview-productivityV1CardBorder"
              ></div>
            </div>
            <div className="w-layout-hflex rt-productivity-v1-card-wrap rt-position-relative">
              <div
                className="w-layout-vflex rt-productivity-v1-card rt-max-width"
                data-motion="companyOverview-productivityV1Card-2"
              >
                <div
                  className="w-layout-hflex rt-big-text-v1-counter-box"
                  data-motion="companyOverview-bigTextV1CounterBox-2"
                >
                  <div className="w-layout-vflex rt-counter-train-wrap">
                    <div
                      style={{
                        transform:
                          "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="w-layout-vflex rt-counter-train rt-bottom-move"
                    >
                      <div className="rt-big-text-v1">{content.value0}</div>
                      <div className="rt-big-text-v1">{content.value1}</div>
                      <div className="rt-big-text-v1">{content.value2}</div>
                      <div className="rt-big-text-v1">{content.value3}</div>
                      <div className="rt-big-text-v1">{content.value4}</div>
                      <div className="rt-big-text-v1">{content.value5}</div>
                      <div className="rt-big-text-v1">{content.value6}</div>
                      <div className="rt-big-text-v1">{content.value7}</div>
                      <div className="rt-big-text-v1">{content.value8}</div>
                      <div className="rt-big-text-v1">{content.value9}</div>
                      <div className="rt-big-text-v1">{content.value0}</div>
                      <div className="rt-big-text-v1">{content.value1}</div>
                    </div>
                    <div
                      style={{
                        transform:
                          "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="w-layout-vflex rt-counter-train rt-bottom-move"
                    >
                      <div className="rt-big-text-v1">{content.value2}</div>
                      <div className="rt-big-text-v1">{content.value3}</div>
                      <div className="rt-big-text-v1">{content.value4}</div>
                      <div className="rt-big-text-v1">{content.value5}</div>
                      <div className="rt-big-text-v1">{content.value6}</div>
                      <div className="rt-big-text-v1">{content.value7}</div>
                      <div className="rt-big-text-v1">{content.value8}</div>
                      <div className="rt-big-text-v1">{content.value9}</div>
                      <div className="rt-big-text-v1">{content.value0}</div>
                      <div className="rt-big-text-v1">{content.value1}</div>
                      <div className="rt-big-text-v1">{content.value2}</div>
                      <div className="rt-big-text-v1">{content.value3}</div>
                    </div>
                  </div>
                  <div className="w-layout-vflex rt-counter-train-wrap">
                    <div
                      style={{
                        transform:
                          "translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="w-layout-vflex rt-counter-train rt-top-move"
                    >
                      <div className="rt-big-text-v1">{content.value0}</div>
                      <div className="rt-big-text-v1">{content.value1}</div>
                      <div className="rt-big-text-v1">{content.value2}</div>
                      <div className="rt-big-text-v1">{content.value3}</div>
                      <div className="rt-big-text-v1">{content.value4}</div>
                      <div className="rt-big-text-v1">{content.value5}</div>
                      <div className="rt-big-text-v1">{content.value6}</div>
                    </div>
                    <div
                      style={{
                        transform:
                          "translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="w-layout-vflex rt-counter-train rt-top-move"
                    >
                      <div className="rt-big-text-v1">{content.value0}</div>
                      <div className="rt-big-text-v1">{content.value1}</div>
                      <div className="rt-big-text-v1">{content.value2}</div>
                      <div className="rt-big-text-v1">{content.value3}</div>
                      <div className="rt-big-text-v1">{content.value4}</div>
                      <div className="rt-big-text-v1">{content.value5}</div>
                      <div className="rt-big-text-v1">{content.value6}</div>
                    </div>
                  </div>
                  <div className="rt-big-text-v1">{content.k}</div>
                </div>
                <div className="w-layout-vflex rt-productivity-v1-card-text-wrap">
                  <div className="rt-text-style-h5 rt-text-center">
                    {content.productivityBoost}
                  </div>
                  <div className="rt-text-center">
                    {
                      content.letAiTakeCareOfRoutineWorkSoYourTeamCanInnovateAndGrow
                    }
                  </div>
                </div>
              </div>
              <div
                style={{ height: "0%" }}
                className="rt-productivity-v1-card-border rt-landscape-display-none"
                data-motion="companyOverview-productivityV1CardBorder-2"
              ></div>
            </div>
            <div
              id="w-node-_358ddd1b-f7dd-cb9e-e952-801772146a57-7a10eaf9"
              className="w-layout-hflex rt-productivity-v1-card-wrap rt-position-relative"
            >
              <div
                className="w-layout-vflex rt-productivity-v1-card rt-max-width"
                data-motion="companyOverview-productivityV1Card-3"
              >
                <div
                  className="w-layout-hflex rt-big-text-v1-counter-box"
                  data-motion="companyOverview-bigTextV1CounterBox-3"
                >
                  <div className="w-layout-vflex rt-counter-train-wrap">
                    <div
                      style={{
                        transform:
                          "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="w-layout-vflex rt-counter-train rt-bottom-move"
                    >
                      <div className="rt-big-text-v1">{content.value0}</div>
                      <div className="rt-big-text-v1">{content.value1}</div>
                      <div className="rt-big-text-v1">{content.value2}</div>
                      <div className="rt-big-text-v1">{content.value3}</div>
                      <div className="rt-big-text-v1">{content.value4}</div>
                      <div className="rt-big-text-v1">{content.value5}</div>
                      <div className="rt-big-text-v1">{content.value6}</div>
                      <div className="rt-big-text-v1">{content.value7}</div>
                      <div className="rt-big-text-v1">{content.value8}</div>
                      <div className="rt-big-text-v1">{content.value9}</div>
                      <div className="rt-big-text-v1">{content.value0}</div>
                      <div className="rt-big-text-v1">{content.value1}</div>
                    </div>
                    <div
                      style={{
                        transform:
                          "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="w-layout-vflex rt-counter-train rt-bottom-move"
                    >
                      <div className="rt-big-text-v1">{content.value2}</div>
                      <div className="rt-big-text-v1">{content.value3}</div>
                      <div className="rt-big-text-v1">{content.value4}</div>
                      <div className="rt-big-text-v1">{content.value5}</div>
                      <div className="rt-big-text-v1">{content.value6}</div>
                      <div className="rt-big-text-v1">{content.value7}</div>
                      <div className="rt-big-text-v1">{content.value8}</div>
                      <div className="rt-big-text-v1">{content.value9}</div>
                      <div className="rt-big-text-v1">{content.value0}</div>
                      <div className="rt-big-text-v1">{content.value1}</div>
                      <div className="rt-big-text-v1">{content.value2}</div>
                      <div className="rt-big-text-v1">{content.value3}</div>
                    </div>
                  </div>
                  <div className="rt-big-text-v1">{content.m}</div>
                </div>
                <div className="w-layout-vflex rt-productivity-v1-card-text-wrap">
                  <div className="rt-text-style-h5 rt-text-center">
                    {content.savedAnnually}
                  </div>
                  <div className="rt-text-center">
                    {
                      content.automationThatCutsEffortReducesCostsAndBoostsEfficiency
                    }
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rt-border-line"
              data-motion="companyOverview-borderLine"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
