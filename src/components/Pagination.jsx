import React from "react";
import { GrFormNext } from "react-icons/gr";

export default function Pagination({ datalength }) {
  return (
    <div className="flex flex-wrap items-center gap-2 ">
      {[...Array(datalength ? datalength : 10)].map((item, index) => (
        <div
          key={index}
          className="border rounded-full flex p-3 size-10 items-center justify-center first:bg-darkblue first:text-white text-sm cursor-pointer"
        >
          {index}
        </div>
      ))}
      <div className="border rounded-full flex p-3 size-10 items-center justify-center first:bg-darkblue first:text-white text-sm cursor-pointer">
        <GrFormNext />
      </div>
    </div>
  );
}
