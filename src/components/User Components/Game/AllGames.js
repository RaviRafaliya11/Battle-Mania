import { connect } from "react-redux";
import { React, useEffect } from "react";
import { Fetch_Games } from "../../../store/Actions/GameAction";
import { Link } from "react-router-dom";
import Loader from "./../../../utils/Loader";
import Slide from "react-reveal/Slide";

const AllGame = ({ dispatch, loading, games }) => {
  useEffect(() => {
    dispatch(Fetch_Games());
  }, [dispatch]);

  return (
    <div>
      <div>
        {loading ? (
          <div className="flex items-center justify-center mt-10">
            <Loader />
          </div>
        ) : (
          <div>
            {games.map((game) => (
              <Slide right key={game.game_id}>
                <Link
                  to={{
                    pathname: `/matches/${game.game_id}`,
                    state: { title: game.game_name },
                  }}
                >
                  <div className="text-center shadow-2xl rounded mt-3">
                    <div
                      className="h-52 bg-top bg-cover flex flex-wrap content-end rounded-t-md"
                      style={{ backgroundImage: `url(${game.game_image})` }}
                    >
                      <div className="bg-white bg-opacity-50 rounded w-48 mb-1 ml-auto px-2 mr-1">
                        Matches Available:{" "}
                        <span className="font-bold">
                          {game.total_upcoming_match}
                        </span>
                      </div>
                    </div>
                    <div className=" bg-gray-100 py-2 font-semibold rounded-b-md shadow-2xl">
                      {game.game_name}
                    </div>
                  </div>
                </Link>
              </Slide>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.games.loading,
  games: state.games.games,
});

export default connect(mapStateToProps)(AllGame);
