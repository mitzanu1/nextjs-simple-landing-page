import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import CustomLinearProgress from "../../components/CustomLinearProgress/CustomLinearProgress";
import style from "./index.module.css"

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid,
    classes.imgRoundedCircle,
  );
  return (
    <div className={classes.section} id='service' style={{paddingBottom:0}}>
      <h2 className={classes.title}>What we offer</h2>
      <div  style={{color:'black', fontWeight:'500'}}>
        <p>
          Set in Acriş and only 23 km from Prejmer Fortified Church, Casa Iager offers accommodation with mountain views, free WiFi and free private parking.
        </p>
        <p>
          It is situated 31 km from Hărman Fortified Church and features a shared kitchen.
        </p>
        <p>
          Towels and bed linen are included in the bed and breakfast package.
        </p>
        <p>
          The bed and breakfast offers a picnic area.
        </p>
        <p>
          A outdoor play equipment is also available at Casa Iager, while guests can also relax in the garden.
        </p>
        <p>
          Braşov Adventure Park is 38 km from the accommodation, while Council Square is 41 km from the property.
        </p>
        <p>
          The nearest airport is Henri Coandă International Airport, 181 km from Casa Iager.
        </p>        
        <p>
          Couples especially appreciate this location, they gave a score of 9.6 for 2 people stay.
        </p>
        <br/>
        <br/>
       <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <div className={style.score}>
              <p>Staff</p>
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
              <p>Facilities</p>
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
              <p>Cleanliness</p>
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
              <p>Comfort</p>
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
              <p>Reliability</p>
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
              <p>Location</p>
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
              <p>Free Wifi</p>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div className={style.icoWrap}>
              <div className={style.icon}>
                <svg fill='rgb(61, 203, 61)' xmln="http://www.w3.org/2000/svg" viewBox='0 0 24 24'>
                <path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z" />
                </svg>
              </div>
              <p>Free Parking</p>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}> 
            <div className={style.icoWrap}>
              <div className={style.icon}>
                <svg fill='rgb(61, 203, 61)' xmln="http://www.w3.org/2000/svg" viewBox='0 0 24 24'>
                <path d="M21.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm-6.182 15.093l.188 1.5A.75.75 0 0 0 18 22.5h3a.75.75 0 0 0 .744-.657l.75-6-.744.657h1.5a.75.75 0 0 0 .75-.75V13.5a4.5 4.5 0 0 0-7.2-3.6.75.75 0 1 0 .9 1.2 3 3 0 0 1 4.8 2.4v2.25l.75-.75h-1.5a.75.75 0 0 0-.744.657l-.75 6L21 21h-3l.744.657-.188-1.5a.75.75 0 0 0-1.488.186zM6.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM5.444 20.157l-.188 1.5L6 21H3l.744.657-.75-6A.75.75 0 0 0 2.25 15H.75l.75.75V13.5a3 3 0 0 1 4.8-2.4.75.75 0 1 0 .9-1.2A4.5 4.5 0 0 0 0 13.5v2.25c0 .414.336.75.75.75h1.5l-.744-.657.75 6A.75.75 0 0 0 3 22.5h3a.75.75 0 0 0 .744-.657l.188-1.5a.75.75 0 0 0-1.488-.186zM13.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM15 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 3a4.5 4.5 0 0 0-4.5 4.5v.75c0 .414.336.75.75.75h1.5l-.74-.627.75 4.5a.75.75 0 0 0 .74.627H12a.75.75 0 0 0 0-1.5h-1.5l.74.627-.75-4.5a.75.75 0 0 0-.74-.627h-1.5l.75.75v-.75a3 3 0 0 1 3-3 .75.75 0 0 0 0-1.5zm0 1.5a3 3 0 0 1 3 3v.75l.75-.75h-1.5a.75.75 0 0 0-.74.627l-.75 4.5.74-.627H12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .74-.627l.75-4.5-.74.627h1.5a.75.75 0 0 0 .75-.75v-.75A4.5 4.5 0 0 0 12 12a.75.75 0 0 0 0 1.5z" />
                </svg>
              </div>
              <p>Family Rooms</p>
            </div>
          </GridItem>

       </GridContainer>
        
      </div>
    </div>
  );
}



{/* <GridItem xs={12} sm={12} md={4}>
<Card plain>
  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
    <img
      src="/img/faces/kendall.jpg"
      alt="..."
      className={imageClasses}
    />
  </GridItem>
  <h4 className={classes.cardTitle}>
    Kendall Jenner
    <br />
    <small className={classes.smallTitle}>Model</small>
  </h4>
  <CardBody>
    <p className={classes.description}>
      You can write here details about one of your team members. You
      can give more details about what they do. Feel free to add
      some <a href="#pablo">links</a> for people to be able to
      follow them outside the site.
    </p>
  </CardBody>
  <CardFooter className={classes.justifyCenter}>
    <Button
      justIcon
      color="transparent"
      className={classes.margin5}
    >
      <i className={classes.socials + " fab fa-twitter"} />
    </Button>
    <Button
      justIcon
      color="transparent"
      className={classes.margin5}
    >
      <i className={classes.socials + " fab fa-instagram"} />
    </Button>
    <Button
      justIcon
      color="transparent"
      className={classes.margin5}
    >
      <i className={classes.socials + " fab fa-facebook"} />
    </Button>
  </CardFooter>
</Card>
</GridItem> */}