import Image from "next/image";

const Logo = ({ className = "h-9 md:h-10 w-auto" }) => {
  return (
    <Image
      src="/logo.png"
      alt="FL Electrics"
      width={160}
      height={64}
      className={className}
      priority
    />
  );
};

export default Logo;
