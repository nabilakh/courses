"use client";

import { useState } from "react";
import Tabs from "@/components/Tabs";
import Card from "@/components/Card";
import SimpleCard from "@/components/SimpleCard";
import { popularLessons, quickReads } from "./dummy";
import Steps from "@/components/Steps";

const wavesIcons = [
  "./icons/wave1.svg",
  "./icons/wave2.svg",
  "./icons/wave3.svg",
  "./icons/wave4.svg",
  "./icons/wave5.svg",
  "./icons/wave6.svg",
];


export default function Home() {
  const [activeTab, setActiveTab] = useState("introductory");

  return (
    <main>
      <section className="bg-[#fcf9f1] border-t-[#eeeae2] border-t-2 pt-16 pl-10 pb-11">
        <h1 className="text-5xl font-serif">Courses</h1>
        <p className="mt-1 text-sm font-semibold">
          Explore 30+ courses and 200+ lessons taught by experts in their field.
        </p>
      </section>
      <section className="px-10">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Card activeTab={activeTab} counter wavesIcons={wavesIcons} />
        <div className="mt-16 mb-24">
          <SimpleCard title="POPULAR LESSONS" counter data={popularLessons} />
        </div>
        <SimpleCard title="QUICK READS" info data={quickReads} />
      </section>
      <Steps />
    </main>
  );
}
