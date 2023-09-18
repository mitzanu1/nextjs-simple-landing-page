import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

import SectionCarousel from "../Components-Sections/SectionCarousel";
import { useTranslation } from "next-i18next";

const useStyles = makeStyles(styles);

export default function GallerySection() {
  const classes = useStyles();
  const {t} = useTranslation()
  return (
    <div className={classes.section} id='gallery'>
      <h2 className={classes.title}>{t("Gallery")}</h2>
     <SectionCarousel/>
    </div>
  )
}
