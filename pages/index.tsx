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

export default function Index({ preview, logo, menu, homeContent }) {
  return (
    <Layout preview={preview} logo={logo}>
      <Head>
        <title>{WEBSITE_TITLE}</title>
      </Head>
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
        <div className="sticky top-[-70px]">
          <Container>
            <IntroHome
              title={homeContent.introTitle}
              text={homeContent.introText}
              image={homeContent.introImage.mediaItemUrl}
            />
          </Container>
        </div>
        {homeContent.bannerTitle &&
        homeContent.bannerButton.bannerButtonTitle &&
        homeContent.bannerButton.bannerButtonLink.link &&
        homeContent.bannerImages.bannerFirstImage.mediaItemUrl &&
        homeContent.bannerImages.bannerSecondImage.mediaItemUrl ? (
          <Banner
            title={homeContent.bannerTitle}
            buttonTitle={homeContent.bannerButton.bannerButtonTitle}
            buttonLink={homeContent.bannerButton.bannerButtonLink.link}
            firstImage={homeContent.bannerImages.bannerFirstImage.mediaItemUrl}
            secondImage={
              homeContent.bannerImages.bannerSecondImage.mediaItemUrl
            }
          />
        ) : null}
      </div>
      <Container>
        <ContentHome
          title={homeContent.contentTitle}
          firstBlock={{
            title: homeContent.contentFirstBlock.contentFirstTitle,
            text: homeContent.contentFirstBlock.contentFirstText,
            image: homeContent.contentFirstBlock.contentFirstImage.mediaItemUrl,
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
            image: homeContent.contentThirdBlock.contentThirdImage.mediaItemUrl,
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
        buttonTitle={homeContent.vacancyBanner.vacancyButton.vacancyButtonTitle}
      />
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
