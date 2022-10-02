import { Link } from "react-router-dom";
//import * as Icons from "react-icons/fa";
import "./Navbar.css"
import { navItems } from "./NavbarItems";
// import Button1 from "./Button";
import {Dropdown,Dropdown1, Dropdown2, Dropdown3,Dropdown4,Dropdown5,Dropdown6} from "./Dropdown";
import { useState } from "react";

function Navbar(){
    const [dropdown,setDropdown]=useState(false);
    const [dropdown1,setDropdown1]=useState(false);
    const [dropdown2,setDropdown2]=useState(false)
    const [dropdown3,setDropdown3]=useState(false)
    const [dropdown4,setDropdown4]=useState(false);
    const [dropdown5,setDropdown5]=useState(false);
    const [dropdown6,setDropdown6]=useState(false);
    

    return (
        <>

      <nav className="navbar">
        {/* <Link to="/" className="navbar-logo"> */}
        {/* <img src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/logo/d-logo-new.svg" alt=""  /> */}
          {/* SEMRUSH */}
          
        {/* </Link> */}

        <ul className="nav-items">
          {navItems.map((item) => {

            if (item.title === "Makeup") {
                return (
                <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown && <Dropdown />}
                </li>
                );
            }

            if (item.title === "Brushes") {
                return (
                <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown1(true)}
                    onMouseLeave={() => setDropdown1(false)}
                >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown1 && <Dropdown1 />}
                </li>
                );
            }

            if (item.title === "Skincare") {
                return (
                <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown2(true)}
                    onMouseLeave={() => setDropdown2(false)}
                >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown2 && <Dropdown2 />}
                </li>
                );
            }

            if (item.title === "Gifting") {
                return (
                <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown3(true)}
                    onMouseLeave={() => setDropdown3(false)}
                >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown3 && <Dropdown3 />}
                </li>
                );
            }
            if (item.title === "Blog") {
                return (
                <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown4(true)}
                    onMouseLeave={() => setDropdown4(false)}
                >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown4 && <Dropdown4 />}
                </li>
                );
            }
            if (item.title === "Offers") {
                return (
                <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown5(true)}
                    onMouseLeave={() => setDropdown5(false)}
                >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown5 && <Dropdown5 />}
                </li>
                );
            }
            if (item.title === "Stores") {
                return (
                <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown6(true)}
                    onMouseLeave={() => setDropdown6(false)}
                >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown6 && <Dropdown6 />}
                </li>
                );
            }

           
            



































            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
















        {/* <Button1/> */}
       
        {/* <Button element="hhh"/> */}

        </nav>
        {/* <Dropdown/> */}

       
        {/* <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div> */}

        </>

       
    )
}

export default Navbar