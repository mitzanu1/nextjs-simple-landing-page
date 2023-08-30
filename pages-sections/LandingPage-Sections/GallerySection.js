import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

import SectionCarousel from "../Components-Sections/SectionCarousel";

const useStyles = makeStyles(styles);

export default function GallerySection() {
  const classes = useStyles();

  return (
    <div className={classes.section} id='gallery'>
      <h2 className={classes.title}>Gallery</h2>
     <SectionCarousel/>
    </div>
  )
}
