import * as React from 'react';
import SideBar from './Sidebar';
import MainContent from './MainContent'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from './ColorModeToggle';
// import { TitleContext } from '../navigation/title-context';




const drawerWidth = 240;

function RootContent(props) {

    const theme = useTheme();

    const colorMode = React.useContext(ColorModeContext);

    // const title =  React.useContext(TitleContext);

    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        {/* {title} */}
                    </Typography>
                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}>
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <SideBar />
                </Box>
            </Drawer>
            <Box component="main" sx={{ p: 1, bgcolor: 'background.default', color: 'text.primary', height: '100%', width: '100%' }} >
                <Toolbar />
                <MainContent />

            </Box>
        </Box>
    );
}

export default RootContent;