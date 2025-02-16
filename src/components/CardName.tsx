import { expertsPeople } from "@/app/dummy";
import Image from "next/image";

export default function CardName() {
  return (
    <>
      <div className="font-serif text-3xl mt-24 mb-6">
        Experts you&apos;ll learn from
      </div>
      <div className="grid grid-cols-3 gap-4">
        {expertsPeople.map(({ name, img, profession, school }, idx) => (
          <div key={idx} className="border-[1px] flex gap-2 p-3 rounded-lg">
            <div>
              <Image
                src={img}
                alt="people"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <div>
              <div className="text-sm font-bold">{name}</div>
              <div className="text-xs font-semibold mt-1">{profession}</div>
              <div className="text-xs font-semibold">{school}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end text-xs font-bold mt-6">
        Show 18 More
      </div>
    </>
  );
}
