"use client";
import { useRef } from "react";
import Image from "next/image";
import { FAQItem } from "@/components/ui/Interactive";
import { siteConfig } from "@/data/siteConfig";
import { useContactFAQAnimation } from "@/hooks/sections/useContactFAQAnimation";
export default function ContactFAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useContactFAQAnimation(sectionRef);
  const content = siteConfig.sections.contactFAQ;
  return (
    <section className="rt-faq-v2 rt-position-relative" ref={sectionRef}>
      <div className="rt-blink-star-big">
        <Image
          src={content.aveletyPageBigStarImage}
          alt={content.aveletyPageBigStarAlt}
          style={{
            transform:
              "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          }}
          className="rt-blink-star"
          data-motion="contactFAQ-blinkStar"
          width={166}
          height={166}
          sizes="166px"
        />
      </div>
      <div className="w-layout-blockcontainer rt-container-small w-container">
        <div className="w-layout-vflex rt-faq-v2-main">
          <div className="rt-faq-v2-heading-wrap rt-overflow-hidden">
            <h2
              className="rt-gap-off rt-text-center"
              data-motion="contactFAQ-gapOff"
            >
              {content.heading}
              <span className="rt-heading-special-font">
                {content.highlight}
              </span>
            </h2>
          </div>
          <div className="rt-faq-v2-wrap rt-full-width">
            <FAQItem
              className="rt-faq-question-holder-v1 rt-border-bottom rt-padding-off"
              item={content.question01}
            />
            <FAQItem
              className="rt-faq-question-holder-v1 rt-border-bottom rt-two"
              item={content.question02}
            />
            <FAQItem
              className="rt-faq-question-holder-v1 rt-border-bottom rt-three"
              item={content.question03}
            />
            <FAQItem
              className="rt-faq-question-holder-v1 rt-border-bottom rt-four"
              item={content.question04}
            />
            <FAQItem
              className="rt-faq-question-holder-v1 rt-border-bottom rt-five w-variant-98944c43-799a-fa38-2989-ad817631be05"
              item={content.question05}
            />
            <FAQItem
              className="rt-faq-question-holder-v1 rt-border-bottom rt-six w-variant-98944c43-799a-fa38-2989-ad817631be05"
              item={content.question06}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
