import React, { useState } from "react";
import "./App.scss";
import Navbar from "./assets/components/Navbar/Navbar";
import Links from "./assets/components/Links/Links";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const App = () => {
  const [open, setOpen] = useState(false);
  let enlarge = () => {
    setOpen(!open);
  };
  return (
    <div>
      <section>
        <Navbar />
        
        <motion.div
          className="backColor"
          onClick={enlarge}
          initial={{ clipPath: "circle(6% at 12% 7%)" }}
          animate={{
            clipPath: open ? "circle(137.3% at 13% 9%)" : "circle(6% at 12% 7%",
          }}
          transition={{ duration: 1.3,type:"spring",}}
        >
         {open ? <IoMdClose onClick={enlarge} className="close" /> : <GiHamburgerMenu onClick={enlarge} className="hamburger" />}

          <Links />
        </motion.div>
      </section>

      <section>About</section>
      <section>Home</section>
      <section>Home</section>
    </div>
  );
};

export default App;
