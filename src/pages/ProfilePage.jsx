import React, { useEffect } from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { commonToast } from "../helper/Toast";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import i18n from "../i18n";
import { setLanguage } from "../redux/slices/profileSlice";

const languageOptions = [
  {
    value: "en",
    label: "ENGLISH",
  },
  {
    value: "lt",
    label: "Lithuanian",
  },
];
export default function ProfilePag() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.profileData.language);

  const handleLanguageChange = (selectedOption) => {
    dispatch(setLanguage(selectedOption?.value));
  };
  const handleLogut = () => {
    commonToast("Atsijungti sėkmingai", "success");
  };
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  return (
    <div className="max-w-7xl mx-auto text-center p-10 md:p-5">
      <h1 className="text-2xl font-semibold ">Lina Kairienė</h1>
      <h6 className="base-text  text-lightgray">{t("profile")}</h6>

      <div className="bg-bluelight flex md:flex-col justify-between gap-5 items-center p-7 rounded-3xl  mx-auto my-5 max-w-md">
        <div className="text-start">
          <h2 className="medium-text">{t("creator")}</h2>
          <h3 className="regular-text">{t("creatordes")}</h3>
        </div>
        <Link to="/creator">
          <button className="primary-btn px-5">{t("want")}</button>
        </Link>
      </div>

      <div className="max-w-md mx-auto  divide-y divide">
        <Link
          to="/user-info"
          className="flex items-center justify-between py-3 cursor-pointer"
        >
          <h2 className="regular-text">{t("Personaldata")}</h2>
          <HiMiniArrowLongRight />
        </Link>
        <Link
          to="/user-email"
          className="flex items-center justify-between py-3 cursor-pointer"
        >
          <h2 className="regular-text">{t("email")}</h2>
          <HiMiniArrowLongRight />
        </Link>
        <Link
          to="/change-password"
          className="flex items-center justify-between py-3 cursor-pointer"
        >
          <h2 className="regular-text">{t("changepassword")}</h2>
          <HiMiniArrowLongRight />
        </Link>
        <div className="flex items-center justify-between py-3 cursor-pointer">
          <h2 className="regular-text">{t("changelan")}</h2>
          <Select
            value={languageOptions?.find((option) => option.value === language)}
            onChange={handleLanguageChange}
            options={languageOptions}
            className="!text-black " // TailwindCSS to style the dropdown
            classNamePrefix="select"
            styles={{
              control: (provided, state) => ({
                ...provided,
                cursor: "pointer",
                border: state.isFocused
                  ? "1px solid #6a7185"
                  : "1px solid #e5e7eb",
                borderRadius: 8,
                backgroundColor: "white",
                boxShadow: null,
                paddingLeft: "9px",
                "&:hover": {
                  borderColor: "#6a7185",
                },
              }),
              clearIndicator: (provided, props) => ({
                ...provided,
                color: "pink",
                "&:hover": {
                  color: "red",
                },
              }),
              option: (provided) => ({
                ...provided,
                cursor: "pointer",
                zIndex: 99,
              }),
            }}
          />
        </div>
        <div className="flex items-center justify-between py-3 cursor-pointer">
          <Link
            to={`/auth/login`}
            onClick={() => handleLogut()}
            className="regular-text"
          >
            {t("logout")}
          </Link>
        </div>
      </div>
    </div>
  );
}
