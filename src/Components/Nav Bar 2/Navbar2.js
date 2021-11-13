import React from 'react'
import './Navbar2.css'
const Navbar2 = () => {
    const openDropDown = () => {
        const dropDown = document.getElementById("myDropdown").style.display = "flex";
    };

    var menu_ham = document.getElementById("hamburger-menu");
    var open_menu = document.getElementById("open");
    function closemenu() {
        menu_ham.style.top = "-100vh";
        open_menu.style.width = "2rem";
        open_menu.style.transition = "1s linear"
    }
    function openmenu() {
        menu_ham.style.top = "0vh";
        open_menu.style.width = "0vw";
        open_menu.style.transition = "1s linear"
    }




    return (
        <>
            <div className="nav-bar">
                <div className="nav-links">
                    <div className="nav-logo">
                        <img src="../images/Outlay.png" alt="" className="nav-logo--img" />
                    </div>
                    <a href="/#" className="nav-links--text">Home</a>
                    <a href="/#" className="nav-links--text">Goals</a>
                    <a href="/#" className="nav-links--text">Courses</a>
                </div>
                <div className="nav-buttons">
                    <a href="/#" className="nav-button-in --logout">Logout</a>
                    <div className="drop-down--nav">
                        <a className="nav-button-in --dropdown" onClick={openDropDown}>Username lvl(20) <i class="fas fa-sort-down"></i></a>
                        <div id="myDropdown" className="nav--dropdown-item">
                            <a href="/#" className="nav--dropdown-links">Profile</a>
                            <a href="/#" className="nav--dropdown-links">Contact Us</a>
                            <a href="/#" className="nav--dropdown-links">About us</a>
                        </div>
                    </div>

                </div>
                <div class="action-nav-bar">
                    <img src="../images/menu.png" onclick={openmenu} id="open" class="menu-icon" />
                </div>
                <div class="hamburger-menu" id="hamburger-menu">
                    <ul>
                        <li><a href="">Edit Profile</a></li>
                        <li><a href="">Change Password</a></li>
                        <li><a href="">Help</a></li>
                        <li><a href="">Log Out</a></li>
                    </ul>
                    <img src="cross.png" class="close" id="close" onclick={closemenu} />
                </div>
            </div>
        </>
    )
}

export default Navbar2
