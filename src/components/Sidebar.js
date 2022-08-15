import { Link } from 'react-router-dom'
import navItems from '../navigation/navigation';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';

function SideBar() {
    return (

        <div>
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
            <Divider />

            <List>
            <ListItem key={navItems.settings.key} component={Link} to={navItems.settings.key} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {navItems.settings.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={navItems.settings.title} />
                                </ListItemButton>
                            </ListItem>
            </List>
        </div>
        /* <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/samples'>Образцы</Link></li>
            <li><Link to='/schedule'>Schedule</Link></li>
        </ul> */

    );
}

export default SideBar;