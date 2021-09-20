import { connect } from "react-redux";
import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserMainTheme from "../../Theme/UserMainTheme";
import { useLocation } from "react-router-dom";
import { Fetch_Single_Result } from "../../../../store/Actions/GameAction";

const ResultTabDetail = ({
  dispatch,
  match_winner,
  full_result,
  match_deatils,
}) => {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    dispatch(Fetch_Single_Result(id));
  }, [dispatch, id]);

  return (
    <UserMainTheme back_path={true} title={location.state.title}>
      <div className="m-3">
        <img className="h-56 w-full" src={location.state.image} alt="content" />
        <div className="my-5">
          <p className="font-semibold text-green-400 text-lg">
            {match_deatils.match_name} -Match #{match_deatils.m_id}
          </p>
          <div className="m-3">
            <div className="flex flex-wrap gap-3 flex-auto text-sm">
              <div className="bg-white rounded shadow-xl px-2 py-1">
                Organized On:{" "}
                <span className="font-semibold">
                  {match_deatils.match_time}
                </span>
              </div>

              <div className="bg-white rounded shadow-xl px-2 py-1 flex">
                Winning Prize:{" "}
                <span className="font-semibold flex">
                  <img
                    alt="content"
                    className="w-5 h-5 mx-1.5"
                    src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                  />
                  {match_deatils.win_prize}
                </span>
              </div>

              <div className="bg-white rounded shadow-xl px-2 py-1 flex">
                Per Kill:{" "}
                <span className="font-semibold flex">
                  <img
                    alt="content"
                    className="w-5 h-5 mx-1.5"
                    src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                  />
                  {match_deatils.per_kill}
                </span>
              </div>

              <div className="bg-white rounded shadow-xl px-2 py-1 flex">
                Entry Fee:{" "}
                <span className="font-semibold flex">
                  <img
                    alt="content"
                    className="w-5 h-5 mx-1.5"
                    src="https://demowebapp.thebattlemania.com/application/views/themes/front/assest/img/coin.png"
                  />
                  {match_deatils.entry_fee}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5">
          <div className="bg-green-400 p-2 w-full text-center text-white font-semibold">
            Winner
          </div>

          <table className="bg-gray-700 text-gray-50 table-auto w-full">
            <thead>
              <tr>
                <th className="bg-black bg-opacity-75 text-white p-1 w-auto">
                  #
                </th>
                <th className="bg-black bg-opacity-75 text-white p-1 w-auto">
                  Player Name
                </th>
                <th className="bg-black bg-opacity-75 text-white p-1 w-auto">
                  Kills
                </th>
                <th className="bg-black bg-opacity-75 text-white p-1 w-auto">
                  Winning
                </th>
              </tr>
            </thead>
            <tbody>
              {match_winner.map((match_winner, index) => {
                return (
                  <tr key={index} className="bg-white text-black text-center">
                    <td className="p-1">{index + 1}.</td>
                    <td className="p-1">{match_winner.user_name}</td>
                    <td className="p-1">{match_winner.killed}</td>
                    <td className="p-1">{match_winner.total_win}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="my-5">
          <div className="bg-green-400 p-2 w-full text-center text-white font-semibold">
            Full Result
          </div>
          <table className="bg-gray-700 text-gray-50 table-auto w-full">
            <thead>
              <tr>
                <th className="bg-black bg-opacity-75 text-white p-1 w-auto">
                  #
                </th>
                <th className="bg-black bg-opacity-75 text-white p-1 w-auto">
                  Player Name
                </th>
                <th className="bg-black bg-opacity-75 text-white p-1 w-auto">
                  Kills
                </th>
                <th className="bg-black bg-opacity-75 text-white p-1 w-auto">
                  Winning
                </th>
              </tr>
            </thead>
            <tbody>
              {full_result.map((full_result, index) => {
                return (
                  <tr key={index} className="bg-white text-black text-center">
                    <td className="p-1">{index + 1}.</td>
                    <td className="p-1">{full_result.user_name}</td>
                    <td className="p-1">{full_result.killed}</td>
                    <td className="p-1">{full_result.total_win}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </UserMainTheme>
  );
};

const mapStateToProps = (state) => ({
  loading: state.upcoming_games.loading,
  match_deatils: state.match_deatils.match_deatils,
  full_result: state.full_result.full_result,
  match_winner: state.match_winner.match_winner,
});

export default connect(mapStateToProps)(ResultTabDetail);
