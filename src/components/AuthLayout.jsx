import { Outlet } from "react-router-dom";
import { setLanguage } from "../redux/slices/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { useEffect } from "react";

const languageOptions = [
  {
    label: "ENGLISH",
    value: "en",
  },
  {
    label: "Lithuanian",
    value: "lt",
  },
];

export default function AuthLayout() {
  const { t } = useTranslation();
  const language = useSelector((state) => state.profileData.language);
  const dispatch = useDispatch();

  const handleLanguageChange = (selectedOption) => {
    dispatch(setLanguage(selectedOption?.value));
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "lt",
  //       includedLanguages: "en,gu,zh-CN,zh-TW,lt",
  //       autoDisplay: false,
  //     },
  //     "google_translate_element"
  //   );
  // };
  // let renderOneTimeVariable = true;
  // useEffect(() => {
  //   if (renderOneTimeVariable) {
  //     var addScript = document.createElement("script");
  //     addScript.setAttribute(
  //       "src",
  //       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //     );
  //     document.body.appendChild(addScript);
  //     window.googleTranslateElementInit = googleTranslateElementInit;
  //     renderOneTimeVariable = false;
  //   }
  // }, []);
  return (
    <main className="bg-bluelight md:bg-white  py-10 min-h-[calc(100vh-5px)] md:py-10 md:pt-0 md:px-0 relative px-4 flex flex-col justify-between lg:justify-normal">
      {/* <main className="bg-bluelight md:bg-white h-screen xxl:h-full md:min-h-screen py-20 md:py-10 md:pt-0 md:px-0 relative px-4 flex flex-col justify-between"> */}
      {/* mobile top section start */}
      <div className="relative hidden md:flex  items-end justify-center md:bg-[url(/public/assets/images/mobileposter.png)] bg-no-repeat bg-bottom bg-cover h-[250px] w-full">
        <div className="md:flex hidden">
          <img
            src="/assets/images/whitelogo.png"
            alt="Zubrius"
            className="w-[132px] absolute top-10"
          />
          <img
            src="/assets/images/Zubrius.png"
            alt="Zubrius"
            className="-mb-5"
          />
        </div>
      </div>
      {/* mobile top section start */}

      {/* Desktop top section start */}
      <img
        src="/assets/images/LOGO.png"
        alt="zubrus logo"
        className="mx-auto md:hidden flex"
      />
      {/* Desktop top section end */}

      {/* login section */}
      <Outlet />
      {/* <div
        id="google_translate_element"
        className="fixed bottom-3 right-10 z-[99]"
      ></div> */}
      <div className="absolute bottom-28 right-10 z-[99]">
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
      {/* copyright section */}
      <div className="px-5">
        <span className="regular-text text-lightgray">{t("copyright")}</span>
      </div>
    </main>
  );
}
