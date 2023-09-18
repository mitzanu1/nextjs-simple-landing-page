/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import { useTranslation } from "next-i18next";
import { RO, GB } from "country-flag-icons/react/3x2"

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const {t, i18n} = useTranslation()
  const clientSideLanguageChange = (newLocale) => {
    i18n.changeLanguage(newLocale);
  }
 
  const ico = i18n.resolvedLanguage === 'ro' ? 
    <RO style={{paddingBottom:'6px'}}/> :
    <GB style={{paddingBottom:'6px'}}/>

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <CustomDropdown
          noLiPadding
          navDropdown
          buttonIcon={ico}
          buttonText={t("lang")}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
              <div 
                className={classes.dropdownLink}
                onClick={()=>clientSideLanguageChange("ro")}  
                >
                <RO 
                  title="Romanian"
                  style={{width:'15px'}}
                /> Romanian
              </div>,
              <div
                className={classes.dropdownLink}
                onClick={()=>clientSideLanguageChange("en")}  
              >
              <GB 
                title='English'
                style={{width:'15px'}}
              /> English
              </div>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/#service"
          color="transparent"
          className={classes.navLink}
        >
          {t("Services")}
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Button
          href="/#gallery"
          color="transparent"
          className={classes.navLink}
        >
          {t("Gallery")}
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Button
          href="/#contact"
          color="transparent"
          className={classes.navLink}
        >
          {t("Contact")}
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title={`${t("Follow-us-on")} twitter`}
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CasaIager"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title={`${t("Follow-us-on")} facebook`}
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/profile.php?id=61550924967362&mibextid=D4KYlr"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title={`${t("Follow-us-on")} instagram`}
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/casaiager/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
