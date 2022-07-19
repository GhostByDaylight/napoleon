import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitterSquare, FaFacebookSquare, FaBuffer } from "react-icons/fa";

export default function() {
return (
    <div className="fixed top-0 h-screen w-16 left-0 m-0 flex flex-col bg-[#FD5000] hover:text-white duration-1000">

        <i><SidebarIcon icon={<FaLinkedin size="28" />} text={"LinkedIn"} link={"https://www.linkedin.com/in/benjamin-rybarczyk-397515237/"}/></i>
        <i><SidebarIcon icon={<FaGithub size="28" />} text={"Github"} link={"https://github.com/GhostByDaylight"}/></i>
        <i><SidebarIcon icon={<FaTwitterSquare size="28" />} text={"Twitter"} link={"https://twitter.com/home"}/></i>
        <i><SidebarIcon icon={<FaFacebookSquare size="28" />} text={"Facebook"} link={"https://www.facebook.com/"}/></i>
        <i><SidebarIcon icon={<FaBuffer size="28" />} text={"Website"} link={"http://bjrybar.000webhostapp.com/"}/></i>

    </div>
);

}

function SidebarIcon({icon, text, link}) {
    return (<div className="sidebar-icon group" >
        
        <a href={link}>{icon}</a>
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>);
}