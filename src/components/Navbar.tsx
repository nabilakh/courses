import Link from "next/link";

const navLinks = [
  { href: "/", label: "Courses" },
  { href: "/", label: "Find a Doctor" },
  { href: "/", label: "For Employers" },
  { href: "/", label: "Sign In" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-end gap-5 p-5 items-center">
      {navLinks.map(({ href, label }, idx) => (
        <Link
          key={idx}
          href={href}
          className="text-xs font-bold"
        >
          {label}
        </Link>
      ))}
      <button aria-label="Search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
      <button aria-label="Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
    </nav>
  );
}
