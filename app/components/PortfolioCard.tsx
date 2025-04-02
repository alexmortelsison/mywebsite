import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface PortfolioCardProps {
  image: string;
  name: string;
  description: string;
  href: string;
}

export default function PortfolioCard({
  image,
  name,
  description,
  href,
}: PortfolioCardProps) {
  return (
    <div className="tracking-tighter md:flex md:flex-col pb-8 md:items-center">
      <Image
        src={image}
        alt="a1"
        width={500}
        height={300}
        className="object-cover lg:h-[200px]"
      />
      <a href={href} target="_blank">
        <p className="text-center pt-2 text-lg hover:text-blue-500 hover:underline hover:underline-offset-4">
          {name}
        </p>
        <p className="text-sm text-center pt-1 leading-4 md:max-w-xl md:mx-auto">
          {description}
        </p>
      </a>
      <Separator className="mt-4 md:hidden" />
    </div>
  );
}
