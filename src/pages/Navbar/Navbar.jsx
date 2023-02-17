import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
      <div className="logo">LOGO</div>
      <div className="sub-main1">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Home
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4 }}
        >
          Events
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.4 }}
        >
          Explore
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.4 }}
        >
          Contact
        </motion.div>
      </div>
      </div>

      <motion.div
      className={!menu ? "menu" : "no-menu"}>
        <div onClick={() => setMenu((menu) => !menu)}>Home</div>
        <div onClick={() => setMenu((menu) => !menu)}>Events</div>
        <div onClick={() => setMenu((menu) => !menu)}>Explore</div>
        <div onClick={() => setMenu((menu) => !menu)}>Contacts</div>
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
