"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

const links = [
  "Courses",
  "Find a Doctor",
  "Share a Review",
  "For Employers",
  "For Doctors and Clinics",
  "All US Providers",
  "info@fertility.com",
  "Terms of Use",
  "Privacy Policy",
  "FAQs",
];

export default function Footer() {
  const { id } = useParams();
  return (
    <div className="bg-[#f38165] pt-12 mt-24 px-8 pb-8">
      <div className="flex justify-between pb-8 items-center">
        <Image
          src={id ? "../icons/inflection.svg" : "./icons/inflection.svg"}
          alt="Inflection Logo"
          width={130}
          height={130}
          className="invert brightness-0"
        />
        <div className="flex gap-8">
          <Image
            src={id ? "../icons/logo.svg" : "./icons/logo.svg"}
            alt="Company Logo"
            width={100}
            height={100}
            className="invert brightness-0"
          />
          <Image
            src={id ? "../icons/people1.svg" : "./icons/people1.svg"}
            alt="User profile image"
            width={100}
            height={100}
            className="rounded-full border-[3px] border-white"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap text-white text-xs font-bold">
          {links.map((link, idx) => (
            <u key={idx} className="mr-10 mt-3" title={link}>
              {link}
            </u>
          ))}
        </div>
        <div className="text-white text-xs font-semibold text-right">
          Our content is for informational purposes only - it&apos;s not a substitute
          for medical advice, diagnosis, or treatment.
        </div>
      </div>
    </div>
  );
}
