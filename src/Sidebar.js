import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdMarkEmailUnread, MdOutlineSportsSoccer } from "react-icons/md"
import { GiNewspaper } from "react-icons/gi"; 

export default function() {
return (
    <div className="fixed top-0 h-screen w-16 left-0 m-0 flex flex-col bg-[#FD5000] hover:text-white duration-1000">

        <i><SidebarIcon icon={<TiWeatherPartlySunny size="28" />} text={"Weather"} link={"/weather"}/></i>
        <i><SidebarIcon icon={<GiNewspaper size="28" />} text={"News around me"} link={"/news"}/></i>
        <i><SidebarIcon icon={<MdMarkEmailUnread size="28" />} text={"New Emails"} link={"/emails"}/></i>
        <i><SidebarIcon icon={<MdOutlineSportsSoccer size="28" />} text={"Soccer"} link={"/soccer"}/></i>
        

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