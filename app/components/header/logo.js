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
                className="w-[140px] h-[60px]"
            />
        </span>
    </div>
  );
}