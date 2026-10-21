"use client";
import { useRef } from "react";
import Image from "next/image";
import { BackgroundVideo } from "@/components/ui/Interactive";
import { siteConfig } from "@/data/siteConfig";
import { useNotFoundAnimation } from "@/hooks/sections/useNotFoundAnimation";
export default function NotFound() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useNotFoundAnimation(sectionRef);
  const content = siteConfig.sections.notFound;
  return (
    <div className="utility-page-wrap" ref={sectionRef}>
      <div className="rt-not-found rt-404-content">
        <div className="utility-page-content rt-change">
          <div className="rt-404-image">
            <Image
              src={content.avelety404ImageImage}
              alt={content.Alt}
              width={956}
              height={444}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
          </div>
          <div>
            <h2>{content.heading}</h2>
          </div>
          <div>{content.thePageYouAreLookingForDoesnTExistOrHasBeenMoved}</div>
          <div className="w-layout-hflex rt-button-wrap rt-align-center">
            <a
              href={content.backToHomebackToHomeHref}
              className="rt-button w-inline-block"
              data-motion="notFound-button"
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
            </a>
          </div>
        </div>
      </div>
      <div className="div-block-8">
        <BackgroundVideo
          data-poster-url="/assets/6faa0b79c5-6982f48010156d8807407e6e-69aa8da48e82a66c95187acf_5921369-hd_1920_1080_30fps_poster.0000000.jpg"
          data-video-urls="/assets/46f8a354ca-6982f48010156d8807407e6e-69aa8da48e82a66c95187acf_5921369-hd_1920_1080_30fps_mp4.mp4,/assets/d0125fc61b-6982f48010156d8807407e6e-69aa8da48e82a66c95187acf_5921369-hd_1920_1080_30fps_webm.webm"
          data-autoplay="true"
          data-loop="true"
          className="background-video w-background-video w-background-video-atom"
        >
          <video
            id="9ecc25c5-75f3-947d-9b77-661ac813c291-video"
            autoPlay={true}
            loop={true}
            style={{
              backgroundImage:
                'url("/assets/6faa0b79c5-6982f48010156d8807407e6e-69aa8da48e82a66c95187acf_5921369-hd_1920_1080_30fps_poster.0000000.jpg")',
            }}
            muted={true}
            playsInline={true}
            data-object-fit="cover"
          >
            <source src={content.mp4Image} />
            <source src={content.webmImage} />
          </video>
          <div aria-live="polite">
            <button
              type="button"
              aria-controls="9ecc25c5-75f3-947d-9b77-661ac813c291-video"
              className="w-backgroundvideo-backgroundvideoplaypausebutton rt-display-none w-background-video--control"
            >
              <span>
                <Image
                  src={content.pauseVideoImage}
                  alt={content.pauseVideoAlt}
                  width={44}
                  height={44}
                  sizes="44px"
                />
              </span>
              <span hidden={true}>
                <Image
                  alt={content.playVideoAlt}
                  src={content.playVideoImage}
                  width={44}
                  height={44}
                  sizes="44px"
                />
              </span>
            </button>
          </div>
        </BackgroundVideo>
      </div>
      <div className="rt-404-popup-image">
        <Image
          src={content.avelety404PopupImageImage}
          alt={content.avelety404PopupImageAlt}
          className="rt-avelety-404-popup-image"
          width={1841}
          height={1792}
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
        />
      </div>
    </div>
  );
}
