import React from "react";
import { menuItem } from "../helper/constant";
import { FaBell } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetTab, setTabData } from "../redux/slices/tabSlice";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { IoMenuSharp } from "react-icons/io5";
import { ReactComponent as Logo } from "../components/svg/user-circle.svg";
import { useTranslation } from "react-i18next";

export default function Layout() {
  const { t } = useTranslation();
  const selectedTab = useSelector((state) => state.tabData.tab);

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleClick = (e, title) => {
    e.stopPropagation();
    dispatch(setTabData(title));
    setIsOpen(false);
  };

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
    <main>
      <header className="h-20 sticky top-0 bg-white z-10 border border-b px-10 md:px-4 flex items-center justify-between">
        <div className="flex items-center gap-10 h-full">
          <Link to={"/classes"}>
            <img
              src="/assets/images/LOGO.png"
              alt="LOGO"
              className="flex cursor-pointer"
              onClick={() => {
                dispatch(setTabData("classes"));
              }}
            />
          </Link>
          {!pathname.includes("mychildren") && (
            <ul className="flex items-center gap-5  md:hidden text-xl h-full text-lightgray font-semibold">
              {menuItem?.map(({ title }) => (
                <Link
                  to={`/classes`}
                  className={`${
                    title === selectedTab && "border-b border-black text-black "
                  }  h-full  flex items-center justify-center cursor-pointer`}
                  onClick={() => {
                    dispatch(setTabData(title));
                  }}
                >
                  {/* {title} */}
                  {t(`menuItems.${title}`)}
                </Link>
              ))}
            </ul>
          )}
        </div>
        <div className="flex items-center gap-5 text-lightgray h-full">
          <div className="md:hidden">
            <FaBell fontSize={24} />
          </div>
          <Link
            to="/profile"
            className="h-full"
            onClick={() => dispatch(resetTab(""))}
          >
            <div
              className={`${
                pathname.includes("profile") ||
                pathname.includes("user") ||
                pathname.includes("change-password")
                  ? "text-black border-b border-black"
                  : "text-lightgray"
              } text-xl font-semibold flex h-full items-center gap-3`}
            >
              <span className="md:hidden">Lina K.</span>
              <Logo className="" />
            </div>
          </Link>
          <div onClick={toggleDrawer} className="hidden md:flex">
            <IoMenuSharp fontSize={24} />
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="left"
              className="bla bla bla"
            >
              <div>
                {!pathname.includes("mychildren") && (
                  <ul className="flex flex-col items-start p-5 gap-5 text-xl h-full text-lightgray font-semibold">
                    {menuItem?.map(({ title }) => (
                      <Link
                        to={`/classes`}
                        className={`${
                          title === selectedTab &&
                          "border-b border-black text-black "
                        }  h-full  flex items-center justify-start cursor-pointer`}
                        onClick={(e) => handleClick(e, title)}
                      >
                        {title}
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            </Drawer>
          </div>
        </div>
      </header>
      <section className="min-h-screen">
        <Outlet />
      </section>
      {/* <div
        id="google_translate_element"
        className="fixed bottom-3 right-10 z-[99]"
      ></div> */}
      <footer className="bg-white py-5 ms-5">
        <span className="regular-text text-lightgray">{t("copyright")}</span>
      </footer>
    </main>
  );
}
