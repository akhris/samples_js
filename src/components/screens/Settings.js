import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../ColorModeToggle';



function Settings() {

    const theme = useTheme();

    const colorMode = React.useContext(ColorModeContext);
    return (
        <div>
            <h1>Settings</h1>
            <IconButton sx={{ ml: 1 }} onClick={
                colorMode.toggleColorMode
            //     useEffect(() => {
            //     localStorage.setItem("theme_mode", theme.palette.mode === 'dark' ? "light" : "dark")
            // }
            // )
            } color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        </div >

    );
}

export default Settings