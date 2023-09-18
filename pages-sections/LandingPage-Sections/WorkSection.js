import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Button from "/components/CustomButtons/Button.js";

import { useTranslation } from "next-i18next";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  const {t} = useTranslation()

  return (
    <div className={classes.section} id='contact' style={{paddingTop:0, paddingBottom:'100px'}}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>{t("Contact")}</h2>
          <h5 className={classes.title}>{`${t('Address')}: Acriș, nr.7A, 507246`}</h5>
          <h5 className={classes.title}>{`${t('Telephone')}: 0765047941`}</h5>
          <h5 className={classes.title}>
            <span>{t("Bookings")}:</span>
            <a 
              href="https://www.booking.com/hotel/ro/casa-iager.ro.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`-->> click <-- `}
            </a>
            <span>{t('for-bookings')}</span>
          </h5>         
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <div style={{height:'300px'}}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.2439317348817!2d25.99895161188659!3d45.645922909636106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b37dd2989f9caf%3A0xca0192e507898f2f!2sCasa%20Iager!5e0!3m2!1sro!2sro!4v1694023762309!5m2!1sro!2sro" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  scrolling="yes"
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">      
                </iframe>
                </div>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
