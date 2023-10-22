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

const parteneri = [
{
  img:"https://cdn.cmsfly.com/640cce7c79218003b61f6617/logo_gastrolocal-EVr88g.webp",
  src:'https://gastrolocal.ro/',
  description:'Gastro Local'
},
{
  img:"/img/bizonu.png",
  src:'http://www.valea-zimbrilor.ro/',
  description:'Valea Zimbrilor'
},
{
  img:"/img/acrisinfo.png",
  src:'https://www.comunavamabuzaului.ro/turism.html',
  description:'Turism Vama Buzaului'
},
{
  img:"/img/infovama.png",
  src:'https://infovamabuzaului.ro/',
  description:'Info Tur'
},
{
  img:"/img/Turist-Info.png",
  src:'https://www.turistinfo.ro/vama_buzaului/cazare-vama_buzaului/casa_iager-c123843.html',
  description:'Turist Info'
},
]


const useStyles = makeStyles(styles);

export default function Parteners() {
  const classes = useStyles();
  const {t} = useTranslation()

  return (
    <div className={classes.section} id='contact' style={{paddingTop:0, paddingBottom:'100px'}}>
      <h2 className={classes.title}>{t("sites-of-interest")}</h2>
      <GridContainer justify="center">
        {
          parteneri.map((item)=>{
            const {img, src, description} = item
            return (
              <GridItem cs={4} sm={4} md={4}> 
                <div className='prt'>
                  <img src={img} className='prt-img'/>
                  <a 
                    href={src}  
                    rel='noreferrer'
                    target='_blank'
                  >
                    {description}
                  </a>
                </div>      
             </GridItem>
            )
          })
        }

      
  
      </GridContainer>
    </div>
  );
}
