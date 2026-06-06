import { useState } from "react";
import HouseIcon from "../assets/house.svg";
import GaugeIcon from "../assets/gauge.svg";
import bullhornIcon from "../assets/bullhorn.svg";
import paperPlaneIcon from "../assets/campaigns/paper-plane.svg";
import arrowsTurnToDotsIcon from "../assets/campaigns/arrows-turn-to-dots.svg";
import sliders from "../assets/campaigns/sliders.svg";
import CalendarClock from "../assets/campaigns/calendar-clock.svg";
import toolsIcon from "../assets/tools/tools.svg";
import PhotoFilmIcon from "../assets/tools/photo-film-music.svg";
import link from "../assets/tools/link.svg";
import envelopeIcon from "../assets/tools/envelope-open-text.svg";
import gearIcon from "../assets/tools/gear-code.svg";
import comments from "../assets/comments.svg";
import hashtagIcon from "../assets/hashtag.svg";
import PhonePlusIcon from "../assets/numbers/phone-plus.svg";
import ThumbsUpIcon from "../assets/numbers/thumbs-up.svg";
import UsersMedicalIcon from "../assets/contacts/users-medical.svg";
import layerGroupIcon from "../assets/contacts/layer-group.svg";
import ContactIcon from "../assets/contacts/id-card-clip.svg";
import ReportIcon from "../assets/file-chart-column.svg";
import CampaignStatusIcon from "../assets/reports/file-chart-pie.svg";
import apiIcon from "../assets/code.svg";
import coinsIcon from "../assets/coins.svg";

