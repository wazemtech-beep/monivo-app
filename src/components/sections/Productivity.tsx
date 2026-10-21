"use client";
import { useRef } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useProductivityAnimation } from "@/hooks/sections/useProductivityAnimation";
export default function Productivity() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useProductivityAnimation(sectionRef);
  const content = siteConfig.sections.productivity;
  return (
    <section className="rt-productivity-v1" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-productivity-v1-main">
          <div
            top-box=""
            className="rt-productivity-v1-heading-wrap rt-overflow-hidden"
          >
            <h2
              fade-heading=""
              className="rt-gap-off rt-text-center"
              data-motion="productivity-gapOff"
            >
              {content.heading}
              <span className="rt-heading-special-font">
                {content.highlight}
              </span>
            </h2>
          </div>
          <div className="w-layout-grid rt-productivity-v1-card-wrap rt-full-width rt-padding-bottom-none">
            <div
              className="w-layout-vflex rt-productivity-v1-card"
              data-motion="productivity-productivityV1Card"
            >
              <div
                className="w-layout-hflex rt-big-text-v1-counter-box"
                data-motion="productivity-bigTextV1CounterBox"
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
              className="w-layout-vflex rt-productivity-v1-card"
              data-motion="productivity-productivityV1Card-2"
            >
              <div
                className="w-layout-hflex rt-big-text-v1-counter-box"
                data-motion="productivity-bigTextV1CounterBox-2"
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
              id="w-node-_28e22d93-86fa-a90a-68d2-bc9dba0eb73a-58a7c05f"
              className="w-layout-vflex rt-productivity-v1-card"
              data-motion="productivity-productivityV1Card-3"
            >
              <div
                className="w-layout-hflex rt-big-text-v1-counter-box"
                data-motion="productivity-bigTextV1CounterBox-3"
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
        </div>
      </div>
    </section>
  );
}
