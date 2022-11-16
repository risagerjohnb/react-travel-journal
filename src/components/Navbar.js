import logo from "../img/Drawing-layerExport.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="globe" alt="globe" src={logo}></img>
            <p className="traveljournal">my travel journal.</p>
        </nav>
    )
}