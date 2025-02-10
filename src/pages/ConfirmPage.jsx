import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ConfirmPage() {
  const { t } = useTranslation();
  return (
    <div className="bg-white text-center max-w-4xl  mx-auto my-6 rounded-[32px] p-7 w-[434px] md:w-full">
      {" "}
      <img
        src="/assets/images/Envelope.png"
        alt="Envelope"
        className="mx-auto"
      />
      <h2 className="medium-text mt-3">{t("confirmemail")}</h2>
      <p className="regular-text my-3">{t("emailmsg")}</p>
      <Link to={`/auth/login`}>
        <button type="submit" className="secondary-btn w-full mt-6 ">
          {t("back")}
        </button>
      </Link>
    </div>
  );
}
