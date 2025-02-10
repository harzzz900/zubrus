export default function SingleCard({ tab, title, data, percentage }) {
  return (
    <div>
      <div className="text-base font-semibold">{title}</div>
      <div className="bg-white border my-2 flex items-center gap-3 w-fit py-1 px-2 rounded-xl base-text">
        {tab?.map((item) => (
          <div
            className={`cursor-pointer ${
              item === tab[0] && "bg-darkblue text-white rounded-lg px-3 py-1"
            } px-3`}
            //   onClick={() => dispatch(setTabData(tab))}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {data?.length ? (
          data.map((item, key) => (
            <div key={key} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/images/Avatar.png"
                  alt="Avatar"
                  className="size-10 rounded-full"
                />
                <span className="regular-text">{item?.name}</span>
              </div>
              <div className="regular-text">
                {item?.val} {percentage ? "%" : "Val."}
              </div>
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
