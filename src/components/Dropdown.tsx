"use client";

import Image from "next/image";
import { useState } from "react";

export default function Dropdown(props: { data?: { name: string } }) {
  const { data } = props;

  const [lessons, setLessons] = useState([
    {
      title: `What is ${data?.name}?`,
      time: "6 min",
      subTitle: [
        `Summary of ${data?.name} Process`,
        `Why do ${data?.name}? Who does it help?`,
      ],
      active: false,
    },
    {
      title: `The Steps and Decisions In ${data?.name} Process?`,
      time: "1 hour",
      subTitle: [`${data?.name} Timeline & Funnel`],
      active: false,
    },
    {
      title: `${data?.name} Success Rates?`,
      time: "15 min",
      subTitle: [`Success Rates: How often Does ${data?.name} Work`],
      active: false,
    },
  ]);

  return (
    <div className="w-full">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <Image src="../icons/checked.svg" alt="wave" width={20} height={20} />
            <div className="text-sm font-semibold ml-3">
              &quot;Full refund within 30 days, no questions asked&quot;
              <br />
              Elicible for FSA/HSA
            </div>
          </div>
          <div className="text-4xl font-serif">$195</div>
        </div>
      </div>
      <div className="font-serif text-3xl mt-24">Course syllabus</div>
      {lessons.map(({ title, time, subTitle, active }, idx) => (
        <div
          key={idx}
          className="border-[1.5px] border-[#f5f4ee] mt-3 rounded-lg">
          <div
            className="flex justify-between items-center py-2 px-4 cursor-pointer"
            onClick={() => {
              const test = [...lessons];
              test[idx].active = !active;

              setLessons(test);
            }}>
            <div>
              <div className="text-xs font-extrabold">Lesson {idx + 1}</div>
              <div className="font-serif text-xl">{title}</div>
            </div>
            <div className="flex items-center text-xs font-extrabold">
              {time}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.5}
                stroke="currentColor"
                className="size-3 ml-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          {active && subTitle.map((itm, i) => (
            <div
              key={i}
              className="border-[#f5f4ee] border-t-[1.5px] py-2 px-4 text-sm">
              {itm}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
