import UserMainTheme from "./Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import { Fetch_Leaderboard } from "../../store/Actions/InformationAction";
import Loader from "./../../utils/Loader";

const LeaderBoard = ({ dispatch, leaderboard, loading }) => {
  useEffect(() => {
    dispatch(Fetch_Leaderboard());
  }, [dispatch]);

  return (
    <div>
      <UserMainTheme title="Leader-Board" back_path={true}>
        <div>
          {loading ? (
            <div className="flex items-center justify-center mt-52">
              <Loader />
            </div>
          ) : (
            <table className="bg-white text-gray-900 w-full">
              <thead>
                <tr className="bg-green-900">
                  <th className=" text-white p-2">Username</th>
                  <th className=" text-white p-2">Total Referral</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((item) => {
                  return (
                    <tr className="text-center" key={item.referral_id}>
                      <td className="p-2 capitalize">{item.user_name}</td>
                      <td className="p-2">{item.tot_referral}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </UserMainTheme>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.leaderboard.loading,
  leaderboard: state.leaderboard.leaderboard,
});

export default connect(mapStateToProps)(LeaderBoard);
