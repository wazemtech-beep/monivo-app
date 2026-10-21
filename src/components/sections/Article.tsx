"use client";
import { useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useArticleAnimation } from "@/hooks/sections/useArticleAnimation";
export default function Article() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useArticleAnimation(sectionRef);
  const content = siteConfig.sections.article;
  return (
    <section className="rt-blog-details" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-blog-details-main rt-position-relative">
          <div className="w-layout-hflex rt-blog-details-heading-wrap rt-full-width rt-position-relative">
            <div className="rt-blog-details-heading">
              <h1
                className="rt-gap-off rt-text-center"
                data-motion="article-gapOff"
              >
                {content.title}
              </h1>
            </div>
            <div
              className="rt-border-line"
              data-motion="article-borderLine"
            ></div>
          </div>
          <div
            className="w-layout-hflex rt-blog-details-date-block"
            data-motion="article-blogDetailsDateBlock"
          >
            <div className="rt-sub-text">{content.eyebrow}</div>
            <div className="w-layout-hflex rt-blog-details-date-wrap">
              <div className="w-layout-hflex rt-blog-details-date-icon">
                <Image
                  src={content.aveletyBlogDetailsDateIconImage}
                  alt={content.aveletyBlogDetailsDateIconAlt}
                  width={20}
                  height={20}
                  sizes="20px"
                />
              </div>
              <div className="rt-text-color-white">{content.march52026}</div>
            </div>
          </div>
          <div
            className="rt-blog-details-image-wrap rt-full-width"
            data-motion="article-blogDetailsImageWrap"
          >
            <Image
              src={content.aveletyBlogDetailsHeroImageOneImage}
              alt={content.Alt}
              className="rt-full-width"
              width={1290}
              height={750}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
          </div>
          <div
            className="w-layout-hflex rt-blog-details-content-main rt-full-width"
            data-motion="article-blogDetailsContentMain"
          >
            <div className="w-layout-hflex rt-blog-details-content-client-wrap">
              <div className="rt-blog-details-client-image">
                <Image
                  src={content.aveletyBlogPostAuthorImageOneImage}
                  alt={content.Alt}
                  width={62}
                  height={62}
                  sizes="62px"
                />
              </div>
              <div className="w-layout-vflex rt-blog-details-client-name-wrap">
                <div className="rt-text-style-h5">{content.eyebrow}</div>
                <div>{content.marketingManager}</div>
              </div>
            </div>
            <div className="w-layout-vflex rt-blog-details-content">
              <div className="rt-blog-details-rich-text">
                <div className="w-richtext">
                  <h2>{content.heading}</h2>
                  <p>{content.description}</p>
                  <p>{content.description2}</p>
                  <p>{content.description3}</p>
                  <h4>{content.heading2}</h4>
                  <p>{content.description4}</p>
                </div>
              </div>
              <div className="w-layout-hflex rt-blog-details-content-image-wrap">
                <div className="rt-blog-details-content-image">
                  <Image
                    src={content.aveletyBlogPostContentImageOneImage}
                    alt={content.Alt}
                    width={412}
                    height={278}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
                <div className="rt-blog-details-content-image">
                  <Image
                    src={content.aveletyBlogPostContentImageTwoImage}
                    alt={content.Alt}
                    width={412}
                    height={278}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                  />
                </div>
              </div>
              <div className="rt-blog-details-rich-text">
                <div className="w-richtext">
                  <h4>{content.heading3}</h4>
                  <ol role="list">
                    <li>
                      {
                        content.harnessSeamlessAiSaasAutomationToOptimizeBusinessOperationsEmpowe
                      }
                    </li>
                    <li>
                      {
                        content.experienceThePowerOfAiSaasAutomationToStreamlineOperationsEnhance
                      }
                    </li>
                  </ol>
                  <h4>{content.heading2}</h4>
                  <p>{content.description5}</p>
                </div>
              </div>
              <div className="w-layout-hflex rt-blog-details-social rt-full-width">
                <div className="rt-text-style-h6">{content.stayConnected}</div>
                <div className="w-layout-hflex rt-blog-details-social-wrap">
                  <a
                    href={content.Href}
                    className="rt-blog-details-social-icon-wrap rt-facebook w-inline-block"
                    data-motion="article-blogDetailsSocialIconWrap"
                  >
                    <Image
                      src={content.vectorImage}
                      alt={content.Alt}
                      style={{ filter: "brightness(1000%)" }}
                      className="rt-blog-details-social-icon"
                      width={9}
                      height={17}
                      sizes="9px"
                    />
                  </a>
                  <a
                    href={content.Href2}
                    className="rt-blog-details-social-icon-wrap rt-linkedin w-inline-block"
                    data-motion="article-blogDetailsSocialIconWrap-2"
                  >
                    <Image
                      src={content.aveletyBlogDetailsFacebookIconImage}
                      alt={content.aveletyBlogDetailsFacebookIconAlt}
                      style={{ filter: "brightness(1000%)" }}
                      className="rt-blog-details-social-icon"
                      width={16}
                      height={16}
                      sizes="16px"
                    />
                  </a>
                  <a
                    href={content.Href3}
                    className="rt-blog-details-social-icon-wrap rt-instagram w-inline-block"
                    data-motion="article-blogDetailsSocialIconWrap-3"
                  >
                    <Image
                      src={content.aveletyBlogPostLinkedinIconImage}
                      alt={content.aveletyBlogPostLinkedinIconAlt}
                      style={{ filter: "brightness(1000%)" }}
                      className="rt-blog-details-social-icon"
                      width={17}
                      height={17}
                      sizes="17px"
                    />
                  </a>
                  <a
                    href={content.Href4}
                    className="rt-blog-details-social-icon-wrap rt-x w-inline-block"
                    data-motion="article-blogDetailsSocialIconWrap-4"
                  >
                    <Image
                      src={content.aveletyBlogPostInstagramIconImage}
                      alt={content.aveletyBlogPostInstagramIconAlt}
                      style={{ filter: "brightness(1000%)" }}
                      className="rt-blog-details-social-icon"
                      width={16}
                      height={17}
                      sizes="16px"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rt-blog-star-v1 rt-mobile-display-none">
            <div className="rt-glow-star">
              <Image
                alt={content.aveletyPageBigStarAlt}
                src={content.aveletyPageBigStarImage}
                className="rt-blink-star"
                data-motion="article-blinkStar"
                width={284}
                height={284}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
          </div>
          <div className="rt-glow-star-v2 rt-mobile-display-none">
            <div className="rt-glow-star">
              <Image
                alt={content.aveletyPageBigStarAlt}
                src={content.aveletyPageBigStarImage}
                className="rt-blink-star"
                data-motion="article-blinkStar-2"
                width={284}
                height={284}
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
