import Image from "next/legacy/image";

type Props = {
  icon: string;
  title: string;
  description: string;
  alt: string;
};

const Benefit = ({ icon, title, description, alt }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1 items-center">
        <div>
          <Image src={`/icons/${icon}.svg`} height="16" width="16" alt={alt} />
        </div>
        <p className="font-medium ">{title}</p>
      </div>
      <p className="text-[#B3B3B3] max-w-[260px]">{description}</p>
    </div>
  );
};
export default Benefit;
