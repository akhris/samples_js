import PeopleIcon from '@mui/icons-material/People';

class NavItem {
    constructor(key, title, icon) {
        this.key = key;
        this.title = title;
        this.icon = icon;
    }
}

const navItems = [
    new NavItem("samples", "Образцы", "memory"),
    new NavItem("people", "Сотрудники", "people"),
    new NavItem("places", "Места", "place"),
    new NavItem("operations", "Операции", "construction"),
    new NavItem("measurements", "Измерения", "table_chart")
];

export default navItems;