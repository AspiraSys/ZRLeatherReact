import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CustomButton({
  text,
  fontColor = "black",
  borderColor,
  padding,
  hoverStyles = {},
  swipeHover = false,
  removeBorder=false,
  to
}) {
  const navigate=useNavigate()
  
  const handleClick=()=>{
    if(to) navigate(to)
  }
  return (
    <Button
      variant="outlined"
      sx={{
        py: 1,
        px: padding || 2,
        textTransform:'capitalize',
        color: fontColor,
        borderRadius: "7px",
        fontWeight: 600,
        borderColor: borderColor,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "transparent",
        zIndex: 0,
        removeBorder: false,
        transition: "color 0.3s ease-in-out, background-color 0.3s ease-in-out",

        ...(swipeHover
          ? {
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                backgroundColor: "#987760",
                transition: "left 0.3s ease-in-out",
                zIndex: -1,
              },
              "&:hover": {
                color: "white",
                "&::before": {
                  left: 0,
                },
                
              },
            }
          : {
              "&:hover": {
                backgroundColor: "#987760",
                color: "white",
                border: removeBorder ? "none" : "1px solid",
                ...hoverStyles,
              },
            }),
      }}
      onClick={handleClick}
    >
      {text} 
    </Button>
  );
}

export default CustomButton;
