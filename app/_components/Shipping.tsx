"use client";

import { useState } from "react";
import Link from "next/link";
import { SlBasket, SlBasketLoaded } from "react-icons/sl";

export default function Shipping() {
  // will change
  const [cartLength, setCartLength] = useState<number>(0);

  return (
    <div className="relative">
      <Link href="/cart" className="text-2xl text-rose-700 ">
        {cartLength ? <SlBasketLoaded /> : <SlBasket />}
      </Link>

      {cartLength > 0 && (
        <span className="absolute text-rose-200 -top-5 -left-3 bg-rose-800 flex items-center justify-center text-xs w-5 h-5 rounded-full">
          {cartLength}
        </span>
      )}
    </div>
  );
}