function Sidebar() {
  const [active, setActive] = useState("home");

  return (
    <aside
      className="
        fixed
        top-17
        left-0
        z-50
        flex
        flex-col
        w-51.25
        h-[calc(100vh-68px)]
        bg-[#006EC2]
        pt-4.5
        pr-6.25
        pb-2.5
        pl-2.5
        overflow-hidden
        font-[Inter,Arial,sans-serif]
      "
    >
      <div className="flex flex-col gap-0.5">

        {/* HOME */}
      <div
        onClick={() => setActive("home")}
        className={`
          flex items-center gap-1
          px-2 py-2
          mt-1
          rounded-md
          cursor-pointer
          transition-all duration-200
          ${
            active === "home"
              ? "bg-[#003F70] text-white"
              : "text-white hover:bg-[#005A9C]"
          }
        `}
      >
       <img
  src={HouseIcon}
  alt="Home"
  className="w-7 h-7"
/>

        <span className="text-base font-medium">
          Home
        </span>
      </div>  

    {/* Dashboard */}
<div
  onClick={() => setActive("dashboard")}
  className={`
    flex items-center gap-3
    px-2 py-2
    mt-1
    rounded-md
    cursor-pointer
    transition-all duration-200
    ${
      active === "dashboard"
        ? "bg-[#003F70] text-white"
        : "text-white hover:bg-[#005A9C]"
    }
  `}
>
  <img
    src={GaugeIcon}
    alt="Dashboard"
    className="w-7 h-7"
  />

  <span className="text-base font-medium">
    Dashboard
  </span>
</div>  

{/* Communication */}
<div
  className="
    flex items-center
    px-1 py-2
    text-white
    text-base
    font-medium
    cursor-default
  "
>
  Communication
</div>

{/* CAMPAIGNS DROPDOWN */}
<div className="flex flex-col gap-1.5">

  {/* Campaigns Main Item */}
  <div
    onClick={() =>
      setActive(active === "campaigns" ? "" : "campaigns")
    }
    className={`
      flex items-center justify-between
      px-2 py-2
      rounded-md
      cursor-pointer
      transition-all duration-200
      ${
        active === "campaigns"
          ? "bg-[#003F70]"
          : "hover:bg-[#005A9C]"
      }
    `}
  >
    {/* Left Side */}
    <div className="flex items-center gap-3">
      <img
        src={bullhornIcon}
        alt="Campaigns"
        className="w-7 h-7 object-contain"
      />

      <span className="text-[15px] font-medium text-white">
        Campaigns
      </span>
    </div>

    {/* Arrow */}
    <img
      src="https://static.codia.ai/s/image_7f457567-275d-40dc-a81a-fbe58917766a.png"
      alt="arrow"
      className={`w-3.5 h-2 object-contain transition-transform duration-200 ${
        active === "campaigns" ? "rotate-180" : ""
      }`}
    />
  </div>

  {/* SUB MENU */}
  {active === "campaigns" && (
    <div className="ml-4 flex flex-col gap-3 text-white text-[15px] font-normal">

      {/* Send Message */}
      <div className="flex items-center gap-3 cursor-pointer hover:text-[#C3DBEC]">
        <img
          src={paperPlaneIcon}
          alt="Send Message"
          className="w-7 h-7 object-contain"
        />
        <span className="text-[15px] font-medium text-white">
          Send Message
        </span>
      </div>

      {/* 2 Way Messaging */}
      <div className="flex items-center gap-3 cursor-pointer hover:text-[#C3DBEC]">
        <img
          src={arrowsTurnToDotsIcon}
          alt="Two-way Messaging"
          className="w-7 h-7 object-contain"
        />
        <span className="text-[15px] font-medium text-white">
          Two-way Messaging
        </span>
      </div>

      {/* Auto Responders */}
      <div className="flex items-center gap-3 cursor-pointer hover:text-[#C3DBEC]">
        <img
          src={sliders}
          alt="Auto Responders"
          className="w-7 h-7 object-contain"
        />
        <span className="text-[15px] font-medium text-white">
          Auto Responders
        </span>
      </div>

      {/* Schedule Campaigns */}
      <div className="flex items-center gap-3 cursor-pointer hover:text-[#C3DBEC]">
        <img
          src={CalendarClock}
          alt="Schedule Campaigns"
          className="w-7 h-7 object-contain"
        />
        <span className="text-[15px] font-medium text-white">
          Schedule Campaigns
        </span>
      </div>

    </div>
  )}
</div>

{/* TOOLS DROPDOWN */}
<div className="flex flex-col gap-1.5">

  {/* Tools Main Item */}
  <div
    onClick={() =>
      setActive(active === "tools" ? "" : "tools")
    }
    className={`
      flex items-center justify-between
      px-2 py-2
      rounded-md
      cursor-pointer
      transition-all duration-200
      ${
        active === "tools"
          ? "bg-[#003F70]"
          : "hover:bg-[#005A9C]"
      }
    `}
  >
    <div className="flex items-center gap-4">
      <img
          src={toolsIcon}
          alt="Tools"
          className="w-5 h-5 object-contain"
        />
        <span className="text-[15px] font-medium text-white">
          Tools
        </span>
    </div>

    {/* Arrow */}
    <img
      src="https://static.codia.ai/s/image_7f457567-275d-40dc-a81a-fbe58917766a.png"
      alt="arrow"
      className={`w-3.5 h-2 object-contain transition-transform duration-200 ${
        active === "tools" ? "rotate-180" : ""
      }`}
    />
  </div>

  {/* TOOLS SUBMENU */}
  {active === "tools" && (
    <div className="ml-5 flex flex-col gap-3 text-white text-[15px]">

      {/* Media Library */}
      <div className="flex items-center gap-3 cursor-pointer hover:text-[#C3DBEC]">
        <img
          src={PhotoFilmIcon}
          alt="Media Library"
          className="w-6 h-6 object-contain"
        />
        <span className="text-[15px] font-medium text-white">
          Media Library
        </span>
      </div>

     {/* URL Shortener */}
<div className="flex items-center gap-3 cursor-pointer hover:text-[#C3DBEC]">
  <img
          src={link}
          alt="URL Shortener"
          className="w-6 h-6 object-contain"
        />
        <span className="text-[15px] font-medium text-white">
          URL Shortener
        </span>

</div>

      {/* Message Templates */}
<div className="flex items-center gap-3 cursor-pointer hover:text-[#C3DBEC]">

  {/* Custom Envelope Icon */}
  <img
          src={envelopeIcon}
          alt=" Message Templates"
          className="w-6 h-6 object-contain"
        />
        <span className="text-[15px] font-medium text-white">
         Message Templates
        </span>

</div>

    {/* Integrations */}
<div className="flex items-center gap-3 cursor-pointer hover:text-[#C3DBEC]">

  <img
          src={gearIcon}
          alt="Integrations"
          className="w-6 h-6 object-contain"
        />
        <span className="text-[15px] font-medium text-white">
          Integrations
        </span>

</div>

    </div>
  )}

{/* Live Chat */}
<div
  className="flex items-center gap-3 px-2 py-2 cursor-pointer transition-all duration-200 hover:bg-[#005A9C] rounded-md"
>
  <img
          src={comments}
          alt="Live Chat"
          className="w-5 h-5 object-contain"
        />
        <span className="text-[15px] font-medium text-white">
          Live Chat
        </span>
</div>

{/* MANAGE */}
<div className=" px-2 py-1  text-white text-[16px] font-medium cursor-default">
  Manage
</div>

<div className="flex flex-col gap-1.5"></div>

{/* NUMBERS DROPDOWN */}
<div className="flex flex-col gap-0.5">

  {/* MAIN ITEM */}
  <div
    onClick={() => setActive(active === "numbers" ? "" : "numbers")}
    className={`flex items-center justify-between px-2 py-2 rounded-md cursor-pointer transition-all duration-200
      ${active === "numbers" ? "bg-[#003F70]" : "hover:bg-[#005A9C]"}
    `}
  >
    {/* LEFT SIDE */}
    <div className="flex items-center gap-3">
      <img
        src={hashtagIcon}
        alt="Numbers"
        className="w-5 h-5 object-contain"
      />
      <span className="text-[15px] font-medium text-white">
        Numbers
      </span>
    </div>

    {/* ARROW */}
    <img
      src="https://static.codia.ai/s/image_7f457567-275d-40dc-a81a-fbe58917766a.png"
      alt="arrow"
      className={`w-3.5 h-2 object-contain transition-transform duration-200 ${
        active === "numbers" ? "rotate-180" : ""
      }`}
    />
  </div>

  {/* SUB MENU */}
  {active === "numbers" && (
    <div className="ml-2 flex flex-col gap-3 text-white text-[14px]">

      {/* Virtual Numbers */}
      <div className="flex items-center gap-3 cursor-pointer hover:text-[#C3DBEC] transition">
        <img
          src={PhonePlusIcon}
          alt="Virtual Numbers"
          className="w-5 h-5 object-contain"
        />
        <span className="text-[15px] font-medium text-white">
          Virtual Numbers
        </span>
      </div>

      {/* Subscribed */}
      <div className="flex items-center gap-3 cursor-pointer hover:text-[#C3DBEC] transition">
        <img
          src={ThumbsUpIcon}
          alt="Subscribed"
          className="w-5 h-5 object-contain"
        />

        <span>Subscribed</span>  
      </div>

    </div>
  )}
</div>

{/* CONTACTS DROPDOWN */}
<div className="flex flex-col gap-0.5">

  {/* CONTACTS MAIN ITEM */}
  <div
    onClick={() => setActive(active === "contacts" ? "" : "contacts")}
    className={`flex items-center justify-between px-2 py-2 rounded-md cursor-pointer transition-all duration-200
      ${active === "contacts" ? "bg-[#003F70]" : "hover:bg-[#005A9C]"}
    `}
  >
    {/* LEFT SIDE */}
    <div className="flex items-center gap-3">
      {/* ICON */}
      <img
          src={ContactIcon}
          alt="Contact"
          className="w-5 h-5 object-contain"
        />
      <span className="text-[15px] text-white font-base">
        Contact
      </span>
    </div>

    {/* ARROW */}
    <img
      src="https://static.codia.ai/s/image_7f457567-275d-40dc-a81a-fbe58917766a.png"
      alt="arrow"
      className={`w-3.5 h-2 object-contain transition-transform duration-200 ${
        active === "contacts" ? "rotate-180" : ""
      }`}
    />
  </div>

  {/* SUB ITEMS */}
  {active === "contacts" && (
    <div className="ml-2 flex flex-col gap-2 text-[15px] text-white">

      {/* Contact Groups */}
      <div className="flex items-center gap-2 cursor-pointer hover:text-[#C3DBEC]">
        <img
          src={UsersMedicalIcon}
          alt="Contact Groups"
          className="w-5 h-5 object-contain"
        />
        Contact Groups
      </div>

      {/* Segments */}
      <div className="flex items-center gap-2 cursor-pointer hover:text-[#C3DBEC]">
       <img
          src={layerGroupIcon}
          alt="Segments"
          className="w-5 h-5 object-contain"
        />
        Segments
      </div>

    </div>
  )}
</div>

{/* REPORTS DROPDOWN */}
<div className="flex flex-col gap-0.5 ">

  {/* REPORTS MAIN ITEM */}
  <div
    onClick={() => setActive(active === "reports" ? "" : "reports")}
    className={`flex items-center justify-between px-2 py-2 rounded-md cursor-pointer transition-all duration-200
      ${active === "reports" ? "bg-[#003F70]" : "hover:bg-[#005A9C]"}
    `}
  >
    {/* LEFT SIDE */}
    <div className="flex items-center gap-3">
      {/* ICON */}
      <img
          src={ReportIcon}
          alt="Reports"
          className="w-5 h-5 object-contain"
        />
      <span className="text-[15px] text-white font-medium">
        Reports
      </span>
    </div>

    {/* ARROW */}
    <img
      src="https://static.codia.ai/s/image_7f457567-275d-40dc-a81a-fbe58917766a.png"
      alt="arrow"
      className={`w-3.5 h-2 object-contain transition-transform duration-200 ${
        active === "reports" ? "rotate-180" : ""
      }`}
    />
  </div>

  {/* SUB ITEMS */}
  {active === "reports" && (
    <div className="ml-2 flex flex-col gap-2 text-[15px] text-white">

      {/* Campaign Status */}
      <div className="flex items-center gap-2 cursor-pointer hover:text-[#C3DBEC]">
       <img
          src={CampaignStatusIcon}
          alt="Campaign Status"
          className="w-5 h-5 object-contain"
        />

        Campaign Status
      </div>

    </div>
  )}
</div>

{/* API */}
<div className="flex flex-col gap-0 ">

  <div
    onClick={() => setActive(active === "api" ? "" : "api")}
    className={`flex items-center justify-between px-2 py-2 rounded-md cursor-pointer transition
      ${active === "api" ? "bg-[#003F70]" : "hover:bg-[#005A9C]"}
    `}
  >

    <div className="flex items-center gap-3">

      {/* ICON */}
      <img
          src={apiIcon}
          alt="API"
          className="w-5 h-5 object-contain"
        />

      <span className="text-white text-[15px]">API</span>
    </div>

    {/* ARROW */}
    <img
      src="https://static.codia.ai/s/image_7f457567-275d-40dc-a81a-fbe58917766a.png"
      alt="arrow"
      className={`w-3.5 h-2 object-contain transition-transform duration-200 ${
        active === "api" ? "rotate-180" : ""
      }`}
    />

  </div>

</div>
</div>

{/* PERSONAL SECTION */}
<div className="flex flex-col mt-2 gap-3">

  {/* HEADING */}
<h1 className="text-white text-[16px]">
  Personal
</h1>

{/* RIGHT SHIFT WRAPPER */}
<div className="ml-5 flex flex-col gap-1">

  {/* TOP ROW */}
  <div className="flex items-center gap-3">

    {/* ICON */}
    <img
          src={coinsIcon}
          alt="Credits"
          className="w-5 h-5 object-contain"
        />

    <span className="text-white text-[15px] gap-6">
      Credits
    </span>
  </div>

  {/* VALUE */}
  <div className="text-[#f5f7f9] text-[15px]">
    USD 86,682.27
  </div>

</div>
</div>

</div>
    </aside>
  );
}

export default Sidebar;