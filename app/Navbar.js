'use client'
import styles from "./styles.css";

export default function Navbar(){ //navbar component
    return (
        <div className="navbar">
            <img src='' alt='' className='nav-logo'/>
            <h1 className="navbar">Sentry Studios</h1>
            <a onClick={() => {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                })
            }} className="nav-link">More Info</a>
        </div>
    )
}