"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useFeaturesHeroAnimation } from "@/hooks/sections/useFeaturesHeroAnimation";
export default function FeaturesHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useFeaturesHeroAnimation(sectionRef);
  const content = siteConfig.sections.featuresHero;
  return (
    <section className="rt-feature-hero" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div
          className="w-layout-vflex rt-feature-hero-main rt-position-relative"
          data-motion="featuresHero-featureHeroMain"
        >
          <div className="w-layout-vflex rt-feature-hero-heading-wrap">
            <div
              className="w-layout-hflex rt-sub-text-main"
              data-motion="featuresHero-subTextMain"
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
            <div className="rt-feature-hero-heading rt-overflow-hidden">
              <h1
                className="rt-gap-off rt-text-center"
                data-motion="featuresHero-gapOff"
              >
                {content.title}
                <span className="rt-heading-special-font">
                  {content.highlight}
                </span>
              </h1>
            </div>
            <div className="rt-feature-hero-paragraph rt-overflow-hidden">
              <p
                className="rt-gap-off rt-text-center rt-text-color-white"
                data-motion="featuresHero-gapOff-2"
              >
                {content.description}
              </p>
            </div>
            <div
              className="rt-button-wrap"
              data-motion="featuresHero-buttonWrap"
            >
              <a
                href={content.tryAiFeaturestryAiFeaturesHref}
                className="rt-button w-variant-6c98e724-ac21-c23f-63a1-3ed9529410a0 w-inline-block"
                data-motion="featuresHero-button"
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
              </a>
            </div>
          </div>
          <div className="w-layout-hflex rt-feature-hero-dashboard-wrap">
            <div className="w-layout-vflex rt-feature-hero-dashboard-left rt-display-change">
              <div
                className="rt-feature-hero-dashboard-left-part rt-border-radius-tiny-15"
                data-motion="featuresHero-featureHeroDashboardLeftPart"
              >
                <Image
                  src={content.aveletyHeroBarSmallImageImage}
                  alt={content.aveletyHeroBarSmallImageAlt}
                  width={190}
                  height={193}
                  sizes="190px"
                />
              </div>
              <div
                className="rt-feature-hero-dashboard-left-part rt-border-radius-tiny-15"
                data-motion="featuresHero-featureHeroDashboardLeftPart-2"
              >
                <Image
                  src={content.aveletyFeatureHeroDashboardGraphSidebarImagImage}
                  alt={content.aveletyFeatureHeroDashboardGraphSidebarImagAlt}
                  width={190}
                  height={193}
                  sizes="190px"
                />
              </div>
            </div>
            <div
              className="rt-leanear-border-landscape rt-border-radius-15 rt-change"
              data-motion="featuresHero-leanearBorderLandscape"
            >
              <div
                className="w-layout-hflex rt-feature-hero-dashboard-image"
                data-motion="featuresHero-featureHeroDashboardImage"
              >
                <div className="w-layout-vflex rt-feature-dashboard-left-part">
                  <div className="rt-feature-dashboard-left-image rt-border-radius-tiny-15 rt-overflow-hidden">
                    <Image
                      src={content.aveletyFeatureDashboardOptionOneImage}
                      alt={content.aveletyFeatureDashboardOptionOneAlt}
                      width={305}
                      height={97}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div className="rt-feature-dashboard-left-image rt-border-radius-tiny-15 rt-overflow-hidden">
                    <Image
                      src={content.aveletyFeatureDashboardOptionTwoImage}
                      alt={content.aveletyFeatureDashboardOptionTwoAlt}
                      width={305}
                      height={97}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div className="rt-feature-dashboard-left-image rt-border-radius-tiny-15 rt-overflow-hidden">
                    <Image
                      src={content.aveletyFeatureDashboardOptionThreeImage}
                      alt={content.aveletyFeatureDashboardOptionThreeAlt}
                      width={305}
                      height={97}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div className="rt-feature-dashboard-left-image rt-border-radius-tiny-15 rt-overflow-hidden">
                    <Image
                      src={content.aveletyFeatureDashboardOptionFourImage}
                      alt={content.aveletyFeatureDashboardOptionFourAlt}
                      width={305}
                      height={97}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                </div>
                <div className="w-layout-vflex rt-feature-dashboard-right-part">
                  <div className="rt-feature-dashboard-heading-image">
                    <Image
                      src={content.aveletyFeatureDashboardImageHeadingImage}
                      alt={content.aveletyFeatureDashboardImageHeadingAlt}
                      width={395}
                      height={142}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                  </div>
                  <div className="rt-feature-dashboard-graph-image rt-position-relative">
                    <Image
                      src={content.aveletyFeatureDashboardGraphImageImage}
                      alt={content.aveletyFeatureDashboardGraphImageAlt}
                      width={395}
                      height={246}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                    />
                    <div className="w-layout-hflex rt-feature-dashboard-bar-wrap">
                      <div className="rt-feature-dashboard-bar rt-one">
                        <Image
                          src={content.aveletyFeatureDashboardBarImageImage}
                          style={{ width: "100%", height: "0rem" }}
                          alt={content.aveletyFeatureDashboardBarImageAlt}
                          className="rt-feature-dashboard-bar-image rt-one"
                          width={22}
                          height={45}
                          sizes="22px"
                        />
                      </div>
                      <div className="rt-feature-dashboard-bar rt-two">
                        <Image
                          src={content.aveletyFeatureDashboardBarImageTwoImage}
                          style={{ width: "100%", height: "0rem" }}
                          alt={content.aveletyFeatureDashboardBarImageTwoAlt}
                          className="rt-feature-dashboard-bar-image rt-two"
                          width={22}
                          height={80}
                          sizes="22px"
                        />
                      </div>
                      <div className="rt-feature-dashboard-bar rt-three">
                        <Image
                          src={
                            content.aveletyFeatureDashboardBarImageThreeImage
                          }
                          style={{ width: "100%", height: "0rem" }}
                          alt={content.aveletyFeatureDashboardBarImageThreeAlt}
                          className="rt-feature-dashboard-bar-image rt-three"
                          width={22}
                          height={59}
                          sizes="22px"
                        />
                      </div>
                      <div className="rt-feature-dashboard-bar rt-four">
                        <Image
                          src={content.aveletyFeatureDashboardBarImageFourImage}
                          style={{ width: "100%", height: "0rem" }}
                          alt={content.aveletyFeatureDashboardBarImageFourAlt}
                          className="rt-feature-dashboard-bar-image rt-four"
                          width={22}
                          height={45}
                          sizes="22px"
                        />
                      </div>
                      <div className="rt-feature-dashboard-bar rt-five">
                        <Image
                          src={content.aveletyFeatureDashboardBarImageFiveImage}
                          style={{ width: "100%", height: "0rem" }}
                          alt={content.aveletyFeatureDashboardBarImageFiveAlt}
                          className="rt-feature-dashboard-bar-image rt-five"
                          width={22}
                          height={73}
                          sizes="22px"
                        />
                      </div>
                      <div className="rt-feature-dashboard-bar rt-six">
                        <Image
                          src={content.aveletyFeatureDashboardBarImageSixImage}
                          style={{ width: "100%", height: "0rem" }}
                          alt={content.aveletyFeatureDashboardBarImageSixAlt}
                          className="rt-feature-dashboard-bar-image rt-six"
                          width={22}
                          height={101}
                          sizes="22px"
                        />
                      </div>
                      <div className="rt-feature-dashboard-bar rt-seven">
                        <Image
                          src={
                            content.aveletyFeatureDashboardBarImageSevenImage
                          }
                          style={{ width: "100%", height: "0rem" }}
                          alt={content.aveletyFeatureDashboardBarImageSevenAlt}
                          className="rt-feature-dashboard-bar-image rt-seven"
                          width={22}
                          height={59}
                          sizes="22px"
                        />
                      </div>
                      <div className="rt-feature-dashboard-bar rt-eight">
                        <Image
                          src={
                            content.aveletyFeatureDashboardBarImageEightImage
                          }
                          style={{ width: "100%", height: "0rem" }}
                          alt={content.aveletyFeatureDashboardBarImageEightAlt}
                          className="rt-feature-dashboard-bar-image rt-eight"
                          width={22}
                          height={73}
                          sizes="22px"
                        />
                      </div>
                      <div className="rt-feature-dashboard-bar rt-nine">
                        <Image
                          src={content.aveletyFeatureDashboardBarImageNineImage}
                          style={{ width: "100%", height: "0rem" }}
                          alt={content.aveletyFeatureDashboardBarImageNineAlt}
                          className="rt-feature-dashboard-bar-image rt-nine"
                          width={22}
                          height={115}
                          sizes="22px"
                        />
                      </div>
                      <div className="rt-feature-dashboard-bar rt-ten">
                        <Image
                          src={content.aveletyFeatureDashboardBarImageTenImage}
                          style={{ width: "100%", height: "0rem" }}
                          alt={content.aveletyFeatureDashboardBarImageTenAlt}
                          className="rt-feature-dashboard-bar-image rt-ten"
                          width={22}
                          height={101}
                          sizes="22px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-vflex rt-feature-hero-dashboard-left">
              <div
                className="rt-feature-hero-dashboard-left-part rt-border-radius-tiny-15 rt-overflow-hidden"
                data-motion="featuresHero-featureHeroDashboardLeftPart-3"
              >
                <Image
                  src={content.aveletyFeatureDashboardImageFourImage}
                  alt={content.aveletyFeatureDashboardImageFourAlt}
                  width={190}
                  height={193}
                  sizes="190px"
                />
              </div>
              <div
                className="rt-feature-hero-dashboard-left-part rt-border-radius-tiny-15 rt-overflow-hidden"
                data-motion="featuresHero-featureHeroDashboardLeftPart-4"
              >
                <Image
                  src={content.aveletyFeatureHeroDashboardgraphBarImagImage}
                  alt={content.aveletyFeatureHeroDashboardgraphBarImagAlt}
                  width={190}
                  height={193}
                  sizes="190px"
                />
              </div>
            </div>
          </div>
          <div className="w-layout-hflex rt-feature-hero-icon-wrap rt-one rt-mobile-display-none">
            <div className="w-layout-hflex rt-feature-hero-icon">
              <Image
                src={content.aveletyFeatureHeroIconOneImage}
                alt={content.aveletyFeatureHeroIconOneAlt}
                width={19}
                height={23}
                sizes="19px"
              />
            </div>
          </div>
          <div className="w-layout-hflex rt-feature-hero-icon-wrap rt-two rt-mobile-display-none">
            <div className="w-layout-hflex rt-feature-hero-icon">
              <Image
                src={content.vector20260312t105816Image}
                alt={content.Alt}
                width={19}
                height={23}
                sizes="19px"
              />
            </div>
          </div>
          <div
            style={{
              transform:
                "translate3d(38vw, 5vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className="w-layout-hflex rt-feature-hero-icon-wrap rt-three"
          >
            <div className="w-layout-hflex rt-feature-hero-icon">
              <Image
                src={content.vector20260312t105752Image}
                alt={content.Alt}
                width={19}
                height={23}
                sizes="19px"
              />
            </div>
          </div>
          <div
            style={{
              transform:
                "translate3d(-41vw, 5vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className="w-layout-hflex rt-feature-hero-icon-wrap rt-four"
          >
            <div className="w-layout-hflex rt-feature-hero-icon">
              <Image
                src={content.vector20260312t105811Image}
                alt={content.Alt}
                width={19}
                height={23}
                sizes="19px"
              />
            </div>
          </div>
          <div
            style={{
              transform:
                "translate3d(24vw, -14vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className="w-layout-hflex rt-feature-hero-icon-wrap rt-five"
          >
            <div className="w-layout-hflex rt-feature-hero-icon">
              <Image
                src={content.vector20260312t105801Image}
                alt={content.Alt}
                width={19}
                height={23}
                sizes="19px"
              />
            </div>
          </div>
          <div
            style={{
              transform:
                "translate3d(-26vw, -14vh, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            }}
            className="w-layout-hflex rt-feature-hero-icon-wrap rt-six"
          >
            <div className="w-layout-hflex rt-feature-hero-icon">
              <Image
                src={content.vector20260312t105807Image}
                alt={content.Alt}
                width={19}
                height={23}
                sizes="19px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
