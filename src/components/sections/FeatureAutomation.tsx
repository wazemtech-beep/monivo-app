"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useFeatureAutomationAnimation } from "@/hooks/sections/useFeatureAutomationAnimation";
export default function FeatureAutomation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useFeatureAutomationAnimation(sectionRef);
  const content = siteConfig.sections.featureAutomation;
  return (
    <section className="rt-automation-v1 rt-position-relative" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-automation-v1-main">
          <div
            className="rt-automation-v1-image-block rt-overflow-hidden"
            data-motion="featureAutomation-automationV1ImageBlock"
          >
            <div className="rt-leanear-border-vartical rt-border-radius-20">
              <div
                className="w-layout-vflex rt-automation-v1-image-wrap rt-border-radius-small-20"
                data-motion="featureAutomation-automationV1ImageWrap"
              >
                <div className="w-layout-hflex rt-automation-v1-image-heading">
                  <div className="rt-automation-v1-image-heading-dot"></div>
                  <div className="rt-small-text-v1">
                    {content.leadConversionRates}
                  </div>
                </div>
                <div className="rt-automation-v1-dashboard rt-border-radius-small-20 rt-overflow-hidden">
                  <Image
                    src={content.aveletyFeatureAutomationDashboardImageImage}
                    alt={content.aveletyFeatureAutomationDashboardImageAlt}
                    width={1710}
                    height={1050}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                  <div className="w-layout-hflex rt-automation-v1-dashboard-bar-wrap">
                    <div className="w-layout-hflex rt-automation-v1-dashboard-bar-block">
                      <div
                        style={{ height: "0rem" }}
                        className="rt-automation-v1-dashboard-bar rt-one"
                      ></div>
                      <div className="rt-automation-v1-dashboard-bar rt-two rt-bg-color-white-v2"></div>
                      <div
                        style={{ height: "0rem" }}
                        className="rt-automation-v1-dashboard-bar rt-three"
                      ></div>
                      <div className="rt-automation-v1-dashboard-bar rt-four rt-bg-color-white-v2"></div>
                      <div
                        style={{ height: "0rem" }}
                        className="rt-automation-v1-dashboard-bar rt-five"
                      ></div>
                      <div className="rt-automation-v1-dashboard-bar rt-six rt-bg-color-white-v2"></div>
                      <div
                        style={{ height: "0rem" }}
                        className="rt-automation-v1-dashboard-bar rt-seven"
                      ></div>
                      <div className="rt-automation-v1-dashboard-bar rt-eight rt-bg-color-white-v2"></div>
                      <div
                        style={{ height: "0rem" }}
                        className="rt-automation-v1-dashboard-bar rt-nine"
                      ></div>
                      <div className="rt-automation-v1-dashboard-bar rt-ten rt-bg-color-white-v2"></div>
                      <div
                        style={{ height: "0rem" }}
                        className="rt-automation-v1-dashboard-bar rt-eleven"
                      ></div>
                      <div className="rt-automation-v1-dashboard-bar rt-twelve rt-bg-color-white-v2"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="w-layout-hflex rt-automation-v1-button-wrap rt-full-width rt-position-relative"
                  data-motion="featureAutomation-automationV1ButtonWrap"
                >
                  <Link
                    href={content.connectNowHref}
                    className="rt-automation-v1-button w-inline-block"
                  >
                    <div className="w-layout-hflex rt-automation-v1-button-icon">
                      <Image
                        src={content.aveletyFeatureAutomationButtonIconImage}
                        alt={content.aveletyFeatureAutomationButtonIconAlt}
                        width={10}
                        height={10}
                        sizes="10px"
                      />
                    </div>
                    <div className="rt-button-font">
                      {content.buttonLabel}
                      <br />
                    </div>
                  </Link>
                  <div className="rt-automation-v1-vertical-line rt-tab-display-none"></div>
                  <div className="rt-round">
                    <Image
                      src={content.roundImage}
                      alt={content.Alt}
                      width={8}
                      height={8}
                      sizes="8px"
                    />
                  </div>
                  <div className="rt-round rt-2">
                    <Image
                      src={content.roundImage}
                      alt={content.Alt}
                      width={8}
                      height={8}
                      sizes="8px"
                    />
                  </div>
                  <div className="rt-round rt-2 rt-3">
                    <Image
                      src={content.roundImage}
                      alt={content.Alt}
                      width={8}
                      height={8}
                      sizes="8px"
                    />
                  </div>
                </div>
                <Link
                  href={content.integrationAppHref}
                  className="rt-automation-app-wrap rt-full-width rt-border-radius-tiny-15 w-inline-block"
                  data-motion="featureAutomation-automationAppWrap"
                >
                  <div className="w-layout-hflex rt-automation-app">
                    <div className="w-layout-hflex rt-automation-app-icon">
                      <div>
                        <Image
                          src={content.aveletyFeatureAutomationAppIconImage}
                          alt={content.aveletyFeatureAutomationAppIconAlt}
                          width={19}
                          height={20}
                          sizes="19px"
                        />
                      </div>
                    </div>
                    <div className="rt-text-style-h6">
                      {content.integrationApp}
                    </div>
                  </div>
                  <div className="rt-automation-app-arrow-wrap">
                    <Image
                      src={content.aveletyFeatureAutomationAppArrowIconImage}
                      alt={content.aveletyFeatureAutomationAppArrowIconAlt}
                      width={10}
                      height={10}
                      sizes="10px"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-layout-vflex rt-automation-v1-text-block">
            <div className="rt-automation-v1-heading-wrap">
              <div className="rt-automation-v1-heading rt-overflow-hidden">
                <h2
                  className="rt-gap-off"
                  data-motion="featureAutomation-gapOff"
                >
                  {content.heading}
                  <span className="rt-heading-special-font">
                    {content.highlight}
                  </span>
                </h2>
              </div>
              <div className="rt-automation-v1-paragraph rt-overflow-hidden">
                <p
                  className="rt-gap-off"
                  data-motion="featureAutomation-gapOff-2"
                >
                  {content.description}
                </p>
              </div>
            </div>
            <div className="w-layout-hflex rt-automation-counter-option-wrap rt-full-width">
              <div className="w-layout-vflex rt-automation-counter-option rt-full-width">
                <div
                  className="w-layout-vflex rt-automation-counter-wrap"
                  data-motion="featureAutomation-automationCounterWrap"
                >
                  <div
                    className="w-layout-hflex rt-counter-box-h2"
                    data-motion="featureAutomation-counterBoxH2"
                  >
                    <div className="w-layout-vflex rt-counter-train-wrap">
                      <div
                        style={{
                          transform:
                            "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        className="w-layout-vflex rt-counter-train"
                      >
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight2}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight6}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight7}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight8}
                        </div>
                      </div>
                      <div
                        style={{
                          transform:
                            "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        className="rt-counter-train"
                      >
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight9}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight6}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight7}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight8}
                        </div>
                      </div>
                    </div>
                    <div className="w-layout-vflex rt-counter-train-wrap">
                      <div
                        style={{
                          transform:
                            "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        className="rt-counter-train"
                      >
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight2}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight6}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight7}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight8}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight9}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight10}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight11}
                        </div>
                      </div>
                      <div
                        style={{
                          transform:
                            "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        className="rt-counter-train"
                      >
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight2}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight6}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight7}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight8}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight9}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight10}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight11}
                        </div>
                      </div>
                    </div>
                    <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                      {content.highlight12}
                    </div>
                  </div>
                  <div className="rt-text-style-h5">
                    {content.fasterProcesses}
                  </div>
                </div>
                <div
                  className="w-layout-vflex rt-automation-counter-wrap"
                  data-motion="featureAutomation-automationCounterWrap-2"
                >
                  <div
                    className="w-layout-hflex rt-counter-box-h2"
                    data-motion="featureAutomation-counterBoxH2-2"
                  >
                    <div className="w-layout-vflex rt-counter-train-wrap">
                      <div
                        style={{
                          transform:
                            "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        className="w-layout-vflex rt-counter-train"
                      >
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight2}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight6}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight7}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight8}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight9}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight10}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight11}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight2}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                      </div>
                      <div
                        style={{
                          transform:
                            "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        className="w-layout-vflex rt-counter-train"
                      >
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight6}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight7}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight8}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight9}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight10}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight11}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight2}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                      </div>
                    </div>
                    <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                      {content.highlight13}
                    </div>
                  </div>
                  <div className="rt-text-style-h5">
                    {content.productivityBoost}
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-automation-counter-option rt-full-width rt-align-change">
                <div
                  className="w-layout-vflex rt-automation-counter-wrap"
                  data-motion="featureAutomation-automationCounterWrap-3"
                >
                  <div
                    className="w-layout-hflex rt-counter-box-h2"
                    data-motion="featureAutomation-counterBoxH2-3"
                  >
                    <div className="w-layout-vflex rt-counter-train-wrap">
                      <div
                        style={{
                          transform:
                            "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        className="w-layout-vflex rt-counter-train"
                      >
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight2}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight6}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight7}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight8}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight9}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight10}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight11}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight2}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                      </div>
                      <div
                        style={{
                          transform:
                            "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        className="w-layout-vflex rt-counter-train"
                      >
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight6}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight7}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight8}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight9}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight10}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight11}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight2}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                      </div>
                    </div>
                    <div className="w-layout-vflex rt-counter-train-wrap">
                      <div
                        style={{
                          transform:
                            "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        className="rt-counter-train"
                      >
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight2}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight6}
                        </div>
                      </div>
                      <div
                        style={{
                          transform:
                            "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        className="rt-counter-train"
                      >
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight7}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight6}
                        </div>
                      </div>
                    </div>
                    <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                      {content.highlight14}
                    </div>
                  </div>
                  <div className="rt-text-style-h5">
                    {content.savedAnnually}
                  </div>
                </div>
                <div
                  className="w-layout-vflex rt-automation-counter-wrap"
                  data-motion="featureAutomation-automationCounterWrap-4"
                >
                  <div
                    className="w-layout-hflex rt-counter-box-h2"
                    data-motion="featureAutomation-counterBoxH2-4"
                  >
                    <div className="w-layout-vflex rt-counter-train-wrap">
                      <div
                        style={{
                          transform:
                            "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        className="w-layout-vflex rt-counter-train"
                      >
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight2}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                      </div>
                      <div
                        style={{
                          transform:
                            "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        className="rt-counter-train"
                      >
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight6}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                      </div>
                    </div>
                    <div className="w-layout-vflex rt-counter-train-wrap">
                      <div
                        style={{
                          transform:
                            "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        className="rt-counter-train"
                      >
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight2}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight6}
                        </div>
                      </div>
                      <div
                        style={{
                          transform:
                            "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        className="rt-counter-train"
                      >
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight7}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight3}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight4}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight5}
                        </div>
                        <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                          {content.highlight6}
                        </div>
                      </div>
                    </div>
                    <div className="rt-text-style-h1 rt-heading-special-font rt-counter-text-color">
                      {content.highlight12}
                    </div>
                  </div>
                  <div className="rt-text-style-h5">
                    {content.costReduction}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rt-automation-v1-star">
        <div className="rt-glow-star">
          <Image
            alt={content.aveletyPageBigStarAlt}
            src={content.aveletyPageBigStarImage}
            className="rt-blink-star"
            data-motion="featureAutomation-blinkStar"
            width={284}
            height={284}
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
          />
        </div>
      </div>
    </section>
  );
}
