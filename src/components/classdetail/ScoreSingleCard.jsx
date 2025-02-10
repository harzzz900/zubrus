import React from "react";

export default function ScoreSingleCard({ tab, title, data }) {
  return (
    <div>
      <div className="text-base font-semibold">{title}</div>
      {tab && (
        <div className="bg-white border my-2 flex items-center gap-3 w-fit py-1 px-2 rounded-xl base-text">
          {tab?.map((item) => (
            <div
              className={`cursor-pointer ${
                item === tab[0] && "bg-darkblue text-white rounded-lg px-3 py-1"
              } px-3`}
            >
              {item}
            </div>
          ))}
        </div>
      )}
      <div className="space-y-3 mt-5">
        {data?.length ? (
          data.map((item, key) => (
            <div key={key} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="regular-text">{item?.name}</span>
              </div>
              <div className="regular-text">{item?.val} val.</div>
            </div>
          ))
        ) : (
          <div className="h-28 flex items-center text-center regular-text  text-black/50">
            Čia matysite kaip aktyviai mokiniai dalyvauja Jūsų klasėje
          </div>
        )}
      </div>
    </div>
  );
}
