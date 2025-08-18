// constants and utils
import { ASSETS } from "@/assets";
import { TEXT } from "@/utils/constants/text.constants";
import { NAV_LIST } from "./helper/constant";

export default function Navbar() {
  return (
    <div className="flex  items-center justify-center bg-[rgb(255,255,255)] h-[74px] w-screen">
    <div className="flex items-center w-[92%] h-full">
      {/* Logo */}
      <div className="flex items-center bg-[red] mr-[20px] h-[70px]">
        <img
          className="h-[full] min-w-[120px]"
          src={ASSETS.IMAGES.RAZORPAY_LOGO}
          alt={TEXT.MESSAGE.ALT_IMG}
        />
      </div>
  
      {/* Navigation List */}
      <ul className="flex items-center gap-6">
        {NAV_LIST.map((item) => (
          <li key={item.key} className="text-black font-medium cursor-pointer hover:text-gray-200 transition">
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  </div>
  
  );
}
