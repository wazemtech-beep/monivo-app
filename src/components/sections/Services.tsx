"use client";
import { useRef } from "react";
import Image from "next/image";
import { Slider } from "@/components/ui/Interactive";
import { siteConfig } from "@/data/siteConfig";
import { useServicesAnimation } from "@/hooks/sections/useServicesAnimation";
export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useServicesAnimation(sectionRef);
  const content = siteConfig.sections.services;
  return (
    <section className="rt-service-v1" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-service-v1-main">
          <div className="w-layout-vflex rt-service-v1-heading-wrap">
            <div
              className="w-layout-hflex rt-sub-text-main"
              data-motion="services-subTextMain"
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
            <div className="rt-service-v1-heading">
              <h2
                className="rt-gap-off rt-text-center"
                data-motion="services-gapOff"
              >
                {content.heading}
              </h2>
            </div>
          </div>
          <div className="w-layout-vflex rt-service-v1-card-block rt-full-width rt-mobile-display-off">
            <div className="w-layout-grid rt-service-v1-card-wrap rt-full-width">
              <div
                className="rt-leanear-border-landscape rt-border-radius-20"
                data-motion="services-leanearBorderLandscape"
              >
                <div className="w-layout-vflex rt-service-v1-card rt-border-radius-small-20">
                  <div className="w-layout-vflex rt-service-v1-card-content rt-change-width">
                    <div className="w-layout-hflex rt-service-v1-card-icon-wrap">
                      <div className="rt-service-v1-card-icon">
                        <Image
                          src={content.aveletyServiceCardAiWorkflowIconImage}
                          alt={content.aveletyServiceCardAiWorkflowIconAlt}
                          width={26}
                          height={26}
                          sizes="26px"
                        />
                      </div>
                    </div>
                    <div className="w-layout-vflex rt-service-v1-card-text-wrap">
                      <div className="rt-text-style-h4 rt-text-center">
                        {content.aiWorkflowAutomation}
                      </div>
                      <p className="rt-gap-off rt-text-center">
                        {content.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rt-leanear-border-landscape rt-border-radius-20"
                data-motion="services-leanearBorderLandscape-2"
              >
                <div className="w-layout-vflex rt-service-v1-card rt-border-radius-small-20">
                  <div className="w-layout-vflex rt-service-v1-card-content rt-change-width">
                    <div className="w-layout-hflex rt-service-v1-card-icon-wrap">
                      <div className="rt-service-v1-card-icon">
                        <Image
                          src={
                            content.aveletyServiceCardProcessOptimisationIconImage
                          }
                          alt={
                            content.aveletyServiceCardProcessOptimisationIconAlt
                          }
                          width={26}
                          height={26}
                          sizes="26px"
                        />
                      </div>
                    </div>
                    <div className="w-layout-vflex rt-service-v1-card-text-wrap">
                      <div className="rt-text-style-h4 rt-text-center">
                        {content.processOptimization}
                      </div>
                      <p className="rt-gap-off rt-text-center">
                        {content.description2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-grid rt-service-v1-card-wrap rt-full-width rt-column-change">
              <div
                className="rt-leanear-border-landscape rt-border-radius-20"
                data-motion="services-leanearBorderLandscape-3"
              >
                <div className="w-layout-vflex rt-service-v1-card rt-border-radius-small-20">
                  <div className="w-layout-vflex rt-service-v1-card-content">
                    <div className="w-layout-hflex rt-service-v1-card-icon-wrap">
                      <div className="rt-service-v1-card-icon">
                        <Image
                          src={content.aveletyServiceCardIconOneImage}
                          alt={content.aveletyServiceCardIconOneAlt}
                          width={26}
                          height={26}
                          sizes="26px"
                        />
                      </div>
                    </div>
                    <div className="w-layout-vflex rt-service-v1-card-text-wrap">
                      <div className="rt-text-style-h4 rt-text-center">
                        {content.dataAnalyticsInsights}
                      </div>
                      <p className="rt-gap-off rt-text-center">
                        {content.description3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rt-leanear-border-landscape rt-border-radius-20"
                data-motion="services-leanearBorderLandscape-4"
              >
                <div className="w-layout-vflex rt-service-v1-card rt-border-radius-small-20">
                  <div className="w-layout-vflex rt-service-v1-card-content">
                    <div className="w-layout-hflex rt-service-v1-card-icon-wrap">
                      <div className="rt-service-v1-card-icon">
                        <Image
                          src={content.aveletyServiceCardCustomAiIconImage}
                          alt={content.aveletyServiceCardCustomAiIconAlt}
                          width={26}
                          height={26}
                          sizes="26px"
                        />
                      </div>
                    </div>
                    <div className="w-layout-vflex rt-service-v1-card-text-wrap">
                      <div className="rt-text-style-h4 rt-text-center">
                        {content.customAiSolutions}
                      </div>
                      <p className="rt-gap-off rt-text-center">
                        {content.description4}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rt-leanear-border-landscape rt-border-radius-20"
                data-motion="services-leanearBorderLandscape-5"
              >
                <div className="w-layout-vflex rt-service-v1-card rt-border-radius-small-20">
                  <div className="w-layout-vflex rt-service-v1-card-content">
                    <div className="w-layout-hflex rt-service-v1-card-icon-wrap">
                      <div className="rt-service-v1-card-icon">
                        <Image
                          src={
                            content.aveletyServiceCardSaasIntegrationIconImage
                          }
                          alt={content.aveletyServiceCardSaasIntegrationIconAlt}
                          width={26}
                          height={26}
                          sizes="26px"
                        />
                      </div>
                    </div>
                    <div className="w-layout-vflex rt-service-v1-card-text-wrap">
                      <div className="rt-text-style-h4 rt-text-center">
                        {content.saasIntegrationServices}
                      </div>
                      <p className="rt-gap-off rt-text-center">
                        {content.description5}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rt-feature-responsive-slider"
            data-motion="services-featureResponsiveSlider"
          >
            <Slider
              data-delay="4000"
              data-animation="slide"
              className="rt-responsive-slider-main w-slider"
              data-autoplay="true"
              data-easing="ease"
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-autoplay-limit="0"
              data-nav-spacing="3"
              data-duration="500"
              data-infinite="true"
            >
              <div className="w-slider-mask">
                <div className="w-slide">
                  <div className="rt-leanear-border-landscape rt-border-radius-20">
                    <div className="w-layout-vflex rt-service-v1-card rt-border-radius-small-20">
                      <div className="w-layout-vflex rt-service-v1-card-content rt-change-width">
                        <div className="w-layout-hflex rt-service-v1-card-icon-wrap">
                          <div className="rt-service-v1-card-icon">
                            <Image
                              src={
                                content.aveletyServiceCardAiWorkflowIconImage
                              }
                              alt={content.aveletyServiceCardAiWorkflowIconAlt}
                              width={26}
                              height={26}
                              sizes="26px"
                            />
                          </div>
                        </div>
                        <div className="w-layout-vflex rt-service-v1-card-text-wrap">
                          <div className="rt-text-style-h4 rt-text-center">
                            {content.aiWorkflowAutomation}
                          </div>
                          <p className="rt-gap-off rt-text-center">
                            {content.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-slide">
                  <div className="rt-leanear-border-landscape rt-border-radius-20">
                    <div className="w-layout-vflex rt-service-v1-card rt-border-radius-small-20">
                      <div className="w-layout-vflex rt-service-v1-card-content rt-change-width">
                        <div className="w-layout-hflex rt-service-v1-card-icon-wrap">
                          <div className="rt-service-v1-card-icon">
                            <Image
                              src={
                                content.aveletyServiceCardProcessOptimisationIconImage
                              }
                              alt={
                                content.aveletyServiceCardProcessOptimisationIconAlt
                              }
                              width={26}
                              height={26}
                              sizes="26px"
                            />
                          </div>
                        </div>
                        <div className="w-layout-vflex rt-service-v1-card-text-wrap">
                          <div className="rt-text-style-h4 rt-text-center">
                            {content.processOptimization}
                          </div>
                          <p className="rt-gap-off rt-text-center">
                            {content.description2}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-slide">
                  <div className="rt-leanear-border-landscape rt-border-radius-20">
                    <div className="w-layout-vflex rt-service-v1-card rt-border-radius-small-20">
                      <div className="w-layout-vflex rt-service-v1-card-content">
                        <div className="w-layout-hflex rt-service-v1-card-icon-wrap">
                          <div className="rt-service-v1-card-icon">
                            <Image
                              src={content.aveletyServiceCardIconOneImage}
                              alt={content.aveletyServiceCardIconOneAlt}
                              width={26}
                              height={26}
                              sizes="26px"
                            />
                          </div>
                        </div>
                        <div className="w-layout-vflex rt-service-v1-card-text-wrap">
                          <div className="rt-text-style-h4 rt-text-center">
                            {content.dataAnalyticsInsights}
                          </div>
                          <p className="rt-gap-off rt-text-center">
                            {content.description3}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-slide">
                  <div className="rt-leanear-border-landscape rt-border-radius-20">
                    <div className="w-layout-vflex rt-service-v1-card rt-border-radius-small-20">
                      <div className="w-layout-vflex rt-service-v1-card-content">
                        <div className="w-layout-hflex rt-service-v1-card-icon-wrap">
                          <div className="rt-service-v1-card-icon">
                            <Image
                              src={content.aveletyServiceCardCustomAiIconImage}
                              alt={content.aveletyServiceCardCustomAiIconAlt}
                              width={26}
                              height={26}
                              sizes="26px"
                            />
                          </div>
                        </div>
                        <div className="w-layout-vflex rt-service-v1-card-text-wrap">
                          <div className="rt-text-style-h4 rt-text-center">
                            {content.customAiSolutions}
                          </div>
                          <p className="rt-gap-off rt-text-center">
                            {content.description4}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-slide">
                  <div className="rt-leanear-border-landscape rt-border-radius-20">
                    <div className="w-layout-vflex rt-service-v1-card rt-border-radius-small-20">
                      <div className="w-layout-vflex rt-service-v1-card-content">
                        <div className="w-layout-hflex rt-service-v1-card-icon-wrap">
                          <div className="rt-service-v1-card-icon">
                            <Image
                              src={
                                content.aveletyServiceCardSaasIntegrationIconImage
                              }
                              alt={
                                content.aveletyServiceCardSaasIntegrationIconAlt
                              }
                              width={26}
                              height={26}
                              sizes="26px"
                            />
                          </div>
                        </div>
                        <div className="w-layout-vflex rt-service-v1-card-text-wrap">
                          <div className="rt-text-style-h4 rt-text-center">
                            {content.saasIntegrationServices}
                          </div>
                          <p className="rt-gap-off rt-text-center">
                            {content.description5}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rt-display-none w-slider-arrow-left">
                <div className="w-icon-slider-left"></div>
              </div>
              <div className="rt-display-none w-slider-arrow-right">
                <div className="w-icon-slider-right"></div>
              </div>
              <div className="rt-display-none w-slider-nav w-round w-num"></div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
