import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className={menu === true ? "no-nav-main" : "nav-main"}
    >

      <div className="navbar">
      <div className="logo"><Link to="/" style={{color:"white","textDecoration":"none"}} >LOGO</Link></div>
      <div className="sub-main1">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <Link to="/" style={{color:"white","textDecoration":"none"}} >HOME</Link>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4 }}
        >
          <Link to="/events" style={{color:"white","textDecoration":"none"}} >EVENTS</Link>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.4 }}
        >
           <Link to="/workshops" style={{color:"white","textDecoration":"none"}} >WORKSHOPS</Link>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.4 }}
        >
           <Link to="/contact" style={{color:"white","textDecoration":"none"}} >CONTACT US</Link>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.0, delay: 0.4 }}
        >
           <Link to="/register" style={{color:"white","textDecoration":"none"}} >REGISTRATIONS</Link>
        </motion.div>
      </div>
      </div>

      <motion.div
      className={!menu ? "menu" : "no-menu"}>
        <div onClick={() => setMenu((menu) => !menu)}><Link to="/" style={{color:"white","textDecoration":"none"}} >HOME</Link></div>
        <div onClick={() => setMenu((menu) => !menu)}><Link to="/events" style={{color:"white","textDecoration":"none"}} >EVENTS</Link></div>
        <div onClick={() => setMenu((menu) => !menu)}><Link to="/workshops" style={{color:"white","textDecoration":"none"}} >WORKSHOPS</Link></div>
        <div onClick={() => setMenu((menu) => !menu)}><Link to="/contact" style={{color:"white","textDecoration":"none"}} >CONTACT US</Link></div>
        <div onClick={() => setMenu((menu) => !menu)}><Link to="/register" style={{color:"white","textDecoration":"none"}} >REGISTRATIONS</Link></div>
      </motion.div>
      <motion.div
        className="sub-main2"
        onClick={() => setMenu((menu) => !menu)}
      >
        {menu ? <AiOutlineMenu size={28} /> : <AiOutlineClose size={28} />}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
