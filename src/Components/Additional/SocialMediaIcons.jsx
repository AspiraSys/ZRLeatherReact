import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaFacebook } from "react-icons/fa6";
import { Box } from "@mui/material";
import ResponsiveIcon from "./ResponsiveIcon";

const style = {
  backgroundColor: "#987760",
  borderRadius: "50%",
  padding: "10px",
  display: "inline-flex",
};

const socailMedia = [
  {
    title: "Insta",
    url: "#",
    icon: FaInstagram,
  },
  {
    title: "Whatsapp",
    url: "#",
    icon: IoLogoWhatsapp,
  },
  {
    title: "twitter",
    url: "#",
    icon: FaXTwitter,
  },
  {
    title: "facebook",
    url: "#",
    icon: FaFacebook,
  },
];
function SocialMediaIcons() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        gap: 2,
        alignItems: "center",
      }}
    >
      {socailMedia.map((icon,index) => {
        return (
          <a href={icon.url} key={index}>
            <span style={style}>
              <ResponsiveIcon
                Icon={icon.icon}
                color="white"
                socialIcons={true}
              />
            </span>
          </a>
        );
      })}
    </Box>
  );
}

export default SocialMediaIcons;
