import { Link } from 'react-router-dom'
import navItems from '../navigation/navigation';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Icon } from '@mui/material';

function SideBar() {
    return (


        <List>
            {
                navItems.map(navItem => {
                    return (

                        <ListItem key={navItem.key} component={Link} to={navItem.key} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>{navItem.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText primary={navItem.title} />
                            </ListItemButton>
                        </ListItem>

                    );
                })
            }
        </List>

        /* <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/samples'>Образцы</Link></li>
            <li><Link to='/schedule'>Schedule</Link></li>
        </ul> */

    );
}

export default SideBar;