import Image from "next/image";

interface CardProps {
  image: string;
  name: string;
  position: string;
  company: string;
  tel: string;
  email: string;
  message: string;
  country: string;
}

export default function Card({
  image,
  name,
  tel,
  email,
  message,
  position,
  company,
  country,
}: CardProps) {
  return (
    <div className="border lg:flex lg:space-x-16">
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        className="object-cover w-full lg:w-[300px] lg:h-[300px] md:rounded-t-none"
      />
      <div className="text-center lg:justify-center lg:items-center lg:flex lg:flex-col">
        <p className="text-3xl lg:text-4xl font-bold">{name}</p>
        <div className="leading-4.5">
          <p className="text-sm italic font-bold">
            {position}, <span>{company}</span>
          </p>
          <p>{country}</p>
          <p>Tel: {tel}</p>
          <p>Email: {email}</p>
          <p className="text-sm pt-4 px-2 pb-4">{message}</p>
        </div>
      </div>
    </div>
  );
}
