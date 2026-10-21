"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useTeamworkAnimation } from "@/hooks/sections/useTeamworkAnimation";
export default function Teamwork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useTeamworkAnimation(sectionRef);
  const content = siteConfig.sections.teamwork;
  return (
    <section className="rt-team-work-v1" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-hflex rt-team-work-v1-main">
          <div
            className="w-layout-vflex rt-team-work-v1-image-wrap rt-border-radius-tiny-15 rt-overflow-hidden"
            data-motion="teamwork-teamWorkV1ImageWrap"
          >
            <div
              className="w-layout-vflex rt-team-work-v1-image-content rt-border-radius-tiny-15 rt-overflow-hidden"
              data-motion="teamwork-teamWorkV1ImageContent"
            >
              <div className="rt-team-work-v1-content-image-main">
                <Image
                  src={content.aveletyAboutFeamworkCardTabImageImage}
                  alt={content.aveletyAboutFeamworkCardTabImageAlt}
                  width={394}
                  height={83}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                />
              </div>
              <div className="w-layout-vflex rt-team-work-v1-content-dashboard-wrap rt-full-width rt-border-radius-tiny-15">
                <div className="w-layout-hflex rt-team-work-v1-dashboard-client-wrap rt-full-width rt-position-relative">
                  <div
                    className="rt-team-work-v1-dashboard-client-image"
                    data-motion="teamwork-teamWorkV1DashboardClientImage"
                  >
                    <Image
                      src={content.aveletyAboutTeamWorkClientImageMainImage}
                      alt={content.aveletyAboutTeamWorkClientImageMainAlt}
                      width={105}
                      height={105}
                      sizes="105px"
                    />
                  </div>
                  <div className="w-layout-vflex rt-team-work-v1-dashboard-client-text-wrap rt-overflow-hidden">
                    <div
                      className="w-layout-vflex rt-team-work-v1-dashboard-client-text"
                      data-motion="teamwork-teamWorkV1DashboardClientText"
                    >
                      <div className="rt-text-color-white">
                        {content.topUsers}
                      </div>
                      <div className="rt-text-style-h6">
                        {content.zaireCarder}
                      </div>
                    </div>
                    <div
                      className="w-layout-vflex rt-team-work-v1-dashboard-client-text"
                      data-motion="teamwork-teamWorkV1DashboardClientText-2"
                    >
                      <div className="rt-text-color-white">
                        {content.dailyTransaction}
                      </div>
                      <div className="rt-text-style-h6">
                        {content.value2000000}
                      </div>
                    </div>
                  </div>
                  <div
                    className="rt-border-line"
                    data-motion="teamwork-borderLine"
                  ></div>
                </div>
                <div className="w-layout-vflex rt-team-work-v1-dashboard-bottom">
                  <div className="w-layout-hflex rt-team-work-v1-dashboard-bottom-text-wrap rt-full-width">
                    <div className="w-layout-vflex rt-team-work-v1-dashboard-bottom-text">
                      <div className="rt-text-color-white">
                        {content.totalNewUsers}
                      </div>
                      <div className="rt-text-style-h2">
                        {content.value500k}
                      </div>
                    </div>
                    <div className="rt-team-work-v1-dashboard-bottom-option">
                      <Image
                        src={content.aveletyAboutTeamWorkDashboardUpIconImage}
                        alt={content.aveletyAboutTeamWorkDashboardUpIconAlt}
                        width={65}
                        height={19}
                        sizes="65px"
                      />
                    </div>
                  </div>
                  <div className="w-layout-hflex rt-team-work-v1-team-wrap rt-full-width">
                    <div className="w-layout-hflex rt-team-work-v1-team-block rt-overflow-hidden">
                      <div
                        className="rt-team-work-v1-team"
                        data-motion="teamwork-teamWorkV1Team"
                      >
                        <Image
                          src={
                            content.aveletyAboutTeamworkTeambaerImageThreeImage
                          }
                          alt={
                            content.aveletyAboutTeamworkTeambaerImageThreeAlt
                          }
                          width={40}
                          height={40}
                          sizes="40px"
                        />
                      </div>
                      <div
                        className="rt-team-work-v1-team rt-margin-change"
                        data-motion="teamwork-teamWorkV1Team-2"
                      >
                        <Image
                          src={
                            content.aveletyAboutTeamworkTeambaerImageTwoImage
                          }
                          alt={content.aveletyAboutTeamworkTeambaerImageTwoAlt}
                          width={40}
                          height={40}
                          sizes="40px"
                        />
                      </div>
                      <div
                        className="rt-team-work-v1-team rt-margin-change"
                        data-motion="teamwork-teamWorkV1Team-3"
                      >
                        <Image
                          src={
                            content.aveletyAboutTeamworkTeambaerImageOneImage
                          }
                          alt={content.aveletyAboutTeamworkTeambaerImageOneAlt}
                          width={40}
                          height={40}
                          sizes="40px"
                        />
                      </div>
                      <div
                        style={{
                          transform:
                            "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                        }}
                        className="w-layout-hflex rt-team-work-v1-plus-icon-wrap"
                        data-motion="teamwork-teamWorkV1PlusIconWrap"
                      >
                        <div className="w-layout-vflex rt-team-work-v1-plus-icon">
                          <Image
                            src={
                              content.aveletyAboutTeamworkTeambaerPlusIconImage
                            }
                            alt={
                              content.aveletyAboutTeamworkTeambaerPlusIconAlt
                            }
                            width={10}
                            height={10}
                            sizes="10px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rt-team-work-v1-view-block">
                      <Image
                        src={content.aveletyAboutTeamWorkViewAllImageImage}
                        alt={content.aveletyAboutTeamWorkViewAllImageAlt}
                        width={271}
                        height={87}
                        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rt-text-color-white">
                {content.donTHaveAnAccount}
                <Link
                  href={content.signInHref}
                  className="rt-text-color-sky-blue"
                >
                  {content.signIn}
                </Link>
              </div>
            </div>
          </div>
          <div className="w-layout-vflex rt-team-work-v1-text-wrap">
            <div className="w-layout-vflex rt-team-work-v1-heading-wrap">
              <div className="rt-team-work-v1-heading rt-overflow-hidden">
                <h2 className="rt-gap-off" data-motion="teamwork-gapOff">
                  {content.heading}
                  <span className="rt-heading-special-font">
                    {content.highlight}
                  </span>
                </h2>
              </div>
              <div className="rt-team-work-v1-paragraph rt-overflow-hidden">
                <p className="rt-gap-off" data-motion="teamwork-gapOff-2">
                  {content.description}
                </p>
              </div>
            </div>
            <div className="w-layout-vflex rt-tean-work-v1-content-wrap rt-position-relative">
              <div
                className="rt-text-style-h5"
                data-motion="teamwork-textStyleH5"
              >
                {content.continuousTransactionMonitoring}
              </div>
              <p className="rt-gap-off" data-motion="teamwork-gapOff-3">
                {content.description2}
              </p>
              <div
                className="rt-border-line"
                data-motion="teamwork-borderLine"
              ></div>
            </div>
            <div className="w-layout-hflex rt-team-work-v1-option-wrap rt-overflow-hidden">
              <div
                className="w-layout-hflex rt-team-work-v1-option"
                data-motion="teamwork-teamWorkV1Option"
              >
                <div className="w-layout-hflex rt-team-work-v1-icon-wrap rt-border-radius-tiny-15">
                  <div className="w-layout-hflex rt-team-work-v1-icon">
                    <Image
                      src={content.aveletyAboutTeamworkAiCapabilitiesIconImage}
                      alt={content.aveletyAboutTeamworkAiCapabilitiesIconAlt}
                      width={33}
                      height={27}
                      sizes="33px"
                    />
                  </div>
                </div>
                <div className="rt-teamwork-v1-option-text">
                  <div className="rt-text-style-h6">
                    {content.emphasizesSmartAiDrivenCapabilities}
                  </div>
                </div>
              </div>
              <div
                className="w-layout-hflex rt-team-work-v1-option"
                data-motion="teamwork-teamWorkV1Option-2"
              >
                <div className="w-layout-hflex rt-team-work-v1-icon-wrap rt-border-radius-tiny-15">
                  <div className="w-layout-hflex rt-team-work-v1-icon rt-size-change">
                    <Image
                      src={
                        content.aveletyAboutTeamworkRealTimeNotificationIconImage
                      }
                      alt={
                        content.aveletyAboutTeamworkRealTimeNotificationIconAlt
                      }
                      width={27}
                      height={30}
                      sizes="27px"
                    />
                  </div>
                </div>
                <div className="rt-teamwork-v1-option-text">
                  <div className="rt-text-style-h6">
                    {content.realTimeTransactionNotifications}
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
