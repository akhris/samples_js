import MemoryIcon from '@mui/icons-material/Memory';
import PeopleIcon from '@mui/icons-material/People';
import PlaceIcon from '@mui/icons-material/Place';
import ConstructionIcon from '@mui/icons-material/Construction';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsIcon from '@mui/icons-material/Settings';

class NavItem {
    constructor(key, title, icon) {
        this.key = key;
        this.title = title;
        this.icon = icon;
    }
}

const navItems = {
    topItems: [
    new NavItem("samples", "Образцы", (<MemoryIcon />)),
    new NavItem("people", "Сотрудники", (<PeopleIcon />)),
    new NavItem("places", "Места", (<PlaceIcon />)),
    new NavItem("operations", "Операции", (<ConstructionIcon />)),
    new NavItem("measurements", "Измерения", (<ListAltIcon />))
],
    settings: new NavItem("settings", "Настройки",(<SettingsIcon/>))
};


export default navItems;
