
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "/pages-sections/LandingPage-Sections/ProductSection.js";
import WorkSection from "/pages-sections/LandingPage-Sections/WorkSection.js";
import GallerySection from "../pages-sections/LandingPage-Sections/GallerySection";

// Translation
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {

  const { t, i18n } = useTranslation('common')
  const classes = useStyles();
  const { ...rest } = props;
  const clientSideLanguageChange = (newLocale) => {
    i18n.changeLanguage(changeTo);
  }
 
  const changeTo = i18n.resolvedLanguage === 'ro' ? 'en' : 'ro'
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Casa Iager"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/hero.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>{t('title')}</h1>
              <h4>
               {t('title-desc')}
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.booking.com/hotel/ro/casa-iager.ro.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('booking')}
              </Button>              
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <GallerySection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
    ...(await serverSideTranslations(locale, ['common', 'footer'], null, ['en', 'ro'])),
    },
  };
}