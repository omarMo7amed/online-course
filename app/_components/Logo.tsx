"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="relative flex items-center">
      <Image width={70} height={70} src="/logo.webp" alt="Logo" priority />
      <p className="text-nowrap font-bold text-lg text-slate-700">
        <span className="text-rose-600 ">Online</span> Course
      </p>
    </Link>
  );
}
