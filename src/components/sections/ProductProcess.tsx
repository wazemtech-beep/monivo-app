"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useProductProcessAnimation } from "@/hooks/sections/useProductProcessAnimation";
export default function ProductProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useProductProcessAnimation(sectionRef);
  const content = siteConfig.sections.productProcess;
  return (
    <section className="rt-process-v2" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-process-v2-main">
          <div className="w-layout-vflex rt-process-v2-text-wrap">
            <div className="w-layout-vflex rt-process-v2-heading-wrap">
              <div className="rt-process-v2-heading rt-overflow-hidden">
                <h2
                  className="rt-gap-off rt-mobile-text-center"
                  data-motion="productProcess-gapOff"
                >
                  {content.heading}
                  <span className="rt-heading-special-font">
                    {content.highlight}
                  </span>
                </h2>
              </div>
              <div className="rt-process-v2-paragraph rt-overflow-hidden">
                <p
                  className="rt-gap-off rt-mobile-text-center"
                  data-motion="productProcess-gapOff-2"
                >
                  {content.description}
                </p>
              </div>
              <div
                className="rt-button-wrap"
                data-motion="productProcess-buttonWrap"
              >
                <a
                  href={content.seeOurValueseeOurValueHref}
                  className="rt-button w-inline-block"
                  data-motion="productProcess-button"
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
            <div className="w-layout-hflex rt-process-v2-client-wrap">
              <div className="w-layout-hflex rt-process-v2-client-block rt-overflow-hidden">
                <div
                  className="rt-process-v2-client-image"
                  data-motion="productProcess-processV2ClientImage"
                >
                  <Image
                    src={content.aveletyServiceProcessClientImageOneImage}
                    alt={content.aveletyServiceProcessClientImageOneAlt}
                    width={50}
                    height={50}
                    sizes="50px"
                  />
                </div>
                <div
                  className="rt-process-v2-client-image rt-minus-mergin"
                  data-motion="productProcess-processV2ClientImage-2"
                >
                  <Image
                    src={content.aveletyServiceProcessClientImageTwoImage}
                    alt={content.aveletyServiceProcessClientImageTwoAlt}
                    width={50}
                    height={50}
                    sizes="50px"
                  />
                </div>
                <div
                  className="rt-process-v2-client-image rt-minus-mergin"
                  data-motion="productProcess-processV2ClientImage-3"
                >
                  <Image
                    src={content.aveletyServiceProcessClientImageThreeImage}
                    alt={content.aveletyServiceProcessClientImageThreeAlt}
                    width={50}
                    height={50}
                    sizes="50px"
                  />
                </div>
              </div>
              <div
                className="w-layout-vflex rt-process-v2-client-text-block"
                data-motion="productProcess-processV2ClientTextBlock"
              >
                <div className="rt-text-style-h4">{content.value1m}</div>
                <div>{content.trustedUsers}</div>
              </div>
            </div>
          </div>
          <div
            className="w-layout-hflex rt-process-v2-left-wrap"
            data-motion="productProcess-processV2LeftWrap"
          >
            <div
              className="rt-process-v2-mobile-wrap"
              data-motion="productProcess-processV2MobileWrap"
            >
              <Image
                src={content.aveletyServiceProcessMobileImageImage}
                alt={content.aveletyServiceProcessMobileImageAlt}
                width={330}
                height={674}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
            <div
              className="w-layout-vflex rt-process-v2-option-block rt-position-relative"
              data-motion="productProcess-processV2OptionBlock"
            >
              <div className="w-layout-hflex rt-process-v2-option-wrap">
                <div className="rt-process-v2-option-dot rt-one"></div>
                <div className="w-layout-vflex rt-process-v2-option rt-one">
                  <div className="rt-text-style-h5">
                    {content.discoveryAnalysis}
                  </div>
                  <div className="rt-process-v2-option-paragraph">
                    <p className="rt-gap-off">{content.description2}</p>
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex rt-process-v2-option-wrap">
                <div className="rt-process-v2-option-dot rt-two"></div>
                <div className="w-layout-vflex rt-process-v2-option rt-two">
                  <div className="rt-text-style-h5">
                    {content.strategyPlanning}
                  </div>
                  <div className="rt-process-v2-option-paragraph">
                    <p className="rt-gap-off">{content.description3}</p>
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex rt-process-v2-option-wrap">
                <div className="rt-process-v2-option-dot rt-three"></div>
                <div className="w-layout-vflex rt-process-v2-option rt-three">
                  <div className="rt-text-style-h5">
                    {content.aiModelSelectionIntegration}
                  </div>
                  <div className="rt-process-v2-option-paragraph">
                    <p className="rt-gap-off">{content.description4}</p>
                  </div>
                </div>
              </div>
              <div className="rt-process-v2-scroll-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
