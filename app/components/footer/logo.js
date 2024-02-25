import Image from "next/image";

export default function Logo(props) {
  const { variant='dark' } = props;

  return (
    <div>
        <span className="block">
            <Image
                src={variant === 'light' ? '/images/logo-light.svg' : '/images/logo.svg'}
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