import { Link } from 'react-router-dom'
import navItems from '../navigation/navigation';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function SideBar() {
    return (
        <List>
            {
                navItems.topItems.map(navItem => {
                    return (
                        <ListItem key={navItem.key} component={Link} to={navItem.key} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {navItem.icon}
                                </ListItemIcon>
                                <ListItemText primary={navItem.title} />
                            </ListItemButton>
                        </ListItem>
                    );
                })

            }
        </List>
    );
}

export default SideBar;