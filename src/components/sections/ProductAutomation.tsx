"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useProductAutomationAnimation } from "@/hooks/sections/useProductAutomationAnimation";
export default function ProductAutomation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useProductAutomationAnimation(sectionRef);
  const content = siteConfig.sections.productAutomation;
  return (
    <section
      className="rt-automation-v2"
      data-motion="productAutomation-automationV2"
      ref={sectionRef}
    >
      <div className="rt-automation-v2-sticky">
        <div className="w-layout-blockcontainer rt-container w-container">
          <div className="w-layout-vflex rt-automation-v2-main">
            <div
              top-box=""
              className="rt-automation-v2-heading-wrap rt-overflow-hidden"
            >
              <h2
                fade-heading=""
                className="rt-gap-off rt-text-center"
                data-motion="productAutomation-gapOff"
              >
                {content.heading}
                <span className="rt-heading-special-font">
                  {content.highlight}
                </span>
              </h2>
            </div>
            <div
              className="rt-automation-v2-option-block rt-full-width rt-position-relative"
              data-motion="productAutomation-automationV2OptionBlock"
            >
              <div className="w-layout-hflex rt-automation-v2-option-wrap">
                <div className="w-layout-hflex rt-automation-v2-icon-wrap rt-one">
                  <div className="w-layout-hflex rt-automation-icon">
                    <Image
                      src={content.aveletyServiceAutomationOptionIconOneImage}
                      alt={content.aveletyServiceAutomationOptionIconOneAlt}
                      width={36}
                      height={36}
                      sizes="36px"
                    />
                  </div>
                </div>
                <div className="w-layout-hflex rt-automation-v2-icon-wrap rt-two">
                  <div className="w-layout-hflex rt-automation-icon">
                    <Image
                      src={content.aveletyServiceAutomationOptionIconTwoImage}
                      alt={content.aveletyServiceAutomationOptionIconTwoAlt}
                      width={36}
                      height={36}
                      sizes="36px"
                    />
                  </div>
                </div>
                <div className="w-layout-hflex rt-automation-v2-icon-popup-wrap rt-position-relative">
                  <div className="w-layout-hflex rt-automation-v2-icon-wrap rt-three">
                    <div className="w-layout-hflex rt-automation-icon">
                      <Image
                        src={content.aveletyServiceAutomationOptionIconOneImage}
                        alt={content.aveletyServiceAutomationOptionIconOneAlt}
                        width={36}
                        height={36}
                        sizes="36px"
                      />
                    </div>
                  </div>
                  <div className="rt-automation-v2-icon-popup-one rt-tab-display-none"></div>
                  <div className="rt-automation-v2-icon-popup-two rt-tab-display-none"></div>
                </div>
                <div className="w-layout-hflex rt-automation-v2-icon-wrap rt-four">
                  <div className="w-layout-hflex rt-automation-icon">
                    <Image
                      src={content.aveletyServiceAutomationOptionIconThreeImage}
                      alt={content.aveletyServiceAutomationOptionIconThreeAlt}
                      width={36}
                      height={36}
                      sizes="36px"
                    />
                  </div>
                </div>
                <div className="w-layout-hflex rt-automation-v2-icon-wrap rt-five">
                  <div className="w-layout-hflex rt-automation-icon">
                    <Image
                      src={content.aveletyServiceAutomationOptionIconFourImage}
                      alt={content.aveletyServiceAutomationOptionIconFourAlt}
                      width={36}
                      height={36}
                      sizes="36px"
                    />
                  </div>
                </div>
              </div>
              <div className="rt-automation-v2-option-line-wrap rt-mobile-display-none rt-position-relative">
                <div className="rt-automation-v2-optionl-ine"></div>
                <div className="rt-automation-v2-optionl-ine"></div>
              </div>
            </div>
            <div className="w-layout-vflex rt-automation-v2-paragraph-wrap">
              <div className="rt-automation-v2-paragraph rt-overflow-hidden">
                <p
                  className="rt-gap-off rt-text-center"
                  data-motion="productAutomation-gapOff-2"
                >
                  {content.description}
                </p>
              </div>
              <div className="rt-button-wrap">
                <Link
                  href={content.talkToAnExperttalkToAnExpertHref}
                  className="rt-button w-inline-block"
                  data-motion="productAutomation-button"
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
          </div>
        </div>
      </div>
    </section>
  );
}
