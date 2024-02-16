import Image from "next/image";

export default function Logo() {
  return (
    <div>
        <span className="block">
            <Image
                src="/images/logo.svg"
                alt="Logo"
                width={140}
                height={60} 
                priority
                className="w-[100px] md:w-[140px] md:h-[60px]"
            />
        </span>
    </div>
  );
}