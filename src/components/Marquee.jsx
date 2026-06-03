"use client";
import React from 'react';
import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const content = (
    <>
      {marqueeItems.map((item, idx) => (
        <span
          key={idx}
          className="font-fd text-[17px] font-light italic text-ink px-8 shrink-0 flex items-center"
        >
          <span className="inline-block w-[5px] h-[5px] bg-ink/30 rounded-full mr-8 shrink-0" />
          {item}
        </span>
      ))}
    </>
  );

  return (
    <div className="overflow-hidden bg-gold py-4 relative z-10 w-full">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {content}
        {content} 
        {content}
        {content}
      </div>
    </div>
  );
}
