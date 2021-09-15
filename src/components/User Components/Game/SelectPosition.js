import { connect } from "react-redux";
import { React, useEffect, useState } from "react";
import { Fetch_Joined_Players } from "../../../store/Actions/GameAction";
import UserMainTheme from "../Theme/UserMainTheme";
import { useParams, useLocation, Link } from "react-router-dom";
import Loader from "./../../../utils/Loader";

const Select_Position = ({ dispatch, loading, joined_players }) => {
  const { id } = useParams();
  let location = useLocation();

  let type = 1;

  if (location.state.type === "Duo") {
    type = 2;
  } else if (location.state.type === "Squad") {
    type = 4;
  } else {
    type = 1;
  }

  const [checkSelection, setCheckSelection] = useState([]);

  const handleChange = (e) => {
    if (e.currentTarget.checked) {
      setCheckSelection([...checkSelection, e.target.value]);
    } else {
      const newArr = checkSelection.filter((item) => item !== e.target.value);
      setCheckSelection(newArr);
    }
  };

  useEffect(() => {
    dispatch(Fetch_Joined_Players(id));
  }, [checkSelection]);

  console.log(location);

  return (
    <div>
      <UserMainTheme title={location.state.title} back_path={true}>
        {loading ? (
          <div className="flex items-center justify-center mt-10">
            <Loader />
          </div>
        ) : (
          <div className="m-3">
            <h1 className="text-base md:text-2xl font-semibold text-center my-5">
              {location.state.type} Match
            </h1>

            {checkSelection.length > type ? (
              <p className="text-center text-red-500">
                Opps! You can select upto {type} seats. <br />
              </p>
            ) : (
              false
            )}

            {joined_players
              .slice(0, joined_players.length / type)
              .map((data, indexstart) => {
                return (
                  <div
                    key={indexstart}
                    className={`grid grid-cols-${type + 1}`}
                  >
                    <h1 className="font-semibold text-sm md:text-base my-5">
                      Team {indexstart + 1}
                    </h1>

                    {joined_players.splice(0, type).map((data, index) => {
                      return (
                        <div key={index}>
                          {data.user_name ? (
                            <div className="my-5">
                              <input
                                onChange={handleChange}
                                className="w-4 h-4"
                                type="checkbox"
                                name="inputcheckbox"
                                value={data.position}
                                disabled
                                checked
                              />
                            </div>
                          ) : (
                            <div className="my-5">
                              <input
                                onChange={handleChange}
                                className="w-4 h-4"
                                type="checkbox"
                                name="inputcheckbox"
                                value={`${data.team}-${data.position}`}
                                checked={
                                  checkSelection.includes(
                                    `${data.team}-${data.position}`
                                  )
                                    ? "checked"
                                    : ""
                                }
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}

            {checkSelection.length > type ? (
              false
            ) : (
              <div className="flex items-center justify-center">
                <Link
                  to={{
                    pathname: `/confirm_reservation`,
                    state: {
                      selectedposition: checkSelection,
                      match_id: id,
                      match_fees: location.state.match_fees,
                      joined: location.state.joined,
                    },
                  }}
                >
                  <button className="w-28 p-2 bg-blue-500 rounded my-5 font-semibold text-white hover:bg-blue-400">
                    Join Now
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </UserMainTheme>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.joined_players.loading,
  joined_players: state.joined_players.joined_players,
});

export default connect(mapStateToProps)(Select_Position);
