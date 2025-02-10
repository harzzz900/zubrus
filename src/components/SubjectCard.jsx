import React from "react";
import { subjects } from "../helper/constant";
import { CiHeart } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

export default function SubjectCard() {
  return (
    <>
      <div className="grid grid-cols-4 lg:grid-cols-2 sm:!grid-cols-1 gap-4 mb-5">
        {subjects?.map((item, index) => (
          <Link
            to={`/subject/${item?.id}`}
            key={index}
            className="rounded-xl relative  flex flex-col items-start justify-center  cursor-pointer"
          >
            <CiHeart className="absolute top-5 right-5  md:top-3 md:right-3 text-3xl bg-white rounded-full p-1" />
            <img
              src={item?.img}
              alt={item?.text}
              className="w-full h-[280px] md:h-full object-cover rounded-xl"
            />
            <div>
              <div className="text-sm text-lightgray flex gap-2 items-center my-2">
                <h6 className="text-center"> Fizika</h6>
                <GoDotFill />
                <h6 className="text-center"> Zubrus</h6>
              </div>
            </div>
            <span className="line-clamp-1 text-lg font-bold">{item?.text}</span>
          </Link>
        ))}
        {subjects?.map((item, index) => (
          <Link
            to={`/subject/${item?.id}`}
            key={index}
            className="rounded-xl relative  flex flex-col items-start justify-center  cursor-pointer"
          >
            <CiHeart className="absolute top-5 right-5  md:top-3 md:right-3 text-3xl bg-white rounded-full p-1" />
            <img
              src={item?.img}
              alt={item?.text}
              className="w-full h-[280px] md:h-full object-cover rounded-xl"
            />
            <div>
              <div className="text-sm text-lightgray flex gap-2 items-center my-2">
                <h6 className="text-center"> Fizika</h6>
                <GoDotFill />
                <h6 className="text-center"> Zubrus</h6>
              </div>
            </div>
            <span className="line-clamp-1 text-lg font-bold">{item?.text}</span>
          </Link>
        ))}
      </div>
      <Pagination />
    </>
  );
}
