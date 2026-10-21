"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { usePricingComparisonAnimation } from "@/hooks/sections/usePricingComparisonAnimation";
export default function PricingComparison() {
  const sectionRef = useRef<HTMLDivElement>(null);
  usePricingComparisonAnimation(sectionRef);
  const content = siteConfig.sections.pricingComparison;
  return (
    <section className="rt-pricing-v1-table" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-pricing-v1-table-main">
          <div className="rt-pricing-v1-table-heading rt-overflow-hidden">
            <h2
              className="rt-gap-off rt-mobile-text-center"
              data-motion="pricingComparison-gapOff"
            >
              {content.heading}
              <span className="rt-heading-special-font">
                {content.highlight}
              </span>
            </h2>
          </div>
          <div
            className="rt-pricing-chart rt-full-width"
            data-motion="pricingComparison-pricingChart"
          >
            <div className="rt-pricing-chart-rows rt-border-top">
              <div
                id="w-node-_558c4f5c-05ef-65db-b925-17ef898522e8-a9daf4a6"
                className="rt-chart-left-col"
              >
                <div className="rt-text-style-h4">{content.features}</div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="w-layout-vflex rt-pricing-chart-price">
                  <div className="rt-text-style-h6 rt-text-center rt-margin-bottom">
                    {content.starterPlan}
                  </div>
                  <div className="rt-text-style-h2">{content.value39}</div>
                  <div>{content.perUserMonth}</div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="w-layout-vflex rt-pricing-chart-price">
                  <div className="rt-text-style-h6 rt-text-center rt-margin-bottom">
                    {content.standardPlan}
                  </div>
                  <div className="rt-text-style-h2">{content.value49}</div>
                  <div>{content.perUserMonth}</div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="w-layout-vflex rt-pricing-chart-price">
                  <div className="rt-text-style-h6 rt-text-center rt-margin-bottom">
                    {content.premiumPlan}
                  </div>
                  <div className="rt-text-style-h2">{content.value99}</div>
                  <div>{content.perUserMonth}</div>
                </div>
              </div>
            </div>
            <div className="rt-pricing-chart-rows">
              <div
                id="w-node-_558c4f5c-05ef-65db-b925-17ef898522fe-a9daf4a6"
                className="rt-chart-left-col"
              >
                <div>{content.standardIntegrations}</div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-one">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableDashIconAlt}
                      src={content.aveletyPricingOneTableDashIconImage}
                      width={21}
                      height={2}
                      sizes="21px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rt-pricing-chart-rows rt-desktop-text-center">
              <div
                id="w-node-_558c4f5c-05ef-65db-b925-17ef8985230e-a9daf4a6"
                className="rt-chart-left-col"
              >
                <div>{content.basicWorkflowSetup}</div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rt-pricing-chart-rows rt-desktop-text-center">
              <div
                id="w-node-_558c4f5c-05ef-65db-b925-17ef8985231e-a9daf4a6"
                className="rt-chart-left-col"
              >
                <div>{content.coreAiAutomationFeatures}</div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rt-pricing-chart-rows rt-desktop-text-center">
              <div
                id="w-node-_558c4f5c-05ef-65db-b925-17ef8985232e-a9daf4a6"
                className="rt-chart-left-col"
              >
                <div>{content.advancedAiAutomationTools}</div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-one">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableDashIconAlt}
                      src={content.aveletyPricingOneTableDashIconImage}
                      width={21}
                      height={2}
                      sizes="21px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-one">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableDashIconAlt}
                      src={content.aveletyPricingOneTableDashIconImage}
                      width={21}
                      height={2}
                      sizes="21px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rt-pricing-chart-rows rt-desktop-text-center">
              <div
                id="w-node-_558c4f5c-05ef-65db-b925-17ef8985233e-a9daf4a6"
                className="rt-chart-left-col"
              >
                <div>{content.advancedAiWorkflowAutomation}</div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rt-pricing-chart-rows rt-desktop-text-center">
              <div
                id="w-node-_558c4f5c-05ef-65db-b925-17ef8985234e-a9daf4a6"
                className="rt-chart-left-col"
              >
                <div>{content.customizableProcesses}</div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rt-pricing-chart-rows rt-desktop-text-center">
              <div
                id="w-node-_558c4f5c-05ef-65db-b925-17ef8985235e-a9daf4a6"
                className="rt-chart-left-col"
              >
                <div>{content.advancedAnalyticsReporting}</div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-one">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableDashIconAlt}
                      src={content.aveletyPricingOneTableDashIconImage}
                      width={21}
                      height={2}
                      sizes="21px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-one">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableDashIconAlt}
                      src={content.aveletyPricingOneTableDashIconImage}
                      width={21}
                      height={2}
                      sizes="21px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rt-pricing-chart-rows rt-desktop-text-center">
              <div
                id="w-node-_558c4f5c-05ef-65db-b925-17ef8985236e-a9daf4a6"
                className="rt-chart-left-col"
              >
                <div>{content.dedicatedInfrastructure}</div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-one">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableDashIconAlt}
                      src={content.aveletyPricingOneTableDashIconImage}
                      width={21}
                      height={2}
                      sizes="21px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-one">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableDashIconAlt}
                      src={content.aveletyPricingOneTableDashIconImage}
                      width={21}
                      height={2}
                      sizes="21px"
                    />
                  </div>
                </div>
              </div>
              <div className="w-layout-vflex rt-chart-columns">
                <div className="rt-pricing-v1-list-icon-two">
                  <div>
                    <Image
                      alt={content.aveletyPricingOneTableTickIconAlt}
                      src={content.aveletyPricingOneTableTickIconImage}
                      width={16}
                      height={14}
                      sizes="16px"
                    />
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
