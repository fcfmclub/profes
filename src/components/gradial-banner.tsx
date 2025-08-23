import Image from "next/image";
import Banner from "@/assets/WEB_DSC2423.jpg";

export default function GradialBanner() {
  return (
    <div className="relative rounded-lg h-screen w-full">
      <div className="absolute inset-0 bg-[50%_0px] bg-[linear-gradient(180deg,oklch(0.1649_0.0352_281.8285_/_0.28)_0%,oklch(0.1649_0.0352_281.8285)_50%),linear-gradient(270deg,oklch(0.1649_0.0352_281.8285)_2.27%,oklch(0.1649_0.0352_281.8285_/_0)_37.69%),radial-gradient(60%_40%_at_68%_15.89%,oklch(0.1649_0.0352_281.8285_/_0)_0%,oklch(0.1649_0.0352_281.8285)_100%)] z-10" />
      <Image
        src={Banner}
        alt="Description of the image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
}
