import { IMAGES } from "@/assets";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";

const SocialCard = ({
  icon,
  title,
  fullWidth,
}: {
  icon: string | React.ReactNode;
  title: string;
  fullWidth?: boolean;
}) => (
  <div
    className={`w-full rounded-2xl flex-col gap-4  h-full shadow-[inset_0_1px_8px_rgba(225,225,225,0.3)] bg-secondary-20 p-4 flex  justify-between `}
  >
    {" "}
    <span className="text-xl text-white">{icon}</span>
    <div className="flex items-center justify-between w-full gap-3">
      <p className="text-white text-sm">{title}</p>
      <HiExternalLink className="text-base text-white" />
    </div>
  </div>
);
export default SocialCard;
