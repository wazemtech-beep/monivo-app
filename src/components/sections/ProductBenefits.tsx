"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useProductBenefitsAnimation } from "@/hooks/sections/useProductBenefitsAnimation";
export default function ProductBenefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useProductBenefitsAnimation(sectionRef);
  const content = siteConfig.sections.productBenefits;
  return (
    <section className="rt-benefit-v1" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-benefit-v1-main">
          <div className="w-layout-vflex rt-benefit-v1-heading-wrap">
            <div
              className="w-layout-hflex rt-sub-text-main"
              data-motion="productBenefits-subTextMain"
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
            <div className="rt-benefit-v1-heading rt-overflow-hidden">
              <h2
                className="rt-gap-off rt-text-center"
                data-motion="productBenefits-gapOff"
              >
                {content.heading}
                <span className="rt-heading-special-font">
                  {content.highlight}
                </span>
              </h2>
            </div>
          </div>
          <div className="w-layout-grid rt-benefit-v1-card-wrap rt-full-width">
            <div
              className="w-layout-vflex rt-benefit-v1-card rt-border-radius-tiny-15 rt-overflow-hidden"
              data-motion="productBenefits-benefitV1Card"
            >
              <div
                className="rt-text-style-h6 rt-text-uppercase"
                data-motion="productBenefits-textStyleH6"
              >
                {content.banking}
              </div>
              <div
                className="rt-benefit-card-v1-image rt-position-relative"
                data-motion="productBenefits-benefitCardV1Image"
              >
                <Image
                  src={content.aveletyServiceAiUniqueBenefitsCardImageTwoImage}
                  alt={content.aveletyServiceAiUniqueBenefitsCardImageTwoAlt}
                  width={370}
                  height={300}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
                <div
                  className="rt-benefit-card-v1-popup rt-one"
                  data-motion="productBenefits-benefitCardV1Popup"
                >
                  <Image
                    src={content.aveletyServiceAiBenefitsCardPopupOneImage}
                    alt={content.aveletyServiceAiBenefitsCardPopupOneAlt}
                    width={127}
                    height={36}
                    sizes="127px"
                  />
                </div>
                <div
                  className="rt-benefit-card-v1-popup rt-two"
                  data-motion="productBenefits-benefitCardV1Popup-2"
                >
                  <Image
                    src={content.aveletyServiceAiBenefitsCardPopupTwoImage}
                    alt={content.aveletyServiceAiBenefitsCardPopupTwoAlt}
                    width={127}
                    height={36}
                    sizes="127px"
                  />
                </div>
              </div>
              <div className="w-layout-vflex rt-benefit-card-text-wrap rt-overflow-hidden">
                <div
                  className="rt-text-style-h4 rt-text-center"
                  data-motion="productBenefits-textStyleH4"
                >
                  {content.makeInternationalPayments}
                </div>
                <div
                  className="rt-text-center"
                  data-motion="productBenefits-textCenter"
                >
                  {
                    content.sendMoneyWorldwideUsingFastReliableAndCompliantPaymentInfrastruct
                  }
                </div>
              </div>
            </div>
            <div
              className="w-layout-vflex rt-benefit-v1-card rt-border-radius-tiny-15 rt-overflow-hidden"
              data-motion="productBenefits-benefitV1Card-2"
            >
              <div
                className="rt-text-style-h6 rt-text-uppercase"
                data-motion="productBenefits-textStyleH6-2"
              >
                {content.payment}
              </div>
              <div
                className="rt-benefit-card-v1-image rt-position-relative"
                data-motion="productBenefits-benefitCardV1Image-2"
              >
                <Image
                  src={content.aveletyServiceAiUniqueBenefitsCardImageOneImage}
                  alt={content.aveletyServiceAiUniqueBenefitsCardImageOneAlt}
                  width={370}
                  height={300}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
                <div
                  className="rt-benefit-card-v1-popup rt-three"
                  data-motion="productBenefits-benefitCardV1Popup-3"
                >
                  <Image
                    src={content.aveletyServiceAiBenefitsCardPopupThreeImage}
                    alt={content.aveletyServiceAiBenefitsCardPopupThreeAlt}
                    width={127}
                    height={36}
                    sizes="127px"
                  />
                </div>
                <div
                  className="rt-benefit-card-v1-popup rt-four"
                  data-motion="productBenefits-benefitCardV1Popup-4"
                >
                  <Image
                    src={content.aveletyServiceAiBenefitsCardPopupFourImage}
                    alt={content.aveletyServiceAiBenefitsCardPopupFourAlt}
                    width={127}
                    height={36}
                    sizes="127px"
                  />
                </div>
              </div>
              <div className="w-layout-vflex rt-benefit-card-text-wrap rt-overflow-hidden">
                <div
                  className="rt-text-style-h4 rt-text-center"
                  data-motion="productBenefits-textStyleH4-2"
                >
                  {content.invoiceAdministration}
                </div>
                <div
                  className="rt-text-center"
                  data-motion="productBenefits-textCenter-2"
                >
                  {
                    content.simplifyInvoiceAdministrationWithAutomatedTrackingApprovalsAndRec
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
