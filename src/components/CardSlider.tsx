import Image from "next/image";

export default function CardSlider() {
  return (
    <div className="bg-[#fbf9f5] rounded-xl p-8 w-96">
      <blockquote className="font-serif italic text-2xl mt-40">
        &quot;Patients who use FertilityIQ give themselves a real advantage.&quot;
      </blockquote>
      <div className="flex items-center mt-6">
        <Image
          src="../icons/people8.svg"
          alt="Dr. Eve Feinberg"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="ml-3">
          <p className="text-sm font-bold">Dr. Eve Feinberg</p>
          <p className="text-xs font-semibold mt-1">Medical Director, REI</p>
          <p className="text-xs font-semibold">
            Northwestern Medicine
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button aria-label="Previous Slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#d65554"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fefefe"
            className="size-12"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 8l-4 4 4 4" />
          </svg>
        </button>
        <button aria-label="Next Slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#d65554"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fefefe"
            className="size-12"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 8l4 4-4 4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
