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
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497949191.jpg?k=9bced2613f44d59dbfb63696ce3c96b4d3e96a1a04c1217bae4a9fe3084039b4&o=&hp=1',
    name:'Casa Iager resort 1'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/498036279.jpg?k=b075deaedff38039e790ca9b0dbc165a8ba87e2529c27e755cc5e4ea67776278&o=&hp=1',
    name:'Casa Iager resort 2'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/498036285.jpg?k=697a4d1ae159bf91e60851c167563f1579605db25fc09302039afd370fca6893&o=&hp=1',
    name:'Casa Iager resort 3'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/498036277.jpg?k=0da8d0b4fe80f5480c699459fa170216086c9fd3e2538d234c9ba6b9887c66da&o=&hp=1',
    name:'Casa Iager resort 4'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497949444.jpg?k=8cc19422b7187f59158eb4025d81f6fcc50cd3598f1fb6eab367a9644c59f6c8&o=&hp=1',
    name:'Casa Iager resort 5'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497949519.jpg?k=fb8de992546eceec534b9459a60c20e7d10b7a54d21ea9f2ecc0f5928e59e44a&o=&hp=1',
    name:'Casa Iager resort 6'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497949506.jpg?k=e532d440ef2345ad0a4689d0920d7acc6878be141c46487e24fa9025fed91a03&o=&hp=1',
    name:'Casa Iager resort 8'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497949537.jpg?k=8e477e6772c1179a403158413d446ad84139cd4c06c6ecf7668d277e3f25c805&o=&hp=1',
    name:'Casa Iager resort 9'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497949484.jpg?k=15736ba5d0c92c4ec913dd4009eb3dc0cf30afa1d3bd3d3fd96d929a4eab9999&o=&hp=1',
    name:'Casa Iager resort 10'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497949550.jpg?k=ef59b27e4c9474fa39002b5609072a6be3f2a105acfffee799814981b8f521f9&o=&hp=1',
    name:'Casa Iager resort 11'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497949477.jpg?k=68519142b47519ef0c26dce3945db9f3a280e2f5bda2850234f2c92124fb8308&o=&hp=1',
    name:'Casa Iager resort 12'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497949560.jpg?k=96ea076af8aac4f134bd0d3723ef5e6e9584313360e87204b3e7ba6b3d562061&o=&hp=1',
    name:'Casa Iager resort 13'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497949569.jpg?k=a2edde0b6e4601ba18b645cf1a0024b11d04d2e31e56399204727a33aed5f6a3&o=&hp=1',
    name:'Casa Iager resort 14'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497949567.jpg?k=f85cc1f874cd09fc21993a69a1b23ee5dd75d50ac7ec26e97a839ef3092d15ec&o=&hp=1',
    name:'Casa Iager resort 15'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497949512.jpg?k=901c1d53d3866858e54dffe9b352e02a109242cf27b8b6b1efe4c169390fe817&o=&hp=1',
    name:'Casa Iager resort 16'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497949571.jpg?k=70157f0517fb32c6b01dca267a3d5df6f59cf082c7e81cfb7cfa34b1aa7a03c1&o=&hp=1',
    name:'Casa Iager resort 17'
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
