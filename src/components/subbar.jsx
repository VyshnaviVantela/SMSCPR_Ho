import HomeIcon from "../assets/house.svg";
export default function SubBar() {
  return (
    <div
      className="
        fixed
        top-17
        left-51.25
        z-999999
        flex
        h-13
        w-[calc(100%-20px)]
        items-center
        gap-3
        bg-[#069EDC]
      "
    >
      <img
                src={HomeIcon}
                alt="Home"
                className=" pl-6 w-12 h-12 object-contain"
              />
    </div>
  );
}