import { useMediaQuery } from "@mui/material";

const ResponsiveIcon = ({ Icon, color = "#987760", socialIcons = false }) => {
  const isXs = useMediaQuery("(max-width:576px)");
  const isSm = useMediaQuery("(max-width:768px)");

  let iconSize = socialIcons ? 27 : 45;
  if (isXs) iconSize = socialIcons ? 25 : 36;
  else if (isSm) iconSize = socialIcons ? 25 : 38;

  return <Icon size={iconSize} color={color} />;
};

export default ResponsiveIcon;
