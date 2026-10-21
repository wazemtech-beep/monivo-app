"use client";

import { useRef } from "react";
import Image from "next/image";
import { Tabs, Tab, TabPanel, FAQItem } from "@/components/ui/Interactive";
import { siteConfig } from "@/data/siteConfig";
import { useFAQAnimation } from "@/hooks/sections/useFAQAnimation";

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useFAQAnimation(sectionRef);
  const content = siteConfig.sections.fAQ;

  return (
    <section className="rt-faq-v1 rt-position-relative" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-faq-v1-main rt-position-relative">
          <div className="w-layout-vflex rt-faq-v1-heading-wrap rt-overflow-hidden">
            <div
              className="w-layout-hflex rt-sub-text-main"
              data-motion="fAQ-subTextMain"
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
            <h2 className="rt-gap-off rt-text-center" data-motion="fAQ-gapOff">
              {content.heading}
              <span className="rt-heading-special-font">
                {content.highlight}
              </span>
            </h2>
          </div>
          <div
            className="rt-faq-holder rt-full-width"
            data-motion="fAQ-faqHolder"
          >
            <Tabs className="rt-faq-tab-v1 rt-full-width w-tabs">
              <div className="rt-faq-tab-menu-v1 w-tab-menu" role="tablist">
                {content.categories.map((category, index) => (
                  <Tab
                    key={category.id}
                    value={category.id}
                    className={`rt-faq-menu-text-v1 w-inline-block w-tab-link${index === 0 ? " rt-top" : ""}${index === content.categories.length - 1 ? " rt-bottom-border-none" : ""}`}
                  >
                    <div className="rt-text-style-h5">{category.label}</div>
                    <div className="w-layout-hflex rt-faq-menu-text-v1-arrow">
                      <Image
                        src={content.arrowIcon}
                        alt=""
                        width={11}
                        height={9}
                      />
                    </div>
                  </Tab>
                ))}
              </div>
              <div className="rt-faq-content-v1 w-tab-content">
                {content.categories.map((category) => (
                  <TabPanel
                    key={category.id}
                    value={category.id}
                    className="w-tab-pane"
                  >
                    <div className="rt-faq-tab-wrap">
                      <div className="rt-faq-all-question-v1">
                        {category.questions.map((question) => (
                          <FAQItem
                            key={question.number}
                            className="rt-faq-question-holder-v1 rt-border-bottom"
                            item={question}
                          />
                        ))}
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </div>
            </Tabs>
          </div>
          <div className="rt-faq-glow-v1 rt-mobile-display-none">
            <div className="rt-glow-star">
              <Image
                src={content.starImage}
                alt=""
                className="rt-blink-star"
                data-motion="fAQ-blinkStar"
                width={284}
                height={284}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rt-faq-glow-v2 rt-tab-display-none">
        <div className="rt-glow-star">
          <Image
            src={content.starImage}
            alt=""
            className="rt-blink-star"
            data-motion="fAQ-blinkStar-2"
            width={284}
            height={284}
          />
        </div>
      </div>
    </section>
  );
}
