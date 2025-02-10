import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ClassDetailBox from "../components/classdetail/ClassDetailBox";
export default function ClassDetail() {
  const data = useSelector((state) => state?.classData?.data);
  console.log("data", data);
  return (
    <>
      <div className="px-10 ">
        <div className="flex w-fit gap-10 py-5 justify-start items-center">
          <Link
            to={`/classes`}
            className="border cursor-pointer rounded-full flex justify-center items-center size-10"
          >
            <FaLongArrowAltLeft />
          </Link>
          <div className="text-2xl font-semibold flex-1 text-center">
            Aštuntokai
          </div>
        </div>
      </div>
      <ClassDetailBox data={data} />
    </>
  );
}
