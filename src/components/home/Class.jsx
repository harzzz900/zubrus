import { LuPlus } from "react-icons/lu";
import { classes } from "../../helper/constant";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import CreateClassmodel from "../model/CreateClassmodel";
import { useDispatch } from "react-redux";
import { setClassData } from "../../redux/slices/classdetailSlice";
import { Link } from "react-router-dom";
import { setTabData } from "../../redux/slices/classtab";
import { useTranslation } from "react-i18next";

export default function Class() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-2xl font-semibold">{t("myclasses")}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="regular-text">{t("createclass")}</span>
          <div
            className="border rounded-full cursor-pointer size-8 flex justify-center items-center"
            onClick={() => setOpen(true)}
          >
            <LuPlus fontSize={24} />
          </div>
        </div>
      </div>
      {classes?.length ? (
        <div className="grid grid-cols-2 md:grid-cols-1 gap-10 my-5 ">
          {classes?.slice(0, 4).map((item, key) => {
            return (
              <>
                <Link
                  key={key}
                  to={`/classes/${item?.id}`}
                  onClick={() => {
                    dispatch(setClassData(item));
                    dispatch(setTabData("overview"));
                  }}
                  className={` h-[220px] cursor-pointer px-5 rounded-3xl flex justify-center items-center gap-10`}
                  style={{ backgroundColor: item?.backgroundcolor }}
                >
                  <div>
                    <img
                      src={item?.thumbnail}
                      alt={item?.name}
                      className="size-[120px] object-contain object-center"
                    />
                  </div>
                  <div>
                    <h2 className="medium-text">{item?.name}</h2>
                    <div className="text-sm text-lightgray flex gap-2 items-center mt-3">
                      <h6 className="text-center">
                        {" "}
                        {item?.studentscount} {t("student")}
                      </h6>
                      <GoDotFill />
                      <h6 className="text-center">
                        {" "}
                        {item?.teacherscount} {t("teacher")}
                      </h6>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      ) : (
        <div className="h-[145px] mt-20 shadow-inner-top-strong rounded-t-3xl px-10 flex items-end justify-center">
          <span className="regular-text text-lightgray">
            {t("createfirstclass")}
          </span>
        </div>
      )}
      <CreateClassmodel open={open} setOpen={setOpen} />
    </div>
  );
}
