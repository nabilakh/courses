import Image from "next/image";

export default function CardSlider() {
  return (
    <div className="bg-[#fbf9f5] rounded-xl p-8 w-96">
      <div className="font-serif italic text-2xl mt-40">
        &quot;Patients who use FertilityIQ give themselves a real
        advantage.&quot;
      </div>
      <div className="flex mt-6">
        <div>
          <Image
            src="/icons/people8.svg"
            alt="people"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        <div className="ml-2">
          <div className="text-sm font-bold">Dr. Eve Feinberg</div>
          <div className="text-xs font-semibold mt-1">
            Medical Director. REI
          </div>
          <div className="text-xs font-semibold">Northwestern Medicine</div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#d65554"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#fefefe"
          className="size-10">
          <circle cx="12" cy="12" r="10" stroke="#d65554" strokeWidth="1.5" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 8l-4 4 4 4"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#d65554"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#fefefe"
          className="size-10">
          <circle cx="12" cy="12" r="10" stroke="#d65554" strokeWidth="1.5" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 8l4 4-4 4"
          />
        </svg>
      </div>
    </div>
  );
}
