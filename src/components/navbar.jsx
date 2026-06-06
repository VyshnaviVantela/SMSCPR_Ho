import strategiesLogo from "../assets/Strategieslogo.png";
import GlobeIcon from "../assets/globe.svg";
import BellIcon from "../assets/bell.svg";
import CircleUserIcon from "../assets/circle-user.svg";
export default function navbar() {
  return (
    <header className="relative flex h-25 shrink-0 items-center bg-[#003E6F] font-[Inter,sans-serif]">

      {/* Left */}
      <div className="flex items-center justify-end pl-5 gap-3 -mt-8">
        
        {/* Strategies Logo */}
        <img
          src={strategiesLogo}
          alt="Strategies Logo"
          className="h-12 w-auto"
        />
      </div>

      {/* Right: Nav Icons */}
      <div className="flex flex-1 items-center justify-end gap-10.5 pr-5 -mt-5">

        <img
          src={GlobeIcon}
          className="h-7 w-7 cursor-pointer object-contain transition-transform duration-200 hover:scale-110"
          alt="Globe"
        />
        
        <img
          src={BellIcon}
          className="h-7 w-7 cursor-pointer object-contain transition-transform duration-200 hover:scale-110"
          alt="Bell"
        />


        <img
          src={CircleUserIcon}
          className="h-7 w-7 cursor-pointer object-contain transition-transform duration-200 hover:scale-110"
          alt="User"
        />


      </div>

    </header>
  );
}  