"use client";
import { useRef } from "react";
import Image from "next/image";
import { ContactForm } from "@/components/ui/Interactive";
import { siteConfig } from "@/data/siteConfig";
import { useContactAnimation } from "@/hooks/sections/useContactAnimation";
export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useContactAnimation(sectionRef);
  const content = siteConfig.sections.contact;
  return (
    <section className="rt-contact-v1 rt-position-relative" ref={sectionRef}>
      <div className="w-layout-blockcontainer rt-container rt-position-relative w-container">
        <div className="rt-contact-glow">
          <div className="rt-glow-star">
            <Image
              alt={content.aveletyPageBigStarAlt}
              src={content.aveletyPageBigStarImage}
              className="rt-blink-star"
              data-motion="contact-blinkStar"
              width={284}
              height={284}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 70vw, 1440px"
            />
          </div>
        </div>
        <div className="w-layout-vflex rt-contact-v1-heading-wrap rt-overflow-hidden">
          <div
            className="w-layout-hflex rt-sub-text-main"
            data-motion="contact-subTextMain"
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
          <h1
            className="rt-gap-off rt-text-center"
            data-motion="contact-gapOff"
          >
            {content.title}
            <span className="rt-heading-special-font">{content.highlight}</span>
          </h1>
        </div>
        <div className="w-layout-hflex rt-form-main-wrapper">
          <div className="rt-contact-left">
            <div className="rt-contact-form-v1-heading-wrap">
              <div
                className="rt-contact-form-v1-heading"
                data-motion="contact-contactFormV1Heading"
              >
                <h2 className="rt-gap-off">
                  {content.heading}
                  <span className="rt-heading-special-font">
                    {content.highlight2}
                  </span>
                </h2>
              </div>
              <div
                className="rt-contact-form-v1-paragraph"
                data-motion="contact-contactFormV1Paragraph"
              >
                <p className="rt-gap-off">{content.description}</p>
              </div>
            </div>
            <div className="w-layout-grid rt-contact-v1-details-wrap">
              <div
                className="w-layout-vflex rt-contact-v1-details"
                data-motion="contact-contactV1Details"
              >
                <div className="w-layout-hflex rt-contact-v1-details-icon-wrap">
                  <div className="w-layout-hflex rt-contact-v1-details-icon">
                    <Image
                      src={content.vector20260312t162513Image}
                      alt={content.Alt}
                      width={22}
                      height={18}
                      sizes="22px"
                    />
                  </div>
                </div>
                <div className="w-layout-vflex rt-contact-details-text-wrap">
                  <div className="rt-text-style-h5">{content.email}</div>
                  <a
                    href={content.infoExampleComHref}
                    className="rt-text-center rt-hover"
                  >
                    {content.infoExampleCom}
                  </a>
                </div>
              </div>
              <div
                className="w-layout-vflex rt-contact-v1-details"
                data-motion="contact-contactV1Details-2"
              >
                <div className="w-layout-hflex rt-contact-v1-details-icon-wrap">
                  <div className="w-layout-hflex rt-contact-v1-details-icon rt-call-icon">
                    <Image
                      src={content.vector20260312t162518Image}
                      alt={content.Alt}
                      width={22}
                      height={22}
                      sizes="22px"
                    />
                  </div>
                </div>
                <div className="w-layout-vflex rt-contact-details-text-wrap">
                  <div className="rt-text-style-h5">{content.phone}</div>
                  <a
                    href={content.value8881234567Href}
                    className="rt-text-center rt-hover"
                  >
                    {content.value8881234567}
                  </a>
                </div>
              </div>
              <div
                id="w-node-_718f7aab-6eec-b4c5-6e3c-8ea8d2610378-a9daf089"
                className="w-layout-vflex rt-contact-v1-details"
                data-motion="contact-contactV1Details-3"
              >
                <div className="w-layout-hflex rt-contact-v1-details-icon-wrap">
                  <div className="w-layout-hflex rt-contact-v1-details-icon rt-location-icon">
                    <Image
                      src={content.group2085663594Image}
                      alt={content.Alt}
                      width={18}
                      height={22}
                      sizes="18px"
                    />
                  </div>
                </div>
                <div className="w-layout-vflex rt-contact-details-text-wrap">
                  <div className="rt-text-style-h5">{content.location}</div>
                  <div className="rt-contact-address">
                    {content.value410SandtownCalifornia94001Usa}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rt-form-main">
            <div className="rt-form-submit w-form">
              <ContactForm
                id="wf-form-Contact-V1-Form"
                name="wf-form-Contact-V1-Form"
                data-name="Contact V1 Form"
                data-design-only="true"
              >
                <div className="rt-contact-form-v1-block">
                  <input
                    className="rt-contact-form-v1-fields w-node-_5b418dc8-9512-a9e5-73a3-361ce33e38fe-a9daf089 w-input"
                    maxLength={256}
                    name="First-name"
                    data-name="First name"
                    placeholder={content.firstNamePlaceholder}
                    type="text"
                    id="First-name"
                    required={true}
                    aria-label={content.firstNamePlaceholder}
                    data-motion="contact-contactFormV1Fields"
                  />
                  <input
                    className="rt-contact-form-v1-fields w-input"
                    maxLength={256}
                    name="Last-Name"
                    data-name="Last Name"
                    placeholder={content.lastNamePlaceholder}
                    type="text"
                    id="Last-Name"
                    required={true}
                    aria-label={content.lastNamePlaceholder}
                    data-motion="contact-contactFormV1Fields-2"
                  />
                  <input
                    className="rt-contact-form-v1-fields w-node-_00dbedb8-14aa-3226-f3c5-ac134666a85d-a9daf089 w-input"
                    maxLength={256}
                    name="Phone"
                    data-name="Phone"
                    placeholder={content.phonePlaceholder}
                    type="tel"
                    id="Phone"
                    required={true}
                    aria-label={content.phonePlaceholder}
                    data-motion="contact-contactFormV1Fields-3"
                  />
                  <input
                    className="rt-contact-form-v1-fields w-node-dc6ea832-091e-9cd1-bc3f-0ee6dc2e403f-a9daf089 w-input"
                    maxLength={256}
                    name="Email"
                    data-name="Email"
                    placeholder={content.emailPlaceholder}
                    type="email"
                    id="Email"
                    required={true}
                    aria-label={content.emailPlaceholder}
                    data-motion="contact-contactFormV1Fields-4"
                  />
                  <input
                    className="rt-contact-form-v1-fields w-node-_6f157a65-e0d3-8c58-8f0d-2ed06f1ac998-a9daf089 w-input"
                    maxLength={256}
                    name="Subject"
                    data-name="Subject"
                    placeholder={content.subjectPlaceholder}
                    type="text"
                    id="Subject"
                    required={true}
                    aria-label={content.subjectPlaceholder}
                    data-motion="contact-contactFormV1Fields-5"
                  />
                  <textarea
                    className="rt-contact-form-v1-fields rt-text-area w-node-ec4e3554-74db-118f-75d9-cc337133933c-a9daf089 w-input"
                    maxLength={5000}
                    name="Message"
                    data-name="Message"
                    placeholder={content.messagePlaceholder}
                    id="Message"
                    required={true}
                    aria-label={content.messagePlaceholder}
                    data-motion="contact-contactFormV1Fields-6"
                  ></textarea>
                </div>
                <div
                  className="w-layout-hflex rt-contact-form-v1-submit-button-wrap"
                  data-motion="contact-contactFormV1SubmitButtonWrap"
                >
                  <div
                    className="rt-submit-button-block"
                    data-motion="contact-submitButtonBlock"
                  >
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="rt-contact-v1-submit-button w-button"
                      value={content.submitValue}
                      aria-label={content.submitNowsubmitNowAriaLabel}
                    />
                    <div className="rt-button" aria-hidden="true">
                      <div className="w-layout-vflex rt-button-text-wrap rt-overflow-hidden">
                        <div
                          style={{
                            transform:
                              "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className="rt-button-font rt-one"
                        >
                          {content.buttonLabel}
                        </div>
                        <div
                          style={{
                            transform:
                              "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className="rt-button-font rt-two"
                        >
                          {content.buttonLabel}
                        </div>
                      </div>
                      <div>
                        <Image
                          alt={content.aveletyButtonIconAlt}
                          src={content.aveletyButtonIconImage}
                          className="rt-button-star-image rt-gradient-11"
                          width={22}
                          height={23}
                          sizes="22px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ContactForm>
              <div className="rt-success w-form-done">
                <div>{content.thankYouYourSubmissionHasBeenReceived}</div>
              </div>
              <div className="rt-error w-form-fail">
                <div>
                  {content.oopsSomethingWentWrongWhileSubmittingTheForm}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
