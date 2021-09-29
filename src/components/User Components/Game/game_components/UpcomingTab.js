import { Link } from "react-router-dom";
function UpcomingTab({ data }) {
  console.log(data);
  return (
    <div>
      {data.length ? (
        <>
          {" "}
          {data.map((data) => {
            return (
              <div
                key={data.m_id}
                className="shadow-xl border border-gray-400 my-3 rounded bg-white"
              >
                <Link
                  to={{
                    pathname: `/match_detail/${data.m_id}`,
                    state: { title: data.match_name, image: data.match_banner },
                  }}
                >
                  <img
                    alt="content"
                    className=" h-48 w-full transition duration-500 ease-in-out transform hover:scale-105"
                    src={data.match_banner}
                  />
                </Link>
                <div className="mx-1 md:mx-4 mt-2">
                  <div className="flex gap-2 text-white">
                    <p className="bg-red-400 px-2 mt-4 mb-2 p-1.5 rounded">
                      {data.type}
                    </p>
                    <p className="bg-green-400 px-2 mt-4 mb-2 p-1.5 rounded">
                      {data.version}
                    </p>
                  </div>
                  <p className="flex items-center font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="#F62817"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {data.MAP} - MATCH #{data.m_id}
                  </p>

                  <div className="flex mt-3 items-center justify-around uppercase text-sm border-t border-b border-solid border-gray-500">
                    <div className="text-green-400 my-3 mb-1.5 mt-1.5">
                      {data.match_time}
                    </div>
                    <div className="text-red-400 my-3  mb-1.5 mt-1.5">
                      <p>Prize Pool</p>
                      <p className="flex">
                        <img
                          alt="content"
                          className="w-5 h-5 mr-1"
                          src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                        />
                        {data.win_prize}
                      </p>
                    </div>
                    <div className="text-blue-400 my-3  mb-1.5 mt-1.5">
                      <p>Per Kill</p>
                      <p className="flex">
                        <img
                          alt="content"
                          className="w-5 h-5 mr-1"
                          src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                        />
                        {data.per_kill}
                      </p>
                    </div>
                  </div>

                  <div className="flex my-5">
                    <div className="mr-1">
                      <p className=" text-xs text-black">
                        {data.no_of_player}/100
                      </p>

                      <div className="w-40 md:w-56 bg-gray-400 mt-1 rounded-full">
                        <div
                          className="bg-blue-500 text-xs text-center h-2 rounded-full text-white"
                          style={{ width: `${data.no_of_player}%` }}
                        />
                      </div>
                    </div>

                    <div className="ml-auto">
                      <button
                        className={`flex items-center py-1 px-1 md:px-3 rounded text-white ${
                          data.join_status ? `bg-red-400` : `bg-green-400`
                        } `}
                      >
                        <img
                          alt="content"
                          className="w-5 h-5 mr-1"
                          src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                        />
                        <span className="text-xs md:text-base">
                          {data.entry_fee}
                          {data.join_status ? (
                            "JOINED"
                          ) : (
                            <Link
                              to={{
                                pathname: `/select_position/${data.m_id}`,
                                state: {
                                  total_seats: data.number_of_position,
                                  type: data.type,
                                  title: data.match_name,
                                  match_fees: data.entry_fee,
                                  joined: data.join_status,
                                },
                              }}
                            >
                              JOIN NOW
                            </Link>
                          )}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <p className="font-semibold text-lg text-center">
            Opps! No Match Found.
          </p>
        </>
      )}
    </div>
  );
}

export default UpcomingTab;
