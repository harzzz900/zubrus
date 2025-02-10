import React from "react";
import ClassDetailTab from "./ClassDetailTab";

export default function ClassDetailBox({ data }) {
  return (
    <div
      style={{ backgroundColor: data?.backgroundcolor }}
      className="relative "
    >
      <img
        src={data?.thumbnail}
        alt={data?.name}
        className="absolute right-4 -top-[75px] -z-10 rotate-12 size-28 object-contain object-center"
      />

      <div className="max-w-7xl mx-auto px-5 py-10">
        <ClassDetailTab />
      </div>
    </div>
  );
}
