"use client";

import { listCourses } from "@/app/dummy";
import Image from "next/image";
import Link from "next/link";

export default function Card({
  activeTab,
  counter,
  wavesIcons,
}: {
  activeTab: string;
  counter: boolean;
  wavesIcons: string[];
}) {
  const filteredCourses =
    activeTab === "all"
      ? listCourses
      : listCourses.filter((course) => course.category === activeTab);

  return (
    <>
      {counter && (
        <div className="text-sm font-bold mt-6 mb-2">
          COURSES ({filteredCourses.length})
        </div>
      )}
      <div className="flex gap-6 flex-wrap">
        {filteredCourses.map(({ id, name, description, expert, view }, idx) => {
          const waveIcon = wavesIcons[idx % wavesIcons.length];
          return (
            <Link
              key={id}
              href={`/detail/${id}`}
              className="bg-[#fbfaf4] w-80 min-h-[450px] relative rounded-lg overflow-hidden mt-3 flex flex-col"
            >
              <div className="flex-grow">
                <div className="relative w-full h-24 mt-2">
                  <Image
                    src={waveIcon}
                    alt="wave"
                    fill
                    priority
                    className="object-cover object-right"
                  />
                </div>
                <div className="px-8 pb-8">
                  <div className="font-serif text-4xl">{name}</div>
                  <div className="mt-3 text-xs font-semibold">{description}</div>
                  {expert && (
                    <>
                      <div className="text-xs font-semibold mt-6">
                        Featuring experts from
                      </div>
                      <div className="text-xs font-bold">{expert}</div>
                    </>
                  )}
                </div>
              </div>
              {view && (
                <div className="flex justify-end">
                  <div className="flex items-center bg-[#f5f0e1] py-2 px-6 rounded-tl-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#b7b09a"
                      className="size-6"
                    >
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
                    <div className="text-[#b7b09a] text-xs font-bold">
                      {view}K
                    </div>
                  </div>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}
