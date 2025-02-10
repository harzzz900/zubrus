import React from "react";
import { classes } from "../helper/constant";
import { useDispatch } from "react-redux";
import { setClassData } from "../redux/slices/classdetailSlice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ChildrenPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div className="max-w-5xl mx-auto py-10 px-5">
      <h1 className="text-2xl font-semibold">{t("mychild")}</h1>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-10 my-5 ">
        {classes?.slice(0, 2).map((item, key) => {
          return (
            <>
              <Link
                key={key}
                to={`/mychildren/${item?.id}`}
                onClick={() => dispatch(setClassData(item))}
                className={` h-[220px] cursor-pointer px-5 rounded-3xl flex justify-center items-center gap-10`}
                style={{ backgroundColor: item?.backgroundcolor }}
              >
                <div>
                  <img
                    src={item?.thumbnail}
                    alt={item?.name}
                    className="size-[120px] object-contain object-center"
                  />
                  <h2 className="medium-text text-center mt-5">{item?.name}</h2>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
