import logo from "../../imgHolder/logo.png"
import "./Header.css"

export default function Header() {
    return(
        <div>
            <header className="header">
                <nav className="header_nav">
                    <img src={logo} alt="" />

                    <ul className="header_list">
                        <li className="header_item">Home</li>
                        <li className="header_item">About</li>
                        <li className="header_item">Properties</li>
                        <li className="header_item">Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}