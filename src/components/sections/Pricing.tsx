"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BillingSection,
  BillingLabel,
  BillingSwitch,
  BillingPrice,
} from "@/components/ui/Interactive";
import { siteConfig } from "@/data/siteConfig";
import { usePricingAnimation } from "@/hooks/sections/usePricingAnimation";

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  usePricingAnimation(sectionRef);
  const content = siteConfig.sections.pricing;

  return (
    <BillingSection className="rt-pricing-v1" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-pricing-v1-main">
          <div className="w-layout-vflex rt-pricing-v1-heading-wrap">
            <div
              className="w-layout-hflex rt-sub-text-main"
              data-motion="pricing-subTextMain"
            >
              <div className="w-layout-hflex rt-sub-text-wrapper">
                <div className="rt-sub-text-dot" />
                <div className="rt-sub-text">{content.eyebrow}</div>
              </div>
              <div className="w-layout-vflex rt-gradient-box">
                <div className="rt-button-linear rt-color-change" />
                <div className="rt-button-linear rt-color-change rt-2" />
              </div>
            </div>
            <div className="rt-pricing-v1-heading rt-overflow-hidden">
              <h1
                className="rt-gap-off rt-text-center"
                data-motion="pricing-gapOff"
              >
                {content.title}
                <span className="rt-heading-special-font">
                  {content.highlight}
                </span>
              </h1>
            </div>
            <div
              className="w-layout-hflex rt-pricing-toggle-wrap"
              data-motion="pricing-pricingToggleWrap"
            >
              <BillingLabel
                className="rt-text-color-white rt-monthly"
                period="monthly"
              >
                {content.monthlyLabel}
              </BillingLabel>
              <BillingSwitch className="w-layout-hflex rt-pricing-toggle-v1">
                <div className="rt-toggle-ball" />
              </BillingSwitch>
              <BillingLabel
                className="rt-text-color-white rt-yearly"
                period="yearly"
              >
                {content.yearlyLabel}
              </BillingLabel>
            </div>
          </div>
          <div
            className="w-layout-vflex rt-pricing-v1-grid-block rt-full-width"
            data-motion="pricing-pricingV1GridBlock"
          >
            <div className="rt-pricing-card-grid-wrap rt-full-width">
              <div className="rt-pricing-cards-grid rt-full-width">
                {content.plans.map((plan) => (
                  <div
                    className={plan.className}
                    data-motion={plan.animationKey}
                    key={plan.id}
                  >
                    <div className="w-layout-vflex rt-pricing-card-v3-top">
                      <div className="w-layout-vflex rt-pricing-card-heading-wrap">
                        <div className="rt-text-style-h5">{plan.name}</div>
                        <div>{plan.description}</div>
                      </div>
                      <div className="w-layout-vflex rt-pricing-v1-price-wrap rt-full-width">
                        <div className="w-layout-hflex rt-pricing-card-v1-price rt-full-width">
                          <div className="w-layout-hflex rt-card-price">
                            <div className="rt-card-price-wrap">
                              <BillingPrice
                                className="w-layout-hflex rt-price-box rt-monthly-pricing"
                                period="monthly"
                              >
                                <div className="rt-text-style-h2">
                                  {plan.monthlyPrice}
                                </div>
                              </BillingPrice>
                              <BillingPrice
                                className="w-layout-hflex rt-price-box rt-yearly-pricing"
                                period="yearly"
                              >
                                <div className="rt-text-style-h2">
                                  {plan.yearlyPrice}
                                </div>
                              </BillingPrice>
                            </div>
                            <div className="w-layout-vflex rt-price-yearly-box">
                              <div>{content.periodLabel}</div>
                            </div>
                          </div>
                          <div className="rt-full-width">
                            <Link
                              href={content.buttonHref}
                              className="rt-button w-variant-6c98e724-ac21-c23f-63a1-3ed9529410a0 w-inline-block"
                              data-motion="pricing-button"
                            >
                              <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden">
                                <div className="rt-button-font w-variant-6c98e724-ac21-c23f-63a1-3ed9529410a0 rt-one">
                                  {content.buttonLabel}
                                </div>
                                <div
                                  className="rt-button-font w-variant-6c98e724-ac21-c23f-63a1-3ed9529410a0 rt-two"
                                  aria-hidden="true"
                                >
                                  {content.buttonLabel}
                                </div>
                              </div>
                              <div className="rt-button-icon-wrap">
                                <Image
                                  src={content.buttonIcon}
                                  alt=""
                                  className="rt-button-star-image w-variant-6c98e724-ac21-c23f-63a1-3ed9529410a0"
                                  width={22}
                                  height={23}
                                />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-layout-vflex rt-pricing-card-v3-list">
                      <div className="w-layout-vflex rt-icon-list-v1">
                        <div className="rt-icon-list-v1-heading">
                          <div className="rt-text-style-h6">
                            {content.includedLabel}
                          </div>
                        </div>
                        {plan.features.map((feature) => (
                          <div
                            className="w-layout-vflex rt-pricing-card-items"
                            key={feature}
                          >
                            <div className="w-layout-hflex rt-pricing-list-items">
                              <div className="rt-pricing-v1-tick-wrapper">
                                <Image
                                  src={content.checkIcon}
                                  alt=""
                                  width={22}
                                  height={21}
                                />
                              </div>
                              <div>{feature}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BillingSection>
  );
}
