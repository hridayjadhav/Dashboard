import React from 'react';
import { useState } from 'react';
import './Sidebar.css';
import Logo from '../../imgs/logo.png';
import { SidebarData } from '../../Data/Data';
import {UilSignOutAlt} from "@iconscout/react-unicons";


const Sidebar = () => {

    const [selected, setSelected] = useState(0)

  return (
    <div className="Sidebars">
        {/* logo */}
        <div className="logo">
            <img src = {Logo} alt="" />
            <span>
                Sh<span>o</span>ps
            </span>
        </div>
        <div className="menu">
            {SidebarData.map((item, index)=>{
                return(
                    // if the selected no. = index of curr. menuItem, then return the classNAme of menu item with active class, and if not then only return menuItem  
                    <div className={selected===index?'menuItem active': 'menuItem'}
                    key={index}  
                    onClick={()=>setSelected(index)}
                    >
                        {/* key for removing the warning */}
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}
            <div className="menuItem">
                <UilSignOutAlt/>
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar;
