import { topics } from "@/app/dummy";

export default function Steps() {
  return (
    <div>
      <div className="text-sm font-bold mt-16 mb-10 pl-10">EXPLORE TOPICS</div>
      {topics.map(({ name, view }, idx) => (
        <div key={idx} className="flex items-center mb-3">
          <div className="flex items-center w-24">
            <div className="flex-1 h-[1px] bg-[#ffc8aa]"></div>
            <div className="w-14 h-14 bg-[#ffc8aa] rounded-full"></div>
          </div>
          <div className="font-serif text-4xl mx-2">{name}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.2}
            stroke="currentColor"
            className="size-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <div className="text-xs font-semibold ml-1">{view}</div>
        </div>
      ))}
    </div>
  );
}
