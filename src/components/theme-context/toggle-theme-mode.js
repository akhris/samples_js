import { IconButton, useTheme } from "@mui/material";
import { ThemeContext } from "./theme-context";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from "react";

export default function ToggleTheme() {

    const theme =  useTheme();
    const colorMode = React.useContext(ThemeContext);
        return (
        <ThemeContext.Consumer>
            {
                ({ toggleTheme }) => (
                    <IconButton
                        onClick={
                            colorMode.toggleTheme
                        }
                        color="inherit"
                    >
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} 
                    </IconButton>
                )
            }
        </ThemeContext.Consumer>
    );
}