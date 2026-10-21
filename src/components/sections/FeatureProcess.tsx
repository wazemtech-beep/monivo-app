"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useFeatureProcessAnimation } from "@/hooks/sections/useFeatureProcessAnimation";
export default function FeatureProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useFeatureProcessAnimation(sectionRef);
  const content = siteConfig.sections.featureProcess;
  return (
    <section className="rt-process-v1" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-process-v1-main">
          <div className="rt-process-v1-heading-wrap rt-overflow-hidden">
            <h2
              className="rt-gap-off rt-text-center"
              data-motion="featureProcess-gapOff"
            >
              {content.heading}
              <span className="rt-heading-special-font">
                {content.highlight}
              </span>
            </h2>
          </div>
          <div
            className="w-layout-vflex rt-process-v1-content-wrap rt-full-width"
            data-motion="featureProcess-processV1ContentWrap"
          >
            <div
              className="w-layout-hflex rt-process-v1-icon-wrap rt-border-radius-tiny-15"
              data-motion="featureProcess-processV1IconWrap"
            >
              <div className="rt-process-v1-icon">
                <Image
                  src={content.aveletyFeatureProcessIconImage}
                  alt={content.aveletyFeatureProcessIconAlt}
                  width={31}
                  height={32}
                  sizes="31px"
                />
              </div>
            </div>
            <div className="w-layout-vflex rt-process-line-image-wrap">
              <div
                className="w-layout-vflex rt-process-line-image-block"
                data-motion="featureProcess-processLineImageBlock"
              >
                <Image
                  src={content.aveletyFeatureProcessLineImageImage}
                  alt={content.aveletyFeatureProcessLineImageAlt}
                  className="rt-process-line-image"
                  width={960}
                  height={323}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
            </div>
            <div className="w-layout-grid rt-process-v1-card-wrap">
              <div
                className="rt-leanear-border-vartical rt-border-radius-20"
                data-motion="featureProcess-leanearBorderVartical"
              >
                <div className="w-layout-vflex rt-process-v1-card rt-border-radius-small-20">
                  <div className="w-layout-vflex rt-process-v1-card-icon-wrap">
                    <div className="w-layout-hflex rt-process-v1-card-icon">
                      <Image
                        src={content.aveletyFeatureProcessProductivityIconImage}
                        alt={content.aveletyFeatureProcessProductivityIconAlt}
                        width={22}
                        height={22}
                        sizes="22px"
                      />
                    </div>
                  </div>
                  <div className="w-layout-vflex rt-process-v1-card-text-wrap">
                    <div className="rt-text-style-h4">
                      {content.productivityEfficiency}
                    </div>
                    <div className="rt-process-v1-card-paragraph-wrap">
                      <p className="rt-gap-off">{content.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rt-leanear-border-vartical rt-border-radius-20"
                data-motion="featureProcess-leanearBorderVartical-2"
              >
                <div className="w-layout-vflex rt-process-v1-card rt-border-radius-small-20">
                  <div className="w-layout-vflex rt-process-v1-card-icon-wrap">
                    <div className="w-layout-hflex rt-process-v1-card-icon">
                      <Image
                        src={
                          content.aveletyFeatureProcessSmartDecisionIconImage
                        }
                        alt={content.aveletyFeatureProcessSmartDecisionIconAlt}
                        width={22}
                        height={22}
                        sizes="22px"
                      />
                    </div>
                  </div>
                  <div className="w-layout-vflex rt-process-v1-card-text-wrap">
                    <div className="rt-text-style-h4">
                      {content.smarterDecisionMaking}
                    </div>
                    <div className="rt-process-v1-card-paragraph-wrap">
                      <p className="rt-gap-off">{content.description2}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rt-leanear-border-vartical rt-border-radius-20"
                data-motion="featureProcess-leanearBorderVartical-3"
              >
                <div className="w-layout-vflex rt-process-v1-card rt-border-radius-small-20">
                  <div className="w-layout-vflex rt-process-v1-card-icon-wrap">
                    <div className="w-layout-hflex rt-process-v1-card-icon">
                      <Image
                        src={content.aveletyFeatureProcessGrowthIconImage}
                        alt={content.aveletyFeatureProcessGrowthIconAlt}
                        width={22}
                        height={22}
                        sizes="22px"
                      />
                    </div>
                  </div>
                  <div className="w-layout-vflex rt-process-v1-card-text-wrap">
                    <div className="rt-text-style-h4">
                      {content.scalabilityGrowth}
                    </div>
                    <div className="rt-process-v1-card-paragraph-wrap">
                      <p className="rt-gap-off">{content.description3}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rt-process-star">
        <div className="rt-glow-star">
          <Image
            alt={content.aveletyPageBigStarAlt}
            src={content.aveletyPageBigStarImage}
            className="rt-blink-star"
            data-motion="featureProcess-blinkStar"
            width={284}
            height={284}
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
          />
        </div>
      </div>
    </section>
  );
}
