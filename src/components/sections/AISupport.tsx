"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useAISupportAnimation } from "@/hooks/sections/useAISupportAnimation";
export default function AISupport() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useAISupportAnimation(sectionRef);
  const content = siteConfig.sections.aISupport;
  return (
    <section
      className="rt-ai-support rt-position-relative rt-overflow-hidden"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-ai-support-main">
          <div className="w-layout-vflex rt-ai-support-text-wrap">
            <div className="w-layout-vflex rt-ai-support-heading-wrap rt-position-relative">
              <div
                className="w-layout-hflex rt-sub-text-main"
                data-motion="aISupport-subTextMain"
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
              <div className="rt-ai-support-heading rt-overflow-hidden">
                <h2 className="rt-gap-off" data-motion="aISupport-gapOff">
                  {content.heading}
                  <span className="rt-heading-special-font">
                    {content.highlight}
                  </span>
                </h2>
              </div>
              <div className="rt-ai-support-paragraph rt-overflow-hidden">
                <p className="rt-gap-off" data-motion="aISupport-gapOff-2">
                  {content.description}
                </p>
              </div>
              <div
                className="rt-button-wrap"
                data-motion="aISupport-buttonWrap"
              >
                <Link
                  href={content.startLiveSupportstartLiveSupportHref}
                  className="rt-button w-inline-block"
                  data-motion="aISupport-button"
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
              <div
                className="rt-border-line"
                data-motion="aISupport-borderLine"
              ></div>
            </div>
            <div className="w-layout-hflex rt-ai-support-client-wrap">
              <div className="w-layout-hflex rt-ai-support-client-block rt-overflow-hidden">
                <div
                  className="rt-ai-support-client-image rt-one"
                  data-motion="aISupport-aiSupportClientImage"
                >
                  <Image
                    alt={content.aveletyFeatureAiSupportClientImageOneAlt}
                    src={content.aveletyFeatureAiSupportClientImageOneImage}
                    width={50}
                    height={50}
                    sizes="50px"
                  />
                </div>
                <div
                  className="rt-ai-support-client-image rt-margin-left rt-two"
                  data-motion="aISupport-aiSupportClientImage-2"
                >
                  <Image
                    alt={content.aveletyFeatureAiSupportClientImageTwoAlt}
                    src={content.aveletyFeatureAiSupportClientImageTwoImage}
                    width={50}
                    height={50}
                    sizes="50px"
                  />
                </div>
                <div
                  className="rt-ai-support-client-image rt-margin-left rt-three"
                  data-motion="aISupport-aiSupportClientImage-3"
                >
                  <Image
                    alt={content.aveletyFeatureAiSupportClientImageThreeAlt}
                    src={content.aveletyFeatureAiSupportClientImageThreeImage}
                    width={50}
                    height={50}
                    sizes="50px"
                  />
                </div>
                <div
                  className="w-layout-hflex rt-ai-support-icon-wrap"
                  data-motion="aISupport-aiSupportIconWrap"
                >
                  <div className="w-layout-hflex rt-ai-support-icon">
                    <Image
                      alt={content.aveletyStarIconAlt}
                      src={content.aveletyStarIconImage}
                      width={57}
                      height={54}
                      sizes="57px"
                    />
                  </div>
                </div>
              </div>
              <div className="rt-ai-support-rating-text rt-overflow-hidden">
                <div
                  className="rt-text-color-white"
                  data-motion="aISupport-textColorWhite"
                >
                  {content.rated495FromOver600Reviews}
                </div>
              </div>
            </div>
          </div>
          <div className="w-layout-vflex rt-feature-chat-wrapper rt-border-radius-tiny-15">
            <div className="w-layout-vflex rt-feature-hero-chat-heading">
              <div className="rt-text-style-h5">{content.chat}</div>
              <div className="w-layout-hflex rt-feature-hero-ctat-tab">
                <div className="rt-text-color-white">{content.allChat}</div>
                <div>{content.groupChat}</div>
                <div>{content.participant}</div>
              </div>
            </div>
            <div
              className="rt-feature-hero-main-chat"
              data-motion="aISupport-featureHeroMainChat"
            >
              <div className="rt-feature-chat-wrap">
                <div className="rt-chat-ai-image">
                  <Image
                    alt={content.aiAlt}
                    src={content.aiImage}
                    className="ai-one"
                    width={58}
                    height={58}
                    sizes="58px"
                  />
                </div>
                <div className="rt-feature-chat-single-message rt-1">
                  <Image
                    alt={content.massgeTwoAlt}
                    src={content.massgeTwoImage}
                    className="rt-message-chat massage-border-radius massage-one"
                    width={168}
                    height={37}
                    sizes="168px"
                  />
                </div>
              </div>
              <div className="rt-feature-chat-wrap change-direction">
                <div className="rt-feature-chat-single-message rt-2">
                  <Image
                    alt={content.massageFourAlt}
                    src={content.massageFourImage}
                    className="rt-message-chat massage-border-radius change-radius customer-massage-two"
                    width={187}
                    height={37}
                    sizes="187px"
                  />
                </div>
                <div className="w-layout-hflex rt-feature-chat-customer-image-wrap">
                  <Image
                    alt={content.humanAlt}
                    src={content.humanImage}
                    className="customer-one"
                    width={58}
                    height={58}
                    sizes="58px"
                  />
                </div>
              </div>
              <div className="rt-feature-chat-double-message">
                <div className="rt-feature-chat-wrap">
                  <div className="rt-chat-ai-image">
                    <Image
                      alt={content.aiAlt}
                      src={content.aiImage}
                      className="ai-two"
                      width={41}
                      height={41}
                      sizes="41px"
                    />
                  </div>
                  <div className="rt-feature-chat-single-message rt-3">
                    <Image
                      alt={content.massageThreeAlt}
                      src={content.massageThreeImage}
                      className="rt-message-chat massage-border-radius massage-two"
                      width={103}
                      height={37}
                      sizes="103px"
                    />
                  </div>
                </div>
                <div className="rt-feature-chat-wrap">
                  <div className="rt-chat-ai-image">
                    <Image
                      alt={content.aiAlt}
                      src={content.aiImage}
                      className="ai-three"
                      width={41}
                      height={41}
                      sizes="41px"
                    />
                  </div>
                  <div className="rt-feature-chat-single-message rt-4">
                    <Image
                      alt={content.massgeOneAlt}
                      src={content.massgeOneImage}
                      className="rt-message-chat massage-border-radius massage-three"
                      width={181}
                      height={37}
                      sizes="181px"
                    />
                  </div>
                </div>
              </div>
              <div className="rt-feature-chat-wrap change-direction">
                <div className="rt-feature-chat-single-message rt-5">
                  <Image
                    alt={content.voiceAlt}
                    src={content.voiceImage}
                    className="rt-message-chat massage-border-radius change-radius customet-massage-two"
                    width={175}
                    height={37}
                    sizes="175px"
                  />
                </div>
                <div className="rt-feature-chat-customer-image-wrap">
                  <Image
                    alt={content.humanAlt}
                    src={content.humanImage}
                    className="customer-two"
                    width={58}
                    height={58}
                    sizes="58px"
                  />
                </div>
              </div>
              <div
                className="rt-feature-chat-wrap"
                data-motion="aISupport-featureChatWrap"
              >
                <div className="rt-chat-ai-image">
                  <Image
                    alt={content.aiAlt}
                    src={content.aiImage}
                    className="ai-four"
                    width={41}
                    height={41}
                    sizes="41px"
                  />
                </div>
                <div className="rt-overflow-hidden">
                  <div className="w-layout-hflex rt-feature-chat-single-message rt-change-display">
                    <div className="feature-massage-text">
                      {content.aiTyping}
                    </div>
                    <div className="feature-two-success-dot-wrapper">
                      <div className="feature-two-massage-dot one"></div>
                      <div className="feature-two-massage-dot two"></div>
                      <div className="feature-two-massage-dot three"></div>
                      <div className="feature-two-massage-dot four"></div>
                      <div className="feature-two-massage-dot five"></div>
                      <div className="feature-two-massage-dot six"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-two-massage-input">
                <div className="massage-type-text">{content.writeAMassage}</div>
                <div className="feature-three-massage-box">
                  <div>
                    <Image
                      alt={content.massageAlt}
                      src={content.massageImage}
                      width={15}
                      height={14}
                      sizes="15px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rt-ai-support-map-image">
        <Image
          alt={content.aveletyFeatureAiSupportMapImageAlt}
          src={content.aveletyFeatureAiSupportMapImageImage}
          width={1385}
          height={693}
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
        />
      </div>
    </section>
  );
}
