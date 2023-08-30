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

const useStyles = makeStyles(styles);

const data = [
  {
    image:"/img/1.jpg",
    alt:'bla',
    title:'Service 1',
    description: 'Description about the service or product that you offer.'
  },
  {
    image:"/img/2.jpg",
    alt:'bla',
    title:'Service 2',
    description: 'Description about the service or product that you offer.'
  },
  {
    image:"/img/3.jpg",
    alt:'bla',
    title:'Service ...n',
    description: 'Description about the service or product that you offer.'
  },
]


export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid,
    classes.imgRoundedCircle,
  );
  return (
    <div className={classes.section} id='service'>
      <h2 className={classes.title}>Services</h2>
      <div>
        <GridContainer>
          {
            data.map((item,i)=>{
              const {image, alt, title, description} = item
              return (
                <GridItem xs={12} sm={12} md={4}>
                  <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img
                        src={image}
                        alt={alt}
                        className={imageClasses}
                      />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      {title}
                    </h4>
                    <CardBody>
                      <p className={classes.description}>
                        {description}
                      </p>
                    </CardBody>
                  </Card>
                </GridItem>
              )
            })
          }
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