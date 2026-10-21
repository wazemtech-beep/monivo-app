"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useProductHeroAnimation } from "@/hooks/sections/useProductHeroAnimation";
export default function ProductHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useProductHeroAnimation(sectionRef);
  const content = siteConfig.sections.productHero;
  return (
    <section
      className="rt-service-hero rt-overflow-hidden rt-position-relative"
      data-motion="productHero-serviceHero"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-service-hero-main">
          <div className="w-layout-vflex rt-service-hero-heading-wrap">
            <div
              className="w-layout-hflex rt-sub-text-main"
              data-motion="productHero-subTextMain"
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
            <div className="rt-service-hero-heading rt-overflow-hidden">
              <h1
                className="rt-gap-off rt-text-center"
                data-motion="productHero-gapOff"
              >
                {content.title}
                <span className="rt-heading-special-font">
                  {content.highlight}
                </span>
              </h1>
            </div>
            <div className="rt-service-hero-paragraph rt-overflow-hidden">
              <p
                className="rt-gap-off rt-text-center rt-text-color-white"
                data-motion="productHero-gapOff-2"
              >
                {content.description}
              </p>
            </div>
            <div
              className="rt-button-wrap"
              data-motion="productHero-buttonWrap"
            >
              <Link
                href={content.requestADemorequestADemoHref}
                className="rt-button w-variant-6c98e724-ac21-c23f-63a1-3ed9529410a0 w-inline-block"
                data-motion="productHero-button"
              >
                <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden">
                  <div className="rt-button-font w-variant-6c98e724-ac21-c23f-63a1-3ed9529410a0 rt-one">
                    {content.buttonLabel}
                  </div>
                  <div className="rt-button-font w-variant-6c98e724-ac21-c23f-63a1-3ed9529410a0 rt-two">
                    {content.buttonLabel}
                  </div>
                </div>
                <div className="rt-button-icon-wrap">
                  <Image
                    alt={content.aveletyButtonIconAlt}
                    src={content.aveletyButtonIconImage}
                    className="rt-button-star-image w-variant-6c98e724-ac21-c23f-63a1-3ed9529410a0"
                    width={22}
                    height={23}
                    sizes="22px"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="rt-service-hero-dashboard-block rt-full-width">
            <div className="w-layout-hflex rt-service-hero-dashboard-wrap rt-full-width">
              <div className="w-layout-vflex rt-service-hero-dashboard-main rt-border-radius-small-20">
                <div className="rt-service-hero-dashboard-heading">
                  <div className="rt-small-text-v1">
                    {content.activeUserRightNow}
                  </div>
                </div>
                <div className="w-layout-hflex rt-dashboard-main-wrap">
                  <div className="w-layout-vflex rt-dashboard-line-wrap">
                    <div className="w-layout-vflex rt-dashboard-line-text">
                      <div className="rt-text-style-h1">{content.value476}</div>
                    </div>
                    <div className="rt-dashboard-main-line-image">
                      <Image
                        src={content.aveletyServiceHeroLineImageImage}
                        alt={content.aveletyServiceHeroLineImageAlt}
                        width={197}
                        height={41}
                        sizes="197px"
                      />
                    </div>
                  </div>
                  <div className="rt-dashboard-graph-wrap">
                    <div
                      className="rt-dashboard-graph-image rt-overflow-hidden rt-border-radius-small-20"
                      data-motion="productHero-dashboardGraphImage"
                    >
                      <Image
                        src={content.aveletyServiceHeroGraphBackgroundImage}
                        alt={content.aveletyServiceHeroGraphBackgroundAlt}
                        width={607}
                        height={257}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                      <div className="w-layout-hflex rt-service-dashboard-bar-wrap">
                        <div className="w-layout-hflex rt-service-dashboard-bar-block">
                          <div
                            style={{ height: "0rem" }}
                            className="rt-service-dashboard-bar rt-one"
                          ></div>
                          <div
                            style={{ height: "0rem" }}
                            className="rt-service-dashboard-bar rt-two"
                          ></div>
                          <div
                            style={{ height: "0rem" }}
                            className="rt-service-dashboard-bar rt-three"
                          ></div>
                          <div
                            style={{ height: "0rem" }}
                            className="rt-service-dashboard-bar rt-four"
                          ></div>
                          <div
                            style={{ height: "0rem" }}
                            className="rt-service-dashboard-bar rt-five"
                          ></div>
                        </div>
                        <div className="w-layout-hflex rt-service-dashboard-bar-block">
                          <div
                            style={{ height: "0rem" }}
                            className="rt-service-dashboard-bar rt-six"
                          ></div>
                          <div
                            style={{ height: "0rem" }}
                            className="rt-service-dashboard-bar rt-leanear-background rt-seven"
                          ></div>
                          <div
                            style={{ height: "0rem" }}
                            className="rt-service-dashboard-bar rt-leanear-background rt-eight"
                          ></div>
                          <div
                            style={{ height: "0rem" }}
                            className="rt-service-dashboard-bar rt-leanear-background rt-nine"
                          ></div>
                          <div
                            style={{ height: "0rem" }}
                            className="rt-service-dashboard-bar rt-ten"
                          ></div>
                        </div>
                        <div className="w-layout-hflex rt-service-dashboard-bar-block">
                          <div
                            style={{ height: "0rem" }}
                            className="rt-service-dashboard-bar rt-eleven"
                          ></div>
                          <div
                            style={{ height: "0rem" }}
                            className="rt-service-dashboard-bar rt-twelve"
                          ></div>
                          <div
                            style={{ height: "0rem" }}
                            className="rt-service-dashboard-bar rt-thirteen"
                          ></div>
                          <div
                            style={{ height: "0rem" }}
                            className="rt-service-dashboard-bar rt-fourteen"
                          ></div>
                          <div
                            style={{ height: "0rem" }}
                            className="rt-service-dashboard-bar rt-fifteen"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-grid rt-service-hero-counter-block rt-full-width rt-border-radius-small-20">
                  <div className="w-layout-vflex rt-service-hero-counter-card">
                    <div className="w-layout-hflex rt-service-hero-counter-heading">
                      <div className="w-layout-hflex rt-service-hero-counter-icon-wrap">
                        <div className="w-layout-hflex rt-service-hero-counter-icon">
                          <Image
                            src={content.aveletyServiceHeroCounterIconOneImage}
                            alt={content.aveletyServiceHeroCounterIconOneAlt}
                            width={34}
                            height={15}
                            sizes="34px"
                          />
                        </div>
                      </div>
                      <div className="rt-text-style-h6">{content.user}</div>
                    </div>
                    <div className="w-layout-vflex rt-service-hero-number-wrap">
                      <div
                        className="w-layout-hflex rt-counter-box-h2"
                        data-motion="productHero-counterBoxH2"
                      >
                        <div className="w-layout-vflex rt-counter-train-wrap">
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-bottom-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value0}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                          </div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-bottom-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value3}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-vflex rt-counter-train-wrap rt-top-move">
                          <div
                            style={{
                              transform:
                                "translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-top-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value0}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value3}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value4}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value7}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value6}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value7}
                            </div>
                          </div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-top-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value0}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value7}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value6}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value5}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value4}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value3}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                          </div>
                        </div>
                        <div className="rt-text-style-h2">{content.k}</div>
                      </div>
                      <div className="rt-hervice-hero-number-underline rt-position-relative">
                        <div
                          style={{ width: "0rem" }}
                          className="rt-hervice-hero-number-underline-v2"
                          data-motion="productHero-herviceHeroNumberUnderlineV2"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-vflex rt-service-hero-counter-card">
                    <div className="w-layout-hflex rt-service-hero-counter-heading">
                      <div className="w-layout-hflex rt-service-hero-counter-icon-wrap">
                        <div className="w-layout-hflex rt-service-hero-counter-icon rt-two">
                          <Image
                            src={content.aveletyServiceHeroCounterIconTwoImage}
                            alt={content.aveletyServiceHeroCounterIconTwoAlt}
                            width={14}
                            height={15}
                            sizes="14px"
                          />
                        </div>
                      </div>
                      <div className="rt-text-style-h6">{content.click}</div>
                    </div>
                    <div className="w-layout-vflex rt-service-hero-number-wrap">
                      <div
                        className="w-layout-hflex rt-counter-box-h2"
                        data-motion="productHero-counterBoxH2-2"
                      >
                        <div className="w-layout-vflex rt-counter-train-wrap">
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-bottom-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value0}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value3}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value4}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value5}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value6}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value7}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value8}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value9}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value0}
                            </div>
                          </div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-bottom-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value3}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value4}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value5}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value6}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value7}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value8}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value9}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value0}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                          </div>
                        </div>
                        <div className="rt-text-style-h2">{content.m}</div>
                      </div>
                      <div className="rt-hervice-hero-number-underline rt-position-relative">
                        <div
                          style={{ width: "0rem" }}
                          className="rt-hervice-hero-number-underline-v2 rt-bg-soft-coral"
                          data-motion="productHero-herviceHeroNumberUnderlineV2-2"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-vflex rt-service-hero-counter-card">
                    <div className="w-layout-hflex rt-service-hero-counter-heading">
                      <div className="w-layout-hflex rt-service-hero-counter-icon-wrap">
                        <div className="w-layout-hflex rt-service-hero-counter-icon rt-three">
                          <Image
                            src={
                              content.aveletyServiceHeroCounterIconThreeImage
                            }
                            alt={content.aveletyServiceHeroCounterIconThreeAlt}
                            width={15}
                            height={15}
                            sizes="15px"
                          />
                        </div>
                      </div>
                      <div className="rt-text-style-h6">{content.sales}</div>
                    </div>
                    <div className="w-layout-vflex rt-service-hero-number-wrap">
                      <div
                        className="w-layout-hflex rt-counter-box-h2"
                        data-motion="productHero-counterBoxH2-3"
                      >
                        <div className="w-layout-vflex rt-counter-train-wrap">
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-bottom-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value0}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                          </div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-bottom-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value3}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-vflex rt-counter-train-wrap rt-top-move">
                          <div
                            style={{
                              transform:
                                "translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-top-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value3}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value4}
                            </div>
                          </div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-top-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value0}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value4}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value3}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-vflex rt-counter-train-wrap rt-top-move">
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-bottom-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value0}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value3}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value4}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value5}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value6}
                            </div>
                          </div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-bottom-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value7}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value3}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value4}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value5}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value6}
                            </div>
                          </div>
                        </div>
                        <div className="rt-text-style-h2">{content.text}</div>
                      </div>
                      <div className="rt-hervice-hero-number-underline rt-position-relative">
                        <div
                          style={{ width: "0rem" }}
                          className="rt-hervice-hero-number-underline-v2 rt-bg-color-marigold"
                          data-motion="productHero-herviceHeroNumberUnderlineV2-3"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-vflex rt-service-hero-counter-card rt-border-none">
                    <div className="w-layout-hflex rt-service-hero-counter-heading">
                      <div className="w-layout-hflex rt-service-hero-counter-icon-wrap">
                        <div className="w-layout-hflex rt-service-hero-counter-icon rt-four">
                          <Image
                            src={content.aveletyServiceHeroCounterIconFourImage}
                            alt={content.aveletyServiceHeroCounterIconFourAlt}
                            width={14}
                            height={15}
                            sizes="14px"
                          />
                        </div>
                      </div>
                      <div className="rt-text-style-h6">{content.items}</div>
                    </div>
                    <div className="w-layout-vflex rt-service-hero-number-wrap">
                      <div
                        className="w-layout-hflex rt-counter-box-h2"
                        data-motion="productHero-counterBoxH2-4"
                      >
                        <div className="w-layout-vflex rt-counter-train-wrap">
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-bottom-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value0}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value3}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value4}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value5}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value6}
                            </div>
                          </div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-bottom-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value7}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value3}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value4}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value5}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value6}
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-vflex rt-counter-train-wrap rt-top-move">
                          <div
                            style={{
                              transform:
                                "translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-top-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value0}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value3}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value4}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value7}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value6}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value7}
                            </div>
                          </div>
                          <div
                            style={{
                              transform:
                                "translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            }}
                            className="w-layout-vflex rt-counter-train rt-top-move"
                          >
                            <div className="rt-text-style-h2">
                              {content.value0}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value7}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value6}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value5}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value4}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value3}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value2}
                            </div>
                            <div className="rt-text-style-h2">
                              {content.value1}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rt-hervice-hero-number-underline rt-position-relative">
                        <div
                          style={{ width: "0rem" }}
                          className="rt-hervice-hero-number-underline-v2 rt-bg-color-white"
                          data-motion="productHero-herviceHeroNumberUnderlineV2-4"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-layout-hflex rt-service-hero-potrait-dashboard rt-border-radius-small-20 rt-tab-display-none">
                <div className="rt-service-hero-potrait-dashboard-image">
                  <Image
                    src={content.aveletyServiceHeroPotraitDashboardImageImage}
                    alt={content.aveletyServiceHeroPotraitDashboardImageAlt}
                    width={206}
                    height={353}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rt-service-hero-glow rt-one rt-landscape-display-none">
        <div className="rt-glow-star">
          <Image
            alt={content.aveletyPageBigStarAlt}
            src={content.aveletyPageBigStarImage}
            className="rt-blink-star"
            data-motion="productHero-blinkStar"
            width={284}
            height={284}
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
          />
        </div>
      </div>
      <div className="rt-service-hero-glow rt-two rt-landscape-display-none">
        <div className="rt-glow-star">
          <Image
            alt={content.aveletyPageBigStarAlt}
            src={content.aveletyPageBigStarImage}
            className="rt-blink-star"
            data-motion="productHero-blinkStar-2"
            width={284}
            height={284}
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
          />
        </div>
      </div>
      <div className="rt-service-hero-glow rt-three">
        <div className="rt-glow-star">
          <Image
            alt={content.aveletyPageBigStarAlt}
            src={content.aveletyPageBigStarImage}
            className="rt-blink-star"
            data-motion="productHero-blinkStar-2"
            width={284}
            height={284}
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
          />
        </div>
      </div>
      <div className="rt-service-hero-glow rt-four">
        <div className="rt-glow-star">
          <Image
            alt={content.aveletyPageBigStarAlt}
            src={content.aveletyPageBigStarImage}
            className="rt-blink-star"
            data-motion="productHero-blinkStar"
            width={284}
            height={284}
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
          />
        </div>
      </div>
    </section>
  );
}
