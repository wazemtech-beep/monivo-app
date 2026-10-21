"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useResultsAnimation } from "@/hooks/sections/useResultsAnimation";
export default function Results() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useResultsAnimation(sectionRef);
  const content = siteConfig.sections.results;
  return (
    <section className="rt-result-v1" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-result-v1-main">
          <div className="w-layout-vflex rt-result-v1-text-wrap">
            <div className="rt-result-v1-heading rt-overflow-hidden">
              <h2 className="rt-gap-off" data-motion="results-gapOff">
                {content.heading}
                <span className="rt-heading-special-font">
                  {content.highlight}
                </span>
              </h2>
            </div>
            <div className="rt-result-v1-paragraph rt-overflow-hidden">
              <p className="rt-gap-off" data-motion="results-gapOff-2">
                {content.description}
              </p>
            </div>
            <div className="rt-result-v1-card-wrap">
              <div className="w-layout-vflex rt-result-v1-card">
                <div
                  className="w-layout-hflex rt-result-v1-card-content rt-position-relative"
                  data-motion="results-resultV1CardContent"
                >
                  <div className="w-layout-hflex rt-result-v1-card-icon">
                    <Image
                      src={content.aveletyServiceResultTextCardIconImage}
                      alt={content.aveletyServiceResultTextCardIconAlt}
                      width={16}
                      height={16}
                      sizes="16px"
                    />
                  </div>
                  <div className="w-layout-vflex rt-result-v1-card-text">
                    <div className="rt-text-style-h6">
                      {content.boostProductivityAndEfficiency}
                    </div>
                    <p className="rt-gap-off">{content.description2}</p>
                  </div>
                  <div
                    className="rt-border-line"
                    data-motion="results-borderLine"
                  ></div>
                </div>
                <div
                  className="w-layout-hflex rt-result-v1-card-content rt-margin-none"
                  data-motion="results-resultV1CardContent-2"
                >
                  <div className="w-layout-hflex rt-result-v1-card-icon">
                    <Image
                      src={content.aveletyServiceResultTextCardIconImage}
                      alt={content.aveletyServiceResultTextCardIconAlt}
                      width={16}
                      height={16}
                      sizes="16px"
                    />
                  </div>
                  <div className="w-layout-vflex rt-result-v1-card-text">
                    <div className="rt-text-style-h6">
                      {content.improveWorkflowAndOverallPerformance}
                    </div>
                    <p className="rt-gap-off">{content.description3}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rt-button-wrap" data-motion="results-buttonWrap">
              <Link
                href={content.seeOurValueseeOurValueHref}
                className="rt-button w-inline-block"
                data-motion="results-button"
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
            className="w-layout-vflex rt-result-v1-image-wrap rt-overflow-hidden"
            data-motion="results-resultV1ImageWrap"
          >
            <div
              className="rt-leanear-border-vartical rt-border-radius-20 rt-tab-full-height"
              data-motion="results-leanearBorderVartical"
            >
              <div className="w-layout-vflex rt-result-v1-image-block rt-border-radius-small-20 rt-tab-full-height">
                <div
                  className="rt-leanear-border-vartical rt-border-radius-10"
                  data-motion="results-leanearBorderVartical-2"
                >
                  <div className="rt-result-v1-balance-image rt-overflow-hidden">
                    <Image
                      src={content.aveletyServiceResultBalanceImageImage}
                      alt={content.aveletyServiceResultBalanceImageAlt}
                      width={590}
                      height={85}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                </div>
                <div
                  className="rt-leanear-border-vartical rt-border-radius-20"
                  data-motion="results-leanearBorderVartical-3"
                >
                  <div className="rt-result-v1-dashboard-image rt-border-radius-small-20 rt-overflow-hidden">
                    <Image
                      src={content.aveletyServiceResultDashboardImageImage}
                      alt={content.aveletyServiceResultDashboardImageAlt}
                      width={590}
                      height={543}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                    <div
                      style={{ height: "0rem" }}
                      className="rt-result-v1-dashboard-bar"
                    ></div>
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
