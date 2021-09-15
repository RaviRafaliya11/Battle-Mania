import UserMainTheme from "./Theme/UserMainTheme";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Fetch_TOP_PLAYERS } from "../../store/Actions/InformationAction";
import Loader from "./../../utils/Loader";

const Top_Players = ({ dispatch, top_players, loading }) => {
  useEffect(() => {
    dispatch(Fetch_TOP_PLAYERS());
  }, [dispatch]);

  console.log(top_players);

  return (
    <div>
      <UserMainTheme title="Top Players" back_path={true}>
        <div>
          {loading ? (
            <div className="flex items-center justify-center mt-10">
              <Loader />
            </div>
          ) : (
            <Tabs>
              <TabList className="flex flex-wrap items-stretch justify-evenly bg-blue-500">
                {top_players.map((item) => {
                  return (
                    <Tab
                      key={item.game_id}
                      className="p-4 bg-blue-500 cursor-pointer"
                    >
                      <img
                        src={item.game_logo}
                        alt="content"
                        className="w-10 h-10"
                      />
                    </Tab>
                  );
                })}
              </TabList>

              {top_players.map((item) => {
                return (
                  <TabPanel key={item.game_id}>
                    <div className="bg-orange-900 text-white text-center p-3">
                      {item.game_name}
                    </div>
                    <table className="bg-white text-gray-900 w-full">
                      <thead>
                        <tr className="bg-green-900">
                          <th className=" text-white p-2">Username</th>
                          <th className=" text-white p-2">Winning</th>
                        </tr>
                      </thead>
                      <tbody>
                        {top_players.map((item) => {
                          return (
                            <tr className="text-center">
                              <td className="p-2">No Data</td>
                              <td className="p-2">No Data</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </TabPanel>
                );
              })}
            </Tabs>
          )}
        </div>
      </UserMainTheme>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.top_players.loading,
  top_players: state.top_players.top_players,
});

export default connect(mapStateToProps)(Top_Players);
