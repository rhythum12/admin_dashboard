import React, { useState } from "react";
import { LightModeOutlined, Menu as MenuIcon, Search, SettingsOutlined } from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";
import { ArrowDropDownOutlined } from "@mui/icons-material";
import FlexBetween from "components/FlexBetween"; 
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/profile.jpeg"
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from "@mui/material";

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
  return <AppBar
    sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
    }}
  >
    <Toolbar sx={{ justifyContent: "space-between"}}>
        {/* Left Side */}
        <FlexBetween>
            <IconButton onClick={() => console.log('open/close side bar')}>
                <MenuIcon />
                <FlexBetween
                    backgroundColor={theme.palette.background.alt}
                    borderRadius="9px"
                    gap="3rem"
                    p="0.1rem 1.5rem"
                >
                    <InputBase placeholder="Search..."/>
                    <IconButton>
                        <Search />
                    </IconButton>
                </FlexBetween>
            </IconButton>
        </FlexBetween>
    </Toolbar>
  </AppBar>
}

export default Navbar
