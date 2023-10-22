import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import CustomLinearProgress from "../../components/CustomLinearProgress/CustomLinearProgress";
import style from "./index.module.css"

import { useTranslation } from 'next-i18next'

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const { t } = useTranslation('common')
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid,
    classes.imgRoundedCircle,
  );
  return (
    <div className={classes.section} id='service' style={{paddingBottom:0}}>
      <h2 className={classes.title}>{t('services-title')}</h2>
      <div  style={{color:'black', fontWeight:'500'}}>
        <p>{t('services-p1')}</p>
        <p>{t('services-p2')}</p>
        <p>{t('services-p3')}</p>
        <p>{t('services-p4')}</p>
        <p>{t('services-p5')}</p>
        <p>{t('services-p6')}</p>
        <p>{t('services-p7')}</p>
        <p>{t('services-p8')}</p>       
        <br/>
        <br/>
       <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <div className={style.score}>
              <p>{t('Staff')}</p>
              <p>9.8</p>
            </div>
            <CustomLinearProgress
              variant="determinate"
              color="primary"
              value={98}
              />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div className={style.score}>
              <p>{t('Facilities')}</p>
              <p>9</p>
            </div>
            <CustomLinearProgress
              variant="determinate"
              color="primary"
              value={90}
              />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div className={style.score}>
              <p>{t('Cleanliness')}</p>
              <p>10</p>
            </div>
            <CustomLinearProgress
              variant="determinate"
              color="primary"
              value={100}
              />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div className={style.score}>
              <p>{t("Comfort")}</p>
              <p>9.5</p>
            </div>
            <CustomLinearProgress
              variant="determinate"
              color="primary"
              value={95}
              />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div className={style.score}>
              <p>{t("Reliability")}</p>
              <p>9.5</p>
            </div>
            <CustomLinearProgress
              variant="determinate"
              color="primary"
              value={95}
              />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div className={style.score}>
              <p>{t("Location")}</p>
              <p>9.5</p>
            </div>
            <CustomLinearProgress
              variant="determinate"
              color="primary"
              value={95}
              />
          </GridItem>
       </GridContainer>
       <br/>
       <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <div className={style.icoWrap}>
              <div className={style.icon}>
                <svg fill='rgb(61, 203, 61)' xmln="http://www.w3.org/2000/svg" viewBox='0 0 24 24'>
                <path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z" />
                </svg>
              </div>
              <p>{t("Free-Wifi")}</p>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div className={style.icoWrap}>
              <div className={style.icon}>
                <svg fill='rgb(61, 203, 61)' xmln="http://www.w3.org/2000/svg" viewBox='0 0 24 24'>
                <path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z" />
                </svg>
              </div>
              <p>{t("Free-Parking")}</p>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}> 
            <div className={style.icoWrap}>
              <div className={style.icon}>
                <svg fill='rgb(61, 203, 61)' xmln="http://www.w3.org/2000/svg" viewBox='0 0 24 24'>
                <path d="M21.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm-6.182 15.093l.188 1.5A.75.75 0 0 0 18 22.5h3a.75.75 0 0 0 .744-.657l.75-6-.744.657h1.5a.75.75 0 0 0 .75-.75V13.5a4.5 4.5 0 0 0-7.2-3.6.75.75 0 1 0 .9 1.2 3 3 0 0 1 4.8 2.4v2.25l.75-.75h-1.5a.75.75 0 0 0-.744.657l-.75 6L21 21h-3l.744.657-.188-1.5a.75.75 0 0 0-1.488.186zM6.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM5.444 20.157l-.188 1.5L6 21H3l.744.657-.75-6A.75.75 0 0 0 2.25 15H.75l.75.75V13.5a3 3 0 0 1 4.8-2.4.75.75 0 1 0 .9-1.2A4.5 4.5 0 0 0 0 13.5v2.25c0 .414.336.75.75.75h1.5l-.744-.657.75 6A.75.75 0 0 0 3 22.5h3a.75.75 0 0 0 .744-.657l.188-1.5a.75.75 0 0 0-1.488-.186zM13.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM15 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 3a4.5 4.5 0 0 0-4.5 4.5v.75c0 .414.336.75.75.75h1.5l-.74-.627.75 4.5a.75.75 0 0 0 .74.627H12a.75.75 0 0 0 0-1.5h-1.5l.74.627-.75-4.5a.75.75 0 0 0-.74-.627h-1.5l.75.75v-.75a3 3 0 0 1 3-3 .75.75 0 0 0 0-1.5zm0 1.5a3 3 0 0 1 3 3v.75l.75-.75h-1.5a.75.75 0 0 0-.74.627l-.75 4.5.74-.627H12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .74-.627l.75-4.5-.74.627h1.5a.75.75 0 0 0 .75-.75v-.75A4.5 4.5 0 0 0 12 12a.75.75 0 0 0 0 1.5z" />
                </svg>
              </div>
              <p>{t("Family-Rooms")}</p>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}> 
            <div className={style.icoWrap}>
              <div className={style.icon}>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 256 256" enable-background="new 0 0 256 256">
              <g><g><g><g><path fill='rgb(61, 203, 61)' d="M133.1,60.6c-9.3-14.5,29.3-34.4,4.9-49.8c-5.6-3.5-11.8,4.9-5.9,8.6c13.5,8.5-21.9,24.6-7.4,47.3C128.4,72.5,136.7,66.4,133.1,60.6z"/><path fill='rgb(61, 203, 61)' d="M160.2,60.6c-9.3-14.5,29.3-34.4,4.9-49.8c-3-1.9-7.1-0.1-8,3.1c-2.4,8.4,13.3,2.8-0.5,21.6c-7.4,10.1-11.5,20.6-4.7,31.1C155.6,72.6,163.8,66.3,160.2,60.6z"/><path fill='rgb(61, 203, 61)' d="M105.8,60.6c-9.3-14.5,29.3-34.4,4.9-49.8c-5.6-3.5-11.8,4.9-5.8,8.6c13.4,8.4-21.9,24.7-7.4,47.3C101.1,72.5,109.5,66.4,105.8,60.6z"/><path fill='rgb(61, 203, 61)' d="M126.1,135c58.4,0,89.1-14.9,89.1-27.2c0-14.2-38.7-27.8-87.2-27.2c-48.5-0.6-87.2,13-87.2,27.2C40.8,120.9,75.1,135,126.1,135z M127.2,87.9c0.2,0,0.4,0,0.5,0l0,0c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0l0,0c0.2,0,0.4,0,0.5,0c36.7,0,73.9,6.5,73.9,18.8c0,16-57.7,19.2-74.4,18.8l0,0h-0.4l0,0c-17.2,0.4-74.4-3-74.4-18.8C53.4,94.4,90.5,87.9,127.2,87.9z"/><path fill='rgb(61, 203, 61)' d="M74.4,115.9l0.3-18.4c-11,2.8-17.1,6.3-17.1,9.2C57.6,109.6,63.6,113.1,74.4,115.9z"/><path fill='rgb(61, 203, 61)' d="M99.8,93.4C93.6,94,88,94.8,83.1,95.7l-0.3,22.1c4.9,0.9,10.5,1.7,16.8,2.4L99.8,93.4z"/><path fill='rgb(61, 203, 61)' d="M125,92.1c-5.9,0-11.5,0.2-16.7,0.6l-0.4,28.1c5.2,0.3,10.8,0.6,16.7,0.6L125,92.1z"/><path fill='rgb(61, 203, 61)' d="M217.2,115.6c0-0.2-0.1-0.5-0.1-0.7c-12.5,19.7-64.1,24.6-88.9,24.3l0,0h-0.4l0,0c-31.6,0.5-77.6-6.5-88.9-24.3c0,0.2-0.1,0.5-0.1,0.7c-9.6,2.1-13.8,6.5-13.6,14.1c0.2,6.4,8.4,11.9,19,15.1c6.7,16.6,19,30.1,35,39l-22.9,53.4c-1.4,3.2,0.1,6.9,3.3,8.2c0.8,0.3,1.6,0.5,2.5,0.5c2.4,0,4.7-1.4,5.8-3.8l22.7-53c21.9,8.5,51.1,9.2,74.8,0l22.7,53c1,2.4,3.3,3.8,5.8,3.8c0.8,0,1.7-0.2,2.5-0.5c3.2-1.4,4.7-5.1,3.3-8.2l-22.9-53.4c15.9-8.9,28.3-22.4,35-39c10.6-3.2,18.8-8.7,19-15.1C231,122.2,226.8,117.7,217.2,115.6z M35.7,130.9c-0.2-3.4,0.3-5.4,3.4-6.7c0.4,4.2,1.3,8.3,2.3,12.2C38,135.1,35.9,133.2,35.7,130.9z M214.5,136.4c1.1-4,1.9-8,2.3-12.2c3.1,1.3,3.6,3.3,3.4,6.7C220.1,133.2,217.9,135.1,214.5,136.4z"/><path fill='rgb(61, 203, 61)' d="M198.4,106.7c0-2.9-6.1-6.4-17.1-9.2l0.3,18.4C192.4,113.1,198.4,109.6,198.4,106.7z"/><path fill='rgb(61, 203, 61)' d="M173.2,117.7l-0.3-22.1c-5-0.9-10.5-1.7-16.7-2.3l0.3,26.7C162.7,119.5,168.3,118.7,173.2,117.7z"/><path fill='rgb(61, 203, 61)' d="M148.1,120.8l-0.4-28.1c-5.2-0.3-10.8-0.5-16.7-0.6l0.4,29.2C137.3,121.3,142.9,121.1,148.1,120.8z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></g>
              </svg>
              </div>
              <p>{t("gazebo-with-barbecue")}</p>
            </div>
          </GridItem>
       </GridContainer>
        
      </div>
    </div>
  );
}


