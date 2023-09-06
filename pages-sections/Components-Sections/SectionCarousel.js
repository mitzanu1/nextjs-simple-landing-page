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
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/489542774.jpg?k=2128a329cbc536552fb69a7f8978b858bfb7ba5152a33f67848dcab1935bf6cd&o=&hp=1',
    name:'Casa Iager resort 1'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/477105001.jpg?k=d87cc64e58f7b9e3db0b9eec4e02948bd0509c34e1d0501613ea285e0a7b2f04&o=&hp=1',
    name:'Casa Iager resort 2'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/477105005.jpg?k=2141b7603c21cd50ab5b64bc8841feec81555038cbcc1997a1144ffab4eb3c09&o=&hp=1',
    name:'Casa Iager resort 3'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/477105008.jpg?k=5e95c9409185ec1be2154a5e0ded657eee991d5860b6dfae6181e8fc8a202976&o=&hp=1',
    name:'Casa Iager resort 4'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/477105013.jpg?k=47d343a83d7cb6569fc4e853f211ef9417f94286392b128350bc39c40a7fcdf5&o=&hp=1',
    name:'Casa Iager resort 5'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/477105016.jpg?k=e0a53d935d242a02d6ac0d6e8d6d77c7628aee43b892533d999d47336ad63b45&o=&hp=1',
    name:'Casa Iager resort 6'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/477105020.jpg?k=09d6ef910aa9d04b1f9e780df257d6eac975e6b9d1c37df81eca2dce50e720c5&o=&hp=1',
    name:'Casa Iager resort 7'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/477105023.jpg?k=8fdc7cf58b60928658236e08ebd46bd8d671c4b74312f330e9a48bd681a43643&o=&hp=1',
    name:'Casa Iager resort 8'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/477105027.jpg?k=5a6ff0534f91b8a3a442bc4b74b2badc12eeb32612d5f0dadde3905675bccfcf&o=&hp=1',
    name:'Casa Iager resort 9'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/477105029.jpg?k=3eec898964e080c35e1c56bc840b24ad95809c11cc3ee1c7f9e3d0841656742d&o=&hp=1',
    name:'Casa Iager resort 10'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/477107536.jpg?k=0474af229bcefed521b1e632b1dc681dd92673bab9bf6594e272b5e0ef1e88a0&o=&hp=1',
    name:'Casa Iager resort 11'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/477108934.jpg?k=fdc28f1ecf1ded46e02a0a9674c9326f1ac38732534d2e1a0f4a3a7fd8089195&o=&hp=1',
    name:'Casa Iager resort 12'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/477109229.jpg?k=c613896dc44da317b59c3abf0880710a8d6e59d18844d6b2746f42837f9a2969&o=&hp=1',
    name:'Casa Iager resort 13'
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
              <Carousel {...settings } >
                {
                  data.map((item, i)=> {
                    const {src, name} = item
                    return (
                      <div  key={i}>
                        <img                      
                          src={src}
                          alt={name}
                          className="slick-image my-image"
                        />                      
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
