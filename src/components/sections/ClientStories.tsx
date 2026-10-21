"use client";
import { useRef } from "react";
import Image from "next/image";
import { BackgroundVideo } from "@/components/ui/Interactive";
import { siteConfig } from "@/data/siteConfig";
import { useClientStoriesAnimation } from "@/hooks/sections/useClientStoriesAnimation";
export default function ClientStories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useClientStoriesAnimation(sectionRef);
  const content = siteConfig.sections.clientStories;
  return (
    <section
      className="rt-testimonial-v2"
      data-motion="clientStories-testimonialV2"
      ref={sectionRef}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-testimonial-v2-heading-wrap">
          <div
            className="w-layout-hflex rt-sub-text-main"
            data-motion="clientStories-subTextMain"
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
          <div className="rt-testimonial-v2-heading rt-overflow-hidden">
            <h2 className="rt-gap-off" data-motion="clientStories-gapOff">
              {content.heading}
              <span className="rt-heading-special-font">
                {content.highlight}
              </span>
            </h2>
          </div>
        </div>
        <div className="w-layout-grid rt-testimonial-v2-video-card-wrap rt-overflow-hidden">
          <div
            className="rt-leanear-border-landscape rt-border-radius-15"
            data-motion="clientStories-leanearBorderLandscape"
          >
            <div className="w-layout-hflex rt-testimonial-v2-video-card rt-border-radius-tiny-15">
              <div className="rt-testimonial-v2-card-video-wrap rt-border-radius-tiny-15 rt-overflow-hidden">
                <BackgroundVideo
                  data-poster-url="/assets/389caea18c-6982f48010156d8807407e6e-699e906b978bd27b7f86f6c9_608498_Lockdown_Coronavirus_1920x1080--1-_poster.0000000.jpg"
                  data-video-urls="/assets/036bbc66f8-6982f48010156d8807407e6e-699e906b978bd27b7f86f6c9_608498_Lockdown_Coronavirus_1920x1080--1-_mp4.mp4,/assets/f4dd7d58ee-6982f48010156d8807407e6e-699e906b978bd27b7f86f6c9_608498_Lockdown_Coronavirus_1920x1080--1-_webm.webm"
                  data-autoplay="true"
                  data-loop="true"
                  className="rt-testimonial-v2-card-video w-background-video w-background-video-atom"
                  data-motion="clientStories-testimonialV2CardVideo"
                >
                  <video
                    id="4fcdb0f9-1130-2b08-b18e-099b3dd60e5e-video"
                    autoPlay={true}
                    loop={true}
                    style={{
                      backgroundImage:
                        'url("/assets/389caea18c-6982f48010156d8807407e6e-699e906b978bd27b7f86f6c9_608498_Lockdown_Coronavirus_1920x1080--1-_poster.0000000.jpg")',
                    }}
                    muted={true}
                    playsInline={true}
                    data-object-fit="cover"
                  >
                    <source src={content.mp4Image} />
                    <source src={content.webmImage} />
                  </video>
                  <div className="w-layout-hflex rt-testimonial-v2-video-icon">
                    <div aria-live="polite">
                      <button
                        type="button"
                        aria-controls="4fcdb0f9-1130-2b08-b18e-099b3dd60e5e-video"
                        className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button w-background-video--control"
                      >
                        <span>
                          <Image
                            src={content.playVideoImage}
                            alt={content.playVideoAlt}
                            width={114}
                            height={114}
                            sizes="114px"
                          />
                        </span>
                        <span hidden={true}>
                          <Image
                            src={content.pauseVideoImage}
                            alt={content.pauseVideoAlt}
                            width={114}
                            height={114}
                            sizes="114px"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </BackgroundVideo>
              </div>
              <div className="w-layout-vflex rt-testimonial-v2-card-text-wrap">
                <div className="w-layout-hflex rt-testimonial-v2-card-client-details-wrap rt-full-width">
                  <div className="w-layout-vflex rt-testimonial-v2-card-client-details">
                    <div className="rt-text-style-h5">
                      {content.emersonDias}
                    </div>
                    <div>{content.operationsManager}</div>
                  </div>
                  <div className="rt-testimonial-v2-card-client-quotation">
                    <Image
                      alt={content.aveletyTestimonialV2ClientQuotationIconAlt}
                      src={content.aveletyTestimonialV2ClientQuotationIconImage}
                      width={42}
                      height={30}
                      sizes="42px"
                    />
                  </div>
                </div>
                <div className="rt-testimonial-video-card-paragraph">
                  <p className="rt-gap-off">{content.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rt-leanear-border-landscape rt-border-radius-15"
            data-motion="clientStories-leanearBorderLandscape-2"
          >
            <div className="w-layout-hflex rt-testimonial-v2-video-card rt-border-radius-tiny-15">
              <div className="rt-testimonial-v2-card-video-wrap rt-border-radius-tiny-15 rt-overflow-hidden">
                <BackgroundVideo
                  data-poster-url="/assets/0ce082c505-6982f48010156d8807407e6e-699e92ef2cad166851f5144e_41946ef4-1ef5-48af-b701-3234eb7ab74b_poster.0000000.jpg"
                  data-video-urls="/assets/81ebde1181-6982f48010156d8807407e6e-699e92ef2cad166851f5144e_41946ef4-1ef5-48af-b701-3234eb7ab74b_mp4.mp4,/assets/8517eab0d7-6982f48010156d8807407e6e-699e92ef2cad166851f5144e_41946ef4-1ef5-48af-b701-3234eb7ab74b_webm.webm"
                  data-autoplay="true"
                  data-loop="true"
                  className="rt-testimonial-v2-card-video w-background-video w-background-video-atom"
                  data-motion="clientStories-testimonialV2CardVideo-2"
                >
                  <video
                    id="4fcdb0f9-1130-2b08-b18e-099b3dd60e74-video"
                    autoPlay={true}
                    loop={true}
                    style={{
                      backgroundImage:
                        'url("/assets/0ce082c505-6982f48010156d8807407e6e-699e92ef2cad166851f5144e_41946ef4-1ef5-48af-b701-3234eb7ab74b_poster.0000000.jpg")',
                    }}
                    muted={true}
                    playsInline={true}
                    data-object-fit="cover"
                  >
                    <source src={content.mp4Image2} />
                    <source src={content.webmImage2} />
                  </video>
                  <div className="w-layout-hflex rt-testimonial-v2-video-icon">
                    <div aria-live="polite">
                      <button
                        type="button"
                        aria-controls="4fcdb0f9-1130-2b08-b18e-099b3dd60e74-video"
                        className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button w-background-video--control"
                      >
                        <span>
                          <Image
                            src={content.playVideoImage}
                            alt={content.playVideoAlt}
                            width={114}
                            height={114}
                            sizes="114px"
                          />
                        </span>
                        <span hidden={true}>
                          <Image
                            src={content.pauseVideoImage}
                            alt={content.pauseVideoAlt}
                            width={114}
                            height={114}
                            sizes="114px"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </BackgroundVideo>
              </div>
              <div className="w-layout-vflex rt-testimonial-v2-card-text-wrap">
                <div className="w-layout-hflex rt-testimonial-v2-card-client-details-wrap rt-full-width">
                  <div className="w-layout-vflex rt-testimonial-v2-card-client-details">
                    <div className="rt-text-style-h5">
                      {content.cooperBator}
                    </div>
                    <div>{content.businessStrategyLead}</div>
                  </div>
                  <div className="rt-testimonial-v2-card-client-quotation">
                    <Image
                      alt={content.aveletyTestimonialV2ClientQuotationIconAlt}
                      src={content.aveletyTestimonialV2ClientQuotationIconImage}
                      width={42}
                      height={30}
                      sizes="42px"
                    />
                  </div>
                </div>
                <div className="rt-testimonial-video-card-paragraph">
                  <p className="rt-gap-off">{content.description2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-layout-hflex rt-testimonial-v2-marquee-wrap rt-full-width rt-overflow-hidden"
        data-motion="clientStories-testimonialV2MarqueeWrap"
      >
        <div className="w-layout-hflex rt-testimonial-v2-marquee-train">
          <div className="rt-testimonial-v2-marquee-card-wrap">
            <div className="w-layout-vflex rt-testimonial-v1-card rt-border-radius-small-20 rt-testimonial-v1-margin">
              <div className="rt-testimonial-v1-star">
                <Image
                  alt={content.aveletyTestimonialStarAlt}
                  src={content.aveletyTestimonialStarImage}
                  width={91}
                  height={15}
                  sizes="91px"
                />
              </div>
              <div className="rt-text-style-h5">{content.saveHourOfWork}</div>
              <div className="rt-testimonial-v1-card-paragraph">
                <p className="rt-gap-off">{content.description3}</p>
              </div>
              <div className="w-layout-vflex rt-testimonial-v1-author-details">
                <div className="rt-text-style-h5">{content.emeryPhilips}</div>
                <div className="rt-text-color-sky-blue">{content.philips}</div>
              </div>
            </div>
          </div>
          <div className="rt-testimonial-v2-marquee-card-wrap">
            <div className="w-layout-vflex rt-testimonial-v1-card rt-border-radius-small-20 rt-testimonial-v1-margin">
              <div className="rt-testimonial-v1-star">
                <Image
                  alt={content.aveletyTestimonialStarAlt}
                  src={content.aveletyTestimonialStarImage}
                  width={91}
                  height={15}
                  sizes="91px"
                />
              </div>
              <div className="rt-text-style-h5">
                {content.simplifyYourWorkload}
              </div>
              <div className="rt-testimonial-v1-card-paragraph">
                <p className="rt-gap-off">{content.description4}</p>
              </div>
              <div className="w-layout-vflex rt-testimonial-v1-author-details">
                <div className="rt-text-style-h5">{content.martinBergson}</div>
                <div className="rt-text-color-sky-blue">
                  {content.martinbergson}
                </div>
              </div>
            </div>
          </div>
          <div className="rt-testimonial-v2-marquee-card-wrap">
            <div className="w-layout-vflex rt-testimonial-v1-card rt-border-radius-small-20 rt-testimonial-v1-margin">
              <div className="rt-testimonial-v1-star">
                <Image
                  alt={content.aveletyTestimonialStarAlt}
                  src={content.aveletyTestimonialStarImage}
                  width={91}
                  height={15}
                  sizes="91px"
                />
              </div>
              <div className="rt-text-style-h5">
                {content.reduceManualWorkTime}
              </div>
              <div className="rt-testimonial-v1-card-paragraph">
                <p className="rt-gap-off">{content.description5}</p>
              </div>
              <div className="w-layout-vflex rt-testimonial-v1-author-details">
                <div className="rt-text-style-h5">{content.ethanCarter}</div>
                <div className="rt-text-color-sky-blue">{content.carter}</div>
              </div>
            </div>
          </div>
          <div className="rt-testimonial-v2-marquee-card-wrap">
            <div className="w-layout-vflex rt-testimonial-v1-card rt-border-radius-small-20 rt-testimonial-v1-margin">
              <div className="rt-testimonial-v1-star">
                <Image
                  alt={content.aveletyTestimonialStarAlt}
                  src={content.aveletyTestimonialStarImage}
                  width={91}
                  height={15}
                  sizes="91px"
                />
              </div>
              <div className="rt-text-style-h5">
                {content.cutDownHoursOfEffort}
              </div>
              <div className="rt-testimonial-v1-card-paragraph">
                <p className="rt-gap-off">{content.description6}</p>
              </div>
              <div className="w-layout-vflex rt-testimonial-v1-author-details">
                <div className="rt-text-style-h5">{content.masonParker}</div>
                <div className="rt-text-color-sky-blue">{content.parker}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-hflex rt-testimonial-v2-marquee-train">
          <div className="rt-testimonial-v2-marquee-card-wrap">
            <div className="w-layout-vflex rt-testimonial-v1-card rt-border-radius-small-20 rt-testimonial-v1-margin">
              <div className="rt-testimonial-v1-star">
                <Image
                  alt={content.aveletyTestimonialStarAlt}
                  src={content.aveletyTestimonialStarImage}
                  width={91}
                  height={15}
                  sizes="91px"
                />
              </div>
              <div className="rt-text-style-h5">{content.saveHourOfWork}</div>
              <div className="rt-testimonial-v1-card-paragraph">
                <p className="rt-gap-off">{content.description3}</p>
              </div>
              <div className="w-layout-vflex rt-testimonial-v1-author-details">
                <div className="rt-text-style-h5">{content.emeryPhilips}</div>
                <div className="rt-text-color-sky-blue">{content.philips}</div>
              </div>
            </div>
          </div>
          <div className="rt-testimonial-v2-marquee-card-wrap">
            <div className="w-layout-vflex rt-testimonial-v1-card rt-border-radius-small-20 rt-testimonial-v1-margin">
              <div className="rt-testimonial-v1-star">
                <Image
                  alt={content.aveletyTestimonialStarAlt}
                  src={content.aveletyTestimonialStarImage}
                  width={91}
                  height={15}
                  sizes="91px"
                />
              </div>
              <div className="rt-text-style-h5">
                {content.simplifyYourWorkload}
              </div>
              <div className="rt-testimonial-v1-card-paragraph">
                <p className="rt-gap-off">{content.description4}</p>
              </div>
              <div className="w-layout-vflex rt-testimonial-v1-author-details">
                <div className="rt-text-style-h5">{content.martinBergson}</div>
                <div className="rt-text-color-sky-blue">
                  {content.martinbergson}
                </div>
              </div>
            </div>
          </div>
          <div className="rt-testimonial-v2-marquee-card-wrap">
            <div className="w-layout-vflex rt-testimonial-v1-card rt-border-radius-small-20 rt-testimonial-v1-margin">
              <div className="rt-testimonial-v1-star">
                <Image
                  alt={content.aveletyTestimonialStarAlt}
                  src={content.aveletyTestimonialStarImage}
                  width={91}
                  height={15}
                  sizes="91px"
                />
              </div>
              <div className="rt-text-style-h5">
                {content.reduceManualWorkTime}
              </div>
              <div className="rt-testimonial-v1-card-paragraph">
                <p className="rt-gap-off">{content.description5}</p>
              </div>
              <div className="w-layout-vflex rt-testimonial-v1-author-details">
                <div className="rt-text-style-h5">{content.ethanCarter}</div>
                <div className="rt-text-color-sky-blue">{content.carter}</div>
              </div>
            </div>
          </div>
          <div className="rt-testimonial-v2-marquee-card-wrap">
            <div className="w-layout-vflex rt-testimonial-v1-card rt-border-radius-small-20 rt-testimonial-v1-margin">
              <div className="rt-testimonial-v1-star">
                <Image
                  alt={content.aveletyTestimonialStarAlt}
                  src={content.aveletyTestimonialStarImage}
                  width={91}
                  height={15}
                  sizes="91px"
                />
              </div>
              <div className="rt-text-style-h5">
                {content.cutDownHoursOfEffort}
              </div>
              <div className="rt-testimonial-v1-card-paragraph">
                <p className="rt-gap-off">{content.description6}</p>
              </div>
              <div className="w-layout-vflex rt-testimonial-v1-author-details">
                <div className="rt-text-style-h5">{content.masonParker}</div>
                <div className="rt-text-color-sky-blue">{content.parker}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-hflex rt-testimonial-v2-marquee-train">
          <div className="rt-testimonial-v2-marquee-card-wrap">
            <div className="w-layout-vflex rt-testimonial-v1-card rt-border-radius-small-20 rt-testimonial-v1-margin">
              <div className="rt-testimonial-v1-star">
                <Image
                  alt={content.aveletyTestimonialStarAlt}
                  src={content.aveletyTestimonialStarImage}
                  width={91}
                  height={15}
                  sizes="91px"
                />
              </div>
              <div className="rt-text-style-h5">{content.saveHourOfWork}</div>
              <div className="rt-testimonial-v1-card-paragraph">
                <p className="rt-gap-off">{content.description3}</p>
              </div>
              <div className="w-layout-vflex rt-testimonial-v1-author-details">
                <div className="rt-text-style-h5">{content.emeryPhilips}</div>
                <div className="rt-text-color-sky-blue">{content.philips}</div>
              </div>
            </div>
          </div>
          <div className="rt-testimonial-v2-marquee-card-wrap">
            <div className="w-layout-vflex rt-testimonial-v1-card rt-border-radius-small-20 rt-testimonial-v1-margin">
              <div className="rt-testimonial-v1-star">
                <Image
                  alt={content.aveletyTestimonialStarAlt}
                  src={content.aveletyTestimonialStarImage}
                  width={91}
                  height={15}
                  sizes="91px"
                />
              </div>
              <div className="rt-text-style-h5">
                {content.simplifyYourWorkload}
              </div>
              <div className="rt-testimonial-v1-card-paragraph">
                <p className="rt-gap-off">{content.description4}</p>
              </div>
              <div className="w-layout-vflex rt-testimonial-v1-author-details">
                <div className="rt-text-style-h5">{content.martinBergson}</div>
                <div className="rt-text-color-sky-blue">
                  {content.martinbergson}
                </div>
              </div>
            </div>
          </div>
          <div className="rt-testimonial-v2-marquee-card-wrap">
            <div className="w-layout-vflex rt-testimonial-v1-card rt-border-radius-small-20 rt-testimonial-v1-margin">
              <div className="rt-testimonial-v1-star">
                <Image
                  alt={content.aveletyTestimonialStarAlt}
                  src={content.aveletyTestimonialStarImage}
                  width={91}
                  height={15}
                  sizes="91px"
                />
              </div>
              <div className="rt-text-style-h5">
                {content.reduceManualWorkTime}
              </div>
              <div className="rt-testimonial-v1-card-paragraph">
                <p className="rt-gap-off">{content.description5}</p>
              </div>
              <div className="w-layout-vflex rt-testimonial-v1-author-details">
                <div className="rt-text-style-h5">{content.ethanCarter}</div>
                <div className="rt-text-color-sky-blue">{content.carter}</div>
              </div>
            </div>
          </div>
          <div className="rt-testimonial-v2-marquee-card-wrap">
            <div className="w-layout-vflex rt-testimonial-v1-card rt-border-radius-small-20 rt-testimonial-v1-margin">
              <div className="rt-testimonial-v1-star">
                <Image
                  alt={content.aveletyTestimonialStarAlt}
                  src={content.aveletyTestimonialStarImage}
                  width={91}
                  height={15}
                  sizes="91px"
                />
              </div>
              <div className="rt-text-style-h5">
                {content.cutDownHoursOfEffort}
              </div>
              <div className="rt-testimonial-v1-card-paragraph">
                <p className="rt-gap-off">{content.description6}</p>
              </div>
              <div className="w-layout-vflex rt-testimonial-v1-author-details">
                <div className="rt-text-style-h5">{content.masonParker}</div>
                <div className="rt-text-color-sky-blue">{content.parker}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rt-testimonial-v2-marquee-overlay"></div>
        <div className="rt-testimonial-v2-marquee-overlay rt-right"></div>
      </div>
    </section>
  );
}
