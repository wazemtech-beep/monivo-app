"use client";
import DeferredVideo from "@/components/ui/DeferredVideo";
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
          data-poster-url="https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581978/wazemtech/monivo/9aa8da48e82a66c95187acf_5921369-hd_1920_1080_30fps_poster-0000000-b1146385dd67.jpg"
          data-video-urls="https://res.cloudinary.com/dj4rfocct/video/upload/q_auto,c_limit,w_1280/v1792581999/wazemtech/monivo/807407e6e-69aa8da48e82a66c95187acf_5921369-hd_1920_1080_30fps_mp4-04031d454dc2.mp4,https://res.cloudinary.com/dj4rfocct/video/upload/q_auto,c_limit,w_1280/v1792582020/wazemtech/monivo/07407e6e-69aa8da48e82a66c95187acf_5921369-hd_1920_1080_30fps_webm-6220fc2364ab.webm"
          data-autoplay="true"
          data-loop="true"
          className="background-video w-background-video w-background-video-atom"
        >
          <DeferredVideo
            id="9ecc25c5-75f3-947d-9b77-661ac813c291-video"
            autoPlay={true}
            loop={true}
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/dj4rfocct/image/upload/f_auto,q_auto,c_limit,w_1920/v1792581978/wazemtech/monivo/9aa8da48e82a66c95187acf_5921369-hd_1920_1080_30fps_poster-0000000-b1146385dd67.jpg")',
            }}
            muted={true}
            playsInline={true}
            data-object-fit="cover"
          >
            <source src={content.mp4Image} />
            <source src={content.webmImage} />
          </DeferredVideo>
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
