import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

const data = [
  {
    src:'/img/bg.jpg',
    name:'Somewhere in Buzau'
  },
  {
    src:'/img/bg2.jpg',
    name:'Other place in Buzau'
  },
  {
    src:'/img/bg3.jpg',
    name:'And another'
  },
]

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {
                  data.map((item, i)=> {
                    const {src, name} = item
                    return (
                      <div key={i}>
                        <img
                          src={src}
                          alt={name}
                          className="slick-image"
                        />
                        <div className="slick-caption">
                          <h4>
                            <LocationOn className="slick-icons" />
                            {name}
                          </h4>
                        </div>
                      </div>
                    )
                  })
                }
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
