import React from "react";
import { subjects } from "../../helper/constant";

export default function Material() {
  return (
    <div className="w-[700px] lg:w-screen px-5">
      <div className=" bg-white rounded-3xl p-5">
        <h2 className="text-lg font-bold flex items-center gap-3">Fizika</h2>
        <div className="space-y-5 mt-2">
          {subjects?.slice(0, 2).map(({ img, text }) => (
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-5 w-full">
                <img src={img} alt={text} />
                <div className="flex  xs:flex-col justify-between  regular-text items-center w-full">
                  <h2 className="text-start md:text-center">{text}</h2>
                  <div className="flex items-center gap-5 ">
                    <h3>1:32</h3>
                    <h3>78%</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-white rounded-3xl mt-5 p-5">
        <h2 className="text-lg font-bold flex items-center gap-3">Fizika</h2>
        <div className="space-y-5 mt-2">
          {subjects?.slice(0, 2).map(({ img, text }) => (
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-5 w-full">
                <img src={img} alt={text} />
                <div className="flex xs:flex-col justify-between  regular-text items-center w-full">
                  <h2 className="text-start md:text-center">{text}</h2>
                  <div className="flex items-center gap-5 ">
                    <h3>1:32</h3>
                    <h3>78%</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
