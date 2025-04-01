import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex text-gray-500 items-center text-sm">
      <p className="pl-2">&copy; {year} All rights reserved.</p>
      <Image src={"/logo.png"} alt="logo" width={20} height={20} />
      <p>Alex Sison.</p>
    </div>
  );
}
