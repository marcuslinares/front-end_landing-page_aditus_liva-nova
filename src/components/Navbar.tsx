/* eslint-disable @next/next/no-img-element */
"use client";

import NavItem, { NavItemInterface } from "./NavItem";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar(){

  const items: NavItemInterface[] = [
      {
        url: "/",
        label: "HOME"
      },
      {
        url: "/assessor-tecnico",
        label: "ASSESSOR TÉCNICO"
      },
      {
        url: "/medicos",
        label: "MÉDICOS"
      },
      {
        url: "#contatos",
        label: "CONTATOS"
      },      
  ]

  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return(
    <header>
      <nav className="navbar">     
         <a href=''>
              <img src="/assets/aditus-logo.png" alt="Aditus Health" width="300px" />
          </a>  
          <ul className={`nav-items ${openMenu ? 'open' : '' }`}>
            {items.map((item, index)=> (
            <NavItem 
              key={index}
              url={item.url}
              label={item.label}
              isActive={pathname === item.url}
            />
            ))}
        </ul>

        <button className="btn-mobile" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <FaXmark /> : <FaBars />}
        </button>
          
      </nav>
    </header>

  );
}