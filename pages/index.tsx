import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import Layout from "../components/layout";
import { getHomeContent, getLogo, getPrimaryMenu } from "../lib/api";
import Header from "../components/header";
import { WEBSITE_TITLE } from "../lib/constants";
import HeroHome from "../components/hero-home";
import IntroHome from "../components/intro-home";
import Banner from "../components/banner";
import ContentHome from "../components/content-home";
import VacancyBanner from "../components/vacancy-banner";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Index({ preview, logo, menu, homeContent }) {
  const main = useRef(null);
  const section = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.batch(section.current, {
      start: "start center", // Adjust the start point as needed
      end: "bottom 50%", // Adjust the end point as needed
      onEnter: () => {
        gsap.to(main.current, {
          backgroundColor: "#EDB300",
          duration: 0.5, // Adjust the duration as needed
          ease: "power2.inOut", // Use an easing function for smoother transitions
        });
      },
      onLeave: () => {
        gsap.to(main.current, {
          backgroundColor: "white",
          duration: 0.5, // Adjust the duration as needed
          ease: "power2.inOut", // Use an easing function for smoother transitions
        });
      },
      onEnterBack: () => {
        gsap.to(main.current, {
          backgroundColor: "#EDB300",
          duration: 0.5, // Adjust the duration as needed
          ease: "power2.inOut", // Use an easing function for smoother transitions
        });
      },
      onLeaveBack: () => {
        gsap.to(main.current, {
          backgroundColor: "white",
          duration: 0.5, // Adjust the duration as needed
          ease: "power2.inOut", // Use an easing function for smoother transitions
        });
      },
    });
  });

  return (
    <Layout preview={preview} logo={logo}>
      <Head>
        <title>{WEBSITE_TITLE}</title>
      </Head>
      <main ref={main}>
        <div className="block sticky top-0 z-50 bg-white">
          <Container>
            <Header logo={logo} menu={menu} />
          </Container>
        </div>
        <HeroHome
          title={homeContent.heroTitle}
          subTitle={homeContent.heroSubtitle}
          imageUrl={homeContent.heroImage.mediaItemUrl}
          buttonPrimary={homeContent.heroButtonPrimary}
          buttonSecondary={homeContent.heroButtonSecondary}
        />
        <div>
          <Container>
            <IntroHome
              title={homeContent.introTitle}
              text={homeContent.introText}
              image={homeContent.introImage.mediaItemUrl}
            />
          </Container>
          <div ref={section}>
            {homeContent.bannerTitle &&
            homeContent.bannerButton.bannerButtonTitle &&
            homeContent.bannerButton.bannerButtonLink.url &&
            homeContent.bannerImages.bannerFirstImage.mediaItemUrl &&
            homeContent.bannerImages.bannerSecondImage.mediaItemUrl ? (
              <Banner
                title={homeContent.bannerTitle}
                buttonTitle={homeContent.bannerButton.bannerButtonTitle}
                buttonLink={homeContent.bannerButton.bannerButtonLink.url}
                firstImage={
                  homeContent.bannerImages.bannerFirstImage.mediaItemUrl
                }
                secondImage={
                  homeContent.bannerImages.bannerSecondImage.mediaItemUrl
                }
              />
            ) : null}
          </div>
        </div>
        <Container>
          <ContentHome
            title={homeContent.contentTitle}
            firstBlock={{
              title: homeContent.contentFirstBlock.contentFirstTitle,
              text: homeContent.contentFirstBlock.contentFirstText,
              image:
                homeContent.contentFirstBlock.contentFirstImage.mediaItemUrl,
            }}
            secondBlock={{
              title: homeContent.contentSecondBlock.contentSecondTitle,
              text: homeContent.contentSecondBlock.contentSecondText,
              image:
                homeContent.contentSecondBlock.contentSecondImage.mediaItemUrl,
            }}
            thirdBlock={{
              title: homeContent.contentThirdBlock.contentThirdTitle,
              text: homeContent.contentThirdBlock.contentThirdText,
              image:
                homeContent.contentThirdBlock.contentThirdImage.mediaItemUrl,
            }}
          />
        </Container>
        <VacancyBanner
          title={homeContent.vacancyBanner.vacancyTitle}
          text={homeContent.vacancyBanner.vacancyText}
          image={homeContent.vacancyBanner.vacancyImage.mediaItemUrl}
          buttonLink={
            homeContent.vacancyBanner.vacancyButton.vacancyButtonLink.url
          }
          buttonTitle={
            homeContent.vacancyBanner.vacancyButton.vacancyButtonTitle
          }
        />
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const logo = await getLogo();
  const menu = await getPrimaryMenu();
  const homeContent = await getHomeContent();

  return {
    props: { preview, logo, menu, homeContent },
    revalidate: 10,
  };
};
