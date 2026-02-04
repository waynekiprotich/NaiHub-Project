import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <nav className="navbar">
            <div className="heading">NaiHub</div>
            <ul className="nav-links">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/new-event">NEW EVENT</Link></li>
                <li><Link to="#">FILTER</Link></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;