import Image from "next/image";

const links = [
  "Courses",
  "Find a Doctor",
  "Share a Raview",
  "For Employers",
  "For Doctors and Clinies",
  "All UIS Providers",
  "info@fertility.com",
  "Terms of Use",
  "Privacy Policy",
  "FAQs",
];

export default function Footer() {
  return (
    <div className="bg-[#f38165] pt-12 mt-24 px-8 pb-8">
      <div className="flex justify-between pb-8 items-center">
        <Image
          src="/icons/inflection.svg"
          alt="inflection"
          width={130}
          height={130}
          className="invert brightness-0"
        />
        <div className="flex gap-8">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="invert brightness-0"
          />
          <Image
            src="/icons/people1.svg"
            alt="people1"
            width={100}
            height={100}
            className="rounded-full border-[3px] border-white"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-wrap text-white text-xs font-bold">
          {links.map((link, idx) => (
            <u key={idx} className="mr-10 mt-3">
              {link}
            </u>
          ))}
        </div>
        <div className="text-white text-xs font-semibold text-right">
          Our content is for informational purposes only - its nat a substitute
          for medical advice, diagnosis, or treatment.
        </div>
      </div>
    </div>
  );
}
