import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box>
      <Stack>
        <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
      </Stack>
      <Typography variant="h5" sx={{fontSize:{lg: '28px', xs:'20px'}}}>Made with ❤️ by JavaScript Mastery</Typography>
    </Box>
  );
};

export default Footer;
