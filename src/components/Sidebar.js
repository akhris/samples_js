import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <nav>
            <h2>SideBar</h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
        </nav>
    );
}

export default SideBar;