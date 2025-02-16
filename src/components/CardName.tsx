import { expertsPeople } from "@/app/dummy";
import Image from "next/image";

export default function CardName() {
  return (
    <section className="mt-24">
      <h2 className="font-serif text-3xl mb-6">Experts you&apos;ll learn from</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {expertsPeople.map(({ name, img, profession, school }, idx) => (
          <div
            key={idx}
            className="border rounded-lg flex gap-3 p-3 items-center"
          >
            <Image
              src={img}
              alt={name}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-bold">{name}</p>
              <p className="text-xs font-semibold mt-1">{profession}</p>
              <p className="text-xs font-semibold">{school}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end text-xs font-bold mt-6 cursor-pointer">
        Show 18 More
      </div>
    </section>
  );
}
