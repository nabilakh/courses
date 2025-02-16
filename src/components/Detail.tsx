"use client";

import { listCourses } from "@/app/dummy";
import Card from "@/components/Card";
import CardInfo from "@/components/CardInfo";
import CardName from "@/components/CardName";
import CardSlider from "@/components/CardSlider";
import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const wavesIcons = [
  "../icons/wave1.svg",
  "../icons/wave2.svg",
  "../icons/wave3.svg",
  "../icons/wave4.svg",
  "../icons/wave5.svg",
  "../icons/wave6.svg",
];

export default function Detail() {
  const { id } = useParams();

  const [randomWaveIcon, setRandomWaveIcon] = useState(wavesIcons[0]);

  useEffect(() => {
    setRandomWaveIcon(
      wavesIcons[Math.floor(Math.random() * wavesIcons.length)],
    );
  }, [id]);

  const data = listCourses.find((course) => course.id === Number(id));

  return (
    <>
      <div className="relative bg-[#fcf9f1] border-t-[#eeeae2] border-t-2 pb-24">
        <div className="relative w-full h-60 mt-4">
          <Image src={randomWaveIcon} alt="wave" fill priority />
        </div>
        <div className="px-11">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
              <span className="text-xs font-bold ml-1">3 Lessons</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="text-xs font-bold ml-1">1h 21m</span>
            </div>
          </div>

          <h1 className="text-6xl font-serif mt-3">{data?.name}</h1>
          <p className="my-7 text-sm font-semibold">{data?.description}</p>

          <button className="text-white bg-[#d75555] text-xs font-semibold py-3 px-6 rounded-md">
            Start Learning
          </button>

          <button className="flex items-center gap-2 mt-4">
            <span className="text-xs font-bold">Buy This Course</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-3">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="px-8">
        <CardName />
        <div className="flex flex-col lg:flex-row justify-between mt-32 gap-28">
          <Dropdown data={data} />
          <CardSlider />
        </div>
      </div>

      <CardInfo />

      <div className="px-8 mt-24">
        <h2 className="font-serif text-3xl mb-2">
          Other courses you might like
        </h2>
        <Card activeTab="advanced" counter={false} wavesIcons={wavesIcons} />
      </div>

      <div className="flex justify-center mt-12">
        <button className="text-white bg-[#d75555] text-xs font-semibold py-3 px-6 rounded-md">
          Explore All Courses
        </button>
      </div>
    </>
  );
}
